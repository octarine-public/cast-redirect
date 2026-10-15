// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A quad the surface paints this frame. */
	interface IHudRect {
		readonly kind: "rect"
		/** Uses an elliptical fill, preserving both radii on non-square boxes. */
		ellipse?: boolean
		/**
		 * An ellipse shades from `color` inside `fade` of its radius to `edgeColor` at its rim, and
		 * the quad's corners past the rim stay clear, so a vignette is one fill and a soft halo
		 * another; left out, the fill runs whole to an antialiased edge and `edgeColor` is nothing.
		 * A plain quad holds `color` over `fade` of its width and melts to clear at its right edge,
		 * the wash a strip of art stands on, with its `radius` carved by the sdf mask. Not with `sdf`.
		 */
		fade?: number
		edgeColor?: number
		x: number
		y: number
		w: number
		h: number
		color: number
		/** Corner radius in px; a card carries the menu's, a bar none. */
		radius?: number
		/** A backdrop filter, for the frosted card the menu's own panels use. */
		blur?: string
		borderWidth?: number
		borderColor?: number
		/**
		 * Carve the shape with the sdf shader instead of a plain border radius. A radius rasterizes on
		 * the pixel grid and shows its steps at pill size; the shader antialiases the edge. Opt-in,
		 * because the shader owns the background and a frosted card needs its own backdrop filter.
		 */
		sdf?: boolean
		/**
		 * Pixels the quad is grown by on every side, so the shader's antialiased edge falls inside the
		 * geometry instead of on its boundary, where it is clipped back to a hard one. The shape still
		 * lands on the box that was asked for. `sdf` only.
		 */
		inset?: number
		/**
		 * A soft halo that many pixels wide falling off from the shape's edge in {@link glowColor}:
		 * outside the shape while the width is positive, in which case the inset has to carry
		 * {@link GlowPad} of room for it, and inside it while the width is negative. `sdf` only.
		 */
		glow?: number
		glowColor?: number
		/** Clockwise sector in percent, starting at twelve o’clock plus start degrees. */
		sweep?: number
		start?: number
	}
	/**
	 * A run of text in a box it is laid out inside, rather than at a computed corner. Centring it by
	 * arithmetic never lined up: the height a font reports is the glyph box, RmlUi lays out by the
	 * line box, and the leftover leading showed as a label sitting off the bar beside it. A line
	 * height equal to the box centres the glyphs exactly, and an alignment pins the edge without
	 * trusting a measured width.
	 */
	interface IHudText {
		readonly kind: "text"
		/** Explicit line height and whitespace for multiline readouts. */
		lineHeight?: number
		preformatted?: boolean
		x: number
		y: number
		w: number
		h: number
		align: "left" | "right" | "center"
		text: string
		size: number
		weight: number
		color: number
		effect: EHudTextEffect
		/**
		 * The face the run is set in, defaulting to the one the surface itself carries. A reading
		 * choosing its own names it here, and whatever measured it has to have been given the same
		 * name: a width taken from one face and laid out in another lands the run beside where it
		 * was aimed.
		 */
		family?: string
		/** Selects the italic face. */
		italic?: boolean
		/**
		 * How strongly the whole run is drawn, 0 to 1, defaulting to fully opaque. A fade belongs here
		 * rather than in the colour's alpha: a glyph effect is baked with its own opaque colour, so a
		 * faded fill over an untouched rim leaves the run reading as a black silhouette, while opacity
		 * is multiplied through every layer the run is drawn from - and, unlike an effect colour that
		 * moved, costs the font atlas nothing.
		 */
		opacity?: number
		/**
		 * How dark the glyph effect under the run is drawn, 0 to 1, defaulting to a solid black. A
		 * rim heavy enough to hold a reading over a bright wall is heavier than the same reading
		 * wants over anything else, so the darkness is asked apart from which effect is drawn.
		 *
		 * Snapped to twenty steps before it reaches the engine: the font atlas keeps a layer per
		 * distinct effect per size, so every value a dragged slider passes through on its way
		 * somewhere would mint another one and hold it for the session.
		 */
		effectOpacity?: number
		/** How far the run is scrolled inside its box, in px, for a line read by travelling it. */
		scroll?: number
		/**
		 * How far the glyphs dissolve into the box's left and right edges, in dp, for a line the box
		 * cuts rather than one clipped to a prefix. Both default to 0, a hard edge.
		 */
		fadeHead?: number
		fadeTail?: number
	}
	/**
	 * What a run of text is cut against the thing behind it with. A card carries its own glass and
	 * needs none of it; a run standing on the world does, because the map behind a label is not ours
	 * to darken and every colour loses to some wall somewhere.
	 *
	 * The widths are constant rather than following the font size, so the engine keeps one extra glyph
	 * layer per size rather than one per caller.
	 */
	const enum EHudTextEffect {
		None = 0,
		Shadow = 1,
		Outline = 2
	}
	/** Names of the glyph effects, in the order a dropdown offering them lists them. */
	const HudTextEffectNames: string[]
	/** Where a surface stands what it draws on the screen's pixel grid. */
	const enum EHudPlacement {
		/**
		 * On whole pixels and at whole-pixel sizes: art is drawn texel for pixel, and a marker standing
		 * on something the game itself draws on whole pixels - a health bar - moves in step with it.
		 */
		Pixel = 0,
		/**
		 * At the fraction of a pixel it was asked for, through each element's transform, which RmlUi
		 * does not round: an icon gliding across the minimap moves smoothly instead of a pixel at a
		 * time.
		 *
		 * A sprite frame (an image with a source rectangle) is cut out of its sheet by the host at the
		 * frame's own resolution and scaled to the exact size asked for by the same transform, so the
		 * GPU takes one bilinear sample of the frame a pixel - the way the game draws its own minimap
		 * icons, crisp at any size and position. Everything else keeps a whole-pixel size, centred on
		 * the box that was asked for - and so does a sprite on a host without
		 * `RegisterSizedImageRegion`.
		 */
		Subpixel = 1
	}
	/** An image the surface paints this frame. */
	interface IHudImage {
		readonly kind: "image"
		/** Clips to an ellipse; square boxes use the ordinary rounded clip. */
		circle?: boolean
		x: number
		y: number
		w: number
		h: number
		path: string
		color: number
		/**
		 * Corner radius in px, half the size for a round portrait. Carved by the sdf mask, so the
		 * corner carries per-pixel coverage rather than the stair steps a raster clip leaves at the
		 * menu's default 0 samples, with a {@link IHudImage.fade} or without one.
		 */
		radius?: number
		/** Degrees clockwise about the image's own centre, for a glyph that carries a bearing. */
		angle?: number
		/** Desaturates the artwork without affecting its border or neighbouring text. */
		grayscale?: boolean
		/** Cover crops to the destination's aspect ratio; stretch uses the full source. */
		fit?: "cover" | "stretch"
		/**
		 * Fraction of the width from which the art melts away towards its right edge, for a cover
		 * standing on a card it has to become part of. A mask on the element around the rounded one,
		 * so the two multiply and the corners keep their sdf edge.
		 */
		fade?: number
		/** Sprite source rectangle in source pixels. */
		sourceX?: number
		sourceY?: number
		sourceW?: number
		sourceH?: number
		/** Screen clipping rectangle. */
		clipX?: number
		clipY?: number
		clipW?: number
		clipH?: number
	}
	/**
	 * A straight run of one thickness, drawn as a quad rotated about its left edge. RmlUi has no path
	 * API, so a line is geometry plus a shader that carves the rounded cap inside it.
	 */
	interface IHudStrip {
		readonly kind: "strip"
		x: number
		y: number
		length: number
		thickness: number
		angle: number
		color: number
	}
	/** A ring, or a disc when `filled`, drawn by the sdf circle so it stays round at any size. */
	interface IHudCircle {
		readonly kind: "circle"
		x: number
		y: number
		radius: number
		thickness: number
		color: number
		filled: boolean
		/** A halo on the same terms as {@link IHudRect.glow}; the quad carries its own room. */
		glow?: number
		glowColor?: number
	}
	/**
	 * A run of a circle's edge, from `start` clockwise by `sweep` radians. The capsules shader unions
	 * every segment of the run into one field and shades it once, so the whole arc is a single quad
	 * with no seam where two segments meet - a chain of {@link IHudStrip}s draws the same shape, but
	 * their rounded caps overlap at every joint and a translucent one beads there.
	 */
	interface IHudArc {
		readonly kind: "arc"
		x: number
		y: number
		radius: number
		thickness: number
		start: number
		sweep: number
		color: number
		/** The native capsule slot the geometry rides in, claimed by the emitter for this frame. */
		slot: number
	}
	/**
	 * A run of straight segments of one thickness, drawn as a single quad: the capsules shader unions
	 * every segment of the run into one field and shades it once, so a curve drawn this way carries
	 * no seam at any joint and none at any alpha. A chain of {@link IHudStrip}s draws the same shape,
	 * but their rounded caps overlap at every joint and a translucent one beads there.
	 */
	interface IHudPath {
		readonly kind: "path"
		/** The points the run passes through, as x, y pairs in screen px; two of them at least. */
		points: readonly number[]
		thickness: number
		color: number
		/** The native capsule slot the geometry rides in, claimed by the emitter for this frame. */
		slot: number
	}
	type HudCommand = IHudRect | IHudText | IHudImage | IHudStrip | IHudCircle | IHudArc | IHudPath
	/**
	 * One overlay's slice of the RmlUi document. The HUD keeps its immediate-mode API - a caller still
	 * emits a frame's worth of draw calls - and this turns that stream into pools of elements written
	 * straight through the world writers, so a frame costs no React render and an unchanged command
	 * costs nothing at all. Only growing a pool asks React for a pass.
	 */
	class CHudSurface {
		/**
		 * Whether this surface stands with the menu rather than over the world. The host's overlay
		 * gate closes on the game's own screens and outside a match, which is right for anything
		 * pinned to the world and wrong for a window the user opened the menu to use: a settings
		 * window belongs on the main menu as much as it does in a match. A surface on the menu's
		 * own layer is part of the menu and stands with it from the start, and opens and closes on
		 * the window's own motion; one on a HUD layer is bound by whoever owns it.
		 */
		public MenuBound: boolean
		constructor(key: string, layer: EPanelLayer, placement?: EHudPlacement)
		/**
		 * The theme this surface's colours resolve against, which its layer decides: what is anchored
		 * to the world wears the world's theme, what stands on the screen wears the panels' one.
		 */
		public get Scope(): EThemeScope
		/**
		 * How strongly the whole surface is drawn, 0 to 1.
		 *
		 * It reaches everything the surface draws EXCEPT what carries an opacity of its own: RmlUi
		 * hands opacity down the tree rather than compositing it, and a run of text carries one so its
		 * glyph and the effect baked beside it fade together — so text stands at full strength while
		 * everything around it thins away. Fading a card whose readings must go with it belongs in
		 * {@link SetHudAlphaScale}, which every primitive multiplies into what it pushes.
		 */
		public Fade(value: number): void
		/**
		 * How much of the theme's blur a frosted backdrop drawn onto the surface carries, as a fraction
		 * of its full strength. A backdrop filter is composited outside the element's opacity, so a
		 * surface fading in through {@link CHudSurface.Fade} has to ramp the frost by hand or the card
		 * holds a frosted rectangle at full strength until the glass catches up. It may overshoot 1,
		 * the way the menu's own open effects do.
		 */
		public Backdrop(fraction: number): void
		/** The fraction {@link CHudSurface.Backdrop} set; 1 while nothing did. */
		public get BackdropScale(): number
		/**
		 * How far out of focus everything the surface draws stands, in screen pixels; 0 is sharp.
		 *
		 * Where {@link CHudSurface.Fade} reaches everything except what carries an opacity of its own,
		 * this reaches all of it: every shape and every run of text is smeared where it stands, so a
		 * countdown goes soft along with the card around it. It is what a card dissolving rather than
		 * thinning away leaves on. A surface that never asks for one writes no filter anywhere, and
		 * one that has asked keeps writing what it stands at, so nothing it draws later comes back
		 * wearing a blur that has been taken off.
		 *
		 * @example
		 * surface.Blur(hudH(3) * (1 - presence))
		 */
		public Blur(value: number): void
		/** Places this world surface in the shared distance stack. */
		public Depth(distance: number): void
		/**
		 * Where this surface stands among its siblings. {@link CHudSurface.Depth} is this in world
		 * terms; a screen panel raised to the front of a stack of overlapping windows sets it
		 * directly.
		 */
		public Order(index: number): void
		/**
		 * Whether what the surface shows was drawn in the host's retained pass, and so stands until
		 * the next one rather than being wiped by a frame that does not draw it.
		 * @see MenuHost.onRetainedPass
		 */
		public get Retained(): boolean
		public Open(): void
		/**
		 * A frame opens at its first command rather than on a call, so a caller drawing from more than
		 * one phase of the tick lands in one frame instead of having the earlier phase discarded.
		 */
		public Push(command: HudCommand): void
		/**
		 * Ends the frame: the surface takes its panel the first time it has anything to show, grows
		 * the pools a longer frame needs, and writes what is left onto the elements it already has.
		 * An empty frame on a surface that has no panel yet ends here: wiping nothing mounts nothing.
		 *
		 * A grown pool asks its own layer for a render rather than the whole host: the registry
		 * tracks a version per stack, so invalidating the menu store would leave the new elements
		 * unbuilt until something unrelated refreshed - and refreshing all three stacks makes one
		 * unit's growth a re-render of every panel on screen.
		 */
		public Close(): void
		public Clear(): void
		/**
		 * Takes the surface off the panel host for good, for a thing that is gone rather than merely
		 * quiet: the host walks every panel registered with it on each refresh, and a surface kept for
		 * a rune that was picked up ten minutes ago is one more of those walks, every time, for the
		 * rest of the session. The elements die with the host's own unmount.
		 */
		public Destroy(): void
		/** One tick has finished drawing: flush what was pushed, or wipe a surface that drew nothing. */
		public Tick(): void
		/**
		 * Ends the host frame for this surface, which {@link EndHudFrame} does for every one: wiped
		 * while the host keeps overlays down, left as it stands on a frame without a retained pass if
		 * that is where it was drawn, and ticked otherwise.
		 */
		public EndFrame_(shown: boolean, retainedPass: boolean): void
		/** Whether what the surface shows has frosted glass on it, which needs the backdrop captured. */
		public get Frosted_(): boolean
	}
	/**
	 * How many HUD frames have ended so far. A surface that notes the frame it last drew in can tell
	 * a frame it sat out from a frame that never came: a stalled tick moves the clock, not this.
	 */
	function HudFrame(): number
	/**
	 * The surface a panel draws into, created on first use in the layer it belongs to and kept for
	 * the session. A surface anchored to the screen goes into `Screen`, which the host stacks over
	 * every world layer it hosts — a marker over a unit can then never cover a card.
	 *
	 * The placement is the surface's for life: a key asked for again gets the surface it was first
	 * made with, whatever is asked for the second time.
	 */
	function HudSurfaceOf(key: string, layer: EPanelLayer, placement?: EHudPlacement): CHudSurface
	/**
	 * Drops the surface `key` was drawing on, if it ever drew: the caller has nothing left to put on
	 * it and nobody should tick it again. A key handed to {@link HudSurfaceOf} afterwards opens a
	 * fresh surface, so a thing that comes back gets one of its own.
	 *
	 * @example
	 * Events.on("EntityDestroyed", entity => DropHudSurface(`marker:${entity.Handle}`))
	 */
	function DropHudSurface(key: string): void
	/**
	 * Closes the tick for every surface, which the menu does for its host once every frame, after
	 * the last thing has drawn. While the host says an overlay may not draw — a screen of the game's
	 * own standing over the world, anything outside a match — whatever was pushed this tick is
	 * dropped and every surface wipes: the gate lives here so no consumer can draw across one by
	 * forgetting to ask.
	 */
	function EndHudFrame(): void
	/**
	 * The host's retained pass begins: a surface opened from here until {@link EndRetainedHudPass}
	 * keeps what it draws until the next pass. Wired to {@link MenuHost.onRetainedPass}.
	 */
	function BeginRetainedHudPass(): void
	/** The host's retained pass is over; see {@link BeginRetainedHudPass}. */
	function EndRetainedHudPass(): void
	/**
	 * Asks the host to run its retained pass on the next frame, for a surface drawn in it that the
	 * user is moving by hand - a panel in a drag, a hover easing in - which the pass's own rate would
	 * make visibly step. A host without a retained pass draws every frame anyway.
	 */
	function RequestRetainedHudPass(): void
	/**
	 * How much of full opacity everything drawn onto the active surface keeps right now, 0 to 1.
	 * {@link CHudCard.Frame} sets it from the card's own alpha so the readings on the glass fade with
	 * it; opening or closing a surface puts it back to 1.
	 */
	function HudAlphaScale(): number
	/** Fades everything drawn onto the active surface from here on; the card frame calls it. */
	function SetHudAlphaScale(value: number): void
	/**
	 * How much of the theme's blur a frosted backdrop drawn now carries: the card's own fade times
	 * the fraction the active surface was handed through {@link CHudSurface.Backdrop}, so a card
	 * fading in on the menu's open motion frosts on the effect's own blur curve.
	 */
	function HudBlurScale(): number
	/**
	 * Opens and closes the window a panel's content callback draws in. The surface's theme scope is
	 * entered along with it, so a colour the callback asks the menu for - `HudColors.accent`, a token,
	 * a blur - resolves against the theme that surface wears instead of the window's. It cannot be
	 * taken from the command: by the time one is pushed its colour is already a literal, and only the
	 * callback knows which surface it is drawing into. Surfaces nest: a panel drawn from inside
	 * another panel's callback hands the outer one back on close, scope and all.
	 */
	function SetActiveSurface(surface: Nullable<CHudSurface>): void
	/** Where every HUD primitive lands while a panel's content callback runs. */
	function EmitHud(command: HudCommand): void
	/**
	 * `#rrggbbaa`, from the engine's 0-255 alpha. Hex rather than `rgba()` because a colour also goes
	 * into `shader("rounded-rect …")`, whose arguments are separated by spaces: the commas and spaces
	 * of a functional notation split into junk tokens there, and the shader falls back to opaque
	 * white - which is why every line drew white whatever the menu picked.
	 */
	/**
	 * A colour as a command carries it: one number, so a frame of commands is compared and stored
	 * without walking a string per colour, and the literal below is built only for a command that
	 * actually changed.
	 *
	 * @example
	 * EmitHud({ kind: "rect", x, y, w, h, color: HudColor(HudColors.glass, hudAlpha()) })
	 */
	function HudColor(color: Color, alpha?: number): number
	function CssColor(color: Color, alpha?: number): string
}
