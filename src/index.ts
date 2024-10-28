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
		EventsSDK.on("TrackingProjectileCreated", this.onTrackProjectile.bind(this))
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

	protected onTrackProjectile(proj: TrackingProjectile) {
		if (proj.Source?.Name === "npc_dota_hero_vengefulspirit" && this.illusionIsTarget(proj)) {
			const originalHero = this.getOriginalHero(proj.Target as Unit)
			if (originalHero) {
				this.redirectProjectile(proj, originalHero)
				console.log("Redirecting to hero", originalHero.Index)
			} else {
				console.log(":(")
			}
		}
	}	

	private illusionIsTarget(proj: TrackingProjectile) {
		return proj.Target.IsIllusion_
	}

	private isIllusion(entity: Entity): entity is Unit {
		return entity instanceof Unit && entity.IsIllusion
	}

	private getOriginalHero(illusion: Unit): Hero | null {
		return illusion.ReplicatingOtherHeroModel as Hero || null;
	}
	private redirectProjectile(proj: TrackingProjectile, newTarget: Hero) {
		proj.Target = newTarget
		console.log(newTarget.Name)
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})