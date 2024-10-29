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
		if (this.IsPlayerInput(order) && this.IsAbility(order) && this.IsIllusion(order.Target)) {
			// console.log(order)
			console.log(this.GetOriginalHero(order.Target))
		}
	}

	protected IsPlayerInput(order: ExecuteOrder): boolean {
		return order.IsPlayerInput
	}

	protected IsAbility(order: ExecuteOrder): boolean {
		if (order.Ability_ == 0) {
			return false
		}
		return true
	}

	protected IsIllusion(target: Nullable<Entity | number>): Nullable<boolean | undefined> {
		return target?.IsIllusion
	}

	protected GetOriginalHero(target: Nullable<Entity | number>): Nullable<Entity | undefined> {
		return target?.ReplicatingOtherHeroModel		
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})