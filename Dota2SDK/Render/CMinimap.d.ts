// AUTO-GENERATED - do not edit.
/**
 * The minimap block and the buttons the game stacks beside it.
 *
 * Every rectangle follows the game: turning on `dota_hud_extra_large_minimap` or flipping the
 * HUD moves these panels and the numbers move with them, with nothing to configure.
 */
declare class CMinimap extends CHUDSection {
	constructor(hud: HUDPanel)
	/**
	 * The area the minimap region actually covers: the map square, the glyph/scan column and the
	 * timers beside it.
	 *
	 * This is a union of those panels rather than the container they sit in — the game lays that
	 * container across the full width of the screen, so it would claim the whole bottom strip.
	 */
	public get FullHUDContainer(): Nullable<Rectangle>
	/** The container the game gives the whole minimap region, spanning the screen's full width. */
	public get Container(): Nullable<Rectangle>
	/** The square the minimap occupies in the HUD. */
	public get Minimap(): Nullable<Rectangle>
	/**
	 * The surface the minimap draws the world onto — the rectangle to project world coordinates
	 * through. It overflows {@link CMinimap.Minimap} on every side.
	 */
	public get MinimapRenderBounds(): Nullable<Rectangle>
	/** The glyph of fortification button. */
	public get Glyph(): Nullable<Rectangle>
	/** The scan button. */
	public get Scan(): Nullable<Rectangle>
	/** The Roshan timer icon. */
	public get Roshan(): Nullable<Rectangle>
	/** The Tormentor timer icon. */
	public get Miniboss(): Nullable<Rectangle>
	/** Re-derives the union rectangle the section owns. */
	public Refresh(): void
	public DebugDraw(): void
}
