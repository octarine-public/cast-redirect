// AUTO-GENERATED - do not edit.
/** An ability class and the particle it declared as a sign of its cast. */
interface IParticleSign {
	readonly Class: Constructor<IThreatAbility>
	readonly Particle: IThreatParticle
}
/**
 * Every sign of a cast the ability classes declare, by the name the game shows it under: the
 * particle, the spawned unit, the modifier, the projectile. The monitors ask here what a name
 * they see belongs to; the classes fill it through the decorators below.
 */
declare class CThreatSigns {
	/** The classes whose cast shows the particle at `path`, each with the roles of its control points. */
	public Particle(path: string): Nullable<readonly IParticleSign[]>
	/** The classes whose cast spawns a unit named `name`. */
	public Unit(name: string): Nullable<readonly Constructor<IThreatAbility>[]>
	/** The classes whose cast puts on a modifier named `name`. */
	public Modifier(name: string): Nullable<readonly Constructor<IThreatAbility>[]>
	/** The classes whose projectile flies as the particle at `path`. */
	public Projectile(path: string): Nullable<readonly Constructor<IThreatAbility>[]>
	public AddParticle(cls: Constructor<IThreatAbility>, particle: IThreatParticle): void
	public AddUnit(cls: Constructor<IThreatAbility>, name: string): void
	public AddModifier(cls: Constructor<IThreatAbility>, name: string): void
	public AddProjectile(cls: Constructor<IThreatAbility>, path: string): void
}
declare const ThreatSigns: CThreatSigns
