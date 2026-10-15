// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A unit's world box for one frame: where it stands, its footprint around that point, the
	 * vertical extent above it, and the way it faces. The adapter fills one of these per unit per
	 * frame — into a reused instance, so a pass over every unit allocates nothing.
	 */
	interface WorldUnitBounds {
		/** Where the unit stands, in world units. */
		x: number
		y: number
		z: number
		/** Footprint offsets around the position, before the turn. */
		minX: number
		minY: number
		maxX: number
		maxY: number
		/** Vertical extent as offsets above the position. */
		baseZ: number
		topZ: number
		/** Facing, in degrees; the box turns with the unit rather than the world grid. */
		yaw: number
	}
	/** A screen rectangle in px; position in hundredths, sizes whole. */
	interface WorldUnitRect {
		x: number
		y: number
		w: number
		h: number
	}
	/**
	 * The projected frame of one unit: the eight corners of its turned box and their exact screen
	 * envelope. One instance is scratch for a whole pass — `Project` overwrites it, the getters
	 * read the last projection back. The corner order is the base ring counter-clockwise, then
	 * the ring above it, which is what the wireframe edges expect.
	 */
	class CWorldUnitFrame {
		/** The screen envelope of the last `Project`; everything a unit carries hangs off it. */
		public Rect(): Readonly<WorldUnitRect>
		/** The eight projected corners of the last `Project`, as `x, y` pairs. */
		public Corners(): Readonly<Float64Array>
		/**
		 * Projects the unit's box, `false` when any corner leaves the frame — a wireframe missing
		 * a vertex draws edges that go nowhere. The rectangle keeps its fractions: rounding here
		 * once cost half a pixel of shiver on everything centered on the unit.
		 */
		public Project(bounds: Readonly<WorldUnitBounds>): boolean
	}
}
