// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface OverflowHintStyle {
		readonly background: string
		readonly color: StyleColor
		readonly fontSizeDp: number
		readonly heightDp: number
		/** Space between the leading icon or dot and the label, as the row lays it out. */
		readonly gapDp: number
		/** Inset of the leading icon or dot from the row's left edge; omitted keeps the default. */
		readonly padLeftDp?: number
		readonly activeBar: boolean
		readonly iconPath?: string
		/** Set when the row wraps its icon in a fixed box, so the hint lays it out the same. */
		readonly iconBoxed?: boolean
		readonly iconSizeDp?: number
		/** Width-to-height ratio of the leading icon; omitted keeps the square default. */
		readonly iconAspectRatio?: number
		readonly iconTint?: boolean
		readonly iconRound?: number
		/** Tint of the leading icon as the row paints it; omitted tints it with `color`. */
		readonly iconColor?: StyleColor
		readonly dotColor?: StyleColor
	}
	/**
	 * Stands the full label over a row whose label is cut, for as long as the row is hovered. While
	 * the list holding the row scrolls the hint stays down, and it comes back over whichever row
	 * the cursor rests on once the list stops.
	 */
	function ShowOverflowHint(row: HTMLElement, label: HTMLElement, text: string, style: OverflowHintStyle): void
	/** Keeps the hint off a row that is moving under it; runs once a frame, after the scroll areas. */
	function TickOverflowHint(): void
	function HideOverflowHint(row?: object): void
}
