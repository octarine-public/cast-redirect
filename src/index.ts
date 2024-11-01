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
	DOTA_ABILITY_BEHAVIOR,
	DOTA_UNIT_TARGET_TYPE
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu: MenuManager

	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		EventsSDK.on("EntityCreated", this.SetSpells.bind(this))
		this.menu = new MenuManager()
	}

	protected SetSpells(entity: Entity) {
		if (entity instanceof Hero && entity == LocalPlayer?.Hero) {
			let spells = LocalPlayer.Hero.Spells;

			if (spells) {
				for (let i = 0; i < spells.length; i++) {
					const spell = spells[i];

					if (spell) {
						if (
							spell.NetworkedManaCost > 0 || 
							spell.IsPassive || 
							(spell.CooldownRestoreTime > 0)
						) {
	
							if (spell.Name_ && !spell.Name_.startsWith("special_bonus_")) {
								const isTargeted = spell.HasBehavior(DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET) ||
												   spell.HasBehavior(DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_POINT);
				
								const targetTypes = spell.TargetTypeMask;
								const isUnitTarget = targetTypes && (
									targetTypes.hasMask(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO) ||
									targetTypes.hasMask(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_CREEP)
								);
				
								console.log(
									spell.Name_, 
									spell.NetworkedManaCost, 
									spell.IsPassive, 
									spell.CooldownRestoreTime > 0,
									isTargeted || isUnitTarget // Выводим, является ли способность таргетной
								);
							}
						}
					}
					
				}
			}
			
		}
	}

	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		const ability = order.Ability_ as Ability
		const caster = order.Issuers[0]

		// this.menu.updateLocalHero(LocalPlayer?.Hero)

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
		if (hero instanceof Unit && !this.menu.RedirectToLowHP.value) {
			return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < this.menu.searchRange.value
		}
		return false
	}

	protected RedirectDagon() {
		// change code if more than 1 item
		// rewrite!!!
		return this.menu.RedirectItemsState.values.some(value => {
			if (this.menu.RedirectItemsState.IsEnabled(value)) {
				return true
			}
			return false
		})
	}
})()