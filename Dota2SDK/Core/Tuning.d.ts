// AUTO-GENERATED - do not edit.
/** Coefficients the prediction core reads; every value names the measurement it comes from. */
declare class PredictionTuning {
	/**
	 * Largest per-tick displacement, in units, that position quantization alone can produce.
	 * Measured 16 September 2026 on the demo map: a hero walking at 280 moved 9.3105 to 9.3758
	 * per tick against 9.3333 expected, so the wire step is 1/32 per axis and 1/16 bounds the
	 * two axes together; a standing hero did not move at all.
	 */
	public PositionQuantization: number
	/** Least `HitProbability` that counts as `EHitChance.High`; a starting threshold until the hit telemetry draws the curve. */
	public HitChanceHigh: number
	/** Least `HitProbability` that counts as `EHitChance.Medium`. */
	public HitChanceMedium: number
	/** Least `HitProbability` that counts as `EHitChance.Low`; below it a cast is impossible. */
	public HitChanceLow: number
	/**
	 * How much likelier a spot the target reaches exactly when the effect lands is than one it
	 * would have to stop or turn back for, when it is on the move: a walking unit keeps
	 * walking, so where it can be at the moment of the landing weighs most and the rest of
	 * what it could reach weighs less the further its arrival is from that moment. Measured on
	 * the demo: hooks at a patrolling target landed 13 of 14 times at a coverage of 0.17 to
	 * 0.41 under a flat weighting, which told a hit from a miss no better than a coin.
	 */
	public MotionWeight: number
	/**
	 * How much likelier a unit is to be hit than the share of its reachable ground the effect
	 * covers: it does not use all the freedom it has, so the share `c` becomes
	 * `1 - (1 - c) ** CoverageSharpness`. Measured on the demo with Pudge hooks at a walking
	 * Luna whose orders the prediction could not see: at about 1100 units the covered share
	 * averaged 0.25 and 8 of 13 casts landed, which asks for a power near three and a half,
	 * and at 460 to 950 units it averaged about 0.45 and all 32 landed, which asks for more.
	 * Three is the careful end of both.
	 */
	public CoverageSharpness: number
	/** `HitProbability` given to a target that is not visible but whose last known position the shape covers. */
	public UnseenHitProbability: number
	/** Seconds ahead a unit looks for threats reaching it along its predicted path. */
	public ThreatHorizon: number
	/**
	 * Seconds a threat stays after its shape ended, so the `entity_hurt` the game reports for
	 * it still finds it. On the demo the damage of every checked effect arrived within a tick
	 * of the impact; the margin covers a report that lags behind.
	 */
	public ThreatLinger: number
	/**
	 * Seconds past its landing time a blow in `IncomingDamage` waits for the game to confirm
	 * it before it is dropped. On the demo `entity_hurt` came on the landing tick itself; six
	 * ticks cover a report held back by lag.
	 */
	public DamageLandingGrace: number
	/**
	 * Seconds between the samples that measure how a unit flying as a projectile moves, and
	 * between the points its path is predicted at. The game rounds networked positions to
	 * whole units, so samples a tick apart drown the acceleration in that rounding; six ticks
	 * apart it comes out within a tenth, and the path is answered within the first fifth of
	 * a second of the flight.
	 */
	public FlightSampling: number
}
