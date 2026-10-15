// AUTO-GENERATED - do not edit.
/** A screen-space rectangle in pixels, with the origin at the top-left of the viewport. */
interface IScreenRect {
	x: number
	y: number
	w: number
	h: number
}
/**
 * World-to-screen projection through the engine's own view-projection matrix — the same one the
 * current frame is rendered with, so results cannot drift from what the player sees.
 *
 * `BeginFrame` must run once per frame before anything else; it captures the camera the rest of
 * the methods project through.
 */
declare class CProjection {
	/** The viewport this projection currently targets, in pixels. */
	public get Viewport(): [number, number]
	/**
	 * Captures the viewport and the camera for this frame. Call once per frame, before projecting.
	 * @example
	 * Projection.BeginFrame(screenWidth, screenHeight)
	 */
	public BeginFrame(width: number, height: number): void
	/**
	 * Screen position of a world point, in pixels, or undefined when it is off the frame.
	 * @example
	 * const screen = Projection.WorldToScreen(entity.Position)
	 * if (screen !== undefined) { ... }
	 */
	public WorldToScreen(position: Vector3, cull?: boolean): Nullable<Vector2>
	/**
	 * Allocation-free `WorldToScreen`: writes `[x, y]` screen pixels into `out` and reports whether
	 * the point is on the frame. Prefer this when projecting every entity every frame.
	 *
	 * The buffer carries the camera as well as the point, because the games disagree on what the
	 * native side needs: Deadlock and CS2 project with the engine's own view-projection matrix and
	 * read the point alone, while Dota rebuilds the matrix from these camera fields.
	 * @example
	 * const screen: [number, number] = [0, 0]
	 * if (Projection.WorldToScreenXYZ(pos.x, pos.y, pos.z, screen)) { ... }
	 */
	public WorldToScreenXYZ(x: number, y: number, z: number, out: [number, number], cull?: boolean): boolean
	/**
	 * World position under a screen point, on the ground plane the engine picks.
	 * @example
	 * const world = Projection.ScreenToWorld(new Vector2(mouseX, mouseY))
	 */
	public ScreenToWorld(screen: Vector2): Vector3
	/**
	 * Screen rectangle around a world box — the unit's own bounds, `mins` and `maxs` offsets from
	 * `position` — written into `out`. All eight corners contribute to all four edges, so the
	 * rectangle holds the whole box from any angle, and at the screen's rim, where perspective
	 * tilts a figure and its head no longer projects above its feet. Returns false when the box
	 * is off the frame.
	 *
	 * The bounds are a box, not a cylinder: seen corner-on it really does subtend more of the
	 * screen than face-on, and the rectangle says so rather than averaging the difference away.
	 * @example
	 * const rect = { x: 0, y: 0, w: 0, h: 0 }
	 * const box = entity.BoundingBox
	 * if (Projection.UnitBounds(entity.Position, box.MinOffset, box.MaxOffset, rect)) { ... }
	 */
	public UnitBounds(position: Vector3, mins: Vector3, maxs: Vector3, out: IScreenRect): boolean
	/**
	 * Projects the eight corners of a unit's own bounds — `mins` and `maxs` offsets from
	 * `position` — writing `x, y` screen pixel pairs into `out`: the four base corners first,
	 * counter-clockwise, then the four above them in the same order.
	 *
	 * The box is drawn on the world axes, which is where the bounds are stated. Turning it to
	 * face the unit would move corners the bounds never claimed: an axis-aligned box is not the
	 * unit's own box turned, it is the smallest world-axis box holding him.
	 *
	 * `out` must hold sixteen numbers. Returns false unless every corner is on the frame, since a
	 * wireframe missing a vertex draws edges that go nowhere.
	 * @example
	 * const corners = new Float64Array(16)
	 * const box = entity.HitboxBounds
	 * if (Projection.UnitCorners(entity.Position, box.MinOffset, box.MaxOffset, corners))
	 */
	public UnitCorners(position: Vector3, mins: Vector3, maxs: Vector3, out: Float64Array | number[]): boolean
}
