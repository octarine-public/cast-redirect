// AUTO-GENERATED - do not edit.
declare class omniknight_purification extends Ability implements IHealthRestore<Unit>, INuke {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public IsNuke(): this is INuke
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetBaseDamageForLevel(level: number): number
}
