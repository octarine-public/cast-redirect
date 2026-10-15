// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * What ranks the sidebar: the names in their current order — top is the most important — and
	 * the move a drag performs. Bound to whatever really owns the order, an image selector's row
	 * being the usual owner, so a drag in the sidebar and a drag on the tiles write the same state.
	 *
	 * With `enabled` and `toggle` given, every ranked row also carries the switch: a dot on its
	 * right shows the state and a click on it flips it, through the same owner.
	 */
	interface IPageOrder {
		order(): readonly string[]
		move(from: number, to: number): void
		enabled?(name: string): boolean
		toggle?(name: string): void
	}
	/** The sidebar's hands, lent to the HUD-side drag: carry a held row, settle a dropped one. */
	interface ISidebarView {
		hold(name: string, dyDp: number): void
		settle(name: string): void
	}
	/**
	 * A floating window of real menu controls: a sidebar of pages on the left, and on the right
	 * the rows of whichever page is picked — rendered by the same renderer the menu's own pages
	 * use, animations, tooltips and drag'n'drop included.
	 *
	 * Every page is a {@link Node} living under the node given to the constructor, so everything a
	 * page holds persists through the ordinary config path; the pages only step off the menu page
	 * itself and out of search, because this window is where they are meant to be touched.
	 *
	 * It is an overlay card in every way that matters: registered with the {@link OverlayManager},
	 * so a click belongs to the front-most card under the cursor whichever kind it is, and the
	 * title-bar drag snaps to the other cards' edges and centres with the same accent guides and
	 * the same dragging outline. It stands on the HUD whenever the host lets overlays draw; while
	 * the menu is open its controls take the mouse — pages switch, tiles flip. With
	 * {@link BindPageOrder} the sidebar itself ranks: its rows are dragged into order, top first,
	 * through the same state the bound row persists.
	 *
	 * @example
	 * const window = new FloatingWindow(tab, "Dodge panel", 740, 220, () => toggle.value = false)
	 * const page = window.AddPage("upgrade_counterspell")
	 * page.AddDynamicImageSelector("Abilities", names, defaults)
	 */
	class FloatingWindow {
		public readonly Title: string
		constructor(holder: Node, Title: string, defaultX?: number, defaultY?: number, onClose?: (() => void) | undefined)
		/**
		 * Takes the window apart for good: the card unmounts, the overlay registration stops taking
		 * clicks, the outline surface is dropped and the config listener lets go of the instance. The
		 * pages added through {@link FloatingWindow.AddPage} stay in the menu tree - they belong to
		 * the node given at birth.
		 */
		public Destroy(): void
		/**
		 * Adds a page: an item in the sidebar, and a node whose rows fill the window while it is
		 * picked. The sidebar shows the node's localized name; its icon is resolved the way an image
		 * selector resolves a tile — the name through the image resolver first, `iconPath` where the
		 * name is not an image the game knows.
		 */
		public AddPage(name: string, iconPath?: string, tooltip?: string): Node
		/**
		 * Ranks the sidebar by `binding` and makes its rows draggable: a page named in the order
		 * sorts by it and is dragged into place, one the order does not name stays pinned on top.
		 */
		public BindPageOrder(binding: IPageOrder): void
		/** The ranking the sidebar is bound to, for the card that draws it. */
		public get OrderBinding(): Nullable<IPageOrder>
		/** Every page added so far, in the order they were added. */
		public get Pages(): readonly Node[]
		/** The name of the page the sidebar has picked. */
		public get Selected(): string
		/** One short localized line under the pages on how the window is used; empty shows none. */
		public get Hint(): string
		public set Hint(value: string)
		/** Whether the window is off the screen regardless of what the host would allow. */
		public get IsHidden(): boolean
		/**
		 * Claims the entrance for a card that just mounted: true the first time since the window came
		 * onto the screen, false for a card the menu rebuilt in place - a theme, a scale or a server
		 * change tears every tree down and mounts it again, and a window that never left has nothing
		 * to enter.
		 */
		public TakeEntrance(): boolean
		/** The window has left the screen for real, so its next card enters again. */
		public NoteOffScreen(): void
		/** Where this window stands in the stack of overlay cards, for its element's z-index. */
		public get StackOrder(): number
		/** Takes the window off the screen or puts it back, e.g. from a toggle's listener. */
		public SetHidden(hidden: boolean): void
		/** Picks a page, exactly like a click on its sidebar row. */
		public Select(name: string): void
		/** Opens the window's own node in the menu, which is what the title bar's right button asks. */
		public Reveal(): void
		/** What the title bar's close button does: the closer given at birth, or plain hiding. */
		public Close(): void
		/** Where the window stands, in px: the hand that drags it, else the sliders that keep it. */
		public get Position(): {
			x: number
			y: number
		}
		/**
		 * The sidebar's rows top to bottom: pages the order does not name pinned first, then the
		 * ranked ones in the bound order. One composition serves the card that draws the rows and
		 * the hit-test that picks one without them.
		 */
		public SidebarNames(): string[]
		/** Whether the card is on the screen this frame, for the capture its frost lives on. */
		public get IsMounted(): boolean
		/**
		 * The sidebar lends its hands: the transform that carries a held row and the wipe that
		 * settles it, so the HUD-side drag moves the same pixels the in-menu one does.
		 */
		public AttachSidebarView(view: Nullable<ISidebarView>): void
		/** The sidebar's scroll area lends its controller, so both input paths read the same rows. */
		public AttachSidebarScroll(controller: Nullable<ScrollController>): void
		/** How far the sidebar is scrolled down, in dp. */
		public get SidebarScrollDp(): number
		/**
		 * The game-event side of the sidebar's scrolling, for the closed menu: a wheel over the
		 * sidebar turns its rows exactly as the in-menu wheel does. Answers whether the game
		 * should still see the turn.
		 */
		public MouseWheel(up: boolean): boolean
		/** The row the HUD-side drag is holding, for the sidebar to dress and to spare gliding. */
		public get HeldRow(): Nullable<string>
		/** The card hands its root over so the input can hit-test and drag it. */
		public AttachRoot(element: Nullable<HTMLElement>): void
		/** The card has left the screen for real: the manager forgets it took clicks anywhere. */
		public Release(): void
		/**
		 * Brings this window in front of every other overlay card, in what takes a click and in
		 * what is drawn over what; called the moment it is clicked, which is what click-to-front is.
		 */
		public Focus(): void
		/**
		 * One side of the input, fed from the game's own mouse events the way every overlay card
		 * is, open or closed menu alike — so the same checks arbitrate a click between this window
		 * and the cards drawn beside it. A press on the title bar starts the drag; with the menu
		 * closed a sidebar press arms its page or toggle until release, using geometry since the controls
		 * cannot be asked anything without the menu's cursor. Answers whether the game should
		 * still see the click.
		 */
		public MouseKeyDown(key?: VMouseKeys): boolean
		/** Lets go of whatever is held and writes it down; the click itself goes through. */
		public MouseKeyUp(key?: VMouseKeys): boolean
		/**
		 * The title bar's own listener, for the menu being open: the menu eats every click over
		 * this window before the game-event side ever hears of it — that is what keeps the click
		 * out of the game — so the drag has to start from the card itself. The cursor-follow,
		 * the snapping and the outline are the same either way; the menu's drag system carries
		 * the release, which its host delivers wherever the hand lets go.
		 */
		public BeginHeaderDrag(event: Event): void
		/**
		 * The once-per-frame heartbeat: keeps the manager's rectangle on the element, counts the
		 * window among the visible cards, and while the title bar is held follows the cursor
		 * through the manager's snapping — the accent guides and the outline included.
		 */
		public TickHud(): void
		/** Whether the cursor stands on this window, for the click the menu keeps off the game. */
		public CoversCursor(x: number, y: number, now: number): boolean
	}
	function TickFloatingWindows(): void
	/**
	 * Whether any floating window stands on the screen — which is a claim on the cursor: a host
	 * that frees its cursor for the menu frees it for these windows on the same terms, so their
	 * switches and pages can be touched without the menu standing open.
	 */
	function FloatingWindowsWantCursor(): boolean
	/**
	 * Whether the cursor stands on one of the floating windows while the menu is open, so the
	 * click that lands on its controls never reaches the game.
	 */
	function CursorOverFloatingWindows(): boolean
}
