// AUTO-GENERATED - do not edit.
/** A disc on the 2D plane. */
declare class Circle2D implements IShape2D {
	public readonly Center: Vector2
	public Radius: number
	/**
	 * @example
	 * const area = new Circle2D(castPosition, ability.Radius)
	 */
	constructor(Center: Vector2, Radius: number)
	public Contains(point: Vector2): boolean
	public SignedDistance(point: Vector2): number
	/** True when the discs overlap or touch. */
	public Intersects(other: Circle2D): boolean
}
