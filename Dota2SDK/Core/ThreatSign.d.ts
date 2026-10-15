// AUTO-GENERATED - do not edit.
/**
 * A sign of a cast that keeps following the game after its threat is in the store: the caster
 * turning before the effect goes off, a unit flying as the projectile, a particle getting its
 * control points. The store updates every sign each tick and lets go of one that has nothing
 * left to follow; a sign that learns its effect is off the table invalidates its threat.
 */
declare abstract class ThreatSign {
	public abstract readonly Threat: Threat
	/** Follows the game at the game time `now`; false once there is nothing left to follow. */
	public Update(_now: number): boolean
	/** The cast phase, channel or particle behind the sign ended; `cancel` when that alone means the effect is off. */
	public Ended(_cancel: boolean): void
	/** The particle behind the sign changed. */
	public Changed(_particle: NetworkedParticle): void
}
