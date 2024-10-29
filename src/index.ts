import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	EntityManager,
	Unit,
	Ability,
	Hero
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
	}

	protected PrepareUnitOrders(order: ExecuteOrder) {
		if (order.IsPlayerInput && this.IsAbility(order) && this.IsToTarget(order.Target)) {
			if (order.Target?.IsIllusion) {
				const newTarget = this.GetOriginalHero(order.Target)
				const caster = order.Issuers[0]

				if (this.IsAvaibleOriginalHero(newTarget, caster)) {
					caster.CastTarget(order.Ability_, newTarget)
				} else {
					const nearliestHero = this.GetNearliestOtherHero(newTarget, caster)

					if (!nearliestHero) return
					caster.CastTarget(order.Ability_, nearliestHero)
				}

				return false
			}
		} else {
			return
		}
	}

	protected IsAbility(order: ExecuteOrder): boolean {
		return order.Ability_ instanceof Ability
	}

	protected IsToTarget(target: Entity): boolean {
		return target instanceof Unit
	}

	protected GetOriginalHero(target: Entity): Entity {
		return target.ReplicatingOtherHeroModel		
	}

	protected GetNearliestOtherHero(target: Entity, caster: Unit) {
		return EntityManager.GetEntitiesByClass(Hero)
		.sort((a, b) => a.Distance2D(caster) - b.Distance2D(caster))
		.find( x =>
			x !== target &&
			x !== caster &&
			!x.IsIllusion &&
			!x.IsInvulnerable &&
			x.Distance2D(caster) < 1800 &&
			x.IsEnemy(caster)
		)
	}

	protected IsAvaibleOriginalHero(hero: Entity, caster: Unit): boolean {
		const distance = hero.Distance2D(caster)
		return hero.IsVisible && hero.IsAlive && distance < 1800
	}

	// to do redirect from creeps
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})