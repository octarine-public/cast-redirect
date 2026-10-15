// AUTO-GENERATED - do not edit.
/** A line segment on the 2D plane; the axis of every shape that has one. */
declare class Segment2D {
	public readonly Start: Vector2
	public readonly End: Vector2
	/**
	 * @example
	 * const path = new Segment2D(caster.Position, castPosition)
	 */
	constructor(Start: Vector2, End: Vector2)
	/** Length of the segment. */
	public get Length(): number
	/** Squared length of the segment. */
	public get LengthSqr(): number
	/** Unit direction from `Start` to `End` as a new vector; zero for a degenerate segment. */
	public get Direction(): Vector2
	/**
	 * Fraction along the segment where `point` projects, clamped to `0..1`.
	 * @example
	 * const passed = path.ProjectionAt(unit.Position) * path.Length
	 */
	public ProjectionAt(point: Vector2): number
	/** Point at fraction `t` along the segment, written into `out`. */
	public PointAt(t: number, out?: Vector2): Vector2
	/** Closest point of the segment to `point`, written into `out`. */
	public ClosestPoint(point: Vector2, out?: Vector2): Vector2
	/** Squared distance from `point` to the segment, without allocating. */
	public DistanceSqr(point: Vector2): number
	/** Distance from `point` to the segment. */
	public Distance(point: Vector2): number
	/**
	 * Fraction along the segment at which a point travelling from `Start` to `End` first comes
	 * within `radius` of `center`; `0` when it starts inside, `undefined` when it never gets there.
	 * @example
	 * const t = path.CircleEntry(blocker.Position, blocker.HullRadius + width)
	 */
	public CircleEntry(center: Vector2, radius: number): Nullable<number>
	/**
	 * True when the two segments share at least one point, endpoints and collinear overlap
	 * included.
	 */
	public Intersects(other: Segment2D): boolean
}
