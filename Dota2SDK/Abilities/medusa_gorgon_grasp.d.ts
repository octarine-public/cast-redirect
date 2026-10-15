// AUTO-GENERATED - do not edit.
declare class medusa_gorgon_grasp extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The grasp lands along its whole line after the delay. */
	public get SkillShotType(): ESkillShotType
}
