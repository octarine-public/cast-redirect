// AUTO-GENERATED - do not edit.
/**
 * Per-unit prediction state: the positions of the last server ticks, the velocity they imply,
 * the motion or move order the unit is known to follow, and the version of the owner's abilities
 * that invalidates cached ability profiles. `Unit` creates one and the SDK updates it once per
 * `PostDataUpdate`.
 */
declare class UnitPrediction {
	/**
	 * Displacement over the last tick divided by its duration, in units per second; zero until
	 * two samples exist.
	 */
	public readonly Velocity: Vector3
	/** Grows whenever an ability of the unit changes level, talents included. */
	public AbilitiesVersion: number
	/** The teleport, knockback or dash the unit is known to be in, while it lasts. */
	public Motion: Nullable<Motion>
	/** The blows on their way to the unit; `HealthAt` takes them off the health. */
	public readonly IncomingDamage: IncomingDamage
	constructor(owner: IMovingBody)
	/** The timeline the unit's own casts and responses are laid on. */
	public get Timeline(): CastTimeline
	/** The estimate of another unit's position the unit's timelines fill. */
	public get Estimate(): MovementPrediction
	/** Consecutive samples kept, at most 16. */
	public get SampleCount(): number
	/** Server tick of the last jump that walking cannot explain, `-1` if none was seen. */
	public get LastDiscontinuityTick(): number
	/** The point of the unit's last move order, while the order is being followed. */
	public get Destination(): Nullable<Vector3>
	/** The states the unit is expected to be in right now, which `Unit.UnitStateMask` adds to the networked ones. */
	public get ExpectedStateMask(): bigint
	/**
	 * Records that the unit is expected to hold `state` until the game time `until`, as right
	 * after a disable was cast at it and before the server confirms it. A later call for the same
	 * state replaces the earlier one; a time that has passed clears it.
	 */
	public ExpectState(state: modifierstate, until: number): void
	/** Game time the expected `state` ends; `now` when none is expected. */
	public ExpectedStateUntil(state: modifierstate): number
	/**
	 * Game time the networked `state` ends, as the modifiers that brought it say: the ones
	 * created the tick the state rose, or the ones known to carry it. `now` when the unit is
	 * not in the state; `Infinity` when nothing with a duration explains it, which is the safe
	 * answer for a cast that must wait it out.
	 */
	public StateUntil(state: modifierstate): number
	/**
	 * Networked position `ticksAgo` samples back, `0` being the latest; `undefined` beyond the
	 * history.
	 */
	public PositionAt(ticksAgo: number, out?: Vector3): Nullable<Vector3>
	/** Server tick of the sample `ticksAgo` back, `-1` beyond the history. */
	public TickAt(ticksAgo: number): number
	/**
	 * Mean velocity over the last `samples` samples, in units per second; zero with fewer than
	 * two samples.
	 * @example
	 * unit.Prediction.AverageVelocity(5)
	 */
	public AverageVelocity(samples: number, out?: Vector3): Vector3
	/**
	 * Where the unit is expected to be `delay` seconds from now. A motion or a known move order
	 * gives the exact point; otherwise the unit is walked along its heading around obstacles, and
	 * an unseen unit is held at its last known position.
	 */
	public Predict(delay: number, destination: Nullable<Vector3>, ignoreDestination: boolean, out: MovementPrediction): MovementPrediction
	/**
	 * The route the unit is expected to walk over `duration` seconds as points every `step`
	 * seconds, the current position first.
	 */
	public PredictPath(duration: number, step: number, destination: Nullable<Vector3>, ignoreDestination: boolean): Path
	/**
	 * Every cell the unit can reach within `delay` seconds, the turn it has to make first
	 * included: the set of places an enemy can be by then. A motion under way carries the unit
	 * to its end first; only the time left after it is walked.
	 */
	public PredictRegion(delay: number): ReachableRegion
	/** @internal */
	public SetMotion(motion: Nullable<Motion>): void
	/** @internal */
	public SetDestination(position: Nullable<Vector3>): void
	/** @internal */
	public NoteAbilityLevelChanged(): void
	/** @internal */
	public Tick(): void
	/** @internal */
	public Reset(): void
}
