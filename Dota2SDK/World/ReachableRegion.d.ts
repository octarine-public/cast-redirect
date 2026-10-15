// AUTO-GENERATED - do not edit.
/**
 * The cells a unit can reach within a time budget and when it arrives in each; the answer to
 * "where can the target be by then". Produced by `PathfinderSDK.Reachable`.
 */
declare class ReachableRegion {
	/** Cells reached. */
	public readonly Count: number
	constructor(grid: NavGrid, minGridX: number, minGridY: number, side: number, arrival: Float32Array, 
	/** Cells reached. */
	Count: number)
	/** Seconds until the unit can stand at `position`; `Infinity` outside the region. */
	public ArrivalTime(position: Vector2 | Vector3): number
	/** True when the unit can reach `position` within the budget. */
	public Contains(position: Vector2 | Vector3): boolean
	/**
	 * Calls `visit` for every reached cell with its arrival time and centre; the centre vector is
	 * reused between calls.
	 */
	public ForEach(visit: (cell: number, arrival: number, center: Vector2) => void): void
	/**
	 * Share of the region a shape covers, `0..1`, each cell weighted by `weight` of its arrival
	 * time (uniform by default).
	 * @example
	 * const chance = region.Coverage(new Circle2D(castPosition, ability.Radius))
	 */
	public Coverage(shape: IShape2D, weight?: (arrival: number) => number): number
}
