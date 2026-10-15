// AUTO-GENERATED - do not edit.
declare class mirana_arrow extends Ability implements INuke {
	public get SkillShotType(): ESkillShotType
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	public get AppliesUnitState(): bigint
}
