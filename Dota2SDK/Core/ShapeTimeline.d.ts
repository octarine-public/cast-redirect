// AUTO-GENERATED - do not edit.
/**
 * A shape as a function of time, in seconds from now: what an ability covers at each moment
 * between the effect starting and ending. Coverage and collisions integrate `ShapeAt` over the
 * window instead of special-casing hooks, waves and arcs.
 */
interface IShapeTimeline {
	/** Seconds from now the effect starts to cover anything. */
	readonly Start: number
	/** Seconds from now the effect stops; `Infinity` for one that lingers. */
	readonly End: number
	/** Whether the effect harms each unit once as it sweeps past, so a unit it has hurt is out of its way. */
	readonly Passes: boolean
	/** The area covered at `time` seconds from now; `undefined` outside the window. */
	ShapeAt(time: number): Nullable<IShape2D>
	/**
	 * The area that harms at `time` seconds from now: a projectile's head rather than the
	 * stretch it left behind; `undefined` outside the window.
	 */
	ActiveAt(time: number): Nullable<IShape2D>
	/**
	 * Seconds from now the effect first reaches a unit of hull `hull` standing at `position`:
	 * when a projectile's head gets there, or when a shape that appears whole appears;
	 * `Infinity` when it never does.
	 */
	ReachTime(position: Vector3, hull: number): number
}
/** A shape that appears whole at `Start` and stays until `End`: a circle, an area around the caster, a cone that lands at once. */
declare class StaticShapeTimeline implements IShapeTimeline {
	public readonly Shape: IShape2D
	public readonly Start: number
	public readonly End: number
	public readonly Passes = false
	constructor(Shape: IShape2D, Start: number, End?: number)
	public ShapeAt(time: number): Nullable<IShape2D>
	public ActiveAt(time: number): Nullable<IShape2D>
	public ReachTime(position: Vector3, hull: number): number
}
/**
 * A capsule whose front runs from `Start` along the axis at `Speed`: a hook, an arrow, a wave.
 * `ShapeAt` returns the stretch already travelled, so a target is covered once the front has
 * passed it; `ActiveAt` returns the head alone. `Passes` is false for a head that keeps
 * harming whatever is under it as it rolls, a meteor. `Flat` is true for a front as wide as
 * the path that hits when it passes, a wave: the head is then the line across the path at
 * the front, as thick as one tick of travel, and what it sweeps is a rectangle with no round
 * ends, so nothing behind where the wave started counts as covered.
 */
declare class TravellingShapeTimeline implements IShapeTimeline {
	public readonly Path: Capsule2D
	public readonly Start: number
	public readonly Speed: number
	public readonly Passes: boolean
	public readonly Flat: boolean
	constructor(Path: Capsule2D, Start: number, Speed: number, Passes?: boolean, Flat?: boolean)
	public get End(): number
	public ShapeAt(time: number): Nullable<IShape2D>
	public ActiveAt(time: number): Nullable<IShape2D>
	public ReachTime(position: Vector3, hull: number): number
}
/**
 * A path given as points in time: the shape sweeps from point to point, covering what it has
 * passed and harming at its head. A flight whose curve no formula describes is predicted into
 * such a path and answered from it.
 */
declare class SampledShapeTimeline implements IShapeTimeline {
	public readonly Points: readonly Vector2[]
	public readonly Times: readonly number[]
	public readonly Radius: number
	public readonly Passes = true
	public readonly Start: number
	public readonly End: number
	constructor(Points: readonly Vector2[], Times: readonly number[], Radius: number)
	public ShapeAt(time: number): Nullable<IShape2D>
	public ActiveAt(time: number): Nullable<IShape2D>
	public ReachTime(position: Vector3, hull: number): number
}
/**
 * A trapezoid whose far edge runs from `Start` along its axis at `Speed`: a breath or a wave
 * that widens as it goes. `ShapeAt` returns the stretch it has covered, so a target counts as
 * hit once the front has passed it; `ActiveAt` returns the front alone, one tick of travel
 * thick.
 */
declare class SpreadingShapeTimeline implements IShapeTimeline {
	public readonly Path: Trapezoid2D
	public readonly Start: number
	public readonly Speed: number
	public readonly Passes = true
	constructor(Path: Trapezoid2D, Start: number, Speed: number)
	public get End(): number
	public ShapeAt(time: number): Nullable<IShape2D>
	public ActiveAt(time: number): Nullable<IShape2D>
	public ReachTime(position: Vector3, hull: number): number
}
