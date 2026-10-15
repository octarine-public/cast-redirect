// AUTO-GENERATED - do not edit.
/**
 * A trapezoid symmetric about its axis: `StartRadius` half-width at `Start`, `EndRadius` at `End`.
 * Equal radii make a rectangle, a smaller start radius a cone.
 */
declare class Trapezoid2D extends Segment2D implements IShape2D {
	public StartRadius: number
	public EndRadius: number
	/**
	 * @example
	 * const cone = new Trapezoid2D(caster.Position, farPoint, startWidth / 2, endWidth / 2)
	 */
	constructor(start: Vector2, end: Vector2, StartRadius: number, EndRadius: number)
	/** Half-width at fraction `t` along the axis. */
	public HalfWidthAt(t: number): number
	public Contains(point: Vector2): boolean
	public SignedDistance(point: Vector2): number
	/** The four corners as new vectors: start-left, end-left, end-right, start-right. */
	public Corners(): Vector2[]
}
