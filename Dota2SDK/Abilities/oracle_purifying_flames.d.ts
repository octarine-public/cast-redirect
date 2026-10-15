// AUTO-GENERATED - do not edit.
declare class oracle_purifying_flames extends Ability implements IHealthRestore<Unit>, INuke {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public IsNuke(): this is INuke
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthRestore(_target: Unit): number
	public GetBaseDamageForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
}
