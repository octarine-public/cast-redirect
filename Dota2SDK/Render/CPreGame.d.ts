// AUTO-GENERATED - do not edit.
/**
 * The hero selection screen: the roster header both teams pick under, and the screens the game
 * swaps through it — hero grid, strategy time, player draft and ability draft.
 *
 * A coach slot only takes part in layout while that team has a coach, so its rectangle is
 * undefined the rest of the time; there is nothing to ask the game about separately.
 */
declare class CPreGame extends CHUDSection {
	constructor(hud: HUDPanel)
	/** The whole hero selection screen. */
	public get PreGame(): Nullable<Rectangle>
	/** The roster header carrying both teams and the clock. */
	public get Header(): Nullable<Rectangle>
	/** The clock block between the two rosters. */
	public get Center(): Nullable<Rectangle>
	/** The countdown label itself. */
	public get Clock(): Nullable<Rectangle>
	/** The Radiant coach slot; undefined while that team has no coach. */
	public get RadiantCoach(): Nullable<Rectangle>
	/** The Dire coach slot; undefined while that team has no coach. */
	public get DireCoach(): Nullable<Rectangle>
	/** True while the Radiant coach slot takes part in layout. */
	public get HasRadiantCoach(): boolean
	/** True while the Dire coach slot takes part in layout. */
	public get HasDireCoach(): boolean
	/** The hero grid and the pick controls beside it. */
	public get HeroGrid(): Nullable<Rectangle>
	/** The strategy-time screen. */
	public get StrategyScreen(): Nullable<Rectangle>
	/** The player draft screen. */
	public get PlayerDraftScreen(): Nullable<Rectangle>
	/** The ability draft screen. */
	public get AbilityDraft(): Nullable<Rectangle>
	/** The Radiant/Dire side picker of a lobby. */
	public get TeamPicker(): Nullable<Rectangle>
	/** The lane-selection minimap under the hero grid. */
	public get Minimap(): Nullable<Rectangle>
	/** Counts both rosters while the reading is open, so the first script to ask sees them. */
	public Refresh(): void
	public get RadiantPlayers(): Nullable<Rectangle>[]
	public get DirePlayers(): Nullable<Rectangle>[]
	public get RadiantPlayersHeroImages(): Nullable<Rectangle>[]
	public get DirePlayersHeroImages(): Nullable<Rectangle>[]
	public get RadiantPlayersNames(): Nullable<Rectangle>[]
	public get DirePlayersNames(): Nullable<Rectangle>[]
	public get RadiantPlayersHeroNames(): Nullable<Rectangle>[]
	public get DirePlayersHeroNames(): Nullable<Rectangle>[]
	public get RadiantPlayersRoles(): Nullable<Rectangle>[]
	public get DirePlayersRoles(): Nullable<Rectangle>[]
	public DebugDraw(): void
}
