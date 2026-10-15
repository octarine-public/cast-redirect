// AUTO-GENERATED - do not edit.
/** A polygon on the 2D (screen) plane defined by an ordered list of points, with point-in-polygon and containment tests. */
declare class Polygon2D {
	/** The ordered vertices of the polygon (the array reference is fixed, but its contents may be appended via {@link Add}). */
	public readonly Points: Vector2[]
	/**
	 * @param points the initial vertices, in order
	 * @example
	 * const poly = new Polygon2D(a, b, c, d)
	 */
	constructor(...points: Vector2[])
	/**
	 * The centroid (arithmetic mean) of all vertices, as a new Vector2. Empty polygons yield a NaN vector.
	 * @example
	 * const mid = poly.Center
	 */
	public get Center(): Vector2
	/**
	 * Appends a single point, or all points of another polygon, to this polygon. Mutates `this`.
	 * @example
	 * poly.Add(new Vector2(x, y))
	 * poly.Add(otherPolygon) // copies otherPolygon's points
	 */
	public Add(polygon: Polygon2D | Vector2): void
	/**
	 * True if the point lies inside or on the edge of the polygon.
	 * @example
	 * const inside = poly.IsInside(pos)
	 */
	public IsInside(point: Vector2): boolean
	/**
	 * True if the point lies strictly outside the polygon.
	 * @example
	 * const outside = poly.IsOutside(pos)
	 */
	public IsOutside(point: Vector2): boolean
}
