import "./translations"

import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	EntityManager,
	Unit,
	Ability,
	Hero,
	Creep,
	FakeUnit,
	item_dagon
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu: MenuManager

	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		this.menu = new MenuManager()
	}

	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		const ability = order.Ability_ as Ability
		const caster = order.Issuers[0]

		if (!this.menu.State.value || !this.IsItemFilter() && ability.IsItem) {
			return true
		}

		if (order.IsPlayerInput && this.IsToTarget(order.Target) && this.IsAbility(ability)) {
			if (!this.RedirectDagon() && ability instanceof item_dagon) {
				return true
			}

			if (this.IsIllusion(order.Target) && this.menu.RedirectFromIllusions.value) {
				const newTarget = this.GetOriginalHero(order.Target) as Unit

				if (this.IsAvailableOriginalHero(newTarget, caster) && this.menu.RedirectFromIllusions.value) {
					caster.CastTarget(ability, newTarget)
				} else {
					const nearliestHero = this.GetOtherHero(newTarget, caster)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}
				return false

			} else if (this.IsCreep(order.Target) && this.menu.RedirectFromCreeps.value){
				const nearliestHero = this.GetOtherHero(caster, caster)

				if (!nearliestHero) return true
				caster.CastTarget(ability, nearliestHero)
				return false

			} else if (this.IsClone(order.Target) && this.menu.RedirectFromClones.value) {
				const newTarget = this.GetOriginalHero(order.Target) as Unit

				if (this.IsAvailableOriginalHero(newTarget, caster)) {
					caster.CastTarget(ability, newTarget)
				} else {
					const nearliestHero = this.GetOtherHero(newTarget, caster)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}

				return false
			}
		}

		return true
	}

	protected IsItemFilter(): boolean {
		return this.menu.RedirectItems.value
	}

	protected IsClone(target: Nullable<Entity  | number>): boolean {
		if (target instanceof Unit) {
			return target.IsClone
		}
		return false
	}

	protected IsIllusion(target: Nullable<Entity  | number>): boolean {
		if (target instanceof Unit) {
			return (target.IsIllusion || target.IsHiddenIllusion) && !target.IsStrongIllusion
		}
		return false
	}

	protected IsCreep(target: Nullable<number | Entity>): boolean {
		return target instanceof Creep
	}

	protected IsAbility(ability: Nullable<number | Ability>): boolean {
		return ability instanceof Ability
	}

	protected IsToTarget(target: Nullable<Entity | number>): boolean {
		return target instanceof Unit
	}

	protected GetOriginalHero(target: Nullable<number | Entity>): Nullable<Unit | FakeUnit> {
		if (target instanceof Hero) return target.ReplicatingOtherHeroModel;
	}

	protected GetOtherHero(target: Entity, caster: Unit): Nullable<Unit> {
		const heroes = EntityManager.GetEntitiesByClass(Hero)

		if (this.menu.RedirectToLowHP.value) {
			heroes.sort((a, b) => a.HPPercent - b.HPPercent)
			return heroes
			.find( x =>
				x !== caster &&
				!x.IsIllusion &&
				!x.IsClone &&
				!x.IsInvulnerable &&
				x.Distance2D(caster) < this.menu.searchRange.value &&
				x.IsEnemy(caster)
			)
		} else {
			heroes.sort((a, b) => a.Distance2D(caster) - b.Distance2D(caster))
			return heroes
			.find( x =>
				x !== target &&
				x !== caster &&
				!x.IsIllusion &&
				!x.IsClone &&
				!x.IsInvulnerable &&
				x.Distance2D(caster) < this.menu.searchRange.value &&
				x.IsEnemy(caster)
			)
		}
	}

	protected IsAvailableOriginalHero(hero: Nullable<Unit | FakeUnit>, caster: Unit): boolean {
		if (hero instanceof Unit && !this.menu.RedirectToLowHP) {
			return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < this.menu.searchRange.value
		}
		return false
	}

	protected RedirectDagon() {
		// change code if more than 1 item
		return this.menu.RedirectItemsState.values.some(value => {
			if (this.menu.RedirectItemsState.IsEnabled(value)) {
				return true
			}
			return false
		})
	}
})()