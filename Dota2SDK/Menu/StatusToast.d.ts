// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type StatusTone = "success" | "warn" | "error"
	/**
	 * Floats a transient status card over the bottom of the menu window — the outcome of a cloud
	 * operation («Theme saved», «Theme not found») or of an action on the page («CZ75-Auto | Yellow
	 * Jacket» over «added to inventory») shown without reflowing the page underneath. `text` is the
	 * headline; `detail`, when given, is the quieter second line under it. One toast lives at a
	 * time; a new status replaces the visible one. A line under the text drains for as long as the
	 * toast has left: warnings and errors stay a few seconds longer than confirmations. The cursor
	 * resting on the card holds it - the line fills back up and the count starts over once the cursor
	 * leaves - and a click anywhere on the card dismisses it early.
	 *
	 * @example
	 * ShowStatusToast(t("Theme saved"), "success")
	 * ShowStatusToast(item.label, "success", t("added to inventory"))
	 * ShowStatusToast(t("Safe mode disabled"), "warn", t("You can turn it back on in Settings"))
	 */
	function ShowStatusToast(text: string, tone: StatusTone, detail?: string): void
	/**
	 * Keeps the toast pinned to the bottom center of the menu window while it moves or resizes,
	 * falling back to the screen when the window is closed; ticked once per frame with the other
	 * overlays.
	 */
	function TickStatusToast(): void
	interface IStatusSource {
		Status: string
		StatusIsError: boolean
		ClearStatus(): void
	}
	/**
	 * Routes a cloud store's status field into the floating toast: whenever the store reports an
	 * outcome, the message pops up over the window and the store is cleared right away, so the
	 * page itself never grows a banner that pushes its content down.
	 *
	 * @example
	 * useStatusToast(ThemeCloud)
	 */
	function useStatusToast(source: IStatusSource): void
}
