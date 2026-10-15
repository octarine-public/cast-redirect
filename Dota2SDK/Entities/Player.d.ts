// AUTO-GENERATED - do not edit.
declare class Player extends Entity {
	public readonly Connected: PlayerConnectedState
	public readonly ServerOrderSequenceNumber: number
	public readonly NoClipEnabled: boolean
	public Hero: Nullable<Hero>
	public Pawn: Nullable<PlayerPawn>
	/** @deprecated has been removed use Player#ItemSlots */
	public QuickBuyItems: number[]
	public hero_: number
	public pawn_: number
	public playerID_: number
	public get IsSpectator(): boolean
	public get ItemSlots(): QuickBuySlot[]
	public get SteamID(): Nullable<bigint>
	public get PlayerName(): Nullable<string>
	public get IsLocalPlayer(): boolean
	public get PlayerID(): number
	public get PlayerCustomData(): Nullable<PlayerCustomData>
	public get TeamSlot(): number
	public get PlayerColor(): Color
	public get HeroName(): Nullable<string>
	public get RespawnPosition(): Nullable<Vector3>
	public CannotUseItem(item: Item): boolean
	public Buyback(queue?: boolean, showEffects?: boolean): void
	public Glyph(queue?: boolean, showEffects?: boolean): void
	public CastRiverPaint(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public PreGameAdjustItemAssigment(itemID: number, queue?: boolean, showEffects?: boolean): void
	public Scan(position: Vector3, queue?: boolean, showEffects?: boolean): void
}
