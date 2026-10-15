// AUTO-GENERATED - do not edit.
declare class chen_hand_of_god extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(_level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
