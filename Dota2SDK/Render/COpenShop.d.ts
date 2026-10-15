// AUTO-GENERATED - do not edit.
/**
 * The shop the game opens over the HUD.
 *
 * There is one shop panel; its width follows the mode the player is in, so the compact and the
 * wide shop are the same panel reporting different sizes rather than two layouts to pick between.
 */
declare class COpenShop extends CHUDSection {
	constructor(hud: HUDPanel)
	/** The whole shop, guide flyout included. */
	public get Shop(): Nullable<Rectangle>
	/** The shop without the guide flyout. */
	public get Main(): Nullable<Rectangle>
	/** The search field and the shop's filter buttons. */
	public get Header(): Nullable<Rectangle>
	/** The item grid. */
	public get Items(): Nullable<Rectangle>
	/** The row of pinned basic items under the grid. */
	public get PinnedItems(): Nullable<Rectangle>
	/** The "combines into" strip at the bottom of the shop. */
	public get ItemCombines(): Nullable<Rectangle>
	/** The item-build guide column beside the shop. */
	public get GuideFlyout(): Nullable<Rectangle>
	/**
	 * True while the game is showing the shop.
	 *
	 * The panel cannot answer this: Dota slides the shop away with a CSS transform, which never
	 * reaches layout, so a closed shop still reports itself laid out and visible where it sits
	 * when open. The engine's own flag is the only honest source.
	 */
	public get IsOpen(): boolean
	public DebugDraw(): void
}
