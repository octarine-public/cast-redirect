// AUTO-GENERATED - do not edit.
/**
 * One region of the game's HUD, backed by the panels Panorama lays out for it.
 *
 * Every rectangle a section hands out is the game's own, measured this frame; a rectangle is
 * undefined while the panel behind it is gone or takes part in no layout.
 */
declare abstract class CHUDSection {
	protected readonly hud: HUDPanel
	constructor(hud: HUDPanel)
	/** Outlines every panel the section knows about, for `GUIInfo.debugDraw`. */
	public abstract DebugDraw(): void
	/**
	 * Brings the section's own rectangles up to date for this reading.
	 *
	 * A rectangle that comes straight off a panel re-measures itself whenever it is read, so a
	 * caller may hold on to it. One the section works out for itself — a panel moved to where
	 * the game paints it, or geometry borrowed from another slot — lives in a rectangle the
	 * section owns, and that one would sit frozen until something read it again. GUIInfo calls
	 * this at every reading, while it is still open, so both kinds behave alike, a held
	 * reference never goes stale, and whatever a section asks about here is answered at once.
	 */
	public Refresh(): void
	protected Draw(rect: Nullable<Rectangle>, color: Color): void
	/**
	 * Outlines a panel only while the game has it on screen.
	 *
	 * A rectangle alone cannot say that: the game keeps panels laid out while painting nothing
	 * into them, and outlining those would put boxes over bare sky.
	 */
	protected DrawPanel(panel: HUDPanel, color: Color): void
	protected DrawPanels(panels: HUDPanel[], color: Color): void
	protected DrawEach(rects: Nullable<Rectangle>[], color: Color): void
	/**
	 * The rectangles of every panel, in order, written into `target` so that reading a list every
	 * frame allocates nothing.
	 */
	protected Rects(target: Nullable<Rectangle>[], panels: HUDPanel[]): Nullable<Rectangle>[]
	/**
	 * The rectangles of every panel the game gives a size to, in order, written into `target`. A
	 * panel the game keeps at zero width holds a slot it is not currently using, and is left out.
	 */
	protected FilledRects(target: Rectangle[], panels: HUDPanel[]): Rectangle[]
	/**
	 * The smallest rectangle covering every panel that is laid out, written into `target` so no
	 * allocation happens per frame. Undefined when none of them is.
	 */
	protected Union(target: Rectangle, panels: HUDPanel[]): Nullable<Rectangle>
}
