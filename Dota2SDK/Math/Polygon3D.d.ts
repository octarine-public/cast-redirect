// AUTO-GENERATED - do not edit.
/** A polygon in world space defined by an ordered list of 3D points, with point-in-polygon and containment tests. */
declare class Polygon3D {
	/** The ordered vertices of the polygon; append through {@link Add} or replace the array outright. */
	public Points: Vector3[]
	/**
	 * @param points the initial vertices, in order
	 * @example
	 * const poly = new Polygon3D(a, b, c, d)
	 */
	constructor(...points: Vector3[])
	/**
	 * Builds a closed polygon tracing the vertical faces of an axis-aligned bounding box.
	 * @example
	 * const poly = Polygon3D.fromAABB(entity.BoundingBox)
	 */
	public static fromAABB(box: AABB): Polygon3D
	/**
	 * The centroid (arithmetic mean) of all vertices, as a new Vector3. Empty polygons yield a NaN vector.
	 * @example
	 * const mid = poly.Center
	 */
	public get Center(): Vector3
	/**
	 * Appends a single point, or all points of another polygon, to this polygon. Mutates `this`.
	 * @example
	 * poly.Add(new Vector3(x, y, z))
	 * poly.Add(otherPolygon) // copies otherPolygon's points
	 */
	public Add(polygon: Polygon3D | Vector3): void
	/**
	 * True if the point lies inside or on the edge of the polygon (uses only x/y; z is ignored).
	 * @example
	 * if (poly.IsInside(pos)) { /* ... *\/ }
	 */
	public IsInside(point: Vector3): boolean
	/**
	 * True if the point lies strictly outside the polygon (uses only x/y; z is ignored).
	 * @example
	 * const outside = poly.IsOutside(pos)
	 */
	public IsOutside(point: Vector3): boolean
}
