// AUTO-GENERATED - do not edit.
declare class item_mekansm extends Item implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public readonly HealthRestoreModifierName = "modifier_item_mekansm_noheal"
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
