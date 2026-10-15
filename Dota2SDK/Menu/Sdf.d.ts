// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Style fragment for a flat rounded fill rendered by the analytic SDF pipeline:
	 * the radius (and optional border) live in the shader decorator string and the
	 * element keeps border-radius 0, so RmlUi hands the decorator a plain quad and
	 * the shader owns the edge — per-pixel coverage AA. Colors
	 * must be #rrggbb[aa] hex. The decorator embeds the color, so palette-reactive
	 * fills must re-apply this fragment on render (palette changes invalidate).
	 *
	 * The element must not carry a class whose stylesheet rule sets or transitions
	 * background-color: a class-change transition starts from the inline transparent
	 * value, overwrites it every frame, and removes the inline property on
	 * completion, leaving the rule's opaque border-radius-0 quad behind the shader.
	 */
	function SdfRounded(radius: number, fill: string, borderW?: number, borderColor?: string): RmlStyle
	/**
	 * The radius a control is drawn at, in dp: `radius` on the theme's corner scale, or fully round -
	 * a pill, or a circle on a square control - while the theme keeps its controls round.
	 */
	function ControlCornerRadius(radius: number): number
	/**
	 * {@link SdfRounded} for a control: a switch track and its knob, a slider's rail, fill and thumb,
	 * a color swatch, the bar marking the selected row. It is rounded at `radius` on the theme's
	 * corner scale like any fill, and fully round while the theme keeps its controls round.
	 *
	 * A round control touches its quad's edge, and a quad scaled by a transform lands on fractions
	 * of a pixel the rasterizer cuts differently across and down - so a control that grows through
	 * a transform passes `inset`, the pixels the quad stands out around the shape, or it flattens
	 * into an oval as it grows.
	 *
	 * @example
	 * <div style={{ width: 28, height: 18, ...SdfControl(9, Theme.AccentHex) }} />
	 */
	function SdfControl(radius: number, fill: string, inset?: number): RmlStyle
	/** {@link SdfControl} with a live theme palette color, resolved at call time. */
	function SdfControlTheme(radius: number, fill: keyof IThemePalette): RmlStyle
	/**
	 * The same fragment at an absolute radius, outside the theme's radius scale, and with the quad
	 * grown by `inset` pixels on every side so the antialiased edge stays off its boundary. What is
	 * drawn over the world keeps its own proportions — the menu's corner style is not its business —
	 * and the radius, like the border width, is in dp. `glowW` paints a soft halo that many px wide
	 * falling off outside the shape in `glowColor`; the inset has to leave room for it.
	 */
	function SdfShape(radius: number, fill: string, borderW?: number, borderColor?: string, inset?: number, glowW?: number, glowColor?: string, sweep?: number, from?: number): RmlStyle
	/**
	 * What a surface has to carry for {@link SdfGlowLayer} to land on it: the layer is placed against
	 * the surface's own box, and the surface has to open a stacking context of its own or the halo is
	 * painted before the surface's fill and vanishes under it. Spread it before any positioning of
	 * the surface's own, which then wins.
	 */
	const SdfGlowHost: RmlStyle
	/**
	 * The layer a surface glows through: one quad carrying nothing but the theme's glow, so what the
	 * surface is filled and rimmed with is left exactly as it was. `undefined` while the theme asks
	 * for no glow, and a surface drops the element rather than drawing an empty one.
	 *
	 * The quad is stretched around the surface it stands in, far enough for the halo and the room its
	 * antialiasing needs, and the shape it carves is inset by exactly as much - so the halo falls on
	 * the surface's own edge. It stands under everything the surface holds and takes no input: it
	 * reaches past the surface on every side, and a panel that swallowed clicks a halo's width around
	 * itself would be bigger than it looks.
	 *
	 * The surface carries {@link SdfGlowHost} and must not clip its children, which would keep the
	 * halo inside its box. A surface that does clip lights itself instead: a quad of its own placed
	 * that far outside it, carved by {@link SdfShape} with the same glow.
	 *
	 * @example
	 * const glow = SdfGlowLayer(PanelRadius)
	 * return (
	 * 	<div style={{ ...SdfGlowHost, ...card }}>
	 * 		{glow !== undefined && <div style={glow} />}
	 * 		{children}
	 * 	</div>
	 * )
	 */
	function SdfGlowLayer(radius: number, glow?: IThemeGlow, 
	/** What the surface under the halo is painted, for a theme that lights it in its own color. */
	fill?: string): Nullable<RmlStyle>
	/**
	 * A wedge of the same shape: `percent` of a whole turn, opening at `from` degrees and running
	 * clockwise, with twelve o'clock as zero. What falls outside the wedge is not drawn at all, so
	 * this is the fragment a dial or a cooldown drains through — a shape that empties by the turn
	 * rather than by the edge, which no amount of resizing can express.
	 *
	 * The turn is cut by the shader as two half-planes through the middle of the quad, so the cut
	 * carries the same per-pixel coverage the shape's own edge does and stays smooth wherever it
	 * lands. A full hundred draws the shape whole.
	 */
	function SdfSweep(radius: number, fill: string, percent: number, from?: number, inset?: number): RmlStyle
	/**
	 * Style fragment for a circle rendered by the same pipeline: the radius always collapses to the
	 * element's half-extent, so the shape stays round at any size and skips the theme's radius scale
	 * — a ring around an avatar has to match the avatar, not the menu's corner style. `inset` grows
	 * the quad around the circle by that many pixels, keeping the antialiased edge off the geometry
	 * boundary, where the quad would clip it. `glowW` and `glowColor` light it on the terms
	 * {@link SdfShape} states.
	 */
	function SdfCircle(fill: string, borderW?: number, borderColor?: string, inset?: number, glowW?: number, glowColor?: string): RmlStyle
	/**
	 * The popover surface at a given radius: the menu glass made opaque and faded to 0.96, rimmed
	 * with a 1dp panel border — the fill the context menu, the preset panels and the tooltips
	 * share. Palette-reactive, so re-apply it on render like every SDF fragment.
	 */
	function SdfPopoverTheme(radius: number): RmlStyle
	/**
	 * The same surface as glass: {@link SdfPopoverTheme}'s rim over the theme's own menu glass
	 * instead of an opaque read of it, so the panel keeps whatever transparency the palette asks
	 * for. A decorator cannot filter what stands behind it, and an unshaped backdrop filter frosts
	 * a square, so the box around the fill carries the blur and the raster `border-radius` that
	 * shapes it - the fill is the one element in, exactly as the driver flyout and the sub-settings
	 * panel build it. Palette-reactive like every SDF fragment.
	 *
	 * @example
	 * <div style={{ borderRadius: Radius, backdropFilter: Tokens.GlassBlur }}>
	 * 	<div style={SdfPopoverGlass(Radius)}>{children}</div>
	 * </div>
	 */
	function SdfPopoverGlass(radius: number): RmlStyle
	/** SdfRounded with live theme palette colors, resolved at call time. */
	function SdfRoundedTheme(radius: number, fill: keyof IThemePalette, borderW?: number, borderColor?: keyof IThemePalette): RmlStyle
}
