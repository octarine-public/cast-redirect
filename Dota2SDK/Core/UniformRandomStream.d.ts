// AUTO-GENERATED - do not edit.
/**
 * Valve's `CUniformRandomStream` (vstdlib/random.cpp): Numerical Recipes' `ran1`, a Park-Miller
 * generator behind a 32-entry Bays-Durham shuffle. Seeded the same way, it draws exactly what the
 * game draws, which is what item seeds such as paint patterns and pet looks are rolled from.
 * @example
 * const stream = new UniformRandomStream(seed)
 * const hue = stream.RandomFloat(0, 1)
 */
declare class UniformRandomStream {
	/** A seed and its negation give the same stream, as they do in the engine. */
	constructor(seed: number)
	/** The next float in `[low, high)`. */
	public RandomFloat(low: number, high: number): number
}
