// AUTO-GENERATED - do not edit.
/**
 * A product a player in this match is known to have.
 *
 * {@link Ours} is the strong one: it means that account is running our product in
 * this match right now, read off the match it is playing.
 *
 * Every other value is much weaker. It means our own client found a folder by
 * that name in one of three fixed places on that machine the last time it looked,
 * and the record is never cleared — so a set bit is not evidence anyone is
 * running anything today, only that it was installed once. Equally, a product
 * installed somewhere else, or in a renamed folder, is simply not seen at all.
 */
declare enum MatchProduct {
	Ours = 1,
	MrGarabato = 2,
	UmbrellaLoader = 4,
	Divine = 8,
	Minority = 16
}
/** One player of this match the server knows something about. */
interface MatchProductsPlayer {
	/** The 32-bit game account id, the same one the game's own lobby carries. */
	readonly accountID: number
	/** A mask of {@link MatchProduct}. */
	readonly products: number
	/** Running our product in this match right now. */
	readonly ours: boolean
	/** Our client once found some other product installed on that machine. */
	readonly other: boolean
}
/** One look at who else in this match runs what. */
interface MatchProductsSnapshot {
	/**
	 * False when the server would not answer at all — this account is not enabled
	 * for it, or the game is one it cannot group matches for. An empty
	 * {@link players} with `answered` set means "nobody else to report", and the
	 * two must not be shown the same way.
	 */
	readonly answered: boolean
	/**
	 * Our own users in this match, the caller excluded.
	 *
	 * A player who is absent from this list is **unknown, not clean**: someone who
	 * never ran our client has no record anywhere to answer from. Never render an
	 * absence as "legit".
	 */
	readonly players: readonly MatchProductsPlayer[]
}
