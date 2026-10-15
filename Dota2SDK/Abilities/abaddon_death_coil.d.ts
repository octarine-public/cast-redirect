// AUTO-GENERATED - do not edit.
declare class abaddon_death_coil extends Ability implements IHealthRestore<Unit>, IHealthCost, INuke {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = false
	public readonly InstantRestore = true
	public get ProjectileAttachment(): string
	public get HealthCost(): number
	public IsNuke(): this is INuke
	public IsHealthCost(): this is IHealthCost
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthRestore(_target: Unit): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetDamage(target: Unit): number
}
