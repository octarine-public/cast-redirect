// AUTO-GENERATED - do not edit.
declare class huskar_life_break extends Ability implements INuke {
	public StartedChargingTime: number
	public CurrentProjectile: Nullable<TrackingProjectile>
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
}
