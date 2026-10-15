// AUTO-GENERATED - do not edit.
/** Which control points of a particle carry the cast it shows: the caster, where the effect starts and ends, the unit it is bound to. */
interface IParticleRoles {
	/** Control point whose entity is the caster; its fallback position starts the effect when `Start` is absent. */
	readonly Source?: number
	/** Control point whose position starts the effect, for one that does not start at the caster. */
	readonly Start?: number
	/** Control point whose position ends the effect: the far end of a line, the centre of a landing. */
	readonly Target?: number
	/** Control point whose entity the effect is bound to; a flying effect that gets a unit there has caught it. */
	readonly TargetEntity?: number
}
/**
 * A particle an ability shows when it is cast and the roles of its control points. A class
 * declares it with `@ThreatParticle`, so a cast seen only through the particle, out of the fog,
 * still becomes a threat.
 * @example
 * @Source2SDK.WrapperClass("pudge_meat_hook")
 * @ThreatParticle("particles/units/heroes/hero_pudge/pudge_meathook.vpcf", {
 * 	Source: 0,
 * 	Target: 1,
 * 	TargetEntity: 1
 * })
 * export class pudge_meat_hook extends Ability {}
 */
interface IThreatParticle extends IParticleRoles {
	/** The particle's path without the econ suffix. */
	readonly Path: string
}
