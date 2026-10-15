// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function toHex2(value: number): string
	function cssColor(color: Color): string
	function cssAlpha(hex: string, alpha: number): string
	/** The hue circle laid out left to right, as a decorator: what a rainbow shows while it stands still. */
	const HueGradient = "linear-gradient(to right, #ff0000, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000)"
	/** A gradient's two colours laid out left to right, as a decorator: what it shows while it stands still. */
	function gradientDecorator(from: Color, to: Color): string
	function parseHex(hex: string): [number, number, number, number]
	function composeHex(r: number, g: number, b: number, a: number): string
	function mixHex(from: string, to: string, ratio: number): string
	function lerpHex(from: string, to: string, ratio: number): string
	function fadeHex(hex: string, alpha: number): string
	/**
	 * `layer` laid over `ground` by its own alpha: the colour a translucent fill reads as on that
	 * surface. The ground keeps its alpha.
	 */
	function overHex(ground: string, layer: string): string
	/**
	 * How much of `tint` an edge scrim laid over a surface of that same colour may keep. A fill of
	 * alpha `a` over a surface of alpha `a` composites to `a + (1 - a) * a * p`, so the strip adds
	 * density of its own the moment the surface is glass, and reads as a band rather than as content
	 * running past an edge. The share returned holds that addition to 8% of density: an opaque
	 * surface takes the whole tint, because fading a fill into the colour already behind it changes
	 * nothing, and a transparent one takes only as much as it can hide.
	 *
	 * @example
	 * const stop = fadeHex(tint, ramp * scrimPeak(tint))
	 */
	function scrimPeak(tint: string): number
	function opaqueHex(hex: string): string
	function shiftHex(hex: string, ratio: number): string
	function hslHex(hue: number, saturation: number, lightness: number): string
	function hslOf(hex: string): [number, number, number]
	/** Relative luminance of an opaque color, per WCAG: 0 for black, 1 for white. */
	function luminanceOf(hex: string): number
	/**
	 * WCAG contrast ratio between two opaque colors, from 1 for a pair that matches to 21 for black
	 * on white. Text needs 7 to read comfortably, a control that only has to be spotted needs 3.
	 *
	 * @example
	 * const readable = contrastHex(Theme.ValueOf("TextPrimary"), Theme.ValueOf("WindowBg")) >= 7
	 */
	function contrastHex(a: string, b: string): number
	/** Whether a foreground has to go darker, rather than lighter, to be seen on `hex`. */
	function isLightHex(hex: string): boolean
	/**
	 * `hex` walked along its own lightness until it clears `ratio` against `against`, away from that
	 * backdrop - down on a light one, up on a dark one - and returned untouched when it already
	 * reads. Hue and saturation are kept, so a colour that has to stay recognisable stays itself: the
	 * danger red of a light theme is the same red, deeper.
	 *
	 * @example
	 * StatusGood: readableHex(DefaultPalette.StatusGood, seeds.Background, 3)
	 */
	function readableHex(hex: string, against: string, ratio: number): string
}
