// AUTO-GENERATED - do not edit.
declare class juggernaut_healing_ward extends Ability implements IHealthRestore<Unit> {
	public RestoresAlly: boolean
	public RestoresSelf: boolean
	public InstantRestore: boolean
	public readonly HealthRestoreModifierName = "modifier_juggernaut_healing_ward_heal"
	public GetHealthRestore(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
