// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type Palette = Record<string, string>
	type TokenSet<P> = {
		readonly [K in keyof P]: ThemeTokenRef
	}
	const AccentAlphas: readonly [0.06, 0.15, 0.25, 0.3, 0.4]
	function AccentAlphaToken(alpha: (typeof AccentAlphas)[number]): string
	/**
	 * Delivers every palette change made since the last flush, one listener call per moved scope.
	 * A theme apply moves the accent, the palette and the glow of up to three scopes in one pass,
	 * and each listener answers with a full retint and re-render - so the changes are batched here
	 * and drained once per menu frame instead of firing per setter.
	 */
	function FlushPaletteChanges(): void
	/**
	 * Subscribes to the glow of any scope being rebuilt: a color walking, a reach or a strength set,
	 * an accent it follows moving. For the layer that draws a halo in a React tree, which re-renders
	 * itself on it and nothing else - a whole tree is told through the palette, and only when a
	 * theme is put on.
	 */
	function SubscribeGlow(onChange: () => void): () => void
	/** Counts every time a scope's glow was rebuilt; what a glow subscriber compares. */
	function GlowEpoch(): number
	function DefineTokens<P extends Record<keyof P, string>>(initial: P): TokenSet<P>
	function IsToken(value: unknown): value is ThemeTokenRef
	function ResolveToken(reference: ThemeTokenRef): string
	/**
	 * Resolves a style color to the `#rrggbb[aa]` literal an SDF decorator needs.
	 * Token references are looked up in the live palette, so the result is only
	 * valid for the render that produced it.
	 */
	function HexOf(color: StyleColor): string
	/**
	 * Runs the listener whenever one scope repaints. Acting on it takes both a retint of that scope's
	 * tree and a re-render: a token style is rewritten in place, but an SDF fill bakes its hex into a
	 * decorator string, which only a render can rebuild.
	 */
	function OnPaletteChanged(listener: (scope: EThemeScope) => void): void
	/**
	 * Runs the listener whenever a scope's radius, control roundness or text scale moves. A scaled
	 * metric is baked in when the style value is written, so the tree that changed has to be rebuilt
	 * rather than re-rendered - the listener is told which scope moved.
	 */
	function OnMetricsChanged(listener: (scope: EThemeScope) => void): void
	function ScaleMetric(property: string, value: number): number
	class CTheme {
		public get FontFamily(): string
		public readonly DefaultAccent: Color
		public get Accent(): Color
		public get PaletteEpoch(): number
		/**
		 * The glow the theme of the scope being drawn in asks its surfaces for. The object is rebuilt
		 * only when the theme moves, so a surface may read it every frame and compare it by identity.
		 *
		 * @example
		 * const width = Size(Theme.Glow.size)
		 */
		public get Glow(): IThemeGlow
		public get RadiusScale(): number
		/** Whether the theme draws its controls fully round, whatever its corner scale. */
		public get RoundControls(): boolean
		/**
		 * How large text is drawn against the size a style asks for: the theme's text size times the
		 * size of the family the scope draws in ({@link FamilySize}).
		 */
		public get FontScale(): number
		public get AccentHex(): string
		public get AccentSurface(): string
		/**
		 * {@link AccentSurface} as glass: the popover glass tinted the same way, keeping its own
		 * transparency, for a floating accent surface that blurs what stands behind it.
		 */
		public get AccentGlass(): string
		public AccentAlpha(alpha: number): string
		/**
		 * The theme's glass blur at a fraction of its full strength, as a `backdrop-filter`
		 * value. A backdrop blur is not touched by the element's own opacity, so a glass
		 * surface that fades in or out has to ramp this alongside it - otherwise the frosted
		 * rectangle holds full strength for the whole fade and then snaps away with the
		 * element. Below a quarter of a dp the filter is dropped entirely, so a blur nobody
		 * can see costs nothing.
		 *
		 * @example
		 * applyStyle(panel, { opacity: t, backdropFilter: Theme.BlurAt(t) })
		 */
		public BlurAt(fraction: number): string
		/**
		 * The neutral an inert control paints instead of the accent, at the weight of muted text
		 * and mixed from the theme's own background and text so it fits any palette. Solid on
		 * purpose: it fills switch tracks and slider ranges, where the translucent text colours
		 * would blow out to white over a dark surface.
		 */
		public get InertAccent(): string
		/**
		 * The first of `candidates` that reads on `fill`, or the one that comes closest when none of
		 * them clear the bar. A control painting a fill of its own - a primary or a danger button -
		 * covers the surface the palette's text was picked against, and on a light theme the two land
		 * on top of each other. Order the candidates by preference: the colour a control wants is
		 * kept as long as it survives its own fill, and only swapped for the pole behind it when it
		 * does not.
		 *
		 * @example
		 * const label = Theme.ReadableOn(Theme.AccentHex, Theme.ValueOf("TextPrimary"), Theme.ValueOf("PopoverBg"))
		 */
		public ReadableOn(fill: string, ...candidates: string[]): string
		/**
		 * The accent as an inert control paints it. Everything under a switch that is off keeps
		 * its value and its contrast but drops the hue, so a page reads as "set up, not running"
		 * without fading the labels it is being read from.
		 */
		public AccentHexOf(inert: boolean): string
		public AccentAlphaOf(inert: boolean, alpha: number): string
		public ValueOf(token: keyof IThemePalette): string
		/**
		 * Dresses one scope's surfaces in a glow: how far it reaches past their edge, in dp, how much
		 * of a color it keeps, and which color that is. A reach of nothing puts it out. It repaints
		 * the scope like a palette change, because that is what it is - the halo is baked into a
		 * decorator string, and only a fresh render rebuilds one.
		 *
		 * @example
		 * Theme.SetGlow({ size: 12, strength: 0.4, mode: EGlowColor.Accent, color: "" }, EThemeScope.Panels)
		 */
		public SetGlow(next: IThemeGlowSeed, scope?: EThemeScope): void
		/**
		 * Moves one scope's halo onto another color and tells the glow layers alone, through
		 * {@link SubscribeGlow}. A color that walks moves several times a second, and a palette
		 * change is a retint of every panel in the scope and a render of every tree - while a halo
		 * is one layer that re-renders itself, and everything drawing one outside the menu window
		 * reads the glow every frame anyway.
		 */
		public WalkGlow(color: string, scope?: EThemeScope): void
		public SetAccent(color: Color, scope?: EThemeScope): void
		public SetPalette(values: Partial<IThemePalette>, scope?: EThemeScope): void
		public SetMetrics(values: {
			radius?: number
			font?: number
			roundControls?: boolean
		}, scope?: EThemeScope): void
		/**
		 * Re-reads the family every scope draws its text in, and rebuilds each scope whose family is
		 * drawn at another size than before, as any metric change does: a size is baked into a style
		 * when it is written. Call it whenever a face moves - a family picked, a language switched.
		 */
		public RefreshFamilySizes(): void
	}
	const Theme: CTheme
}
