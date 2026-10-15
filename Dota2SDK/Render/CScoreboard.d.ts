// AUTO-GENERATED - do not edit.
/** The full scoreboard the game folds out over the HUD. */
declare class CScoreboard extends CHUDSection {
	constructor(hud: HUDPanel)
	/** The panel the scoreboard paints itself onto; undefined while it is folded away. */
	public get Background(): Nullable<Rectangle>
	/** The Radiant half of the player table. */
	public get RadiantTeam(): Nullable<Rectangle>
	/** The Dire half of the player table. */
	public get DireTeam(): Nullable<Rectangle>
	/**
	 * True while the game is showing the scoreboard.
	 *
	 * The panel cannot answer this: once the scoreboard has been opened the first time it stays
	 * laid out and visible, and the game folds it away with a CSS transform that never reaches
	 * layout. The convar the game drives it with is the only honest source.
	 */
	public get IsOpen(): boolean
	public DebugDraw(): void
}
