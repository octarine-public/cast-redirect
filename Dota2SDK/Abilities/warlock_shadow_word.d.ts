// AUTO-GENERATED - do not edit.
declare class warlock_shadow_word extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_warlock_shadow_word"
	public GetHealthRestore(_target: Unit): number
	public GetBaseDamageForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
