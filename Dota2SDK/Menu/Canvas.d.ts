// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Image presentation in screen pixels. A source rectangle selects a sprite sheet frame. */
	interface CanvasImageStyle {
		readonly color?: Color
		readonly radius?: number
		readonly circle?: boolean
		readonly angle?: number
		readonly grayscale?: boolean
		readonly clip?: Rectangle
		readonly sourcePosition?: Vector2
		readonly sourceSize?: Vector2
		readonly fit?: "cover" | "stretch"
	}
	/** An analytic shape, with the stroke centred on its boundary. Angles are clockwise degrees. */
	interface CanvasShapeStyle {
		readonly color?: Color
		readonly borderColor?: Color
		readonly borderWidth?: number
		readonly radius?: number
		readonly start?: number
		readonly sweep?: number
	}
	/**
	 * A circular timer: a round portrait with the progress ring on its rim and a reading over the
	 * middle. The ring runs clockwise from twelve o'clock, `progress` of a full turn, in `color`,
	 * `ringWidth` pixels wide (8% of the diameter, and 3dp at least, when omitted). The text is
	 * `textScale` of the diameter tall (0.35 when omitted), bold, white, outlined. Without a
	 * texture only the text is painted. A `shadow` sets the portrait on a soft drop shadow that many
	 * px wide all round it and darkens its own edge inward, `shadowColor` (black at six tenths when
	 * omitted) at the rim and gone at the reach: the shadows the game's buff icons wear, whatever
	 * the progress; none when omitted. `opacity` fades the whole timer, portrait included, 0 to 1
	 * and whole when omitted; it multiplies into whatever alpha the colours carry.
	 */
	interface CanvasCircleTimerStyle {
		readonly texture?: string
		readonly progress: number
		readonly color: Color
		readonly ringWidth?: number
		readonly shadow?: number
		readonly shadowColor?: Color
		/** Whether the outer shadow also shades the portrait's inner edge. Defaults to true. */
		readonly innerShadow?: boolean
		readonly text?: string
		readonly textScale?: number
		readonly textColor?: Color
		readonly weight?: number
		readonly opacity?: number
	}
	/** Text measured and painted in the same RmlUi face and pixel size. */
	interface CanvasTextStyle {
		readonly color?: Color
		readonly family?: string
		readonly size?: number
		readonly weight?: number
		readonly italic?: boolean
		readonly outline?: boolean
		readonly effect?: EHudTextEffect
		readonly effectOpacity?: number
		readonly flags?: TextFlags
		readonly division?: number
	}
	/** The natural image size reported by RmlUi. */
	function ImageSize(path: string): Vector2
	/** The size of a text run in screen pixels. */
	function TextSize(text: string, style?: CanvasTextStyle): Vector3
	/**
	 * A script's RmlUi surface in screen pixels. Project world anchors before painting; the surface
	 * pools DOM elements, updates changed properties, and hides anything omitted from the next frame.
	 *
	 * What it draws lands on whole pixels unless it is made with {@link EHudPlacement.Subpixel}, for
	 * markers that glide - icons crossing the minimap - rather than stand on something the game draws;
	 * there a sprite frame is also scaled from its own texels, the way the game draws minimap icons.
	 * @example
	 * const canvas = new Canvas("cooldowns")
	 * canvas.Image(ability.TexturePath, position, size, { radius: 4 })
	 * @example
	 * const minimap = new Canvas("minimap-icons", EPanelLayer.World, EHudPlacement.Subpixel)
	 */
	class Canvas {
		constructor(key: string, layer?: EPanelLayer, placement?: EHudPlacement)
		/** Hides the surface immediately. */
		public Clear(): void
		/** Paints a rectangular image with optional clipping, tint, rotation and desaturation. */
		public Image(path: string, position: Vector2, size: Vector2, style?: CanvasImageStyle): void
		/** Paints a square frame from a horizontal sprite sheet once its intrinsic size is available. */
		public Sprite(path: string, position: Vector2, size: Vector2, frame: number, style?: CanvasImageStyle): void
		/** Paints a rectangle or a swept rectangle. */
		public Rect(position: Vector2, size: Vector2, style?: CanvasShapeStyle): void
		/** Paints a disc, ring or sector with the same analytic edge as rectangles. */
		public Circle(position: Vector2, size: Vector2, style?: CanvasShapeStyle): void
		/**
		 * Paints an arc of a circle `thickness` pixels wide with round ends, from `start` clockwise
		 * by `sweep`, both in degrees with twelve o'clock at -90. Unlike a shape's border it takes
		 * any width: it goes out through the capsules shader as one quad, and as a chain of lines
		 * where the shader is missing or the frame's slots are spent.
		 * @example
		 * canvas.Arc(center, radius, 4, -90, remaining * 360, playerColor)
		 */
		public Arc(center: Vector2, radius: number, thickness: number, start: number, sweep: number, color: Color): void
		/**
		 * Paints a circular timer `size` pixels across with its top-left corner at `position`: the
		 * portrait as a disc, the progress ring on its rim, and the reading centred over it. Nothing
		 * is painted under or around the portrait, so the ring reads as part of it.
		 * @example
		 * canvas.CircleTimer(position, 40, {
		 * 	texture: hero.TexturePath,
		 * 	progress: remaining / duration,
		 * 	color: playerColor,
		 * 	text: remaining.toFixed(1)
		 * })
		 */
		public CircleTimer(position: Vector2, size: number, style: CanvasCircleTimerStyle): void
		/** Paints a line between screen positions. */
		public Line(start: Vector2, end: Vector2, color: Color, width?: number): void
		/** Draws a closed world polygon, projecting each vertex once per frame. */
		public WorldPolygon(points: readonly Vector3[], color: Color, width?: number): void
		/** A line ending in two arrow strokes. */
		public LineArrow(start: Vector2, end: Vector2, color: Color, width?: number, length?: number, angle?: number): void
		/** Paints a text run at its top-left corner. */
		public Text(text: string, position: Vector2, style?: CanvasTextStyle): void
		/** Paints text aligned within a rectangle, at an explicit size or a fraction of its height. */
		public TextIn(text: string, box: Rectangle, style?: CanvasTextStyle): void
		/** Paints a readout next to the cursor. */
		public CursorText(text: string, style?: CanvasTextStyle): void
	}
}
