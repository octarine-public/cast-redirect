// AUTO-GENERATED - do not edit.
declare class enchantress_natures_attendants extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_enchantress_natures_attendants"
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
