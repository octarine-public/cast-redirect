// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type LayoutMode = "side" | "top"
	interface WindowSizePreset {
		name: string
		w: number
		h: number
	}
	interface WindowState {
		x: number
		y: number
		w: number
		h: number
		rail: number
		sub: number
		collapsed: boolean
		layout: LayoutMode
		confirmTabReset: boolean
		sizePresets: WindowSizePreset[]
		opened: boolean
	}
	const MinWidth = 560
	const MinHeight = 600
	const DefaultWidth = 1104
	const DefaultHeight = 704
	/** The corner the window is carved with, which its clip, its glow and its edges follow. */
	const FrameRadius = 10
	const RailMin = 48
	const RailDefault = 176
	const RailMax = 280
	const RailNarrow = 120
	const SubMin = 120
	const SubMax = 300
	const MainMin = 360
	const TopNavH = 52
	const TopBarH = 52
	const RailHeaderH = 100
	const CollapseRowH = 40
	const ControlsRowH = 64
	const ControlsRowVerticalH = 156
	const MaxWindowSizePresets = 12
	const MaxWindowSizePresetName = 40
	function WindowSnapshot(): WindowState
	/** The window's own element, which a drag writes its place straight onto. */
	function SetWindowFrame(element: Nullable<HTMLElement>): void
	/**
	 * Moves the window while it is being carried: the place lands in the state and on the frame, and
	 * the window's own tree is not told. Telling it is what a drag cannot afford - its render walks
	 * the rail, the page and every card on it, and a drag asks for a new place every frame. What
	 * reads the window between frames - the glass clip, a hit test - reads the state and so follows
	 * along, what is placed against it renders off {@link SubscribeWindowDrag}, and
	 * {@link NotifyWindow} settles the rest on the drop.
	 *
	 * @example
	 * BeginDrag((x, y) => DragWindow(originX + DpToPx(x) - startX, originY + DpToPx(y) - startY))
	 */
	function DragWindow(x: number, y: number): void
	/**
	 * Places an absolutely positioned overlay element centered over the menu
	 * window, falling back to the screen center while the window is closed,
	 * clamped to the screen. Returns false while the element has no layout
	 * size yet and was left untouched.
	 */
	function CenterOverWindow(element: HTMLElement): boolean
	function WindowVersion(): number
	/**
	 * How many times the window has been moved by a hand on it. A drag writes the window's place
	 * straight onto its frame and leaves {@link WindowVersion} alone, so the window's own tree is not
	 * built again for a move it has already made - and whatever is placed against the window instead
	 * of inside it would stand still while the window walks out from under it. This is what tells
	 * those, and it costs a render of them alone.
	 */
	function WindowDragVersion(): number
	/**
	 * Follows the window while it is carried. It is not the whole of the window's story - a settle, a
	 * resize, a preset all come through {@link SubscribeWindow} - so something laid out from where the
	 * window stands takes both.
	 *
	 * @example
	 * React.useSyncExternalStore(SubscribeWindow, WindowVersion)
	 * React.useSyncExternalStore(SubscribeWindowDrag, WindowDragVersion)
	 */
	function SubscribeWindowDrag(onChange: () => void): () => void
	function SubscribeWindow(onChange: () => void): () => void
	function UpdateWindow(patch: Partial<WindowState>): void
	function SaveWindowState(): void
	function SaveWindowSizePreset(name: string): void
	function RemoveWindowSizePreset(name: string): void
	function NotifyWindow(): void
	function ClampWindow(patch?: Partial<WindowState>): void
	/**
	 * Repositions the window across a menu scale change so the layout point under
	 * the cursor keeps its screen position — the control that triggered the change
	 * stays under the cursor instead of sliding away with the resize. Skipped when
	 * the cursor is outside the window.
	 */
	function AnchorWindowToScale(previous: number, next: number): void
	function RailIsIconOnly(): boolean
	interface WindowColumns {
		rail: number
		sub: number
		main: number
	}
	/**
	 * Resolves the rendered width of the three window columns. The rail and the sub
	 * panel keep their stored width as a preference; whatever does not fit next to
	 * a {@link MainMin} wide content column is taken back from the sub panel first
	 * and from the rail second, so a narrow window never squeezes the controls out
	 * of the frame and a widened one restores both panels on its own.
	 *
	 * @example
	 * const widths = WindowColumnWidths(WindowSnapshot(), showSub)
	 * const mainLeft = widths.rail + widths.sub
	 */
	function WindowColumnWidths(snapshot: WindowState, showSub: boolean): WindowColumns
	function WindowConfigValue(): Omit<WindowState, "opened">
	function ApplyWindowConfig(value: unknown): void
}
