// AUTO-GENERATED - do not edit.
declare class CGameState {
	public static Current: CGameState
	public readonly DefaultTickInterval: number
	public TickInterval: number
	public CurrentServerTick: number
	public CurrentGameTick: number
	public CurrentFrame: number
	public IsDedicatedServer: boolean
	public MapName: string
	public AddonName: string
	public IsInDraw: boolean
	public IsShopOpen: boolean
	/**
	 * True while the in-game menu covers the HUD. The engine reports no such flag, so each game
	 * fills it in from its own UI.
	 */
	public IsEscapeMenuOpen: boolean
	public RawGameTime: number
	public RawServerTime: number
	public LocalTeam: number
	constructor(defaultTickInterval?: number)
	/**
	 * Round-trip time to the server. A method rather than a property because a game whose net
	 * channel reports the two directions apart passes which one it means.
	 */
	public GetLatency(): number
	public GetAvgLatency(): number
	public get IOLag(): number
	public get InputLag(): number
	public get IsConnected(): boolean
	public ExecuteCommand(command: string): void
	public GetIOLag(latency: number): number
	public GetInputLag(latency: number): number
}

/**
 * The shared game state with what only Dota reports: which panorama screen is up, whether the game
 * is eating input, and a net channel that measures the two directions apart.
 */
declare class CDotaGameState extends CGameState {
	/** @deprecated use GameState.TickInterval */
	public LatestTickDelta: number
	public IsInputCaptured: boolean
	public UIState: DOTAGameUIState
	public LocalTeam: Team
	constructor()
	/** @deprecated */
	public get Ping(): number
	/** @deprecated */
	public get AvgPing(): number
	public get IOLag(): number
	public get InputLag(): number
	public get IsDemo(): boolean
	/**
	 * Whether a screen overlay would land on the game world right now: connected, with the match
	 * UI up rather than the dashboard or another full-screen panorama page.
	 */
	public get CanDrawOverlays(): boolean
	public GetLatency(flow?: Flow): number
	public GetAvgLatency(flow?: Flow): number
	/**
	 * Seconds between an order leaving the client and the server acting on it, from the outgoing
	 * latency; one tick on a listen server, where attacks measured on the demo map land exactly a
	 * tick after the order is processed.
	 */
	public GetInputLag(latency: number): number
}
declare const GameState: CDotaGameState
