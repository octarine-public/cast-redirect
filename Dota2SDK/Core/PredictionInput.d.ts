// AUTO-GENERATED - do not edit.
/** What a script may refine about one prediction; every field has a default the ability chooses. */
interface IPredictOptions {
	/** Units to consider for area coverage and collisions instead of the ones in reach. */
	readonly Candidates?: readonly IPredictionTarget[]
	readonly Goal?: EPredictionGoal
	/** Least units the shape must cover for `CastPredicted` to cast; 1 by default. */
	readonly MinTargets?: number
	/** Least `HitChance` for `CastPredicted` to cast; `Medium` by default. */
	readonly MinHitChance?: EHitChance
	/** Place a line as if the caster blinked next to the target first. */
	readonly UseBlink?: boolean
	/** Extra distance from the caster the cast may start from, such as a blink about to happen. */
	readonly ExtraRangeFromCaster?: number
	/** Cast from here instead of from the caster's position. */
	readonly SourcePosition?: Vector3
	/** Seconds added to the timeline before the effect lands, such as a combo step in front. */
	readonly Delay?: number
}
/**
 * The hooks the core calls back on the ability while it predicts; `Ability` implements them
 * with defaults and a class overrides the ones its effect needs.
 */
interface IPredictionHooks {
	/** How a cast at `target` plays out; the ability's `GetCastTimeline` with the prediction's options. */
	Timeline(target: IPredictionTarget | Vector3, out: CastTimeline): CastTimeline
	/** Whether the effect landing at the game time `time` affects `target`. */
	CanHitAt(target: IPredictionTarget, time: number): boolean
	/** Seconds the effect needs from `from` to `to`; the projectile flight by default. */
	GetTravelTime(from: Vector3, to: Vector3): number
	/** The shape the placement in `output` covers over time. */
	GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
	/** Where the effect really lands for the placement in `output`; the hit position itself by default. */
	GetHitPosition(output: PredictionOutput): Vector3
}
/** The profile the core snapshots from an ability at the start of a prediction. */
interface IPredictionProfile extends IPredictionHooks {
	readonly Owner: Nullable<IPredictionTarget>
	readonly SkillShotType: ESkillShotType
	readonly Radius: number
	readonly EndRadius: number
	readonly Range: number
	readonly CastRange: number
	readonly Speed: number
	readonly ActivationDelay: number
	readonly CollisionFlags: CollisionFlag
	readonly CollisionTeam: CollisionTeam
	HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
}
/**
 * Everything one prediction reads: the caster, the target, the candidates around, the profile
 * of the ability at this moment and the script's options. Built by `FromAbility`; a strategy
 * or a `ModifyInput` hook changes it before the core runs.
 */
declare class PredictionInput {
	public Caster: IPredictionTarget
	public Hooks: IPredictionHooks
	/** The unit aimed at; `undefined` for a point cast or a search over the candidates. */
	public Target: Nullable<IPredictionTarget>
	/** The point aimed at when no unit is; the target's position otherwise. */
	public readonly TargetPosition: Vector3
	/** Units the shape may cover besides the target. */
	public Candidates: readonly IPredictionTarget[]
	/** Units a projectile may hit on the way, whether or not the ability could target them. */
	public Obstacles: readonly IPredictionTarget[]
	public Goal: EPredictionGoal
	public MinTargets: number
	public MinHitChance: EHitChance
	public UseBlink: boolean
	public ExtraRangeFromCaster: number
	public Delay: number
	public readonly SourcePosition: Vector3
	public SkillShotType: ESkillShotType
	public Radius: number
	public EndRadius: number
	public Range: number
	public CastRange: number
	public Speed: number
	public ActivationDelay: number
	public CollisionFlags: CollisionFlag
	public CollisionTeam: CollisionTeam
	public TargetsUnit: boolean
	public TargetsPoint: boolean
	public TargetsNothing: boolean
	public TargetsVector: boolean
	/** The timeline of the cast at the target, filled by the core per placement. */
	public readonly Timeline: CastTimeline
	/**
	 * Reads the ability's profile of this moment and the script's options into `out`. The
	 * candidates default to what the ability can target within reach.
	 */
	public static FromAbility(ability: IPredictionProfile, caster: IPredictionTarget, target: Nullable<IPredictionTarget | Vector3>, candidates: readonly IPredictionTarget[], obstacles: readonly IPredictionTarget[], options: IPredictOptions, out?: PredictionInput): PredictionInput
	/** Where the cast starts from: the source position when given, the caster otherwise. */
	public get Source(): Vector3
}
