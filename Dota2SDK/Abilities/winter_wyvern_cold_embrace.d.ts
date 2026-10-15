// AUTO-GENERATED - do not edit.
declare class winter_wyvern_cold_embrace extends Ability implements IHealthRestore<Unit>, IManaRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_winter_wyvern_cold_embrace"
	public readonly ManaRestoreModifierName = "modifier_winter_wyvern_essence_of_the_blueheart"
	public GetHealthRestore(target: Unit): number
	public GetManaRestore(target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public get AppliesUnitState(): bigint
}
