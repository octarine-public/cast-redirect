// AUTO-GENERATED - do not edit.
declare class mars_spear extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** Inside the arena the spear pins the first enemy hero it meets; the shard's spear flies through. */
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
}
