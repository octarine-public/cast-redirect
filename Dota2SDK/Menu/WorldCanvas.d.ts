// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Lines and rings over the world. A connected run is uploaded to the capsule shader and unioned
	 * inside one quad, a standalone line is a rotated shader-carved quad, and a ring is the sdf
	 * circle's border. Everything a frame draws goes onto one pooled surface, the same one the HUD
	 * cards use.
	 *
	 * @example
	 * const canvas = new WorldCanvas("trajectory")
	 * canvas.Polyline(trajectory, 2, Color.Aqua)
	 */
	class WorldCanvas {
		constructor(key: string)
		public Clear(): void
		/** A run between two points already in screen pixels. */
		public Line(startX: number, startY: number, endX: number, endY: number, width: number, color: Color): void
		/**
		 * Connects the points that project on screen as seamless capsule-shader batches, splitting a
		 * long run across native slots and falling back to individual strips when the pool is spent.
		 */
		public Polyline(points: Vector3[], width: number, color: Color): void
		/**
		 * A ring through `edge`, centred on `center` and drawn by the shader as one element.
		 * Segmenting a ring into quads loses every run that projects shorter than a pixel, so a small
		 * or distant one came out as a broken arc; the sdf circle has no joints and no minimum size.
		 */
		public Ring(center: Vector3, edge: Vector3, width: number, color: Color): boolean
		/** A ring in screen pixels, drawn by the shader rather than by segments. */
		public Circle(centerX: number, centerY: number, radius: number, width: number, color: Color): void
		/** A filled disc in screen pixels. */
		public Dot(centerX: number, centerY: number, radius: number, color: Color): void
		/**
		 * A picture centred on the point, in screen pixels. White-filled art is painted by `color`
		 * the way every icon in the interface is tinted; the caller owns the aspect ratio, because
		 * only it knows what the file holds.
		 */
		public Image(centerX: number, centerY: number, width: number, height: number, path: string, color: Color): void
		/** A run of text in screen pixels, centred on the point. */
		public Text(centerX: number, centerY: number, text: string, size: number, color: Color, bold?: boolean): void
		/** Projects a world point, answering `false` when it is behind the camera. */
		public Project(point: Vector3, out: [number, number]): boolean
	}
}
