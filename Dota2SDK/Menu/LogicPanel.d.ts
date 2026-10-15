// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The label a rule carries wherever it is listed: `"After 5:00"`, `"Before 12:30"`. */
	function LogicRuleName(rule: EntryLogic): string
	/**
	 * Opens the editor of one logic rule as a side panel of the anchor rect, in screen pixels,
	 * placed exactly like the hotkey editor. The panel holds which side of the threshold the rule
	 * holds its value on, the threshold itself on the match clock, the driven value in the entry's
	 * own control, and removal. It draws no scrim of its own; the owner closes it.
	 */
	function OpenLogicPanel(entry: DriverHolder, rule: EntryLogic, anchor: ScreenRect): void
	/** Closes the logic editor panel if it is open. */
	function CloseLogicPanel(): void
	/** Whether the logic editor panel is showing this rule right now. */
	function IsLogicPanelOpenFor(rule: EntryLogic): boolean
}
