// AUTO-GENERATED - do not edit.
declare class kez_echo_slash extends Ability implements INuke {
	public get TravelDistance(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	/** The slash covers its line at once. */
	public get SkillShotType(): ESkillShotType
}
