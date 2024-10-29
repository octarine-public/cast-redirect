import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	Hero,
	Unit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
	}

	protected PrepareUnitOrders(order: ExecuteOrder) {
		if (order.IsPlayerInput && this.IsAbility(order) && this.IsToTarget(order.Target)) {
			if (order.Target?.IsIllusion) {
				console.log(order)

				const newTarget = this.GetOriginalHero(order.Target)
	
				const executeOrder = new ExecuteOrder(
					order.OrderType,
					newTarget,
					order.Position,
					order.Ability_,
					order.Issuers ?? [],
					order.Queue,
					order.ShowEffects,
					order.IsPlayerInput
				)
	
				this.castTarget(executeOrder) // todo nearliest enemy
			}
		} else {
			return
		}
	}

	protected castTarget(order: ExecuteOrder) {
		order.Execute()
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
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})