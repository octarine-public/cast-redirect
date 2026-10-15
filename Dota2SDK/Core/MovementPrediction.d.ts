// AUTO-GENERATED - do not edit.
/** What a position estimate may leave out. */
interface IMovementOptions {
	/** Predict as if the unit's own move order were unknown, the way an enemy is predicted. */
	readonly ignoreDestination?: boolean
}
/** Where a unit is expected to be after a delay, and how much that estimate is worth. */
declare class MovementPrediction {
	public readonly Position: Vector3
	/** The velocity the estimate assumed, in units per second. */
	public readonly Velocity: Vector3
	/** Seconds ahead the estimate is for. */
	public Time: number
	public Confidence: EMovementConfidence
	/** @internal */
	public Set(time: number, confidence: EMovementConfidence): this
}
