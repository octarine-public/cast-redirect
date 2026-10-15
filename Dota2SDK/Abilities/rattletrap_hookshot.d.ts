// AUTO-GENERATED - do not edit.
declare class rattletrap_hookshot extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/** The hook latches onto the first unit on its way, allied or not. */
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	public get AppliesUnitState(): bigint
}
