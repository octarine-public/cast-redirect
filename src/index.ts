import "./translations"

import { MenuManager } from "./menu"

new (class CCastRedirect {
	private readonly menu = new MenuManager()

	constructor() {
		EventsSDK.on("GameEnded", this.GameEnded.bind(this))
		EventsSDK.on("EntityCreated", this.EntityCreated.bind(this))
		EventsSDK.on("UnitAbilitiesChanged", this.UnitAbilitiesChanged.bind(this))
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		EventsSDK.on("HumanizerStateChanged", () => this.menu.HumanizerStateChanged())
	}

	protected GameEnded() {
		this.menu.ResetAbilities()
	}

	protected EntityCreated(entity: Entity) {
		if (!(entity instanceof Ability)) {
			return
		}
		const owner = entity.Owner
		if (owner !== undefined && this.isOwnUnit(owner)) {
			this.menu.AddAbility(entity)
		}
	}

	protected UnitAbilitiesChanged(unit: Unit) {
		if (!this.isOwnUnit(unit)) {
			return
		}
		const spells = unit.Spells
		for (let i = spells.length - 1; i > -1; i--) {
			this.menu.AddAbility(spells[i])
		}
	}

	/** Swaps the target of the player's own cast; `false` drops the order that was clicked. */
	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		if (!this.menu.IsActive || !order.IsPlayerInput) {
			return true
		}
		if (order.OrderType !== dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET) {
			return true
		}
		const target = order.Target,
			ability = order.Ability_
		if (!(target instanceof Unit) || !(ability instanceof Ability)) {
			return true
		}
		if (!this.menu.IsEnabled(ability)) {
			return true
		}
		if (!target.IsEnemy() && !this.canTargetAllies(ability)) {
			return true
		}
		const caster = order.Issuers.find(
			unit =>
				unit === InputManager.SelectedUnit && unit.IsControllable && unit.IsAlive
		)
		if (caster === undefined) {
			return true
		}
		const redirect = this.findRedirect(caster, target, ability)
		if (redirect === undefined || redirect === target) {
			return true
		}
		caster.CastTarget(ability, redirect)
		return false
	}

	private findRedirect(caster: Unit, target: Unit, ability: Ability): Nullable<Unit> {
		const menu = this.menu
		if (this.isIllusion(target)) {
			if (!menu.Illusions.value) {
				return undefined
			}
			const original = this.originalHero(target)
			if (original !== undefined && this.canCast(original, caster, ability)) {
				return original
			}
			return this.nearestHero(caster, target, ability)
		}
		if (target instanceof npc_dota_hero_meepo && menu.ToLowHPMeepo.value) {
			return this.lowestMeepo(caster, target, ability)
		}
		if (target.IsCreep && menu.Creeps.value) {
			return this.nearestHero(caster, target, ability)
		}
		return undefined
	}

	/** The hero an illusion is a copy of. */
	private originalHero(illusion: Unit): Nullable<Unit> {
		const replicated = illusion.ReplicatingOtherHeroModel
		if (
			replicated !== undefined &&
			replicated !== illusion &&
			!replicated.IsIllusion
		) {
			return replicated
		}
		const owner = illusion.OwnerEntity
		return owner instanceof Player ? owner.Hero : undefined
	}

	/** The real hero closest to the clicked unit, within the search range of it. */
	private nearestHero(caster: Unit, target: Unit, ability: Ability): Nullable<Unit> {
		const range = this.menu.SearchRange.value
		return EntityManager.GetEntitiesByClass(Hero)
			.filter(
				hero =>
					hero !== target &&
					hero.Distance2D(target) <= range &&
					this.canCast(hero, caster, ability)
			)
			.orderByFirst(hero => hero.Distance2D(target))
	}

	/** The Meepo with the least health around the clicked one, the clicked one included. */
	private lowestMeepo(
		caster: Unit,
		target: npc_dota_hero_meepo,
		ability: Ability
	): Nullable<Unit> {
		const range = this.menu.SearchRange.value
		return EntityManager.GetEntitiesByClass(npc_dota_hero_meepo)
			.filter(
				meepo =>
					meepo === target ||
					(meepo.Team === target.Team &&
						meepo.Distance2D(target) <= range &&
						this.canCast(meepo, caster, ability))
			)
			.orderByFirst(meepo => meepo.HP)
	}

	private canCast(hero: Unit, caster: Unit, ability: Ability): boolean {
		if (hero === caster || !hero.IsValid || !hero.IsVisible || !hero.IsAlive) {
			return false
		}
		if (hero.IsIllusion || hero.Distance2D(caster) > ability.CastRange) {
			return false
		}
		if (
			hero.IsInvulnerable &&
			!ability.HasTargetFlags(
				DOTA_UNIT_TARGET_FLAGS.DOTA_UNIT_TARGET_FLAG_INVULNERABLE
			)
		) {
			return false
		}
		return hero.IsEnemy()
			? this.canTargetEnemies(ability)
			: this.canTargetAllies(ability)
	}

	private canTargetAllies(ability: Ability): boolean {
		return (
			this.menu.ToFriend.value &&
			(ability.HasTargetTeam(
				DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY
			) ||
				ability.HasTargetTeam(DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_CUSTOM))
		)
	}

	private canTargetEnemies(ability: Ability): boolean {
		return (
			ability.HasTargetTeam(DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_ENEMY) ||
			ability.HasTargetTeam(DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_CUSTOM)
		)
	}

	private isOwnUnit(unit: Unit): boolean {
		return !unit.IsEnemy() && unit.IsControllable && !this.isIllusion(unit)
	}

	private isIllusion(unit: Unit): boolean {
		return unit.IsIllusion && !unit.IsStrongIllusion
	}
})()
