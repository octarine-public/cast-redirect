// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Where the chip sits against its anchor. "bottom" centres under it; "below" hangs under the
	 * anchor's left edge instead, for rail rows whose right side is somebody else's content.
	 */
	type ChipPlacement = "right" | "top" | "bottom" | "below"
	/**
	 * The soft drop a floating chip casts: close and wide enough to read around a one-line
	 * surface, where the panels' long throw would land entirely under it.
	 */
	const ChipShadow = "0 4dp 14dp #00000080"
	/**
	 * Shows the chip beside its anchor. For an anchor whose chip is already up, the chip is rewritten
	 * in place: a value that changes under the wheel keeps its chip standing instead of blinking it
	 * away and fading it back in on every notch.
	 */
	function ShowChipTooltip(anchor: HTMLElement, text: string, placement: ChipPlacement, caption?: string, elevation?: "flat" | "raised", icon?: string): void
	function HideChipTooltip(anchor?: object): void
}
