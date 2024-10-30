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

				if (this.IsAvailableOriginalHero(newTarget, caster)) {
					caster.CastTarget(ability, newTarget)
				} else {
					const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}

				return false
			} else if (this.IsCreep(order.Target)){
				const nearliestHero = this.GetNearestOtherHero(caster, caster)

				if (!nearliestHero) return true
				caster.CastTarget(ability, nearliestHero)
				return false

			} else if (this.IsClone(order.Target) && !this.menu.dontRedirectFromClones) {
				console.log(1)
				const newTarget = this.GetOriginalHero(order.Target) as Unit

				if (this.IsAvailableOriginalHero(newTarget, caster)) {
					console.log(2)
					caster.CastTarget(ability, newTarget)
				} else {
					console.log(3)
					const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}

				return false
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
		console.log(this.menu.searchRange.value)
		return EntityManager.GetEntitiesByClass(Hero)
		.filter(x => x)
		.sort((a, b) => a.Distance2D(caster) - b.Distance2D(caster))
		.find( x =>
			x !== target &&
			x !== caster &&
			!x.IsIllusion &&
			!x.IsClone &&
			!x.IsInvulnerable &&
			x.Distance2D(caster) < 400 &&
			x.IsEnemy(caster)
		)
	}

	protected IsAvailableOriginalHero(hero: Nullable<Unit | FakeUnit>, caster: Unit): boolean {
		if (hero instanceof Unit) return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < this.menu.searchRange.value;
		return false
	}
})()

EventsSDK.on("GameStarted", () => {
	console.log("start")
})