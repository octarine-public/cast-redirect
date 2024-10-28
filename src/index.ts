import {
	Entity,
	EventsSDK,
	Hero,
	LocalPlayer,
	Unit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	private readonly units: Unit[] = []

	constructor() {
		EventsSDK.on("EntityCreated", this.onEntityCreated.bind(this))
		EventsSDK.on("EntityDestroyed", this.onEntityDestroyed.bind(this))
		EventsSDK.on("TrackingProjectileCreated", this.onTracProjectile.bind(this))
	}

	protected onEntityCreated(entity: Entity) {
		if (this.isIllusion(entity)) {
			this.units.push(entity)
		}
	}

	protected onEntityDestroyed(entity: Entity) {
		const index = this.units.indexOf(entity as Unit)
		if (index > -1) {
			this.units.splice(index, 1)
		}
	}

	protected onTracProjectile() {
		console.log(this.units)
	}

	protected onAbilityUsed(unit: Unit, abilityID: number) {
		if (!this.isIllusion(unit)) {
			return
		}

		const originalHero = this.getOriginalHero(unit)
		if (originalHero) {

		}
	}

	private isIllusion(entity: Entity): entity is Unit {
		return entity instanceof Unit && entity.IsIllusion
	}

	private getOriginalHero(illusion: Unit): Hero | null {
		return LocalPlayer?.Hero || null
	}

	// private redirectAbility() {
		
	// }
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})

// EventsSDK.on("TrackingProjectileCreated", (proj) => {
// 	if (proj.Source?.Name == "npc_dota_hero_vengefulspirit") {
// 		console.log(proj)
// 		castRedirector
// 		if (proj.Target.IsIllusion_) {
// 			console.log("illusion")
// 		}
// 	}
// })