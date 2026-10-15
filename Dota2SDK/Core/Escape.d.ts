// AUTO-GENERATED - do not edit.
/**
 * Where a unit can walk to get out of the threats reaching it, and when it has to start: a
 * cast in progress may still be cancelled or turned away, so the unit stands its ground until
 * waiting any longer would not get it there in time.
 * @example
 * const escape = hero.Escape()
 * if (escape !== undefined && escape.Due) {
 * 	hero.MoveTo(escape.Position)
 * }
 */
declare class Escape {
	/** The spot to walk to. */
	public readonly Position: Vector3
	/** Game time the earliest of the threats lands. */
	public readonly Impact: number
	/** Seconds the turn and the walk to the spot take, as the search that found the spot counts them, so the spot is still found when the walk is due. */
	public readonly Travel: number
	constructor(
	/** The spot to walk to. */
	Position: Vector3, 
	/** Game time the earliest of the threats lands. */
	Impact: number, 
	/** Seconds the turn and the walk to the spot take, as the search that found the spot counts them, so the spot is still found when the walk is due. */
	Travel: number)
	/** Game time the walk has to start to arrive before the impact, with the order's own lag counted. */
	public get Deadline(): number
	/** Whether the walk has to start now: waiting one more tick would not get there in time. */
	public get Due(): boolean
}
