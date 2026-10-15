// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface ScreenRect {
		x: number
		y: number
		w: number
		h: number
	}
	function PixelsPerDp(): number
	function ToLayoutUnits(screenValue: number): number
	function DpToPx(value: number): number
	function ElementScreenRect(element: HTMLElement): ScreenRect
	function ClampToScreen(x: number, y: number, w: number, h: number, marginPx?: number): [number, number]
	function MeasureTextDp(text: string, sizeDp: number, weight?: number, role?: EFontRole): [number, number]
	/**
	 * Text size at a font size already in screen pixels, in `family` or the theme's own face, outside
	 * the font-scale setting — for callers that write `font-size` in px themselves and need the width
	 * the renderer will lay that exact line out at. Undefined until the host can answer. `weight` is
	 * the design weight; the font weight setting is applied here, as every style writer does.
	 *
	 * The answer is kept per family, size, weight and string. A size that has measured more strings
	 * than it can be expected to show again — a distance in metres reads a new one every metre —
	 * drops the oldest quarter of them.
	 *
	 * The pair belongs to the cache: read it, do not keep it or write to it.
	 */
	function MeasureTextPx(text: string, sizePx: number, weight?: number, family?: string, italic?: boolean): Nullable<readonly [number, number]>
	/**
	 * How wide one line lays out at a font size already in screen pixels. Falls back to an estimate
	 * from the string's length while the host cannot answer yet, so a caller sizing a box around a
	 * reading never has to carry a guess of its own.
	 *
	 * @example
	 * const width = TextWidthPx(label, size, 700, "Stratum2")
	 */
	function TextWidthPx(text: string, sizePx: number, weight?: number, family?: string): number
	function HasOffsets(element: HTMLElement): boolean
	function ElementRect(element: HTMLElement): ScreenRect
}
