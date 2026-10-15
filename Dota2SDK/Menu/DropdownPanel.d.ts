// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The picture an option carries, and the gap between it and the name it belongs to. */
	const OptionIconDp = 20
	const OptionIconGapDp = 8
	/**
	 * Width of the widest value `entry` offers, in dp, as text in `role` sets it: the list in the
	 * panel is set like the menu, the value in the trigger like the settings row it stands in.
	 */
	function WidestValueDp(entry: PanelEntry, role?: EFontRole): number
	type PanelEntry = DropdownEntry | MultiSelectEntry
	/**
	 * The pickers riding the options that are picked right now, in the order the list holds them.
	 * They belong on the control's own row: an option carries its colour, and the row shows the
	 * colours of what it is set to without anyone having to open the list.
	 */
	function SelectedColors(entry: PanelEntry): ColorEntry[]
	function OpenDropdown(entry: PanelEntry, anchor: ScreenRect): void
	/**
	 * Opens the option list as a standalone picker: the same panel a dropdown row
	 * opens, anchored to any rect, handing the picked index to `pick` and closing
	 * itself. The hotkey editor uses it to choose the option a hotkey selects.
	 */
	function OpenOptionPicker(values: readonly string[], selected: number, anchor: ScreenRect, pick: (index: number) => void): void
	/**
	 * Opens the option list as a standalone multiselect picker. The selection is
	 * read on every repaint, and each pick returns a new array in option order.
	 */
	function OpenMultiOptionPicker(values: readonly string[], selected: () => readonly string[], anchor: ScreenRect, pick: (values: string[]) => void): void
	function CloseDropdown(): void
	function IsDropdownOpen(entry?: PanelEntry): boolean
}
