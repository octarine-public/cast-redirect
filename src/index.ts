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
	
				console.log(this.getNearHero())
				return false
			}
		} else {
			return
		}
	}

	protected IsAbility(order: ExecuteOrder): boolean {
		return order.Ability_ instanceof Ability
	}

	protected IsToTarget(target: Nullable<Entity | number>): boolean {
		return target instanceof Unit
	}

	protected GetOriginalHero(target: Nullable<Entity | number>): Nullable<Entity | undefined> {
		return target?.ReplicatingOtherHeroModel		
	}

	protected getNearHero() {
		return EntityManager.GetEntitiesByClass(Hero)
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})