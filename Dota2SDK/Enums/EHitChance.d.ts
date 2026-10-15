// AUTO-GENERATED - do not edit.
/** How sure a cast is to land, from `HitProbability` and the target's state. */
declare enum EHitChance {
	/** Out of range, blocked, or the target cannot be hit when the effect lands. */
	Impossible = 0,
	Low = 1,
	Medium = 2,
	High = 3,
	/** The target cannot move away before the effect lands. */
	Immobile = 4
}
