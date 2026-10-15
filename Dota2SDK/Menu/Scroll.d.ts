// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	class ScrollController {
		constructor(root: HTMLElement, content: HTMLElement, lead: HTMLElement, tail: HTMLElement, thumb: HTMLElement, thumbFill: HTMLElement, fadeTop?: HTMLElement, fadeBottom?: HTMLElement)
		public get Offset(): number
		public ScrollBy(deltaPx: number): void
		public ScrollTo(offsetPx: number): void
		/**
		 * Keeps the area scrolling at `speedDp` dp a second, positive towards the end, until told
		 * otherwise — for a drag held against the area's edge, which has to go on scrolling while the
		 * pointer stands still. `onStep` hears every step, so whatever the drag carries can keep its
		 * place under the pointer. A speed of 0 stops it.
		 *
		 * @example
		 * scroller.Drift(pointerY > bottom - Edge ? 400 : 0, () => follow())
		 */
		public Drift(speedDp: number, onStep?: () => void): void
		/**
		 * Puts the offset back where an area was left, as soon as there is content to scroll
		 * through: a freshly mounted area has not been laid out yet, so placing it right away
		 * would clamp it to the top. The attempt gives up once the content settles shorter than
		 * the offset asked for, and a scroll of the area's own cancels it outright.
		 */
		public RestoreOffset(offsetPx: number): void
		public ScrollToDescendant(target: HTMLElement): void
		public ScrollToChild(child: HTMLElement): void
		public OnWheel(event: Event): void
		public OnThumbDown(event: Event): void
		public OnHover(hovered: boolean): void
		public OnThumbHover(hovered: boolean): void
		public Tick(now: number): void
		public Sync(): void
	}
	/**
	 * Hands the content area over to a controller, which takes back the offset the area was left
	 * at. The window mounts a new one every time it opens - a closed menu drops its whole body -
	 * so the offset is kept here rather than in the controller that measured it.
	 */
	function SetContentScroll(controller: Nullable<ScrollController>): void
	/**
	 * Names the page the content area is showing. A page it is already on keeps the offset it was
	 * left at, so reopening the menu lands where it was; any other page starts at the top.
	 */
	function SetContentPage(page: string): void
	function ContentScroll(): Nullable<ScrollController>
	function RequestScrollTo(entry: object): void
	function TickScrollAreas(now: number): void
	function ResetScrollAreas(): void
	/**
	 * A scroll area. `fade` names the surface the area lies on and turns the edge scrims on: a strip
	 * of that colour over each edge the content runs past, so a cut row fades out instead of ending
	 * on the border.
	 */
	function Scroll(props: {
		style?: RmlStyle
		fade?: keyof IThemePalette
		controller?: (controller: Nullable<ScrollController>) => void
		rootRef?: (element: Nullable<HTMLElement>) => void
		children?: React.ReactNode
	}): React.ReactElement
}
