// AUTO-GENERATED - do not edit.
/**
 * A whole prediction owned by one ability class, built from the same primitives the core uses:
 * the cast timeline, the target's predicted position and region, coverage and collisions.
 * `Ability.Predict` hands control to it before running the core, with the ability's own core
 * for the coverage and scoring it wants to reuse.
 */
interface IPredictionStrategy {
	Predict(input: PredictionInput, out: PredictionOutput, core: CastPredictor): PredictionOutput
}
