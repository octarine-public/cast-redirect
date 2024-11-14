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
	npc_dota_hero_meepo,
	Player,
	Unit
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu = new MenuManager()
	private readonly heroes: Unit[] = []

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
		if (!(entity instanceof Ability)) {
			return
		}
		const abilOwner = entity.Owner
		if (abilOwner === undefined || abilOwner.IsEnemy()) {
			return
		}
		console.log(entity)
		console.log(entity instanceof npc_dota_hero_meepo)
		if (entity instanceof Hero || entity instanceof npc_dota_hero_meepo) {
			console.log(entity)
			this.heroes.push(entity)
		}
		if (!this.isIllusion(abilOwner) && abilOwner.IsControllable) {
			this.menu.AddSpellInMenu(entity)
		}
	}

	protected EntityDestroyed(entity: Entity) {
		if (!(entity instanceof Hero) || !(entity instanceof npc_dota_hero_meepo)) {
			return
		}
		this.heroes.remove(entity)
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

		return !this.UseByState(caster, target, ability, originalTargetHero)
	}

	protected UseByState(
		caster: Unit,
		target: Unit,
		ability: Ability,
		originalTargetHero: Nullable<Hero>
	) {
		const state =
			(target.IsCreep && this.menu.Creeps.value) ||
			(this.isIllusion(target) && this.menu.Illusions.value) ||
			(target instanceof npc_dota_hero_meepo && this.menu.ToLowHPMeepo.value)

		if (!state) {
			return false
		}
		if (
			this.isAvailableHero(originalTargetHero, target, caster, ability) &&
			!this.menu.ToLowHPMeepo.value
		) {
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
		const isToLowMeepo =
			this.menu.ToLowHPMeepo.value && target instanceof npc_dota_hero_meepo
		const heroes = isToLowMeepo
			? this.heroes.orderBy(x => x.HP)
			: this.heroes.orderBy(x => x.Distance2D(caster))

		return heroes.find(hero => this.isValidHero(hero, target, caster, ability))
	}

	private isValidHero(
		hero: Unit,
		target: Entity,
		caster: Unit,
		ability: Ability
	): boolean {
		if (hero === caster || hero === target || hero.IsIllusion) {
			return false
		}
		const isToFriend = this.menu.ToFriend.value
		const isToLowMeepo =
			this.menu.ToLowHPMeepo.value && target instanceof npc_dota_hero_meepo

		// example: item_nullifier
		const canUseInInvulnerable = ability.HasTargetFlags(
			DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_INVULNERABLE
		)

		const canUseToFriend = ability.HasTargetTeam(
			DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY
		)

		const canUseToEnemy = ability.HasTargetTeam(
			DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_ENEMY
		)

		const targetIsMeepo = isToLowMeepo && target instanceof npc_dota_hero_meepo
		const heroIsMeepo = isToLowMeepo && hero instanceof npc_dota_hero_meepo

		console.log(targetIsMeepo, heroIsMeepo)

		return (
			(canUseInInvulnerable || !hero.IsInvulnerable) &&
			((isToFriend && canUseToFriend && !hero.IsEnemy()) ||
				(canUseToEnemy && hero.IsEnemy())) &&
			this.isAvailableHero(hero, target, caster, ability) &&
			((targetIsMeepo && heroIsMeepo) || (!targetIsMeepo && !heroIsMeepo))
		)
	}

	protected isAvailableHero(
		hero: Nullable<Hero | Entity>,
		target: Entity,
		caster: Unit,
		ability: Ability
	): hero is Hero {
		if (hero === undefined) {
			return false
		}
		const range = this.menu.SearchRange.value
		return (
			hero.IsVisible &&
			hero.IsAlive &&
			hero.Distance2D(target) < range &&
			hero.Distance2D(caster) < ability.CastRange
		)
	}
})()
