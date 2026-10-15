// AUTO-GENERATED - do not edit.
/**
 * A networked particle with the Dota reading of its control points: which unit cast it, whom it
 * targets and which ability it belongs to, resolved from `network_particles.json`.
 */
declare class DotaNetworkedParticle extends NetworkedParticle {
	/**
	 * What the particle hangs off, as Dota's own union. The shared slots take anything with a
	 * predicted position; this SDK only ever puts a unit in them, real or fogged.
	 */
	public get Attached(): Nullable<Unit | FakeUnit>
	/** What the modifiers of this particle hang off. */
	public get ModifiersAttached(): Nullable<Unit | FakeUnit>
	/** Control-point entities, as Dota's own union. */
	public get ControlPointsUnits(): Map<number, [
		Unit | FakeUnit,
		number,
		number,
		boolean
	]>
	/** Entity index of the ability this particle belongs to, when one could be resolved. */
	public AbilityIndex: Nullable<number>
	/** Entity index of the caster. */
	public SourceIndex: Nullable<number>
	/** Entity index of the primary target. */
	public TargetIndex: Nullable<number>
	/** Entity index of the secondary target, for the few particles that carry two. */
	public SecondTargetIndex: Nullable<number>
	constructor(index: number, path: string, particleSystemHandle: bigint, attach: number, attachedTo: Nullable<INativePredictionTarget>, modifiersAttachedTo: Nullable<INativePredictionTarget>)
	/** The ability this particle belongs to, or `undefined` when it could not be resolved. */
	public get Ability(): Nullable<Ability>
	/** The unit that cast this particle. */
	public get Source(): Nullable<Unit>
	/** The unit this particle targets. */
	public get Target(): Nullable<Unit>
	/** The second unit this particle targets, for particles that link two. */
	public get SecondTarget(): Nullable<Unit>
	/**
	 * Re-resolves caster, targets and ability from the particle path. Called on creation and
	 * whenever a control point changes what the particle is attached to.
	 */
	public UpdateData(pathNoEcon: string): void
}
/**
 * Every live particle. The registration above makes `DotaNetworkedParticle` the only class the
 * engine's particles are ever built with, so the shared registry can be read as that type.
 * @example
 * for (const particle of DotaParticles.values()) { /* … *\/ }
 */
declare const DotaParticles: Map<number, DotaNetworkedParticle>
/**
 * Every live particle is a {@link DotaNetworkedParticle} - the shared package builds them
 * through the class registered below - so the shared type carries what Dota reads off one.
 */
interface NetworkedParticle {
	/** What the particle hangs off, as Dota's own union. */
	readonly Attached: Nullable<Unit | FakeUnit>
	/** What the modifiers of this particle hang off. */
	readonly ModifiersAttached: Nullable<Unit | FakeUnit>
	/** Control-point entities, as Dota's own union. */
	readonly ControlPointsUnits: Map<number, [
		Unit | FakeUnit,
		number,
		number,
		boolean
	]>
	/** Entity index of the ability this particle belongs to, when one could be resolved. */
	AbilityIndex: Nullable<number>
	/** Entity index of the caster. */
	SourceIndex: Nullable<number>
	/** Entity index of the primary target. */
	TargetIndex: Nullable<number>
	/** Entity index of the secondary target, for the few particles that carry two. */
	SecondTargetIndex: Nullable<number>
	/** The ability this particle belongs to, or `undefined` when it could not be resolved. */
	readonly Ability: Nullable<Ability>
	/** The unit that cast this particle. */
	readonly Source: Nullable<Unit>
	/** The unit this particle targets. */
	readonly Target: Nullable<Unit>
	/** The second unit this particle targets, for particles that link two. */
	readonly SecondTarget: Nullable<Unit>
	/** Re-resolves caster, targets and ability from the particle path. */
	UpdateData(pathNoEcon: string): void
}
