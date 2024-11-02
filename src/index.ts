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
	item_dagon,
	LocalPlayer,
	item_urn_of_shadows,
	item_bloodthorn,
	item_disperser,
	item_hurricane_pike,
	item_wind_waker
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu: MenuManager

	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		EventsSDK.on("EntityCreated", this.SetSpells.bind(this))
		this.menu = new MenuManager()
	}

	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		const ability = order.Ability_ as Ability
		const caster = order.Issuers[0]

		if (!this.menu.State.value || !this.IsItemFilter() && ability.IsItem) {
			return true
		}

		if (order.IsPlayerInput && this.IsToTarget(order.Target) && this.IsAbility(ability)) {
			if (!this.RedirectItems(ability) && ability.IsItem) {
				return true
			}

			if (!this.RedirectSpells(ability) && !ability.IsItem) {
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
		if (hero instanceof Unit && !this.menu.RedirectToLowHP.value) {
			return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < this.menu.searchRange.value
		}
		return false
	}

	protected RedirectItems(ability: Ability): boolean {
		// to do
		// change this condition to more optimal
		if (
			this.menu.RedirectItemsState.IsEnabled(ability.Name) ||
			(ability instanceof item_dagon && this.menu.RedirectItemsState.IsEnabled("item_dagon")) ||
			(ability instanceof item_urn_of_shadows && this.menu.RedirectItemsState.IsEnabled("item_urn_of_shadows")) ||
			(ability instanceof item_wind_waker && this.menu.RedirectItemsState.IsEnabled("item_cyclone")) ||
			(ability instanceof item_disperser && this.menu.RedirectItemsState.IsEnabled("item_diffusal_blade")) ||
			(ability instanceof item_hurricane_pike && this.menu.RedirectItemsState.IsEnabled("item_force_staff")) ||
			(ability instanceof item_bloodthorn && this.menu.RedirectItemsState.IsEnabled("item_orchid"))
			) {
			return true
		}

		return false
	}


	protected RedirectSpells(ability: Ability)  {
		if (this.menu.RedirectAbilitiesState.IsEnabled(ability.Name)) {
			return true
		}
		return false
	}

	protected SetSpells(entity: Entity) {
		if (entity instanceof Hero && entity == LocalPlayer?.Hero) {
			const spellsId: number[] = entity.Spells_
			const spells: string[] = []

			for (let i = 0; i < spellsId.length; i++) {
				let spell = EntityManager.EntityByIndex(spellsId[i]) as Ability
				if (this.IsTargetSpell(spell)) {
					spells.push(spell.Name_)
				}
			}

			this.menu.updateRedirectSpellsMenu(spells)
		}
	}

	protected IsTargetSpell(spell: Nullable<Ability>): boolean {
		if (spell) return spell.AbilityData.TargetType > 0
		return false
	}
})()