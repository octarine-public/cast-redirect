// AUTO-GENERATED - do not edit.
/** A route as plain arrays: `[x, y, z]` per corner. */
interface IPathPlain {
	readonly points: number[][]
	readonly length: number
}
/** A reachable region as plain arrays: `[gridX, gridY, seconds]` per reached cell. */
interface IReachablePlain {
	readonly count: number
	readonly cells: number[][]
}
/** A prediction as plain numbers and entity indexes, safe to return over CDP. */
interface IPredictionPlain {
	readonly castPosition: number[]
	readonly targetPosition: number[]
	readonly hitPosition: number[]
	readonly hitTime: number
	readonly hitChance: number
	readonly hitProbability: number
	readonly aoeTargets: number[]
	readonly collisions: number[]
}
/** What `Predict` needs from an ability; `Ability` satisfies it structurally. */
interface IPredictingAbility {
	Predict(target?: IPredictionTarget | Vector3, options?: undefined, out?: PredictionOutput): PredictionOutput
}
/** What the movement probe reads from a unit; `Unit` satisfies it structurally. */
interface IMovementProbeSource {
	readonly Index: number
	readonly IsAlive: boolean
	readonly IsVisible: boolean
	readonly NetworkedPosition: Vector3
	readonly Prediction: {
		readonly LastDiscontinuityTick: number
	}
	PredictPosition(delay: number, options?: IMovementOptions, out?: MovementPrediction): MovementPrediction
	PredictRegion(delay: number): ReachableRegion
	GetPredictionPosition(delay: number): Vector3
}
/** What a snapshot reads from a unit; `Unit` satisfies it structurally. */
interface ISnapshotSource {
	readonly Name: string
	readonly NetworkedPosition: Vector3
	readonly MoveSpeed: number
	readonly IsMoving: boolean
	readonly Prediction: {
		readonly Velocity: Vector3
		readonly SampleCount: number
		readonly LastDiscontinuityTick: number
		readonly AbilitiesVersion: number
		PositionAt(ticksAgo: number): Nullable<Vector3>
		TickAt(ticksAgo: number): number
	}
}
/** A unit's prediction state as plain numbers and arrays, safe to return over CDP. */
interface IUnitSnapshot {
	readonly name: string
	readonly position: number[]
	readonly moveSpeed: number
	readonly isMoving: boolean
	readonly velocity: number[]
	readonly speed: number
	readonly samples: number
	readonly lastDiscontinuityTick: number
	readonly abilitiesVersion: number
	/** `[tick, x, y, z]` per sample, oldest first. */
	readonly history: number[][]
}
/**
 * The debug side of prediction: telemetry and snapshots without any drawing, so everything here
 * can be called over CDP. The internal `prediction-debug` page draws on top of it.
 * @example
 * PredictionSDK.Debug.Enabled = true
 * PredictionSDK.Debug.Stats()
 */
declare class PredictionDebug {
	/** Telemetry is collected only while true; off by default, and nothing runs while it is off. */
	public Enabled: boolean
	/** Layers the internal debug page draws; the SDK itself never draws. */
	public readonly Layers: Set<EPredictionDebugLayer>
	public readonly Telemetry: PredictionTelemetry
	/** The last prediction made through `Predict`, for the internal page to draw. */
	public LastCast: Nullable<PredictionOutput>
	/**
	 * Once per tick for a unit under test: settles the estimates made earlier for this moment and
	 * makes new ones for 0.3, 0.6 and 1.0 seconds ahead, with the order-blind estimate and the
	 * legacy straight-line estimate beside them and the 1-second region on top.
	 */
	public ProbeMovement(unit: IMovementProbeSource): void
	/** Stores one "predicted → actual" pair while telemetry is enabled, tagged with its source. */
	public Record(kind: EPredictionSample, predicted: number, actual: number, source?: number): void
	/**
	 * Remembers that an attack of `attacker` ordered or begun now is expected to land on
	 * `target` at the game time `landingAt`; `AttackLanded` settles it against the damage event.
	 */
	public ProbeAttack(kind: EPredictionSample, attacker: number, target: number, landingAt: number): void
	/** Settles the earliest pending attack of the pair with the game time its damage was seen. */
	public AttackLanded(attacker: number, target: number, at: number): void
	/**
	 * The unit's prediction state as plain data.
	 * @example
	 * PredictionSDK.Debug.Snapshot(LocalPlayer.Hero)
	 */
	public Snapshot(unit: ISnapshotSource): IUnitSnapshot
	/**
	 * The route between two points as plain data, `undefined` without one.
	 * @example
	 * PredictionSDK.Debug.Path(LocalPlayer.Hero.Position, InputManager.CursorOnWorld, { unit: LocalPlayer.Hero })
	 */
	public Path(from: Vector3, to: Vector3, options?: IPathOptions): Nullable<IPathPlain>
	/** The cells reachable within `time` seconds at `speed` as plain data. */
	public Reachable(from: Vector3, time: number, speed: number, options?: IReachableOptions): IReachablePlain
	/** Error summary per sample kind, optionally for one source such as a unit index. */
	public Stats(source?: number): Record<string, IPredictionSampleStats>
	/** The newest pairs, newest first. */
	public Dump(count?: number): IPredictionSample[]
	/** Drops all telemetry and pending probes. */
	public Reset(): void
	/**
	 * Predicts one cast through the ability itself and returns the result as plain data, keeping
	 * it as `LastCast` for the internal page to draw.
	 * @example
	 * PredictionSDK.Debug.Predict(LocalPlayer.Hero.Spells[0], enemy)
	 */
	public Predict(ability: IPredictingAbility, target?: IPredictionTarget | Vector3): IPredictionPlain
	/**
	 * Remembers that a predicted cast of the ability `ability` at the unit `target` is expected
	 * to land at the game time `landsAt` with `probability` at `chance`; `CastLanded` settles it
	 * against the effect showing up, `SettleCasts` closes the ones that never did. Every settled
	 * cast lands in `SkillShot` and in the kind of its chance, `SkillShotLow` to `SkillShotImmobile`.
	 */
	public ProbeCast(ability: number, target: number, probability: number, chance: EHitChance, landsAt: number): void
	/** Forgets the pending casts of the pair: the cast was taken back before it left. */
	public CancelCast(ability: number, target: number): void
	/** Settles every pending cast of the pair as a hit. */
	public CastLanded(ability: number, target: number): void
	/** Settles every pending cast whose landing time passed by the probe timeout as a miss. */
	public SettleCasts(): void
	/** The modifier names learned to bring unit states this session, with the states as numbers. */
	public StateCarriers(): Record<string, number[]>
}
