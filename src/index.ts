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

				const nearliestHero = this.GetNearliestOtherHero(newTarget, caster);
	
				console.log(nearliestHero)
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
		console.log( EntityManager.GetEntitiesByClass(Hero).filter(x => !x.IsIllusion) )
		console.log( EntityManager.GetEntitiesByClass(Hero).map(x => !x.IsIllusion ? x.Distance2D(target) : '') )
		return EntityManager.GetEntitiesByClass(Hero).find( x =>
			x !== target &&
			x !== caster &&
			!x.IsIllusion &&
			!x.IsInvulnerable &&
			x.Distance2D(target) < 800
		)
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})