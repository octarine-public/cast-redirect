// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The semantic colours a card's contents use, every one of them a menu token: a re-themed menu
	 * re-themes the HUD with it, and nothing here has to be kept in step by hand.
	 */
	const HudColors: {
		readonly title: Color
		/**
		 * A shade off {@link HudColors.title}, for a line that is the card's own subject rather than a
		 * heading over it: still the brightest thing on the glass, without the flat white a title takes
		 * when it is the only run of text there.
		 */
		readonly body: Color
		readonly sub: Color
		/**
		 * A step under {@link HudColors.sub}, for a run that has to be there without being read — a
		 * counter ticking beside a bar, a name under the line it belongs to. It is the faintest a card
		 * writes anything in, so it wants the HUD's own bold under it at the sizes those runs are set at.
		 */
		readonly faint: Color
		readonly accent: Color
		readonly kill: Color
		readonly ok: Color
		/** The material a card is carved from, for a badge that carries no card of its own. */
		readonly glass: Color
		/** The hairline a card is rimmed with, on the same terms. */
		readonly rim: Color
		/**
		 * `color` relit until it reads on the card it is drawn on - deeper over a light theme, brighter
		 * over a dark one - keeping its hue and its saturation, so a colour something is known by stays
		 * that colour. A feature picks its own palette against one background and the menu wears
		 * whichever the player set: the green a rune is read in was picked for dark glass, and on a
		 * white panel it is a pale smear that says nothing. A colour that already reads is handed back
		 * untouched, so every dark theme draws exactly what it drew before.
		 *
		 * @example
		 * HudText.Right(x, y, MetersText(distance), 13, HudColors.readable(rune.color), true)
		 */
		readonly readable: (color: Color) => Color
	}
	/**
	 * A `#rrggbb[aa]` literal packed as a HUD command carries it, parsed once and cached — the form a
	 * per-frame draw wants, where parsing the string each time would mint a colour per call.
	 *
	 * @example
	 * surface.Push({ kind: "rect", ..., borderColor: PackedHex(HexOf(Tokens.Accent)) })
	 */
	function PackedHex(hex: string): number
	/**
	 * A `#rrggbb[aa]` literal as the engine's colour, cached: a token resolves to the same literal
	 * until the palette changes, and the HUD asks for it on every label of every frame.
	 *
	 * Exported for a caller that needs a palette entry as a colour outside a draw - a menu row's
	 * declared default, which must be the same literal in every theme or a config stops travelling.
	 *
	 * @example
	 * const swatch = node.AddColorPicker("Color", HudColorOf(DefaultPalette.TextBody))
	 */
	function HudColorOf(hex: string): Color
	/**
	 * The weight the HUD's own bold is set in. One notch under the menu's 700: a card is read over a
	 * lit world rather than over the menu's own glass, and the heavier cut closes up its counters at
	 * the sizes a marker is written at. Exported for a caller writing a weight as a number, where the
	 * `bold` flag cannot reach.
	 */
	const HudBold = 600
	/**
	 * The weight a run is set in where the caller asks for none. The HUD's plain cut, and the number
	 * every measurement here defaults to, so a line measured without a weight and drawn without one
	 * are the same line.
	 */
	const HudRegular = 400
	const HudCardRadius = 10
	/** Space the header leaves between a title and the value on its right. */
	const HudHeaderGap = 10
	/** What a carved shape's quad is grown by, so its antialiased edge is not clipped by its own box. */
	const HudSdfInset = 1
	/**
	 * `base` faded by the alpha the card frame set: readings drawn after a {@link CHudCard.Frame}
	 * follow the card's own fade without carrying it by hand.
	 */
	function hudAlpha(base?: number): number
	/**
	 * The scale a card pinned to the screen is laid out at, and the theme it is measured against. A
	 * card sizes itself to its contents before it draws, so the measuring pass runs while no surface
	 * is active: the scope has to be declared here rather than borrowed from whoever draws next.
	 */
	function setHudScale(scale: number): void
	/**
	 * The scale a card standing in the world is laid out at. `DpToPx` carries the menu window's own
	 * transform, which is what a panel pinned to the screen wants and what a marker over a rune must
	 * not have: scaling the menu would resize everything the world carries with it. Taken back out,
	 * a marker keeps the same share of the screen on any monitor whatever the menu is set to.
	 */
	function setHudWorldScale(scale: number): void
	function hudW(value: number): number
	function hudH(value: number): number
	/**
	 * A font size, carrying the font scale of the theme this surface wears. `applyStyle` runs a
	 * numeric style through `ScaleMetric`, but every length here goes out as a `px` string - a
	 * projected coordinate read as dp lands somewhere else entirely - so the scales the theme owns
	 * have to be applied by hand. Measuring and emitting share this, or a measured width stops
	 * matching what is drawn.
	 */
	function hudFont(value: number): number
	/** A corner radius, carrying that theme's radius scale for the same reason. */
	function hudRadius(value: number): number
	class CHudText {
		public Width(text: string, size: number, weight?: number, family?: string): number
		/**
		 * The line the engine will actually lay out, in px. Digits are measured as zeroes: the
		 * line box does not depend on which digit it is, and a ticking counter would otherwise
		 * mint a fresh measurement cache entry every change.
		 */
		public Height(text: string, size: number, weight: number, family?: string): number
		/**
		 * The longest prefix that fits, ellipsis included, found by binary search and remembered:
		 * a clipped name is the same clipped name every frame, and the shrink loop cost one
		 * measurement per overflowing character each time it ran.
		 */
		public Clip(text: string, maxWidth: number, size: number, weight?: number, family?: string): string
		public Left(x: number, centerY: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): number
		/**
		 * A line held to a box `width` px wide instead of clipped to a prefix: what does not fit is cut
		 * by the box itself and its glyphs dissolve into the edge they are cut at, the way the menu's
		 * labels end. `offset` scrolls the line that many px towards its tail, and the head dissolves
		 * into the other edge as it leaves. {@link HudMarquee} drives the offset for a line that is read
		 * by travelling it.
		 *
		 * @returns how far the line runs past its box, in px, and so the furthest `offset` can take it
		 */
		public Fit(x: number, centerY: number, width: number, text: string, offset: number, size: number, color: Color, weight?: number, effect?: EHudTextEffect): number
		/**
		 * Centred inside a box the caller already sized - a chip, a cell - rather than at a computed
		 * offset. Widths here are measured with the digits replaced by zeroes so a counter does not
		 * reflow, and a zero is wider than a one: left-aligning inside that slack piles it all on one
		 * side. Letting the layout centre it makes the measurement error invisible.
		 *
		 * `effect` cuts the glyphs against whatever is behind them, which is what a run of text standing
		 * on the world rather than on a card needs to stay readable, and `effectOpacity` is how dark
		 * that cut is drawn - a rim heavy enough for a bright wall is heavier than one over anything
		 * else, so the two are asked apart.
		 */
		public Center(x: number, centerY: number, boxWidth: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): void
		public Right(rightX: number, centerY: number, text: string, size: number, color: Color, weight?: number, effect?: EHudTextEffect, family?: string, effectOpacity?: number): number
	}
	const HudText: CHudText
	/**
	 * One line of a card that is read by travelling it when it does not fit, as the menu's own labels
	 * are: at rest it is cut at its box and dissolves into the edge, and while `reading` it waits at
	 * its head, travels far enough to bring the tail in, waits there and comes back, then slides home
	 * once the reading stops. Held by whatever draws the line, one per line, because the travel
	 * outlives the frame it is drawn in; a line whose text changes starts again from its head.
	 *
	 * @example
	 * private readonly title = new HudMarquee()
	 * this.title.Left(x, centerY, width, track.title, 12, HudColors.title, HudBold, hovered)
	 * this.title.EndFrame()
	 */
	class HudMarquee {
		public Left(x: number, centerY: number, width: number, text: string, size: number, color: Color, weight: number, reading: boolean, effect?: EHudTextEffect): void
		/**
		 * Closes the frame for this line, once a frame after the card is drawn, whether or not it
		 * was. A line that was not drawn since the last call is not being read: its travel stops and
		 * it goes back to its head, so a hidden card leaves nothing running behind it.
		 *
		 * @example
		 * this.DrawCard()
		 * this.title.EndFrame()
		 */
		public EndFrame(): void
	}
	interface HudHeaderValue {
		text: string
		color: Color
		badge?: boolean
	}
	class CHudCard {
		public readonly Pad = 10
		/** A flat quad, for a card that does not use the shared palette. */
		public Fill(x: number, y: number, w: number, h: number, color: Color, alpha?: number): void
		/**
		 * {@link CHudCard.Fill} with its corners taken off: the plate a chip standing on artwork or on
		 * the world wears, where a {@link CHudCard.Disc} is rounder than what it carries and a quad
		 * shows four hard corners against everything around it that is not.
		 *
		 * Carved by the shader rather than by a border radius, for the reason {@link CHudCard.Frame} is:
		 * a radius rasterizes on the pixel grid and a plate a dozen pixels across shows every step it
		 * cut, which is exactly the size a chip is drawn at.
		 *
		 * @example
		 * HudCard.Plate(x, y, w, h, h * 0.34, HudColors.glass, 150)
		 */
		public Plate(x: number, y: number, w: number, h: number, radius: number, color: Color, alpha?: number): void
		/**
		 * The dress a badge wears without its label: a plate washed `tint` deep in `color` and rimmed
		 * `edge` deep in it by a hairline, for a chip whose contents the caller lays out itself - a
		 * reading beside its word, a glyph in front of them. `radius` is in dp, like a badge's.
		 *
		 * @example
		 * HudCard.Chip(x, y, w, h, 7, HudColors.ok, hudAlpha(36), hudAlpha(107))
		 */
		public Chip(x: number, y: number, w: number, h: number, radius: number, color: Color, tint: number, edge: number): void
		/**
		 * The card the menu's own panels wear, and the plate a marker standing in the world wears with
		 * them: the theme's glass and its hairline rim carved by the shader, over the frosted backdrop
		 * the menu's own window stands on. Both edges are analytic, so a card a couple of dozen pixels
		 * tall holds its corner instead of showing every step the pixel grid cut into it.
		 *
		 * The backdrop is a second element a pixel inside the carved silhouette. RmlUi cuts a backdrop
		 * filter with the rasterized stencil rather than in-shader, and that pixel is what keeps its
		 * stepped corner under the carved edge and the rim drawn along it.
		 *
		 * `alpha` fades the glass along with everything drawn on it afterwards, and ramps the blur with
		 * them: a backdrop filter does not answer to an element's own opacity, so a card that faded
		 * without it held a frosted rectangle at full strength and then snapped away with the element.
		 *
		 * `dpRadius` is in dp, like a chip's, for a card that is not the window's own shape - a pill,
		 * a tile. `carve` is how many steps of alpha to hold this card's glass off the one it would
		 * otherwise be packed at: cards carved by one and the same shader string share a decorator
		 * instance in RmlUi, so a surface drawing more than one has to hand each of them a step of its
		 * own. The step is invisible, and only the glass carries it - the rim and the halo are left as
		 * the theme set them.
		 *
		 * @example
		 * HudCard.Frame(box, hudAlpha(), CHIP_RADIUS, this.carved++)
		 */
		public Frame(box: Rectangle, alpha?: number, dpRadius?: number, carve?: number): void
		/**
		 * {@link CHudCard.Frame} as a disc: the same glass, the same hairline rim and the same frosted
		 * backdrop under both, for a badge carrying a glyph instead of a row of readings. A card and a
		 * badge are one material, so nothing about them has to be kept in step by hand.
		 */
		public Badge(centerX: number, centerY: number, radius: number, alpha?: number): void
		public Outline(box: Rectangle, width: number, color: Color, alpha: number): void
		/**
		 * A square-cornered outline drawn as four quads, in the same numbers {@link CHudCard.Fill}
		 * takes. {@link CHudCard.Outline} is this from a `Rectangle`; a caller drawing every frame
		 * uses this one and builds no rectangle to do it.
		 */
		public Stroke(x: number, y: number, w: number, h: number, width: number, color: Color, alpha?: number): void
		/** A rounded border around a card or panel. */
		public Border(box: Rectangle, width: number, color: Color, alpha: number): void
		public Header(box: Rectangle, height: number, title: string, right?: HudHeaderValue, underline?: boolean): void
		/**
		 * A status chip: the tint washed back for the fill, the tint itself for the label, and the
		 * menu's corner radius. A solid fill with primary text on top reads as an alert next to every
		 * value on the card, which is not what a count or a slot name is. Answers the width it took.
		 */
		/**
		 * A tinted pill with its label centred inside it. Drawn as two elements on purpose: folding
		 * both into one flex box stopped the label rendering at all, because a flex container lays out
		 * element children and the label is a bare text node.
		 *
		 * `frosted` lays the card's own frosted backdrop and glass under the tint, for a pill that
		 * stands on a busy plot rather than on the card's calm glass. `reserve` is a run the pill
		 * keeps room for even while the label is shorter, so a ticking reading does not breathe.
		 */
		public BadgeRight(rightX: number, centerY: number, text: string, color: Color, frosted?: boolean, reserve?: string): number
		/**
		 * {@link CHudCard.BadgeRight} pinned by its left edge instead, for a reading standing in a
		 * corner a card fills from the left. The same pill in the same metrics and on the same terms,
		 * so a value wears one dress wherever it sits.
		 */
		public BadgeLeft(x: number, centerY: number, text: string, color: Color, frosted?: boolean, reserve?: string): number
		public Bar(pos: Vector2, size: Vector2, pct: number, fillColor: Color, markerPct?: number): void
		public Separator(x: number, y: number, width: number): void
		/**
		 * An image on the card, cut for the box it is drawn in: raster artwork is resampled straight
		 * to `size` rather than read off a mip level that does not hold it, so a caller passes the
		 * path it has and nothing about sharpness is left for it to arrange.
		 *
		 * `radius` crops it — half the size makes a round portrait — and the crop is carved by the sdf
		 * mask, so its edge carries per-pixel coverage and needs nothing drawn over it to hide a
		 * stepping corner. `angle` turns it clockwise about its own centre in degrees, which is how a
		 * glyph carries a bearing.
		 *
		 * `fit` says what to do when the box is not the artwork's shape. The default fills the box
		 * with the whole source, which squashes art the box was not cut for — a hero's landscape
		 * portrait in a shallower cell, an item's 11:8 icon in a squarer one. `"cover"` keeps the
		 * source's proportions and crops it to the box about its centre, the way
		 * {@link Canvas.Image} does, and holds the image back until the host has measured the
		 * source, which is one frame at most.
		 *
		 * @example
		 * HudCard.Image(unit.TexturePath(), pos, size, Color.White, hudAlpha(), radius, 0, "cover")
		 */
		public Image(path: string, pos: Vector2, size: Vector2, color: Color, alpha?: number, radius?: number, angle?: number, fit?: "cover" | "stretch"): void
		/** A filled disc: the chip a glyph or a portrait is set on. */
		public Disc(centerX: number, centerY: number, radius: number, color: Color, alpha?: number): void
		/**
		 * A ring on the card, drawn by the sdf circle so it stays round at any size. `radius` is the
		 * middle of the stroke, which is what the shape asked for is half a thickness wider than: the
		 * shader lays a border inside the shape it is handed, the way a panel's rim sits inside its
		 * box, and a ring measured that way would be drawn a half thickness in from the radius it was
		 * struck at. Which is the one thing about a ring that has to agree with {@link CHudCard.Arc},
		 * whose capsules straddle theirs — a track and the run filling it are struck from the same two
		 * numbers, and the two conventions leave the arc riding a half thickness outside its own track.
		 */
		public Ring(centerX: number, centerY: number, radius: number, thickness: number, color: Color, alpha?: number): void
		/**
		 * A run of a ring's edge, from `start` clockwise by `sweep` radians, with `0` at three
		 * o'clock. One element whatever the sweep: the capsules shader unions the whole run into a
		 * single field, so the arc is as smooth as a {@link CHudCard.Ring} and carries no seam at any
		 * alpha. A host without that shader falls back to a chain of {@link CHudCard.Line}s.
		 *
		 * `radius` is the middle of the stroke, on the terms {@link CHudCard.Ring} states, so the two
		 * struck from one radius and one thickness land on the same band: the ring is the track a
		 * dial drains along and the arc is how much of it is left, and the pair only reads as one
		 * ring while both are measured the same way.
		 *
		 * @example
		 * HudCard.Arc(x, y, radius, 2, -Math.PI / 2, Math.PI * 2 * health, HudColors.kill, hudAlpha())
		 */
		public Arc(centerX: number, centerY: number, radius: number, thickness: number, start: number, sweep: number, color: Color, alpha?: number): void
		/** A line segment with rounded ends. */
		public Line(startX: number, startY: number, endX: number, endY: number, thickness: number, color: Color, alpha?: number): void
	}
	const HudCard: CHudCard
}
