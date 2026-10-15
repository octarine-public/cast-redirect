// AUTO-GENERATED - do not edit.
/** A closed region of the 2D plane: containment and the signed distance to its boundary. */
interface IShape2D {
	/**
	 * True when the point lies inside or on the boundary.
	 * @example
	 * if (shape.Contains(unit.Position)) { ... }
	 */
	Contains(point: Vector2): boolean
	/**
	 * Distance from the point to the boundary, negative inside: how far the point can move before
	 * leaving the shape, or how far it still is from entering it.
	 * @example
	 * const margin = -shape.SignedDistance(predicted)
	 */
	SignedDistance(point: Vector2): number
}
