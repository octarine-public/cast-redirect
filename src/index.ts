import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	EntityManager,
	Unit,
	Ability,
	Hero,
	Creep,
	FakeUnit
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CCastRedirector {
	private readonly menu!: MenuManager

	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
		this.menu = new MenuManager()
	}

	protected PrepareUnitOrders(order: ExecuteOrder) {
		if (!this.menu.State.value) {
			return
		}

		if (order.IsPlayerInput && this.IsAbility(order.Ability_) && this.IsToTarget(order.Target)) {
			const caster = order.Issuers[0]
			const ability = order.Ability_ as Ability

			if (this.IsIllusion(order.Target)) {
				const newTarget = this.GetOriginalHero(order.Target) as Unit

				if (this.IsAvailableOriginalHero(newTarget, caster) && this.IsAbility(order.Ability_)) {
					caster.CastTarget(ability, newTarget)
				} else {
					const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}

				return false
			} else if (this.IsCreep(order.Target)){
				const newTarget = this.GetOriginalHero(order.Target) as Unit
				const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

				console.log(nearliestHero)

				if (!nearliestHero) return true
				caster.CastTarget(ability, nearliestHero)

			} else if (this.IsClone(order.Target)) {
				const newTarget = this.GetOriginalHero(order.Target) as Unit
				const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

				if (!nearliestHero) return true
				caster.CastTarget(ability, nearliestHero)
			}
		}

		return true
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

	protected GetNearestOtherHero(target: Entity, caster: Unit): Nullable<Unit> {
		return EntityManager.GetEntitiesByClass(Hero)
		.filter(x => x)
		.sort((a, b) => a.Distance2D(caster) - b.Distance2D(caster))
		.find( x =>
			x !== target &&
			x !== caster &&
			!x.IsIllusion &&
			!x.IsInvulnerable &&
			x.Distance2D(target) < 400 &&
			x.IsEnemy(caster)
		)
	}

	protected IsAvailableOriginalHero(hero: Nullable<Unit | FakeUnit>, caster: Unit): boolean {
		if (hero instanceof Unit) return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < 1800;
		return false
	}
})()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})