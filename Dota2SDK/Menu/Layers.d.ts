// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface LayerSet {
		readonly root: HTMLElement
		readonly panels: HTMLElement
		readonly cards: HTMLElement
		/**
		 * The menu's own panels: the preview card and its stage. They stand over the cards of every
		 * package and under the menu chrome, so what the menu opens beside the window is covered by
		 * no more than the window itself — a HUD card another script drew cannot come over it.
		 */
		readonly menuCards: HTMLElement
		readonly main: HTMLElement
		readonly portal: HTMLElement
		/** Invisible document used only for intrinsic resource measurements. */
		readonly measure: HTMLElement
	}
	/**
	 * Bumped whenever the layers are built or torn down. Style sheets key on it: a sheet synced
	 * before the layer documents existed has to land on them once they do.
	 */
	function LayersEpoch(): number
	/**
	 * The documents a style sheet has to reach. With layer documents each carries its own sheet —
	 * a document resolves selectors against itself alone; without them everything lives in the
	 * base document and one sheet covers it.
	 */
	function StyleSheetTargets(): readonly HTMLDocument[]
	/**
	 * The layer set, built on first use. On a host with layer documents the world, the cards, the
	 * menu's own panels and the menu chrome live in documents of their own: layout dirt is per
	 * document, so the overlays tracking units every frame stop reformatting the menu, a card
	 * resizing to its own contents stops reformatting either of them, a preview redrawing its stage
	 * stops reformatting the window it stands against, and a menu interaction stops reformatting
	 * the overlays.
	 * Without host support everything shares the base document under one swept root, as it always
	 * did, stacked by the order the layers are built in.
	 *
	 * Every document carries an explicit z-index. This is not only the stacking order — it is what
	 * disables RmlUi's window behaviour, which pulls a clicked document with `z-index: auto` above
	 * its siblings: one click on a panel would put the whole world layer over the menu.
	 */
	function Layers(): LayerSet
	function TickLayers(now: number): boolean
	function SetMainFilter(filter: Nullable<string>): void
	function ResetLayers(): void
	/**
	 * Writes the typeface each layer document is set in onto its root: the world document wears
	 * the world's, the cards document the panels', the menu's own panels and the chrome the menu's.
	 * A stack that stands in a document of another scope writes its own onto its element.
	 */
	function ApplyRootFont(): void
}
