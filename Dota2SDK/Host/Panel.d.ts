// AUTO-GENERATED - do not edit.
/**
 * A Panorama panel together with the chain of its ancestors.
 *
 * Panorama reports offsets relative to the parent and gives no way to walk upwards, so the
 * chain is what makes {@link Panel.Rect} possible. Resolve a panel once and keep the instance:
 * every read is a native call, and re-resolving walks the whole window tree.
 */
declare class Panel {
	public get Native_(): IUIPanel
	/** False once the game has destroyed the panel — resolve it again to keep using it. */
	public get IsValid(): boolean
	/**
	 * False when the panel or any of its ancestors is hidden.
	 *
	 * A hidden panel keeps its layout rectangle — the HUD hides the minimap without moving or
	 * resizing it — so the flag is the only thing telling the two states apart, and it is set
	 * on the ancestor rather than on the panel itself.
	 */
	public get IsVisible(): boolean
	/**
	 * The panel rectangle in screen pixels, or undefined when the panel is gone, hidden, or
	 * takes part in no layout. Panels that are not laid out report an offset of FLT_MAX and a
	 * zero size.
	 *
	 * The CSS `ui-scale` is already in the rectangle: it takes part in layout, and the panel's
	 * children are laid out in the same scaled pixels. A paint-time `transform` or
	 * `pre-transform-scale2d` is invisible here: a panel an animation shrinks or slides that way
	 * still reports its untransformed layout rectangle.
	 * @example
	 * const rect = panel.Rect
	 * if (rect !== undefined) {
	 * 	Renderer.OutlinedRect(rect.pos1, rect.Size)
	 * }
	 */
	public get Rect(): Nullable<Rectangle>
	/**
	 * The part of {@link Rect} that no ancestor clips away, or undefined when nothing of the
	 * panel reaches the screen.
	 *
	 * A panel may overflow its parent: zooming the minimap grows its render surface to more
	 * than three times the container that holds its place in the HUD, while the container
	 * itself does not move. {@link Rect} stays the rectangle the panel maps its contents onto —
	 * the one to project world coordinates through — and this is the area drawing may touch.
	 * @example
	 * const clip = panel.VisibleRect
	 * if (clip !== undefined) {
	 * 	canvas.Image(path, pos, size, { color, clip })
	 * }
	 */
	public get VisibleRect(): Nullable<Rectangle>
	/** True when the panel carries the given CSS class. */
	public HasClass(name: string): boolean
	/** True when the panel or any of its ancestors carries the given CSS class. */
	public AscendantHasClass(name: string): boolean
	/**
	 * Shows or hides the panel, the way the game does when it folds a HUD element away. A write
	 * to the game's tree: run it on the main thread, through `MainThread.Queue`.
	 * @example
	 * await MainThread.Queue(() => chat?.SetVisible(false))
	 */
	public SetVisible(visible: boolean): void
	/**
	 * Finds a descendant by id at any depth, keeping the ancestor chain intact.
	 * @example
	 * const map = hud.Find("map_render")
	 */
	public Find(id: string): Nullable<Panel>
	public static Resolve_(root: IUIPanel, id: string): Nullable<Panel>
	public static Wrap_(root: IUIPanel): Panel
	public static Root_(window: string): Nullable<IUIPanel>
}
