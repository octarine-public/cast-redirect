// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Config key holding the on-screen hotkeys panel position. */
	const HotkeysPanelConfigKey = "HotkeysPanel"
	/** Stored position of the hotkeys panel, [-1, -1] while it was never moved. */
	function HotkeysPanelConfigValue(): [number, number]
	/** Restores the hotkeys panel position the config holds. */
	function ApplyHotkeysPanelConfig(value: unknown): void
	/**
	 * Whether the cursor is over the hotkeys panel while the menu is open, so the
	 * click that starts dragging it never reaches the game.
	 */
	function CursorOverHotkeysPanel(): boolean
	/** The panel-wide limit on when the on-screen hotkeys panel lists binds. */
	type HotkeysPanelDisplay = "always" | "active" | "hidden"
	/** Includes ordinary keybind entries in the hotkeys panel while they are held. */
	function SetShowPressedKeybinds(show: boolean): void
	/**
	 * Sets the panel-wide limit: each hotkey's visibility choice, active binds
	 * only, or no panel in game. While the menu is open the panel can always be
	 * found and dragged, even with an empty list or in "hidden" mode.
	 */
	function SetHotkeysPanelDisplay(mode: HotkeysPanelDisplay): void
	/**
	 * Registers the on-screen panel listing every visible bound hotkey with the
	 * value it drives; an active hotkey lights its key chip with the accent. A bind
	 * that starts showing while the panel is already up slides down into place and
	 * slides back out when it stops; the first bind and the last one carry the
	 * panel itself, which fades and lifts as one surface — glass blur included —
	 * and only leaves the screen once that has played out. Both are cut when
	 * `MenuFlags.HotkeysPanelAnimation` is off. While the menu is open the panel
	 * is dragged with the mouse like every other overlay card: it snaps to the
	 * edges and centres of the cards beside it and they snap to its, with the same
	 * accent guides and the same dragging outline, and the position persists in
	 * the config.
	 */
	function SetupHotkeysOverlay(): void
	/**
	 * Refreshes the panel when the host enters or leaves the game, and keeps its
	 * place among the overlay cards - the rectangle the others snap to, and the
	 * drag while it is held; ticked once per frame while the menu runs.
	 */
	function TickHotkeysOverlay(): void
}
