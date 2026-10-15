// AUTO-GENERATED - do not edit.
declare class CGameRules extends Entity {
	public readonly Index: number
	public RawGameTime: number
	public readonly MatchID: bigint
	public readonly DayTimeStart: number
	public readonly NightTimeStart: number
	public readonly NetTimeOfDay: number
	public readonly IsPaused = false
	public readonly RuneCycle: number
	public readonly TotalPausedTicks: number | number[]
	public readonly PauseStartTick: number
	public readonly ExpectedPlayers: number
	public readonly GameMode: DOTAGameMode
	public readonly GameStartTime: number
	public readonly GameLoadTime: number
	public readonly StateTransitionTime: number
	public readonly HeroPickStateTransitionTime: number
	public readonly GlyphCooldownRadiantTime: number
	public readonly GlyphCooldownDireTime: number
	public readonly ScanCooldownRadiantTime: number
	public readonly ScanCooldownDireTime: number
	public readonly ScanChargesRadiant: number
	public readonly ScanChargesDire: number
	public readonly IsNightstalkerNight: boolean
	public readonly IsTemporaryNight: boolean
	public readonly IsTemporaryDay: boolean
	public readonly AllDraftPhase: number
	public readonly LoadedPlayers: number
	public readonly PlayerDraftActiveTeam: Team
	public readonly AllDraftRadiantFirst: boolean
	public readonly PlayerDraftPickOrder: number[]
	public readonly TormentorLocation: ETormentorLocation
	public readonly TormentorSpawnPhase: ETormentorSpawnPhase
	public readonly TormentorPhaseStartTime: number
	public readonly TormentorPhaseEndTime: number
	public GameState: DOTAGameState
	public HeroPickState: DOTAHeroPickState
	public StockInfo: StockInfo[]
	public BannedHeroesIDs: number[]
	public NeutralSpawnBoxes: NeutralSpawnBox[]
	public get NetTimeOfDayNormilize(): number
	public get GameTime(): number
	public get GlyphCooldownRadiant(): number
	public get GlyphCooldownDire(): number
	public get ScanCooldownRadiant(): number
	public get ScanCooldownDire(): number
	public get IsInGame(): boolean
	public get IsNightGameTime(): boolean
	public get IsDayGameTime(): boolean
	public get IsNight(): boolean
	public get IsBanPhase(): boolean
	public GetPhaseProgress(isNight?: boolean): number
}
