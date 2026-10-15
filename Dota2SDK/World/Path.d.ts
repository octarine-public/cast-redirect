// AUTO-GENERATED - do not edit.
/** A walkable route as straight segments between corners, with time along it at a given speed. */
declare class Path {
	public readonly Points: readonly Vector3[]
	/**
	 * @example
	 * const path = unit.FindPath(target)
	 * if (path !== undefined) { const at = path.PositionAt(0.5, unit.MoveSpeed) }
	 */
	constructor(Points: readonly Vector3[])
	/** Total length along the corners. */
	public get Length(): number
	/** First corner. */
	public get Start(): Vector3
	/** Last corner. */
	public get End(): Vector3
	/** Point `distance` along the route, clamped to its ends, written into `out`. */
	public PositionAtDistance(distance: number, out?: Vector3): Vector3
	/** Point reached after `time` seconds at `speed`, written into `out`. */
	public PositionAt(time: number, speed: number, out?: Vector3): Vector3
	/**
	 * Distance along the route of the point of it closest to `position`, never less than
	 * `from`: a walker that has covered `from` already is matched against what lies ahead, so a
	 * route that doubles back cannot pull the match backwards.
	 */
	public DistanceAlong(position: Vector3, from?: number): number
	/** Seconds at `speed` until the route passes the point of it closest to `position`. */
	public TimeAt(position: Vector3, speed: number): number
	/** Planar distance from `position` to the route. */
	public DistanceTo(position: Vector3): number
}
