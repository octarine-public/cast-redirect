// AUTO-GENERATED - do not edit.
/** How a path query treats the grid; every field defaults from `unit` when one is given. */
interface IPathOptions {
	/** The unit the query is for: its hull, flight and collision state fill the defaults. */
	readonly unit?: INavAgent
	readonly hullRadius?: number
	readonly flying?: boolean
	/** Whether cells other units stand in are impassable; off for flying and phased units. */
	readonly avoidUnits?: boolean
	/** Search radius around the start, in world units. */
	readonly maxDistance?: number
	/**
	 * Move speed, the unit's by default: a re-planning unit plans again every two seconds of
	 * walking, so the speed decides where each planned stretch ends.
	 */
	readonly speed?: number
	/**
	 * Whether the route is planned again every two seconds of walking from wherever the unit
	 * stands, as the server does for player-controlled units; other units keep their route.
	 * Defaults from the unit, on without one.
	 */
	readonly replans?: boolean
}
/** A reachability query: a path query plus the turn the unit has to make before its first step. */
interface IReachableOptions extends IPathOptions {
	/** Seconds the unit needs to face a direction `angle` radians away from its current heading. */
	readonly turnCost?: (angle: number) => number
	/**
	 * Current heading in radians; required for `turnCost` to apply. Also breaks ties: among
	 * spots as near as the nearest within the grid's distortion, the one needing the smallest
	 * turn wins.
	 */
	readonly heading?: number
}
/** A spot a reachability search found, with the seconds the walk there takes, the turn before the first step included. */
interface IReachableSpot {
	readonly Position: Vector3
	readonly Time: number
}
/**
 * Path queries over the map grid: routes, reachable regions, times to reach and grid line of
 * sight. Units answer the same questions about themselves through `Unit.FindPath` and its kin.
 */
declare class CPathfinder {
	public readonly ObstacleManager: ObstacleManager
	public readonly NavGrid: NavGrid
	/**
	 * The cheapest walkable route from `from` to `to`, its corners as world points with terrain
	 * height; `undefined` when the goal cannot be reached. A goal inside an obstacle is moved to
	 * the nearest passable cell within three cells.
	 * @example
	 * const path = PathfinderSDK.FindPath(hero.Position, target, { unit: hero })
	 */
	public FindPath(from: Vector3, to: Vector3, options?: IPathOptions): Nullable<Path>
	/**
	 * Every cell reachable from `from` within `time` seconds at `speed`, with arrival times. A cell
	 * counts as reached when any point of it is in reach: the budget carries the slack of the
	 * octile metric, whose cell paths run up to 8.2% longer than the straight line they stand in
	 * for, plus half a cell diagonal, the farthest a point of a cell lies from its centre.
	 * @example
	 * const region = PathfinderSDK.Reachable(enemy.Position, 0.6, enemy.MoveSpeed, { unit: enemy })
	 */
	public Reachable(from: Vector3, time: number, speed: number, options?: IReachableOptions): ReachableRegion
	/** Seconds of walking at `speed` along the route to `to`; `Infinity` without a route. */
	public TimeToReach(from: Vector3, to: Vector3, speed: number, options?: IPathOptions): number
	/** True when a unit can walk straight from `from` to `to` without touching an obstacle. */
	public IsLineClear(from: Vector3, to: Vector3, options?: IPathOptions): boolean
	/**
	 * The nearest cell centre by travel within the budget that satisfies `accept`, with the
	 * seconds the walk there takes; the answer to "where is the closest safe spot". Spots
	 * whose travel is within the grid's octile distortion of the nearest count as equally
	 * near, and among those the one needing the smallest turn from `heading` wins, so a unit
	 * steps aside rather than turning around for a spot no closer.
	 * @example
	 * const spot = PathfinderSDK.NearestReachable(hero.Position, 0.5, hero.MoveSpeed, p => !danger.Contains(p), { unit: hero })
	 */
	public NearestReachable(from: Vector3, time: number, speed: number, accept: (position: Vector3) => boolean, options?: IReachableOptions): Nullable<IReachableSpot>
}
declare const PathfinderSDK: CPathfinder
