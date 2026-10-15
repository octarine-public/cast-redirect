// AUTO-GENERATED - do not edit.
declare class morphling_morph_str extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_morphling_morph_str"
	public HealthGain(seconds: number): number
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
