import {
	Entity,
	EventsSDK,
	Hero,
	LocalPlayer,
	Unit
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("TrackingProjectileCreated", this.onTrackProjectile.bind(this))
		EventsSDK.on("TrackingProjectileUpdated", () => {

		})
	}

	protected onTrackProjectile(proj: TrackingProjectile) {
		if (proj.Source?.Name === "npc_dota_hero_vengefulspirit" && this.illusionIsTarget(proj)) {
			const originalHero = this.getOriginalHero(proj.Target as Unit)
			if (originalHero) {
				this.redirectProjectile(proj, originalHero)
				console.log("projectile")
				console.log(proj)
				console.log("original hero")
				console.log(originalHero)
				console.log("illusion")
				console.log(proj.Target)

				console.log("updated projectile")
				console.log(proj)
			} else {
				console.log(":(")
			}
		}
	}	

	private illusionIsTarget(proj: TrackingProjectile) {
		return proj.Target.IsIllusion_
	}

	private getOriginalHero(illusion: Unit): Hero | null {
		return illusion.ReplicatingOtherHeroModel as Hero || null;
	}

	private redirectProjectile(proj: TrackingProjectile, newTarget: Hero) {
		proj.Update(
			newTarget, 
			proj.Speed, 
			proj.ParticlePath, 
			proj.ParticleSystemHandle, 
			proj.dodgeable, 
			proj.isAttack, 
			proj.expireTime, 
			proj.LaunchTick,
			proj.TargetLoc
		)
	}
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})