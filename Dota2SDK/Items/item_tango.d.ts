// AUTO-GENERATED - do not edit.
declare class item_tango extends Item implements IHealthRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_tango_heal"
	public GetMaxDurationForLevel(level: number): number
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
