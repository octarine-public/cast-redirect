// AUTO-GENERATED - do not edit.
declare class phoenix_icarus_dive extends Ability {
	public get SkillShotType(): ESkillShotType
	/** Units per second along the dive line: the line there and back over the dive's duration. */
	public get Speed(): number
	public get PredictionStrategy(): IPredictionStrategy
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetTravelTime(from: Vector3, to: Vector3): number
}
