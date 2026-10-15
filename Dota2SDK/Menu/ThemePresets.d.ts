// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface IThemeSeeds {
		Background: string
		/**
		 * Color of a card raised above the background. Its alpha is the solidity of the edges drawn
		 * from it - the card, plate and input borders - never of their fills: a fill is faded by
		 * {@link IThemeSeeds.Opacity} alone, so a glass theme keeps its cards readable.
		 */
		Surface: string
		Text: string
		/**
		 * Color of the window frame and the edges derived from it. Its alpha carries into every edge
		 * it feeds, the pill's included, and every edge also thins faster than the window as
		 * {@link IThemeSeeds.Opacity} drops - a glass theme is not framed in solid lines.
		 */
		Border: string
		/**
		 * Color of the inert controls - switch tracks, slider rails, scrollbars and the dividers
		 * beside them. Omitted means they follow {@link IThemeSeeds.Border}, which is what every
		 * theme saved before this seed existed expects.
		 */
		Controls?: string
		GlassBlur: number
		Opacity: number
		/** Corner radius scale as a fraction, 1 = 100%. Omitted means 1. */
		Radius?: number
		/**
		 * Whether the controls - switches, sliders, color swatches and the bar marking the selected
		 * row - are drawn fully round whatever {@link IThemeSeeds.Radius} says, so a theme of square
		 * cards can keep round controls. Omitted means they follow the corner scale like everything
		 * else.
		 */
		RoundControls?: boolean
		/** Text size scale as a fraction, 1 = 100%. Omitted means 1. */
		TextScale?: number
		/**
		 * Whether a settings page sets its card titles and the values its rows show close to
		 * {@link IThemeSeeds.Text}, the way its labels already are, so only descriptions read dimmed
		 * there. Navigation, tabs and every other surface keep their graded tiers. Omitted means the
		 * page is graded like the rest.
		 */
		BrightContent?: boolean
		/** Whether a surface is lit with a glow around it. Omitted means none. */
		Glow?: boolean
		/** How far the glow reaches past a surface's edge, in dp. Omitted means the default reach. */
		GlowSize?: number
		/** How much of the accent the glow keeps, 0..1. Omitted means the default strength. */
		GlowStrength?: number
	}
	const DefaultSeeds: IThemeSeeds
	/** The accent every theme starts from. */
	const DefaultAccent = "#9854ff"
	/**
	 * The range each numeric seed is held to: what the controls offer, and what a stored or shared
	 * theme is read into, so a number nobody could have set never reaches a surface.
	 */
	const SeedRange: {
		readonly GlassBlur: readonly [0, 100]
		readonly Opacity: readonly [0.3, 1]
		readonly Radius: readonly [0, 2]
		readonly TextScale: readonly [0.85, 1.2]
		readonly GlowSize: readonly [2, 40]
		readonly GlowStrength: readonly [0.05, 1]
	}
	/**
	 * Everything a theme preset captures: the seed colors plus the accent, and the typeface. A
	 * snapshot that names none is set in the default type: a theme saved before the font was part
	 * of one was made in it. A preset is seeds alone, so whoever puts one on carries the type worn
	 * over - `IThemeGalleryHost.Apply` does, and so does the page that dresses a surface.
	 */
	interface IThemeSnapshot {
		seeds: IThemeSeeds
		accent: string
		font?: IThemeFont
		/**
		 * Whether the window logo keeps its original artwork colors. Omitted means it does: only
		 * `false` tints it, with {@link IThemeSnapshot.logoColor} or the accent.
		 */
		keepOriginalLogoColor?: boolean
		/**
		 * The color the window logo is tinted with instead of the accent - its arrow alone when
		 * {@link IThemeSnapshot.logoSecondColor} paints the pieces beside it. Omitted means it follows
		 * the accent; {@link IThemeSnapshot.keepOriginalLogoColor} draws the original artwork over it.
		 */
		logoColor?: string
		/**
		 * The color of the three pieces beside the window logo's arrow, which makes the logo
		 * two-colored. Omitted means the whole logo is one color.
		 */
		logoSecondColor?: string
		/** The color the name beside the window logo is set in. Omitted means it follows the accent. */
		wordmarkColor?: string
	}
	/**
	 * Carries the logo choice of `from` over to `to`: the original artwork and the colors the logo
	 * and the name beside it are drawn in. It is the user's own, so it rides along with whatever
	 * theme is put on rather than being part of the look.
	 *
	 * @example
	 * const menu = { ...preset.theme }
	 * CarryThemeLogo(worn.menu, menu)
	 */
	function CarryThemeLogo(from: IThemeSnapshot, to: IThemeSnapshot): void
	/** A copy of a snapshot that shares nothing with it, for a store that keeps its own. */
	function CloneThemeSnapshot(snapshot: IThemeSnapshot): IThemeSnapshot
	function seedsEqual(a: IThemeSeeds, b: IThemeSeeds): boolean
	/**
	 * Whether two snapshots look alike: seeds, accent and typeface. The logo choice is left out - it
	 * is drawn by the menu alone and compared with the document that carries it.
	 */
	function snapshotsEqual(a: IThemeSnapshot, b: IThemeSnapshot): boolean
	/**
	 * A ready-made look: the menu's colors, accent, metrics and typeface, and what its glow lights
	 * with. It is put on whole - only the user's logo choice and the surfaces that wear a theme of
	 * their own are kept - so a preset is a finished design rather than a background to repaint.
	 * The objects are shared: clone a theme before keeping it.
	 *
	 * @example
	 * const onyx = ThemePresets.find(preset => preset.name === "Onyx")
	 */
	interface IThemePreset {
		/** The name the gallery shows; its translation is looked up by it. */
		readonly name: string
		readonly theme: IThemeSnapshot
		/** What the glow lights with. Omitted means the accent, as a fresh theme does. */
		readonly glow?: IThemeGlowStyle
	}
	/**
	 * The built-in themes, in the order the gallery shows them: the default and its glass twin,
	 * then dark, glass and light.
	 */
	const ThemePresets: readonly IThemePreset[]
	/**
	 * What a saved theme says about itself at a glance. Chosen by whoever saved it, the way a cloud
	 * config carries its play style rather than being guessed from the colors - a theme built on a
	 * near-black background can still be meant as the light one of a pair.
	 */
	const enum EThemeBadge {
		/** No label; the card shows nothing. */
		None = 0,
		Light = 1,
		Dark = 2,
		Blur = 3
	}
	/** Display names of {@link EThemeBadge}, indexed by it. */
	const ThemeBadgeNames: string[]
	/**
	 * Whether `value` carries every seed a theme needs. Both the stored themes and the per-surface
	 * themes come off disk as `unknown`, and half a theme is worse than none.
	 */
	function IsThemeSeeds(value: unknown): value is IThemeSeeds
	function BuildPalette(seeds: IThemeSeeds): IThemePalette
}
