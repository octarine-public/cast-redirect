// AUTO-GENERATED - do not edit.
declare class undying_soul_rip extends Ability implements IHealthRestore<Unit>, IHealthCost, INuke {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public get HealthCost(): number
	public IsNuke(): this is INuke
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetRawDamage(target: Unit): number
	public GetHealthRestore(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
}
