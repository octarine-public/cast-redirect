// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the modal capture popup for any bind target — a toggle hotkey, a
	 * window shortcut — replacing any capture session already in progress.
	 */
	function OpenBindCapturePanel(target: CaptureTarget): void
	/**
	 * Opens the modal capture popup for the keybind entry, replacing any
	 * capture session already in progress.
	 */
	function OpenKeybindPanel(entry: KeybindEntry): void
	/**
	 * Closes the capture popup discarding the pending bind.
	 */
	function CloseKeybindPanel(): void
	/**
	 * Keeps the popup centered over the menu window and animates the
	 * pending-bind preview border; ticked once per frame while the menu runs.
	 */
	function TickKeybindPanel(now: number): void
}
