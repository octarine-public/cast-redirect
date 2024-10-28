import {
	Entity,
	EventsSDK,
	Hero,
	Unit,
	ProjectileManager
} from "github.com/octarine-public/wrapper/index"

class CCastRedirector {
	constructor() {
		EventsSDK.on("TrackingProjectileCreated", this.onTrackProjectile.bind(this))
		EventsSDK.on("TrackingProjectileUpdated", (proj: TrackingProjectile) => {
			console.log("projectile update")
			console.log(proj)
		})
	}

	protected onTrackProjectile(proj: TrackingProjectile) {
		if (proj.Source?.Name === "npc_dota_hero_vengefulspirit" && this.illusionIsTarget(proj)) {
			const originalHero = this.getOriginalHero(proj.Target as Unit)
			if (originalHero) {
				console.log("projectile")
				console.log(proj)

				console.log("original hero")
				console.log(originalHero)

				console.log("illusion")
				console.log(proj.Target)

				this.redirectProjectile(proj, originalHero)

				console.log("updated projectile")
				console.log(proj)

				this.destroyProjectile(proj)
			} else {
				console.log(":(")
			}
		}
	}	

	private destroyProjectile(proj: TrackingProjectile) {
		ProjectileManager.AllTrackingProjectiles.remove(proj)
		ProjectileManager.AllTrackingProjectilesMap.delete(proj.ID)
		proj.IsValid = false
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
			newTarget.NetworkedPosition
		)
	}

	private redirectProjectile2(proj: TrackingProjectile, newTarget: Unit) {
		// Удаляем текущий прожектайл
		DestroyTrackingProjectile(proj);
	
		// Создаем новый прожектайл с измененной целью
		const newProjectile = {
			Source: proj.Source,
			Target: newTarget,
			Speed: proj.Speed,
			LaunchTick: GameState.CurrentGameTick,
			ParticlePath: proj.ParticlePath,
			dodgeable: proj.dodgeable,
			isAttack: proj.isAttack,
			expireTime: proj.expireTime,
		};
		TrackingProjectileCreated(newProjectile as TrackingProjectile);
	}
	
}

const castRedirector: CCastRedirector = new CCastRedirector()

EventsSDK.on("GameStarted", () => {
	console.log("check")
})