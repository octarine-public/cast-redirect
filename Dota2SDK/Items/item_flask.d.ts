// AUTO-GENERATED - do not edit.
declare class item_flask extends Item implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_flask_healing"
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
