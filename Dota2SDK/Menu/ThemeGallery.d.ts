// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Bridge between the theme galleries and whoever owns the theme controls: a gallery reads the
	 * theme the menu wears through it and hands one back, so the pickers, the palette and the
	 * stored theme stay the single source of truth.
	 */
	interface IThemeGalleryHost {
		/** The theme the menu wears right now, whole. */
		Current(): IThemeDocument
		/** Puts a whole theme on: the menu, its palette overrides and glow, and the surfaces outside it. */
		Load(theme: IThemeDocument): void
		/** Rolls a random theme onto the controls, as the Shuffle button on Customization does. */
		Shuffle(): void
	}
	/**
	 * Builds the theme presets page for {@link Node.CustomPage}: the built-in themes as preview
	 * blocks, narrowed by tone, click to put one on whole, plus a block that rolls a random one.
	 * @example
	 * presets.CustomPage = ThemeGalleryPage({
	 * 	Current: () => this.Document(),
	 * 	Load: theme => this.LoadDocument(theme),
	 * 	Shuffle: () => this.Shuffle()
	 * })
	 */
	function ThemeGalleryPage(host: IThemeGalleryHost): () => React.ReactNode
	function ThemeCard(props: {
		name: string
		/** The look the card pictures - colors, accent, corners and typeface - and sets its name in. */
		theme: IThemeSnapshot
		/** What the look's glow lights with. Omitted means its accent. */
		glow?: IThemeGlowStyle
		active: boolean
		width: number
		last: boolean
		onApply: () => void
		/** The theme's own label, worn as a chip on the preview in the theme's own colors. */
		badge?: EThemeBadge
		/** Whether the theme carries the independent Blur chip. */
		blur?: boolean
		/**
		 * Everything that can be done to this theme, as rows of one menu: a card is a picture of a
		 * theme first, and a strip of icon buttons over it costs more to read than it saves. The
		 * menu opens from the button in the card's own corner and from a right click anywhere on it.
		 */
		menu?: CfgAction[]
		/** Hover actions kept on the card itself, for the one-click ones — the gallery's like. */
		actions?: React.ReactNode
		/** What the name row wears whatever the cursor does — the key the theme is on. */
		trailing?: React.ReactNode
		/** Small muted line under the name row — the cloud page shows share codes. */
		subtitle?: string
		/** Changes when this card is the answer to something, and pulses once when it does. */
		flash?: number
	}): React.ReactElement
	/**
	 * The card that keeps the current theme. It only opens while there is something to keep: a theme
	 * already saved would come back as a second copy of itself, indistinguishable from the first and
	 * marked as worn beside it, so the card says so instead of taking a name for one.
	 */
	function SaveCard(props: {
		width: number
		/** Width the naming form opens out to; the closed tile keeps `width`. */
		openWidth?: number
		unsaved: boolean
		onSave: (name: string) => void
		/** Answers a click the card has nothing to do with, so a press is never met with silence. */
		onRefused?: () => void
	}): React.ReactElement
}
