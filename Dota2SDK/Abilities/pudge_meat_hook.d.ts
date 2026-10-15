// AUTO-GENERATED - do not edit.
declare class pudge_meat_hook extends Ability implements INuke {
	public readonly ConsecutiveHits: number
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	/** The hook stops at the first unit on its way, allied or not. */
	public get CollisionFlags(): CollisionFlag
	public get CollisionTeam(): CollisionTeam
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
