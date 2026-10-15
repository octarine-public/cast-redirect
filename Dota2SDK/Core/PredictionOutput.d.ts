// AUTO-GENERATED - do not edit.
/**
 * What one prediction found: where to cast, where and when the effect lands, how likely it is
 * to hit and whom else it covers. One instance can be reused across calls.
 * @example
 * const output = hook.Predict(enemy)
 * if (output.HitChance >= EHitChance.High) {
 * 	hook.UseAbility(output.CastPosition)
 * }
 */
declare class PredictionOutput {
	/** The unit the prediction aimed at, when it aimed at one. */
	public Target: Nullable<IPredictionTarget>
	/** Where to cast: the point of a point cast, the centre of a circle, the unit's position for a unit target. */
	public readonly CastPosition: Vector3
	/** Where the target is expected to be when the effect lands. */
	public readonly TargetPosition: Vector3
	/** Where the effect really lands, which a hook may move off the target position. */
	public readonly HitPosition: Vector3
	/** Direction of a vector cast, unit length; zero for other casts. */
	public readonly CastDirection: Vector3
	/** Where to blink to before a line cast, when the prediction was asked to use one. */
	public readonly BlinkLinePosition: Vector3
	/** Seconds from now until the effect lands on the target. */
	public HitTime: number
	public HitChance: EHitChance
	/** Share of the target's reachable region the shape covers when it lands, `0..1`. */
	public HitProbability: number
	/** Every candidate the shape is expected to cover, the target first when it does. */
	public readonly AoeTargets: IPredictionTarget[]
	/** Units the projectile would hit before the target; a non-empty list makes the cast impossible. */
	public readonly Collisions: IPredictionTarget[]
	/** The shape the cast covers over time, once placed. */
	public Shape: Nullable<IShapeTimeline>
	/** The cast's timeline at the target, the input's instance; the stretches `HitTime` is made of. */
	public Timeline: Nullable<CastTimeline>
	/** Clears every field for reuse. */
	public Reset(): this
	/** Copies every field of `other` into this output. */
	public CopyFrom(other: PredictionOutput): this
}
