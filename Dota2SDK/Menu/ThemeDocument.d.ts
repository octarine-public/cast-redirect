// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Everything the Themes tab holds, as one document: the look of the menu and of the surfaces
	 * outside it. It is what the account wears, what a cloud theme carries and what a preset is
	 * applied into - and never part of a config, so switching configs leaves it as it is.
	 */
	interface IThemeDocument {
		menu: IThemeSnapshot
		/** Colors set apart from the palette the seeds build, by token. */
		colors: Partial<Record<PaletteColorToken, string>>
		glow: IThemeGlowStyle
		/** The theme the screen panels wear, or nothing while they follow the menu. */
		panels?: IThemeSnapshot
		/** The theme the world overlays wear, or nothing while they follow the menu. */
		world?: IThemeSnapshot
	}
	/**
	 * The theme as it is written to disk and mirrored to the account: the document plus the
	 * preferences that ride on the Themes tab without being part of the look a theme shares.
	 */
	interface IStoredTheme {
		v: number
		theme: IThemeDocument
		/** Speed of every menu animation as a fraction, 1 = 100%. */
		animationSpeed: number
		shuffle: EShuffleMode
		/** The keys the account's cloud themes are on, as packed bind codes by theme id. */
		binds: Record<string, number>
	}
	const StoredThemeVersion = 2
	const DefaultGlowStyle: IThemeGlowStyle
	function DefaultThemeDocument(): IThemeDocument
	function CloneThemeDocument(theme: IThemeDocument): IThemeDocument
	/**
	 * Whether two documents dress everything alike: the menu's look and its logo, the colors set
	 * apart, the glow and the surfaces outside the window. A logo color under the original artwork
	 * draws nothing and does not count.
	 */
	function themesEqual(a: IThemeDocument, b: IThemeDocument): boolean
	/**
	 * Reads a whole theme off `unknown` - a stored file, a cloud blob - refusing anything without
	 * a well-formed menu snapshot: half a theme is worse than none. Every other part falls back to
	 * its default on its own, so a theme saved before a part existed still comes back whole, and
	 * every number is held to the range its control offers, so a shared theme cannot carry one
	 * nobody could have set. A theme written by the build that kept one font for the whole document
	 * carries it beside the menu snapshot rather than in it; it is read as the menu's.
	 */
	function DecodeThemeDocument(value: unknown): Nullable<IThemeDocument>
	/** Packs the theme and its preferences the way the host stores them. */
	function EncodeStoredTheme(theme: IThemeDocument, animationSpeed: number, shuffle: EShuffleMode, binds: Record<string, number>): string
	/** Reads a stored theme off `unknown`; anything but the shape {@link EncodeStoredTheme} writes reads as none. */
	function DecodeStoredThemeValue(value: unknown): Nullable<IStoredTheme>
	/** Unpacks what {@link EncodeStoredTheme} wrote; anything else reads as no stored theme. */
	function DecodeStoredTheme(raw: string): Nullable<IStoredTheme>
}
