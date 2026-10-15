// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Icon at the right edge of a context-menu row. With `run` it is a button:
	 * clicking it runs the action and keeps the menu open — the rows rebuild in
	 * place. Without `run` it is a passive indicator, like the chevron of a row
	 * that opens a side panel.
	 */
	interface ContextMenuTrailing {
		readonly icon: string
		readonly run?: () => void
		readonly color?: string
		readonly hoverColor?: string
	}
	/**
	 * One row of the context menu. A disabled row is greyed out, keeps its hover
	 * fill off and swallows the click. `run` runs on click and closes the menu; a
	 * row with `flyout` instead keeps the menu open and receives the menu rect at
	 * its own height, in screen pixels, to place a side panel against. `hover`
	 * opens the flyout as soon as the cursor enters the row, without waiting for a
	 * click, as long as `open` does not already say the panel is showing. `open`
	 * keeps the hover fill on while the row's side panel is showing. `danger`
	 * paints the label, the icon and the hover fill in the theme's danger colour,
	 * for a row that throws work away; `color` gives a non-destructive row its own
	 * text, icon and hover tint. A disabled row stays grey either way.
	 */
	interface ContextMenuItem {
		readonly icon: string
		readonly label: string
		readonly disabled: boolean
		readonly run?: () => void
		readonly trailing?: ContextMenuTrailing
		/** Displays a switch with this state. Running the row keeps the menu open to show the change. */
		readonly checked?: boolean
		readonly flyout?: (anchor: ScreenRect) => void
		readonly hover?: boolean
		readonly open?: boolean
		readonly danger?: boolean
		readonly color?: string
		/**
		 * Identity the row keeps while the menu rebuilds, so a list that grows a row does not slide
		 * the ones below it out and back in. Rows without one are told apart by their position.
		 */
		readonly id?: string
	}
	/**
	 * Rows of a script's own under the ones this entry's menu builds for itself, asked for every
	 * time the menu opens. `undefined` takes them off again.
	 */
	function SetContextItems(entry: EntryCommon, build: Nullable<() => readonly ContextMenuItem[]>): void
	/** The rows a script has put on this entry, or none. */
	function ContextItemsOf(entry: EntryCommon): Nullable<() => readonly ContextMenuItem[]>
	/**
	 * Hands the menu the closer of a side panel a scripted row's flyout opened, so
	 * the panel leaves with the menu: closing the menu, opening another one, or
	 * hovering a row other than the panel's own runs the closer once and forgets it.
	 */
	function AttachContextFlyout(close: () => void): void
	/**
	 * The hotkey and logic rows of the switch a node wears in its header, for a menu that builds its
	 * rows itself instead of going through {@link OpenContextMenu} — the menu of a navigation tab. A
	 * node without such a switch gets none.
	 */
	function HeaderDriverItems(node: NodeEntry): readonly ContextMenuItem[]
	/**
	 * Opens the context menu at a screen position with rows of your own, so a
	 * surface that is not an {@link Entry} gets the same panel and hit behaviour.
	 * An empty list opens nothing. Pass a function instead of a list for rows that
	 * change while the menu is up — it is asked again on every rebuild, and the
	 * rows that carry a {@link ContextMenuItem.id} keep their place.
	 *
	 * @example
	 * OpenContextMenuAt(
	 *     [{ icon: "menu/ui/rotate-ccw.svg", label: "Reset", disabled: false, run: reset }],
	 *     Number(event.data.screenX ?? 0),
	 *     Number(event.data.screenY ?? 0)
	 * )
	 */
	function OpenContextMenuAt(items: readonly ContextMenuItem[] | (() => readonly ContextMenuItem[]), x: number, y: number): void
	function OpenContextMenu(entry: Entry, x: number, y: number): void
	function CloseContextMenu(): void
}
