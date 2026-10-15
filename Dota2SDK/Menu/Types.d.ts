// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A world position in engine units. Anything with `x`, `y`, `z` fits — a Vector3 included. */
	interface WorldPoint {
		readonly x: number
		readonly y: number
		readonly z: number
	}
	/** A fixed point, or a provider re-read every frame; `undefined` from a provider hides the node. */
	type WorldAnchor = WorldPoint | (() => Nullable<WorldPoint>)
	/** A stroke for lines and chains, in px; colors are `#rrggbb[aa]` hex. */
	interface WorldStroke {
		readonly color: string
		readonly thickness?: number
		readonly outline?: number
		readonly outlineColor?: string
	}
	/** A filled shape, in px; `border` draws inside the edge. */
	interface WorldShapeStyle {
		readonly fill: string
		readonly border?: number
		readonly borderColor?: string
		/** Corner radius for rectangles; a circle ignores it. */
		readonly radius?: number
	}
	/** A text run, in px. */
	interface WorldTextStyle {
		readonly size: number
		readonly color: string
		readonly weight?: number
		readonly outline?: boolean
	}
	/** A two-tone bar: what remains in `fill` over a `background` track. */
	interface WorldBarStyle {
		readonly fill: string
		readonly background?: string
		readonly border?: number
		readonly borderColor?: string
	}
	/**
	 * A drawing that follows a world point. A node owns one element, keeps whatever it was told
	 * between calls, and re-projects every frame: scripts set it up once and only touch it again
	 * to change it. The primitive kind is fixed by the first call — an element cannot shed a
	 * role's styling, so switching kinds is a contract violation and throws.
	 */
	interface IWorldNode {
		/** The world point the node follows; a provider is re-read every frame. */
		Anchor(anchor: WorldAnchor): IWorldNode
		/** Screen-px offset from the projected anchor. */
		Offset(x: number, y: number): IWorldNode
		/** A filled circle of `radius` px, centered on the anchor. */
		Circle(radius: number, style: WorldShapeStyle): IWorldNode
		/** A filled rectangle, centered on the anchor. */
		Rect(width: number, height: number, style: WorldShapeStyle): IWorldNode
		/** A centered text run. */
		Text(text: string, style: WorldTextStyle): IWorldNode
		/** A centered image; `color` tints it. */
		Image(path: string, width: number, height: number, color?: string): IWorldNode
		/**
		 * A polyline in world space: `points` holds x, y, z triples, `segments` of them joined in
		 * order into one seamless field. Call again whenever the geometry moves — the buffer is
		 * read at flush, not kept.
		 */
		Chain(points: ArrayLike<number>, segments: number, stroke: WorldStroke): IWorldNode
		/** Fades the node between the two distances from the layer's fade origin, in world units. */
		FadeByDistance(from: number, to: number): IWorldNode
		Show(on: boolean): IWorldNode
		Destroy(): void
	}
	/**
	 * One script's world drawing surface. Retained nodes live until destroyed; the immediate
	 * calls draw for one frame and vanish on the next — call them every frame from a Draw
	 * listener. Everything lands in the world layer document, so nothing drawn here can
	 * reformat the menu.
	 */
	interface IWorldLayer {
		/** A retained node; set an anchor and a primitive, then leave it be. */
		Node(): IWorldNode
		/** One line for this frame, in world space. */
		Line(from: WorldPoint, to: WorldPoint, stroke: WorldStroke): void
		/** A polyline for this frame: x, y, z triples, `segments` joins. */
		Chain(points: ArrayLike<number>, segments: number, stroke: WorldStroke): void
		/** A text run for this frame, centered over the point. */
		Text(at: WorldPoint, text: string, style: WorldTextStyle): void
		/** A filled circle for this frame, centered on the point. */
		Circle(at: WorldPoint, radius: number, style: WorldShapeStyle): void
		/** A filled rectangle for this frame, centered on the point. */
		Rect(at: WorldPoint, width: number, height: number, style: WorldShapeStyle): void
		/** An image for this frame, centered on the point. */
		Image(at: WorldPoint, path: string, width: number, height: number): void
		/**
		 * A wireframe of a turned world box for this frame, drawn as one seamless batch.
		 * `stubs` draws corner stubs instead of whole edges.
		 */
		Box3D(bounds: Readonly<WorldUnitBounds>, stroke: WorldStroke, stubs?: boolean): void
		/**
		 * A circle lying on the ground for this frame: a world-space ring of `radiusUnits`
		 * around the point, projected with the perspective the ground actually has.
		 */
		GroundCircle(center: WorldPoint, radiusUnits: number, stroke: WorldStroke): void
		/** A horizontal bar for this frame, centered over the point; `fraction` fills it. */
		Bar(at: WorldPoint, width: number, height: number, fraction: number, style: WorldBarStyle): void
		/** The origin `FadeByDistance` and unit gating measure from — the local hero, typically. */
		FadeOrigin(origin: Nullable<WorldAnchor>): void
		/** Hides the whole layer without tearing anything down. */
		SetVisible(on: boolean): void
		/** Destroys every retained node; pooled immediate elements stay for reuse. */
		Clear(): void
		/** Unregisters the layer and destroys everything it drew. */
		Destroy(): void
	}
}
