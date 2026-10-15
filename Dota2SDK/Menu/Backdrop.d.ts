// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Whether a preview stage stands its sample against daylight rather than the card's own dark
	 * glass. An overlay is read over the world and never over the menu, and a color that carries
	 * across a dark corridor can be gone against a wall in the sun — which is worth finding out on
	 * the card rather than in a fight. It answers for the stage of every preview at once.
	 */
	const PreviewDaylight: Toggle
	/**
	 * How bright that wall stands, in percent of the light behind it. The stage is the brightest
	 * thing on the screen while it is lit, so how far the switch goes is the user's to say — a wall
	 * bright enough to judge white text against is brighter than one worth leaving on.
	 */
	const DaylightBrightness: Slider
	/**
	 * The light one preview stage stands in. A card holds one and hands it the stage element; the
	 * fade paints all of them together, so two cards on screen are lit alike and one that arrives
	 * part way through comes up at the light the others already stand in rather than at nothing.
	 */
	class CStageBackdrop {
		constructor()
		/**
		 * The stage element, as react hands it over. It is a bound property rather than a method, so
		 * the same setter is handed over on every render instead of a ref torn down around each one.
		 */
		public readonly Ref: React.RefCallback<HTMLElement>
		/** Writes the light straight to the element: what moves here is a color, not the structure. */
		public Paint(): void
	}
	/** Opens the backdrop's own rows beside the card asking for them, for a right click on its chip. */
	function OpenDaylightSettings(stage: Readonly<ScreenRect>): void
	/**
	 * Takes those rows off the screen again, for a card leaving it. The panel stands beside the card
	 * it was opened from and says nothing of itself, so one left behind by a page change is a sheet
	 * of settings floating over the menu with nothing to point at.
	 */
	function CloseDaylightSettings(): void
}
