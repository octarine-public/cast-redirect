// AUTO-GENERATED - do not edit.
/**
 * Per-ability prediction state: the profile inputs whose change invalidates anything cached
 * about the ability, and the core, input and estimates the ability predicts with. `Ability`
 * creates one; nothing about a profile is ever cached per class, and the working objects are
 * made the first time the ability predicts.
 */
declare class AbilityPrediction {
	constructor(owner: IPredictableAbility)
	/**
	 * Grows whenever the level, alt-cast state, theft, scepter, shard, facet or a talent of the
	 * owner changes; equal versions mean an equal profile.
	 */
	public get ProfileVersion(): number
	/** The prediction core this ability casts by. */
	public get Core(): CastPredictor
	/** The input the ability fills for every prediction. */
	public get Input(): PredictionInput
	/** The units the ability may aim at, gathered before every prediction. */
	public get Candidates(): IPredictionTarget[]
	/** The units that may stand in the effect's way, gathered before every prediction. */
	public get Obstacles(): IPredictionTarget[]
	/** The timeline `GetHitTime` fills. */
	public get HitTimeline(): CastTimeline
	/** The estimate of the target's position the timelines fill. */
	public get Estimate(): MovementPrediction
}
