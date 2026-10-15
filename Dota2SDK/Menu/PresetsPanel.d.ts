// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the preset selector's panel under `anchor`, or closes it where it is already open for
	 * this entry: the base preset and the user's own, each with the values it claims, a plus that
	 * adds a preset and one per preset that opens the value picker.
	 */
	function TogglePresetsPanel(entry: PresetsEntry, anchor: Nullable<HTMLElement>): void
	/** Closes the panel, and the value picker where one hangs off it. */
	function ClosePresetsPanel(): void
	/** Whether the panel is up — for `entry`, or for any preset selector at all. */
	function IsPresetsPanelOpen(entry?: PresetsEntry): boolean
}
