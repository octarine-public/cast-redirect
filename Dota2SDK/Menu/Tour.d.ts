// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Landmark a tour step can highlight: the section rail, the search pill, the
	 * quick buttons or the whole content column. Exactly one carrier per key is
	 * mounted in either window layout.
	 */
	type TourAnchorKey = "rail" | "search" | "controls" | "page"
	/**
	 * Registers the live element a tour step measures its spotlight against.
	 * Pass the element from a ref callback and undefined on unmount.
	 *
	 * @example
	 * <div ref={element => SetTourAnchor("rail", element ?? undefined)} />
	 */
	function SetTourAnchor(key: TourAnchorKey, element: Nullable<HTMLElement>): void
	/**
	 * Drives the open tour once per menu frame: remeasures the highlighted
	 * element so the spotlight holds onto it through animations, layouts and
	 * resizes, and keeps the step card beside the cutout. While the tour is
	 * closed it opens the tour by itself on the first launch, once the intro
	 * has finished.
	 */
	function TickTour(now: number): void
	/**
	 * Opens the step-by-step menu tour: the window slides to the middle of the
	 * screen, dims, a cutout highlights the live element of the current step and
	 * a card beside it explains what it is. The tour walks the menu through the
	 * same navigation the user would.
	 */
	function OpenTour(): void
	/** Closes the tour and remembers that it was shown. */
	function CloseTour(): void
	function IsTourOpen(): boolean
	/**
	 * Registers the tour's localization strings and the Settings → Assistant
	 * page holding the launch button.
	 */
	function SetupTourMenu(): void
}
