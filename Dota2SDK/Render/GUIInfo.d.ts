// AUTO-GENERATED - do not edit.
/**
 * Where the game's HUD is on screen, read from Panorama rather than guessed.
 *
 * Every rectangle comes from the panel the game itself lays out, so resolution, HUD scale, a
 * flipped minimap, an extra-large minimap, a hero with six abilities or a courier with none all
 * report correctly with nothing to configure. A rectangle is undefined while the panel behind it
 * is gone or takes part in no layout — that is the signal to skip drawing, not a reason to fall
 * back on a guess.
 * @example
 * const inventory = GUIInfo.LowerHUD.MainInventorySlots[0]
 * if (inventory !== undefined) {
 * 	RendererSDK.OutlinedRect(inventory.pos1, inventory.Size)
 * }
 */
declare class CGUIInfo {
	public debugDraw: boolean
	public MenuScale: number
	/** The root of the HUD window, the entry point for any panel the SDK does not name. */
	public get HUD(): HUDPanel
	public get TopBar(): CTopBar
	public get Minimap(): CMinimap
	/** The quickbuy, courier and stash block at the right of the lower HUD. */
	public get Shop(): CShop
	/** The shop the game opens over the HUD. */
	public get OpenShop(): COpenShop
	/** @deprecated the game lays out one shop — read {@link CGUIInfo.OpenShop}. */
	public get OpenShopMini(): COpenShop
	/** @deprecated the game lays out one shop — read {@link CGUIInfo.OpenShop}. */
	public get OpenShopLarge(): COpenShop
	public get PreGame(): CPreGame
	public get Scoreboard(): CScoreboard
	/** The lower HUD of the unit the game currently has selected. */
	public get LowerHUD(): CLowerHUD
	/** True while the player keeps the minimap on the right-hand side. */
	public get HUDFlipped(): boolean
	/**
	 * The root of any Panorama window, for panels outside the HUD.
	 * @example
	 * const dashboard = GUIInfo.Root(PanoramaWindow.Dashboard)
	 */
	public Root(window: PanoramaWindow): HUDPanel
	/**
	 * A panel under the HUD reached by walking direct children — the cheap lookup, and the one
	 * to prefer whenever the layout is known.
	 * @example
	 * const chat = GUIInfo.Panel("HUDElements", "HudChat")
	 */
	public Panel(...path: string[]): HUDPanel
	/**
	 * A panel under the HUD found by id at any depth. The lookup is cached, but the first one
	 * walks the whole window: prefer {@link CGUIInfo.Panel} where the path is known.
	 * @example
	 * const buffs = GUIInfo.Find("buffs")
	 */
	public Find(id: string): HUDPanel
	/** Draws the debug overlay from what the last reading found. */
	public OnDraw(): void
	/**
	 * Reads the HUD out of the game once a `Draw2D` pass.
	 *
	 * The reading is queued onto the main thread rather than done here. Panorama reads take no
	 * lock on the native side and scripts run on their own thread, so a panel read while the
	 * game is part-way through its own layout can be caught being destroyed; inside a
	 * main-thread session the game main thread is parked and cannot be. Parked is the cost: the
	 * game waits out the whole reading, and whatever the script thread still has queued before
	 * it - a server tick's worth of work on the frames that carry one. The pass runs at the tick
	 * rate on frames without a tick, so the main thread is parked a few dozen times a second,
	 * never behind a tick. The session is drained asynchronously, so every rectangle a script
	 * reads was measured a pass earlier — far less than the HUD takes to move anywhere.
	 */
	public OnDraw2D(): void
	/** Drops every cached panel; the next read looks them up in the game's tree again. */
	public Invalidate(): void
	public DebugDraw(): void
	/** How many abilities the game is showing for the selected unit. */
	public GetVisibleAbilities(): number
	/**
	 * @deprecated the game lays out the abilities of the unit it has selected, so the argument
	 * cannot change the answer — read {@link CGUIInfo.GetVisibleAbilities}.
	 */
	public GetVisibleAbilitiesForUnit(_ent?: Nullable<Entity>): number
	/**
	 * @deprecated the game lays out one lower HUD, for the unit it has selected, so the argument
	 * cannot change the answer — read {@link CGUIInfo.LowerHUD}.
	 */
	public GetLowerHUDForUnit(_unit?: Nullable<Unit>): CLowerHUD
	/** True when the position falls on any part of the HUD that swallows a click. */
	public Contains(position: Vector2): boolean
	public ContainsTopBar(position: Vector2): boolean
	public ContainsLowerHUD(position: Vector2): boolean
	public ContainsMiniMap(position: Vector2): boolean
	public ContainsShop(position: Vector2): boolean
	public ContainsShopButtons(position: Vector2): boolean
	public ContainsScoreboard(position: Vector2): boolean
	public ContainsTimeOfDayTimeUntil(position: Vector2): boolean
	public GetWidthScale(screenSize?: Vector2): number
	public GetHeightScale(screenSize?: Vector2): number
	public ScaleWidth(w: number, screenSize?: Vector2): number
	public ScaleHeight(h: number, screenSize?: Vector2): number
	public ScaleVector(w: number, h: number, screenSize?: Vector2): Vector2
	public ScaleWidthMenu(w: number, screenSize?: Vector2): number
	public ScaleHeightMenu(h: number, screenSize?: Vector2): number
}
declare const GUIInfo: CGUIInfo
