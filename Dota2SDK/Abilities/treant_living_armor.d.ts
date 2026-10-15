// AUTO-GENERATED - do not edit.
declare class treant_living_armor extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly HealthRestoreModifierName = "modifier_treant_living_armor"
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetBaseAOERadiusForLevel(_level: number): number
	public get CastRange(): number
}
