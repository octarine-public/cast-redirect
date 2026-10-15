// AUTO-GENERATED - do not edit.
/** An axis-aligned bounding box defined by a `Base` position plus min/max corner offsets and a Z shift. */
declare class AABB {
	public readonly Base: Vector3
	public readonly MinOffset: Vector3
	public readonly MaxOffset: Vector3
	public DeltaZ: number
	/**
	 * Creates an AABB from a `Base` position and its min/max corner offsets, plus an optional `DeltaZ`
	 * vertical shift. All vectors default to zero and `DeltaZ` to 0.
	 * @example
	 * const box = new AABB(pos, new Vector3(-50, -50), new Vector3(50, 50))
	 */
	constructor(Base?: Vector3, MinOffset?: Vector3, MaxOffset?: Vector3, DeltaZ?: number)
	/** Absolute Z of the top of the box (`Base.z + MaxOffset.z + DeltaZ`). @example const top = box.MaxZ */
	public get MaxZ(): number
	/** Minimum corner as a new Vector3 (`Base + MinOffset`, shifted by `DeltaZ`). @example const lo = box.Min */
	public get Min(): Vector3
	/** Maximum corner as a new Vector3 (`Base + MaxOffset`, shifted by `DeltaZ`). @example const hi = box.Max */
	public get Max(): Vector3
	/**
	 * The four base-plane corners (at min Z) as new Vector3s, ordered counter-clockwise from `Min`.
	 * @example
	 * const [bl, br, tr, tl] = box.Points
	 */
	public get Points(): Vector3[]
	/**
	 * Shortest Euclidean distance from `vec` to this box across all three axes; `0` when `vec` is inside.
	 * @example
	 * const d = box.Distance(someVec) // 0 if inside the box
	 */
	public Distance(vec: Vector3): number
	/**
	 * True if `vec` lies within this box on all three axes (boundary inclusive). Assumes a well-formed
	 * box (`Min <= Max`).
	 * @example
	 * box.Includes(new Vector3(5, 5, 5))
	 */
	public Includes(vec: Vector3): boolean
	/**
	 * True if `vec` lies within this box on the x/y plane (boundary inclusive); z is ignored.
	 * @example
	 * box.Includes2D(new Vector2(5, 5))
	 */
	public Includes2D(vec: Vector2): boolean
	/**
	 * Reconfigures this box to span from `min` to `max`: `Base` becomes their midpoint and the offsets
	 * are derived from it. Resets `DeltaZ` to 0 and returns `this` (mutates).
	 * @example
	 * box.SetFromMinMax(new Vector3(0, 0, 0), new Vector3(100, 100, 50))
	 */
	public SetFromMinMax(min: Vector3, max: Vector3): this
}
