// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Where the preview card stands: against one side of the menu window, or free of it. */
	const enum EPlace {
		Right = 0,
		Left = 1,
		Free = 2
	}
	/** Where the card is on screen and how much of it it takes, in pixels. */
	interface PlaceRect {
		readonly left: number
		readonly top: number
		readonly width: number
		readonly height: number
	}
	/**
	 * How far the card stands off the window it is docked to, and off the edge of the screen, in dp.
	 * What opens beside the card leaves the same air against it, so a row of the menu, the card and
	 * the settings of something on it read as one run of surfaces rather than as three placements.
	 */
	const CardGap = 6
	/**
	 * Where the card's corner goes this frame, in screen pixels. Every panel of one preview lays out
	 * from this one answer, so the stage covers the card's middle band wherever the card is standing.
	 *
	 * A carried card is under the hand. A docked one takes the side it was left on — or the other one
	 * when that side has no room for it — and rides the window's top edge. A detached one stands at
	 * its own share of the screen. All three are clamped onto the screen: neither a window dragged
	 * across it nor a resolution the card was never placed at can put it out of reach.
	 */
	function PlaceCard(window: WindowState, ratio: number, width: number, height: number): Readonly<PlaceRect>
	/**
	 * The card is taken by its header and follows the hand from the point it was grabbed by, held at
	 * the same place on itself however far it travels. Nothing is written until it is let go: a drag
	 * that ends against a side of the menu window docks the card there, and one that ends anywhere
	 * else leaves it exactly where the hand let go of it. One that never went anywhere leaves the
	 * card on whatever it was standing on, which a click on the header has to.
	 */
	function CarryCard(event: Event, from: Readonly<PlaceRect>): void
	/** The rectangle a drop would dock the card into, or nothing while it would land where it is. */
	function LandingMark(): Nullable<Readonly<ScreenRect>>
	/** Whether the hand is on the card; it wears the accent while it is being moved. */
	function IsCarrying(): boolean
	/**
	 * The rows the card's header offers: the two sides of the menu window, the card set loose where
	 * it stands, and the way back to how it was found. The row for the place the card already holds
	 * is dead, so the list says where the card is as well as where it can go.
	 */
	function PlaceMenuItems(): ContextMenuItem[]
}
