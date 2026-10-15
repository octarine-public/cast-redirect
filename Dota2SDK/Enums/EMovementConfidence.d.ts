// AUTO-GENERATED - do not edit.
declare enum EMovementConfidence {
	/** The unit is unseen; the estimate is its last known position. */
	Unseen = 0,
	/** The unit cannot or does not move; the estimate is where it stands. */
	Immobile = 1,
	/** The unit walks its current heading; the estimate follows it around obstacles. */
	Straight = 2,
	/** The unit is turning, so its heading is about to change. */
	Turning = 3,
	/** The destination or the motion is known: an own order, a teleport, a knockback. */
	Known = 4
}
