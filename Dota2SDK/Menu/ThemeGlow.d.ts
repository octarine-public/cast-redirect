// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Where a halo takes its color from. */
	const enum EGlowColor {
		/** The scope's accent, which is what a glow wears until it is told otherwise. */
		Accent = 0,
		/** One color for everything the scope lights, whatever each surface is painted. */
		Custom = 1,
		/** The surface's own color, so a card, a bar and a warning each glow in their own. */
		Adaptive = 2,
		/** A color walking the circle of hues; the light itself is the animation. */
		Rainbow = 3
	}
	/** The names of {@link EGlowColor}, in its own order. */
	const GlowColorNames: readonly string[]
	/**
	 * How light a halo is drawn at, however dark the surface under it. A glass card is nearly black
	 * and a halo of nearly black is no halo, so an adaptive light keeps the surface's hue and its
	 * saturation and takes a lightness that can actually be seen.
	 */
	const GlowLightFloor = 0.62
	/** How many steps the walking light's circle of hues is cut into. */
	const GlowHueSteps = 60
	/**
	 * The walking light's color at one step of its circle. The circle is cut into steps rather than
	 * followed exactly: the halo is baked into a shader string, and a string per frame is a cache
	 * that never hits. The hue is a share of the circle rather than a degree of it, which is what
	 * the host's own conversion asks for.
	 *
	 * @example
	 * const color = GlowHueHex(step, 0.8)
	 */
	function GlowHueHex(step: number, saturation: number): string
	/** What a scope's glow is set from; the theme turns it into an {@link IThemeGlow}. */
	interface IThemeGlowSeed {
		/** How far the halo reaches past the surface's edge, in dp; nothing at all puts it out. */
		readonly size: number
		/** How much of a color the halo keeps, 0 to 1. */
		readonly strength: number
		readonly mode: EGlowColor
		/** The color {@link EGlowColor.Custom} lights with; ignored by the other two. */
		readonly color: string
	}
	/** What a theme asks a surface to glow with. */
	interface IThemeGlow {
		/**
		 * How far the halo reaches past the surface's edge, in dp, and nothing at all while the glow
		 * is off: every surface scales that reach the way it scales itself.
		 */
		readonly size: number
		/** The halo's color for a surface that has no color of its own to light with. */
		readonly color: string
		/** Whether a surface that knows its own color should light with that instead. */
		readonly adaptive: boolean
		/** How much of a color the halo keeps; what an adaptive one fades its surface by. */
		readonly strength: number
	}
	/**
	 * A theme that lights nothing, and the glow every scope wears until one is set. Its color is a
	 * real one, transparent: a surface may fade and hand it on without ever asking whether it is lit.
	 */
	const NoThemeGlow: IThemeGlow
	/** How far a glow reaches by default, in dp. */
	const DefaultGlowSize = 10
	/** How much of the accent a glow keeps by default. */
	const DefaultGlowStrength = 0.35
	/** Seconds one turn of the walking color takes by default. */
	const DefaultGlowSpeed = 6
	/** How far the walking color is from grey by default. */
	const DefaultGlowSaturation = 0.8
	/**
	 * The range the walking light's speed, in seconds per turn, and its saturation are held to: what
	 * the controls offer, and what a stored or shared theme is read into.
	 */
	const GlowStyleRange: {
		readonly speed: readonly [1, 30]
		readonly saturation: readonly [0.2, 1]
	}
	/** What the glow lights with, beyond the reach and strength the seeds carry. */
	interface IThemeGlowStyle {
		mode: EGlowColor
		/** The color {@link EGlowColor.Custom} lights with. */
		color: string
		/** Seconds one turn of the walking color takes. */
		speed: number
		/** How far the walking color is from grey, 0 to 1. */
		saturation: number
	}
	/**
	 * What a quad has to reach past the shape it carves for a halo `width` wide to fit outside it:
	 * the halo itself and one more for the antialiased edge it falls away from. It is in whatever
	 * unit the width was measured in - dp for a surface laid out by the menu, screen pixels for one
	 * that measures its own - and nothing at all for a glow that is off.
	 *
	 * @example
	 * const width = Size(Theme.Glow.size)
	 * const pad = GlowPad(width)
	 * WritePx(element, "left", x - pad)
	 * WriteStyle(element, "decorator", SdfShape(radius, fill, 0, "", pad, width, Theme.Glow.color).decorator)
	 */
	function GlowPad(width: number): number
	/**
	 * The halo a surface painted `fill` wears. An adaptive theme lights every surface in its own
	 * color, so a green bar glows green and a warning glows red without either being told to; every
	 * other theme hands out the one color it was given.
	 *
	 * The fill's own transparency is dropped and its lightness is floored at {@link GlowLightFloor}:
	 * a glass card is barely there and nearly black, and a halo of either is no halo. The hue and the
	 * saturation are the surface's own, so what comes out is still recognisably its color - a grey
	 * card glows a light grey rather than an invented one.
	 *
	 * @example
	 * const color = GlowColorOf(Theme.Glow, cssColor(HudColors.glass))
	 */
	function GlowColorOf(glow: IThemeGlow, fill: string): string
}
