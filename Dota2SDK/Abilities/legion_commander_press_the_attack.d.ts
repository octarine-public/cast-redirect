// AUTO-GENERATED - do not edit.
declare class legion_commander_press_the_attack extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_legion_commander_press_the_attack"
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
