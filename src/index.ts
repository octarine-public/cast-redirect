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
				console.log(newTarget.isVisible)
				//if (!nearliestHero) return

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
		return target?.ReplicatingOtherHeroModel		
	}

	protected IsOtherTeam(target: Entity, caster: Unit): boolean {
		return target.Team !== caster.Team
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
			this.IsOtherTeam(x, caster)
		)
	}

	protected IsAvaibleOriginalHero() {
		// to do
	}

	// to do redirect from creeps (what about roshan???)
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})