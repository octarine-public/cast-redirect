import {
	Entity,
	EventsSDK,
	ExecuteOrder,
	EntityManager,
	Unit,
	Ability,
	Hero,
	Creep,
	FakeUnit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("PrepareUnitOrders", this.PrepareUnitOrders.bind(this))
	}

	protected PrepareUnitOrders(order: ExecuteOrder): boolean {
		if (order.IsPlayerInput && this.IsAbility(order.Ability_) && this.IsToTarget(order.Target)) {
			if (this.IsIllusion(order.Target)) {
				const newTarget = this.GetOriginalHero(order.Target) as Unit
				const caster = order.Issuers[0]
				const ability = order.Ability_ as Ability

				if (this.IsAvailableOriginalHero(newTarget, caster) && this.IsAbility(order.Ability_)) {
					caster.CastTarget(ability, newTarget)
				} else {
					const nearliestHero = this.GetNearestOtherHero(newTarget, caster)

					console.log(nearliestHero)

					if (!nearliestHero) return true
					caster.CastTarget(ability, nearliestHero)
				}

				return false
			} else if (this.IsCreep(order.Target)){
				console.log(order.Target)
			}
		}
		return true
	}

	private IsIllusion(target: Nullable<Entity  | number>): boolean {
		if (target instanceof Unit) {
			return (target.IsIllusion || target.IsHiddenIllusion) && !target.IsStrongIllusion
		}
		return false
	}

	protected IsCreep(target: Nullable<number | Entity>): boolean {
		return target instanceof Creep
	}

	protected IsAbility(ability: Nullable<number | Ability>): boolean {
		return ability instanceof Ability
	}

	protected IsToTarget(target: Nullable<Entity | number>): boolean {
		return target instanceof Unit
	}

	protected GetOriginalHero(target: Nullable<number | Entity>): Nullable<Unit | FakeUnit> {
		if (target instanceof Hero) return target.ReplicatingOtherHeroModel;
	}

	protected GetNearestOtherHero(target: Entity, caster: Unit): Nullable<Unit> {
		return EntityManager.GetEntitiesByClass(Hero)
		.sort((a, b) => a.Distance2D(caster) - b.Distance2D(caster))
		.find( x =>
			x !== target &&
			x !== caster &&
			!x.IsIllusion &&
			!x.IsInvulnerable &&
			x.Distance2D(caster) < 1200 &&
			x.IsEnemy(caster)
		)
	}

	protected IsAvailableOriginalHero(hero: Nullable<Unit | FakeUnit>, caster: Unit): boolean {
		if (hero instanceof Unit) return hero.IsVisible && hero.IsAlive && hero.Distance2D(caster) < 1800;
		return false
	}

	// to do redirect from creeps
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})