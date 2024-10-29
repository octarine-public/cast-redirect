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

				caster.CastTarget(order.Ability_, newTarget)

				const enttities = this.GetNearliestOtherHero(newTarget, caster);
	
				console.log(enttities)
				console.log(enttities.map(x => x.Distance2D(order.Target)))
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
		return target?.ReplicatingOtherHeroModel		
	}

	protected GetNearliestOtherHero(target: Entity, caster: Unit) {
		return EntityManager.GetEntitiesByClass(Hero)
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})