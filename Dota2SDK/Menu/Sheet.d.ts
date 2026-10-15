// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The hover and toggle rules the menu ships as a style sheet. They carry the **menu** theme and
	 * nothing else: the sheet is one string shared by every layer document, so a class put on a panel
	 * or a world overlay paints in the menu's colours whatever theme that surface wears. Anything a
	 * non-menu surface needs to retint belongs in an inline fill instead.
	 */
	const Classes: {
		readonly Row: "oct-row"
		readonly Pill: "oct-pill"
		readonly NavLabel: "oct-nav-label"
		readonly Switch: "oct-switch"
		readonly Knob: "oct-knob"
		readonly Chip: "oct-chip"
		readonly ButtonRow: "oct-button-row"
		readonly ButtonPrimary: "oct-button-primary"
		readonly ButtonSecondary: "oct-button-secondary"
		readonly ButtonGhost: "oct-button-ghost"
		readonly ButtonDanger: "oct-button-danger"
		readonly ButtonIcon: "oct-button-icon"
		readonly Control: "oct-control"
		readonly Ghost: "oct-ghost"
		readonly Primary: "oct-primary"
		readonly Close: "oct-close"
		readonly CloseIcon: "oct-close-icon"
		readonly MenuRow: "oct-menu-row"
		readonly MenuIcon: "oct-menu-icon"
		readonly Option: "oct-option"
		readonly Danger: "oct-danger"
		readonly DangerIcon: "oct-danger-icon"
		readonly Reset: "oct-reset"
		readonly Trigger: "oct-trigger"
		readonly Item: "oct-item"
		readonly ItemArt: "oct-item-art"
		readonly PickerChip: "oct-picker-chip"
		readonly PickerInput: "oct-picker-input"
		readonly PickerAdd: "oct-picker-add"
		readonly PickerAddIcon: "oct-picker-add-icon"
		readonly Keybind: "oct-keybind"
		readonly Search: "oct-search"
		readonly SearchLabel: "oct-search-label"
		readonly ControlIcon: "oct-control-icon"
		readonly DimIcon: "oct-dim-icon"
		readonly LiftIcon: "oct-lift-icon"
		readonly ModeIcon: "oct-mode-icon"
		readonly Swap: "oct-swap"
		readonly SwapOff: "oct-swap-off"
		readonly SwapOn: "oct-swap-on"
		readonly On: "oct-on"
	}
	/**
	 * The analytic fill a button paints at hover strength `mix`. The chip in a menu row and the
	 * button on a page differ in nothing but their corner radius, and both take every colour from the
	 * palette - a theme with a light background gets a light button rather than a black slab, and
	 * {@link CTheme.ReadableOn} keeps the label on top of it readable. A button in an inert block
	 * paints the muted accent instead of the live one, so it goes grey with the rest of the block.
	 *
	 * @example
	 * const surface = useHoverFill(button, hovered, mix => ButtonFill("danger", 8, mix))
	 */
	function ButtonFill(variant: ButtonVariant, radius: number, mix: number, inert?: boolean): RmlStyle
	function ClassOn(base: string, on: boolean): string
	function SyncStyleSheet(): void
}
