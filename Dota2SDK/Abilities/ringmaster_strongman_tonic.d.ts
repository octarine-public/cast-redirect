// AUTO-GENERATED - do not edit.
declare class ringmaster_strongman_tonic extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public readonly HealthRestoreModifierName = "modifier_ringmaster_strongman_tonic_buff"
	public GetHealthRestore(_target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
