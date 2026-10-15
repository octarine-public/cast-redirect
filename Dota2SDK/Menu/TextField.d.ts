// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function TextField(props: {
		entry: TextEntry
		style?: RmlStyle
		radius?: number
		leadIcon?: string
		placeholder?: string
		/**
		 * Laid-out width of the field in dp. A placeholder that does not fit the remaining room is
		 * shortened with an ellipsis while retaining the field's own wording.
		 */
		width?: number
		/**
		 * Drops the field's own chrome — the surface fill, border, focus ring and horizontal
		 * padding — so typing starts where the host lays the field out. For hosts that draw
		 * the surroundings themselves, like the search modal's input row.
		 */
		bare?: boolean
		/**
		 * Paints the border in the danger tone while the entered value is known to be rejected —
		 * a share code the server refused. The host derives it from the current text, so the
		 * tint clears as soon as the value is edited.
		 */
		invalid?: boolean
		/** The longest text the field takes: what is typed past it is cut and the field snaps back. */
		maxLength?: number
		autoFocus?: boolean
		/**
		 * Type overrides for the input itself, for a field that edits text shown in place - a name
		 * that turns into its own rename field keeps its font, weight and colour.
		 */
		inputStyle?: RmlStyle
		onKeyDown?: (event: Event) => boolean
	}): React.ReactElement
}
