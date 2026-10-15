// AUTO-GENERATED - do not edit.
declare class item_guardian_greaves extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public readonly ManaRestoreModifierName = "modifier_item_mekansm_noheal"
	public readonly HealthRestoreModifierName = "modifier_item_mekansm_noheal"
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
