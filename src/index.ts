import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	Hero,
	Unit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.RedirectSpell.bind(this))
	}

	protected RedirectSpell(order: ExecuteOrder) {
		if (order.IsPlayerInput && this.IsAbility(order) && order.Target?.IsIllusion) {
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

			EventsSDK.emit("PrepareUnitOrders", true, executeOrder)
		}
	}

	protected IsAbility(order: ExecuteOrder): boolean {
		if (order.Ability_ == 0) {
			return false
		}
		return true
	}

	protected GetOriginalHero(target: Nullable<Entity | number>): Nullable<Entity | undefined> {
		return target?.ReplicatingOtherHeroModel		
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})