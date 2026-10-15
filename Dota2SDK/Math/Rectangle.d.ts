// AUTO-GENERATED - do not edit.
/** An axis-aligned 2D rectangle defined by its top-left (`pos1`) and bottom-right (`pos2`) corners. */
declare class Rectangle {
	public pos1: Vector2
	public pos2: Vector2
	/**
	 * Creates a rectangle from its top-left (`pos1`) and bottom-right (`pos2`) corners. Both default
	 * to the zero vector.
	 * @example
	 * const r = new Rectangle(new Vector2(0, 0), new Vector2(100, 50))
	 */
	constructor(pos1?: Vector2, pos2?: Vector2)
	/** `true` when both corner vectors are valid (finite, non-NaN). @example if (r.IsValid) {} */
	public get IsValid(): boolean
	/** Left edge (`pos1.x`). @example const left = r.x */
	public get x(): number
	/** Moves the whole rectangle so its left edge is `val`, preserving width. @example r.x = 20 */
	public set x(val: number)
	/** Top edge (`pos1.y`). @example const top = r.y */
	public get y(): number
	/** Moves the whole rectangle so its top edge is `val`, preserving height. @example r.y = 20 */
	public set y(val: number)
	/** Size as a new Vector2 (`pos2 - pos1`), i.e. `(width, height)`. @example const s = r.Size */
	public get Size(): Vector2
	/** Width of the rectangle. @example const w = r.Width */
	public get Width(): number
	/** Sets the width by moving the right edge; the left edge stays fixed. @example r.Width = 200 */
	public set Width(val: number)
	/** Height of the rectangle. @example const h = r.Height */
	public get Height(): number
	/** Sets the height by moving the bottom edge; the top edge stays fixed. @example r.Height = 200 */
	public set Height(val: number)
	/** Left edge x-coordinate (`pos1.x`). @example const l = r.Left */
	public get Left(): number
	/** Sets the left edge x-coordinate directly, resizing the rectangle. @example r.Left = 10 */
	public set Left(val: number)
	/** Right edge x-coordinate (`pos2.x`). @example const rr = r.Right */
	public get Right(): number
	/** Sets the right edge x-coordinate directly, resizing the rectangle. @example r.Right = 300 */
	public set Right(val: number)
	/** Top edge y-coordinate (`pos1.y`). @example const t = r.Top */
	public get Top(): number
	/** Sets the top edge y-coordinate directly, resizing the rectangle. @example r.Top = 10 */
	public set Top(val: number)
	/** Bottom edge y-coordinate (`pos2.y`). @example const b = r.Bottom */
	public get Bottom(): number
	/** Sets the bottom edge y-coordinate directly, resizing the rectangle. @example r.Bottom = 300 */
	public set Bottom(val: number)
	/** Center point as a new Vector2. @example const c = r.Center */
	public get Center(): Vector2
	/**
	 * The upper-left corner as a new Vector2, regardless of which corner each of `pos1`/`pos2` holds.
	 * @example
	 * const tl = r.TopLeft
	 */
	public get TopLeft(): Vector2
	/**
	 * The lower-right corner as a new Vector2, regardless of which corner each of `pos1`/`pos2` holds.
	 * @example
	 * const br = r.BottomRight
	 */
	public get BottomRight(): Vector2
	/**
	 * `true` when both corners are within `tolerance` of the origin (default 0.01).
	 * @example
	 * new Rectangle().IsZero() // true
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * `true` if `pos` lies inside the rectangle; left/top edges are inclusive, right/bottom exclusive.
	 * @example
	 * r.Contains(new Vector2(50, 25))
	 */
	public Contains(pos: Vector2): boolean
	/**
	 * `true` when the two rectangles overlap on both axes; touching edges do not count.
	 * @example
	 * if (panel.Intersects(cursorBox)) { /* the cursor box overlaps the panel *\/ }
	 */
	public Intersects(r: Rectangle): boolean
	/**
	 * Returns `pos` relative to the top-left corner as a new Vector2 (`pos - pos1`).
	 * @example
	 * r.GetOffset(new Vector2(60, 40))
	 */
	public GetOffset(pos: Vector2): Vector2
	/**
	 * Translates both corners by `vec` and returns `this` (mutates).
	 * @example
	 * r.Add(new Vector2(10, 5)) // shift right/down
	 */
	public Add(vec: Vector2): Rectangle
	/**
	 * Translates both corners by `-vec` and returns `this` (mutates).
	 * @example
	 * r.Subtract(new Vector2(10, 5)) // shift left/up
	 */
	public Subtract(vec: Vector2): Rectangle
	/**
	 * Shifts the rectangle right by `num` along x and returns `this` (mutates).
	 * @example
	 * r.AddX(10)
	 */
	public AddX(num: number): Rectangle
	/**
	 * Shifts the rectangle down by `num` along y and returns `this` (mutates).
	 * @example
	 * r.AddY(10)
	 */
	public AddY(num: number): Rectangle
	/**
	 * Shifts the rectangle left by `num` along x and returns `this` (mutates).
	 * @example
	 * r.SubtractX(10)
	 */
	public SubtractX(num: number): Rectangle
	/**
	 * Shifts the rectangle up by `num` along y and returns `this` (mutates).
	 * @example
	 * r.SubtractY(10)
	 */
	public SubtractY(num: number): Rectangle
	/**
	 * Returns a deep copy with independent corner vectors.
	 * @example
	 * const copy = r.Clone()
	 */
	public Clone(): Rectangle
}
