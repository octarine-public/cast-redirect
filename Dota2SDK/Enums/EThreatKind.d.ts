// AUTO-GENERATED - do not edit.
declare enum EThreatKind {
	/** A cast in progress, its shape laid along the caster's facing. */
	Cast = 0,
	/** A linear projectile in flight, its path known exactly. */
	LinearProjectile = 1,
	/** A projectile homing on one unit. */
	TrackingProjectile = 2,
	/** A unit the cast spawned where the effect lands, such as a thinker. */
	Unit = 3,
	/** A particle that marks where the effect lands. */
	Particle = 4,
	/** A modifier the cast put on a unit, the effect around it. */
	Modifier = 5
}
