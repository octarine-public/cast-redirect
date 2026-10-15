// AUTO-GENERATED - do not edit.
declare class item_bottle extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly ManaRestoreModifierName = "modifier_bottle_regeneration"
	public readonly HealthRestoreModifierName = "modifier_bottle_regeneration"
	public StoredRune: DOTA_RUNES
	public LastRuneTypeChangeTime: number
	public DestroyRuneTime_: number
	public get IsInvisibility(): boolean
	public get StoredRuneTime(): number
	public get TotalManaRestore(): number
	public get TotalHealthRestore(): number
	public get TexturePath(): string
	public get ManaRestore(): number
	public get HealthRestore(): number
	public get Cooldown(): number
	public get RuneExpireTime(): number
	public get IsCooldownReady(): boolean
	public get CanMoveInBackpack(): boolean
	public CanBeCasted(bonusMana?: number): boolean
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
