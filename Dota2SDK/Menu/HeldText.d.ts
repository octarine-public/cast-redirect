// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A reading that keeps showing the last text the host has measured. RmlUi reports a text it has
	 * not measured yet as 0 wide, and a plate sized to that would stand a frame without its text and
	 * then widen; the reading before holds until the new one is measured instead.
	 * @example
	 * private readonly reading = new MenuSDK.HeldText(text => MenuSDK.HudText.Width(text, FONT, WEIGHT))
	 *
	 * if (!this.reading.Take(time.toFixed(0))) {
	 *     return
	 * }
	 * const width = pad + this.reading.Width
	 * MenuSDK.HudText.Draw(x, centerY, this.reading.Text, FONT, color, WEIGHT)
	 */
	class HeldText {
		/** The text to draw: the latest one measured, empty until any has been. */
		public Text: string
		/** How wide {@link Text} stands at the size it was last taken at, 0 while nothing is measured. */
		public Width: number
		/** @param measure How wide a text stands at the size and scale in force, 0 while unmeasured. */
		constructor(measure: (text: string) => number)
		/**
		 * Takes `text` once it is measured and otherwise keeps the reading before it, measured again so
		 * a new size or scale still applies to it. False while there is nothing measured to show, which
		 * is a frame to skip.
		 */
		public Take(text: string): boolean
		/** Forgets the reading, so the next one shows only once it is measured. */
		public Clear(): void
	}
}
