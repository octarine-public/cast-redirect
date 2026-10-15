// AUTO-GENERATED - do not edit.
/** Which rectangle of a top bar player slot to read. */
declare const enum PlayerRect {
	Slot = 0,
	HeroImage = 1,
	HealthBar = 2,
	ManaBar = 3,
	Buyback = 4,
	RespawnTimer = 5,
	TPIndicator = 6,
	TPIcon = 7,
	UltReadyIndicator = 8,
	Salute = 9,
	COUNT = 10
}
/**
 * One player slot of the top bar.
 *
 * The game gives only the first slot of each team a unique id and names the rest
 * `RadiantPlayer-1`, so slots are addressed by their position in the container.
 */
declare class CTopBarPlayer {
	/**
	 * How far below its layout box the game paints a health or mana bar, in 1080p pixels.
	 *
	 * The game keeps both bars at `opacity: 0` and only brings them up while ALT is held,
	 * and it slides them down as it does so — `dota_hud_top_bar.css` reads
	 * `.AltPressed .TopBarHealthBar { opacity: 1; transform: translateY( 11px ); }`, and the
	 * same for `.TopBarManaBar`. A transform never reaches layout, so Panorama reports both
	 * bars 11px above where they are drawn, overlapping the portrait instead of sitting
	 * under it. Read the rule back out of `pak01_dir.vpk` with ValveResourceFormat.
	 */
	public static readonly BarPaintOffset = 11
	constructor(slot: HUDPanel, 
	/** True for the half of the bar the stylesheet insets from the right. */
	mirrored: boolean)
	/**
	 * True while a player sits in this slot.
	 *
	 * The game keeps five slot panels per team whether or not five players are in the match and
	 * lays the spare ones out like the rest, so this is the only thing telling them apart.
	 */
	public get IsAssigned(): boolean
	/**
	 * True while the slot belongs to the team the local player is against.
	 *
	 * The game marks those slots itself, and that marking is exactly what decides whether it
	 * lays a health bar, mana bar or teleport indicator out at all: without vision it leaves
	 * them out of layout entirely. It is also which way round the slot's contents are slanted,
	 * so it says whether geometry taken from another slot has to be flipped.
	 */
	public get IsEnemy(): boolean
	public get Slot(): Nullable<Rectangle>
	public get HeroImage(): Nullable<Rectangle>
	public get HealthBar(): Nullable<Rectangle>
	public get ManaBar(): Nullable<Rectangle>
	public get Buyback(): Nullable<Rectangle>
	public get RespawnTimer(): Nullable<Rectangle>
	public get TPIndicator(): Nullable<Rectangle>
	/**
	 * The teleport icon as it is painted, which is smaller than the box it sits in.
	 *
	 * `dota_hud_top_bar.css` shrinks it with `#TopBarTPIcon { ui-scale: 80% }`, and a
	 * `ui-scale` is a transform about the panel's centre that layout knows nothing of — the
	 * indicator measures 51x51 while the icon is drawn at 40.8x40.8 inside it.
	 */
	public get TPIcon(): Nullable<Rectangle>
	public get UltReadyIndicator(): Nullable<Rectangle>
	public get Salute(): Nullable<Rectangle>
	/**
	 * Where the game paints this part of the slot: measured when it can be, and taken from
	 * the stylesheet when the game lays nothing out to measure.
	 */
	public Rect(kind: PlayerRect): Nullable<Rectangle>
	/**
	 * Where the game paints this part of the slot, which for the health and mana bars is
	 * below their layout box — see {@link CTopBarPlayer.BarPaintOffset}. Undefined while the
	 * game keeps the panel out of layout, which it does for anything it has no reason to draw
	 * yet and for anything belonging to a team there is no vision of.
	 */
	public Measured(kind: PlayerRect): Nullable<Rectangle>
	/**
	 * Where `dota_hud_top_bar.css` puts this part of the slot, for while the game lays nothing
	 * out to measure. Undefined for a part the stylesheet leaves to whatever is around it, and
	 * while the slot itself is out of layout.
	 */
	public Designed(kind: PlayerRect): Nullable<Rectangle>
	public Panel(kind: PlayerRect): HUDPanel
}
/**
 * One team's half of the top bar.
 *
 * The arrays handed out are reused between calls, so reading a second one rewrites the first:
 * copy what you need to keep.
 */
declare class CTopBarTeam {
	constructor(container: HUDPanel, banner: HUDPanel, score: HUDPanel, spectatorGold: HUDPanel, 
	/** True for the half of the bar the stylesheet insets from the right. */
	mirrored: boolean)
	public get Score(): Nullable<Rectangle>
	public get Background(): Nullable<Rectangle>
	public get Image(): Nullable<Rectangle>
	public get SpectatorGoldDisplay(): Nullable<Rectangle>
	/** One entry per player actually in the match on this team, in slot order. */
	public get Players(): CTopBarPlayer[]
	/**
	 * One rectangle per slot the game lays out for this team, in the game's own slot order, so
	 * index by a player's team slot. A slot with no player in it reads undefined rather than
	 * being dropped, which would shift every later index.
	 */
	public Rects(kind: PlayerRect): Nullable<Rectangle>[]
	/** Lets a team borrow the other side's geometry when the game lays out none of its own. */
	public PairWith(other: CTopBarTeam): void
	/**
	 * The geometry of this kind relative to the slot it sits in, taken from the first slot
	 * the game does lay it out for, and whether that slot is an enemy one. Undefined when
	 * this team has none to offer.
	 */
	public Offsets(kind: PlayerRect, target: Rectangle): Nullable<boolean>
	/** The panels of that kind belonging to slots a player actually sits in. */
	public Panels(kind: PlayerRect): HUDPanel[]
}
/**
 * The top bar: both team rosters, the score, the clock and the spectator gold readouts.
 *
 * Slot order follows the game's own layout, left to right on screen for both teams. Every array
 * property hands back an array the section reuses, so reading another one rewrites it: copy what
 * you need to keep past the next read.
 */
declare class CTopBar extends CHUDSection {
	constructor(hud: HUDPanel)
	/** The whole top bar. */
	public get TopBar(): Nullable<Rectangle>
	/** The clock and day/night icon. */
	public get TimeOfDay(): Nullable<Rectangle>
	/** The block the clock is painted on, a little wider and taller than the clock itself. */
	public get TimeOfDayBackground(): Nullable<Rectangle>
	/** The strip of event timers under the clock; undefined while the game folds it away. */
	public get Timers(): Nullable<Rectangle>
	/**
	 * The round icon of every event timer, in the order the game lays them out: power rune,
	 * bounty rune, wisdom shrine, lotus pool, jungle camps.
	 * @example
	 * const [powerRune] = GUIInfo.TopBar.TimerIcons
	 */
	public get TimerIcons(): Nullable<Rectangle>[]
	/** The power rune timer's icon. */
	public get PowerRuneTimer(): Nullable<Rectangle>
	/** The bounty rune timer's icon. */
	public get BountyRuneTimer(): Nullable<Rectangle>
	/** The wisdom shrine timer's icon. */
	public get WisdomShrineTimer(): Nullable<Rectangle>
	/** The lotus pool timer's icon. */
	public get LotusPoolTimer(): Nullable<Rectangle>
	/** The jungle camps timer's icon. */
	public get JungleCampsTimer(): Nullable<Rectangle>
	/** The "time until day/night" label the game shows while ALT is held. */
	public get TimeOfDayTimeUntil(): Nullable<Rectangle>
	public get Radiant(): CTopBarTeam
	public get Dire(): CTopBarTeam
	public get RadiantTeamScore(): Nullable<Rectangle>
	public get DireTeamScore(): Nullable<Rectangle>
	public get RadiantTeamImage(): Nullable<Rectangle>
	public get DireTeamImage(): Nullable<Rectangle>
	public get RadiantTeamBackground(): Nullable<Rectangle>
	public get DireTeamBackground(): Nullable<Rectangle>
	public get RadiantSpectatorGoldDisplay(): Nullable<Rectangle>
	public get DireSpectatorGoldDisplay(): Nullable<Rectangle>
	public get RadiantPlayers(): Nullable<Rectangle>[]
	public get DirePlayers(): Nullable<Rectangle>[]
	public get RadiantPlayersHeroImages(): Nullable<Rectangle>[]
	public get DirePlayersHeroImages(): Nullable<Rectangle>[]
	public get RadiantPlayersHealthbars(): Nullable<Rectangle>[]
	public get DirePlayersHealthbars(): Nullable<Rectangle>[]
	public get RadiantPlayersManabars(): Nullable<Rectangle>[]
	public get DirePlayersManabars(): Nullable<Rectangle>[]
	public get RadiantPlayersBuybacks(): Nullable<Rectangle>[]
	public get DirePlayersBuybacks(): Nullable<Rectangle>[]
	public get RadiantPlayersRespawnTimers(): Nullable<Rectangle>[]
	public get DirePlayersRespawnTimers(): Nullable<Rectangle>[]
	public get RadiantPlayersTPIndicators(): Nullable<Rectangle>[]
	/** The painted teleport icons, smaller than the indicator boxes around them. */
	public get RadiantPlayersTPIcons(): Nullable<Rectangle>[]
	public get DirePlayersTPIcons(): Nullable<Rectangle>[]
	public get DirePlayersTPIndicators(): Nullable<Rectangle>[]
	public get RadiantPlayersUltReadyIndicators(): Nullable<Rectangle>[]
	public get DirePlayersUltReadyIndicators(): Nullable<Rectangle>[]
	public get RadiantPlayersSalutes(): Nullable<Rectangle>[]
	public get DirePlayersSalutes(): Nullable<Rectangle>[]
	/**
	 * Re-derives every rectangle the section owns rather than reads straight off a panel — the
	 * shifted bars, the ultimate indicator, and anything borrowed from the other side.
	 */
	public Refresh(): void
	/**
	 * Outlines every rectangle the top bar hands out, so a script can be checked against them.
	 *
	 * Several of these the game only paints at a moment of its own — the bars and the teleport
	 * indicator while ALT is held, the buyback strip on top of that, the ultimate indicator when
	 * one is up — and the boxes are drawn all the same, because knowing where they will land is
	 * the point of the overlay. A slot with no player in it is left out.
	 */
	public DebugDraw(): void
}
