import {
	Entity,
	EventsSDK,
	Hero,
	Unit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
	}

	protected PrepareUnitOrders(order: ExecuteOrder) {
		console.log(order)
		// let state = true
		// for (let i = this.modules.length - 1; i > -1; i--) {
		// 	const [cModule] = this.modules[i]
		// 	if (!cModule.State || cModule.PrepareUnitOrders === undefined) {
		// 		continue
		// 	}
		// 	if (cModule.PrepareUnitOrders(order)) {
		// 		state = false
		// 	}
		// }
		// return state
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})