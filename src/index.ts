import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	Hero,
	Unit
} from "github.com/octarine-public/wrapper/index"
import { type } from "node:os"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
	}

	protected PrepareUnitOrders(order: ExecuteOrder) {
		console.log(order)
		console.log(this.IsIllusion(order))
		console.log(typeof order.Target)
	}

	protected IsIllusion(order: ExecuteOrder): boolean {
		return order.Target.IsIllusion
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})