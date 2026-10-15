// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the editor of one hotkey as a side panel of the anchor rect, in screen
	 * pixels: placed against its right edge at the anchor's height, flipped to the
	 * left edge when the screen ends. The panel holds key capture, toggle/hold
	 * mode, the driven value in the entry's own control — a switch for a toggle, a
	 * slider for a slider, an option picker for a dropdown or multiselect —
	 * overlay visibility and removal. It draws no scrim of its own; the owner
	 * closes it.
	 */
	function OpenHotkeyPanel(entry: DriverHolder, hotkey: EntryHotkey, anchor: ScreenRect): void
	/**
	 * Closes the hotkey editor panel if it is open.
	 */
	function CloseHotkeyPanel(): void
	/**
	 * Whether the hotkey editor panel is showing this hotkey right now.
	 */
	function IsHotkeyPanelOpenFor(hotkey: EntryHotkey): boolean
	/**
	 * Registers the localization strings of the hotkey editor, the toggle
	 * context-menu items and the hotkeys panel settings.
	 */
	function SetupHotkeyStrings(): void
}
