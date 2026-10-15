// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the way to an entry's row and flashes it. A switch without a row of its own is revealed
	 * where it stands: on the row hosting it, or on the card or page it heads.
	 */
	function RevealEntry(target: Entry): void
	function NodeDepth(node: NodeEntry): number
	function HasNodeChildren(node: NodeEntry): boolean
	function HasVisibleControls(node: NodeEntry): boolean
	function NodeIsOpen(node: NodeEntry): boolean
	function SetOpenRaw(node: NodeEntry, value: boolean): void
	/**
	 * Whether the fold a node takes as a card is already settled. A page decides it for its cards the
	 * first time it draws them, from their header control; an explicit open settles it too, so a node
	 * opened before its page was ever drawn - which is what revealing a search hit does - keeps the
	 * state the reveal gave it.
	 */
	function CardFoldDecided(node: NodeEntry): boolean
	function DecideCardFold(node: NodeEntry, open: boolean): void
	/**
	 * Whether the card carrying a page's own controls - the one standing above its sections - is
	 * folded open. It is kept apart from the node's own `expanded`, which says which page is being
	 * shown rather than how the first card on it is folded, and a page whose card nobody has touched
	 * stands open.
	 */
	function PageCardOpen(node: NodeEntry): boolean
	/** Folds a page's own controls open or shut. */
	function OpenPageCard(node: NodeEntry, value: boolean): void
	function OpenNode(node: NodeEntry, value: boolean): void
	function ActiveTab(): Nullable<NodeEntry>
	/**
	 * Moves the selection of `node` onto its pinned page, so the page the host
	 * pinned - the hero being played, the account being used - is the one the tab
	 * shows. Does nothing while that page does not exist yet.
	 */
	function OpenPinned(node: NodeEntry): void
	/**
	 * The tab a page with `tabbedChildren` is showing, or nothing when it has none. A page opens on
	 * its first tab and stays where it was left, so the answer is remembered rather than derived.
	 */
	function ActivePageTab(page: NodeEntry): Nullable<NodeEntry>
	function SetActivePageTab(page: NodeEntry, child: NodeEntry): void
	const NavigationKey = "__nav"
	interface StoredNavigation {
		tab: string
		page: string
		tabs: [string, string][]
	}
	/**
	 * The place the menu stands at, for the config: a scripts reload lands back on the same tab and
	 * page instead of the first one — a preview card gated on its page being active must not spring
	 * up because a reload forgot where the user was.
	 */
	function SerializeNavigation(): StoredNavigation
	/** Puts the selection back where {@link SerializeNavigation} recorded it. */
	function ApplyNavigation(stored: unknown): void
	function ActiveContentNode(): Nullable<NodeEntry>
	function SelectGeneral(): void
	function OpenSettingsTab(): void
	function ForEachEntry(node: NodeEntry, callback: (entry: Entry) => void): void
}
