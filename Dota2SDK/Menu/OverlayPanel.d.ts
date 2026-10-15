// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface IOverlayMenu {
		Position: Vector2
		Scale?: number
		/**
		 * Menu row a right-click on the panel reveals while the menu is open. A menu without one
		 * leaves the right button alone.
		 */
		readonly SetupEntry?: Entry
	}
	class OverlayMenu implements IOverlayMenu {
		/** The node the panel's rows live under: what a right-click on the panel opens. */
		public readonly SetupEntry: Entry
		protected readonly x: Slider
		protected readonly y: Slider
		protected readonly scale: Slider
		/**
		 * The panel's place is carried by the hand that drags it, so the two sliders holding it stay
		 * out of the page: they are where the place is kept and read back from a config, not how it
		 * is set.
		 *
		 * The size can be carried the same way, by a panel that offers a corner to pull, but its
		 * slider stays on the page: aiming at a corner is not the only way anyone should be able to
		 * resize a card. Sizes use whole percentages by default; pass `1` as `scalePrecision` for
		 * tenths of a percent. `defaultScale` is the size, in percent, the panel starts at.
		 * @example
		 * new MenuSDK.OverlayMenu(node, 0, 309, 0, 82)
		 */
		constructor(node: Node, defaultX: number, defaultY: number, scalePrecision?: number, defaultScale?: number)
		public get Scale(): number
		/** Held to the range the slider offers, so a pulled corner cannot leave it unreachable. */
		public set Scale(next: number)
		public get Position(): Vector2
		public set Position(position: Vector2)
		/** Takes the whole block off the page, or gives back the one row of it a page ever shows. */
		public SetHidden(hidden: boolean): void
	}
	/**
	 * A card pinned to a point in the world rather than to the screen. Same immediate-mode content
	 * callback as {@link OverlayPanel}, but there is nothing to drag and nothing to persist: the
	 * anchor comes from the caller every frame.
	 *
	 * @example
	 * if (!panel.Draw(head, size, distance, origin => HudCard.Frame(new Rectangle(origin, origin.Add(size))))) {
	 *     // off screen this frame, nothing was drawn
	 * }
	 */
	class WorldPanel {
		constructor(key?: string)
		/** Draws the card centred above `world`, or hides it and answers `false` when off screen. */
		public Draw(world: Vector3, size: Vector2, distance: number, content: (origin: Vector2) => void): boolean
		public Hide(): void
		/**
		 * Lets go of the panel's surface for good, for a card whose anchor is gone - the entity
		 * despawned, the marker picked up. A kept surface is walked by the frame gate every tick for
		 * the rest of the session; a panel built again under the same key opens a fresh one.
		 */
		public Destroy(): void
	}
	/**
	 * When a screen panel stands. The host's overlay gate closes on the game's own screens and
	 * outside a match; each life names what a panel answers to beyond it.
	 */
	const enum EPanelLife {
		/** Only while the host lets overlays draw: inside a match, no game screen over it. */
		Overlay = 0,
		/**
		 * Also while the menu is open — a window the user opened the menu to use is there on the
		 * main menu too.
		 */
		MenuBound = 1,
		/**
		 * Also anywhere outside a match, menu open or not: a card meant to live on every screen —
		 * a music player. In a match it still yields to the game's own screens.
		 */
		Standalone = 2,
		/**
		 * Ignores the host overlay gate: for a panel intentionally paired with one of the game's own
		 * screens, such as a companion shown while the scoreboard key is held.
		 */
		Always = 3
	}
	class OverlayPanel {
		/** @param life when the panel stands; see {@link EPanelLife}. */
		constructor(menu: IOverlayMenu, key?: string, life?: EPanelLife)
		public get Scale(): number
		/** Whether the panel is in hand right now, being carried by the cursor. */
		public get Dragging(): boolean
		/**
		 * Brings this panel in front of every other one, in what is drawn and in what takes a click.
		 * A window calls it the moment it is clicked, which is what click-to-front is.
		 */
		public Focus(): void
		/**
		 * Whether this panel owns the cursor right now: true only while it is the front-most one
		 * under it. A window with anything clickable of its own gates that on this, so the window
		 * behind does not answer a click that landed on the one in front.
		 */
		public HandlesInput(): boolean
		/**
		 * Extra ground that counts as part of this panel while a click is arbitrated - a dropdown or
		 * a context menu standing outside its rect, a handle hanging off its edge. A press on it
		 * starts a drag and a right-click opens the setup row the same as one on the panel itself.
		 * Pass nothing to clear it.
		 */
		public SetInputExtent(extent?: Rectangle): void
		/**
		 * @param dragHandleHeight how much of the panel's top edge starts a drag, in px. Nothing (the
		 * default) makes the whole panel grabbable; a window with anything draggable of its own gives
		 * its title bar's height, so a drag inside the content never moves the window.
		 */
		public Draw(size: Vector2, content: (origin: Vector2) => void, dragHandleHeight?: number): void
		public MouseKeyDown(key?: VMouseKeys): boolean
		public MouseKeyUp(): boolean
		public Reset(): void
		/**
		 * Takes the panel apart for good: the surface is dropped, the overlay registration stops
		 * taking clicks and the config listener lets go of the instance. For a panel owned by
		 * something that dies mid-session; one built again under the same key starts fresh. The menu
		 * rows given at birth stay where they are - they belong to whoever added them.
		 */
		public Destroy(): void
	}
}
