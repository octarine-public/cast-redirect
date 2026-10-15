// AUTO-GENERATED - do not edit.
declare class kunkka_tidal_wave extends Ability {
	public get SkillShotType(): ESkillShotType
	/** The wave hits when its front passes, along its whole width. */
	public get FlatFront(): boolean
	/**
	 * The hit lands when the wave the game reports is still this far short of the unit:
	 * measured on the demo, a unit 900 ahead was hit with the reported centre 110 short of
	 * it, the same in every cast.
	 */
	public get FrontLead(): number
	/** How far the wave travels: it starts one radius behind the caster and runs past the cast range. */
	public get Range(): number
	/** How far behind the caster the wave starts: the radius the key values give it. */
	public get StartBehind(): number
	/**
	 * How far to the side of its axis the wave hits, which is not the radius the key values
	 * give it: measured on the demo, a unit 450 to the side is hit and one 475 to the side is
	 * not, in every cast.
	 */
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The wave runs from behind the caster along the cast direction for its travel distance, its hitting front in the lead. */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
}
