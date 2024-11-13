import "./translations"

import {
	Ability,
	DOTA_UNIT_TARGET_FLAGS,
	DOTA_UNIT_TARGET_TEAM,
	dotaunitorder_t,
	Entity,
	EventsSDK,
	ExecuteOrder,
	Hero,
	InputManager,
	Player,
	Unit
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu = new MenuManager()
	private readonly heroes: Hero[] = []

	constructor() {
		EventsSDK.on("GameEnded", this.GameEnded.bind(this))
		EventsSDK.on("EntityCreated", this.EntityCreated.bind(this))
		EventsSDK.on("EntityDestroyed", this.EntityDestroyed.bind(this))
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		EventsSDK.on("UnitAbilitiesChanged", this.UnitAbilitiesChanged.bind(this))
	}

	public GameEnded() {
		this.menu.ResetSkills()
	}

	protected EntityCreated(entity: Entity) {
		if (entity instanceof Hero) {
			this.heroes.push(entity)
		}
		if (!(entity instanceof Ability)) {
			return
		}
		const abilOwner = entity.Owner
		if (abilOwner === undefined || abilOwner.IsEnemy()) {
			return
		}
		if (!this.isIllusion(abilOwner) && abilOwner.IsControllable) {
			this.menu.AddSpellInMenu(entity)
		}
	}

	protected EntityDestroyed(entity: Entity) {
		if (!(entity instanceof Hero)) {
			return
		}
		if (entity instanceof Hero) {
			this.heroes.remove(entity)
		}
	}

	protected UnitAbilitiesChanged(unit: Unit) {
		if (unit.IsEnemy() || this.isIllusion(unit) || !unit.IsControllable) {
			return
		}
		const arr = unit.Spells
		for (let i = arr.length - 1; i > -1; i--) {
			this.menu.AddSpellInMenu(arr[i])
		}
	}

	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		const isCastTarget =
			order.OrderType === dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET
		if (!order.IsPlayerInput || !isCastTarget || !this.menu.State.value) {
			return true
		}
		const target = order.Target,
			ability = order.Ability_
		if (!(target instanceof Unit) || !(ability instanceof Ability)) {
			return true
		}
		const caster = order.Issuers.find(
			x => x.IsControllable && x.IsAlive && x === InputManager.SelectedUnit
		)
		if (caster === undefined || !this.menu.IsEnabled(ability.Name, ability.IsItem)) {
			return true
		}
		if (!this.menu.CanFriendCast(ability) && !target.IsEnemy()) {
			return true
		}
		const originalTargetHero = this.getOriginalHero(target)

		const state =
			(target.IsClone && this.menu.Clones.value) ||
			(target.IsCreep && this.menu.Creeps.value) ||
			(this.isIllusion(target) && this.menu.Illusions.value)

		// if UseByState returns false (return is true to skip cast)
		return !this.UseByState(state, caster, target, ability, originalTargetHero)
	}

	protected UseByState(
		state: boolean,
		caster: Unit,
		target: Unit,
		ability: Ability,
		originalTargetHero: Nullable<Hero>
	) {
		if (!state) {
			return false
		}
		if (this.isAvailableOriginalHero(originalTargetHero, caster, ability)) {
			caster.CastTarget(ability, originalTargetHero)
			return true
		}
		const nearliestHero = this.getOtherHero(target, caster, ability)
		if (nearliestHero === undefined) {
			return false
		}
		caster.CastTarget(ability, nearliestHero)
		return true
	}

	private isIllusion(target: Unit): boolean {
		return target.IsIllusion && !target.IsStrongIllusion
	}

	private getOriginalHero(target: Unit): Nullable<Hero> {
		if (!(target instanceof Hero)) {
			return undefined
		}
		const targetOwner = target.OwnerEntity
		if (!(targetOwner instanceof Player)) {
			return undefined
		}
		if (!(targetOwner.Hero instanceof Hero) || !targetOwner.Hero.IsAlive) {
			return undefined
		}

		return targetOwner.Hero
	}

	private getOtherHero(target: Entity, caster: Unit, ability: Ability): Nullable<Unit> {
		const isLowHP = this.menu.ToLowHP.value
		const isToFriend = this.menu.ToFriend.value
		const useCastRange = this.menu.castRange.value

		const range = useCastRange ? ability.CastRange : this.menu.SearchRange.value

		const heroes = isLowHP
			? this.heroes.orderBy(x => x.HPPercent)
			: this.heroes.orderBy(x => x.Distance2D(caster))

		// example: item_nullifier
		const canUseInInvulnerable = ability.HasTargetFlags(
			DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_INVULNERABLE
		)

		const canUseToFriend = !ability.HasTargetTeam(
			DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_ENEMY
		)

		const canUseToEnemy = !ability.HasTargetTeam(
			DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY
		)

		const isValidHero = (hero: Unit) =>
			hero !== caster &&
			hero !== target &&
			hero.IsAlive &&
			hero.IsVisible &&
			!hero.IsClone &&
			!hero.IsIllusion &&
			(canUseInInvulnerable || !hero.IsInvulnerable) &&
			((isToFriend && canUseToFriend && !hero.IsEnemy()) ||
				(!isToFriend && canUseToEnemy && hero.IsEnemy()) ||
				(isToFriend && canUseToEnemy && hero.IsEnemy())) &&
			hero.Distance2D(caster) <= range

		return heroes.find(x => isValidHero(x))
	}

	protected isAvailableOriginalHero(
		hero: Nullable<Hero>,
		caster: Unit,
		ability: Ability
	): hero is Hero {
		if (hero === undefined || this.menu.ToLowHP.value) {
			return false
		}

		const range = this.menu.castRange.value
			? ability.CastRange
			: this.menu.SearchRange.value

		return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < range
	}
})()
