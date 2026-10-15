// AUTO-GENERATED - do not edit.
/**
 * A control the client can work for a player.
 *
 * The first five are transport, which the media session carries itself. The last two are not:
 * Windows offers no volume through the media session, so they move the player's own audio
 * session — the row the volume mixer shows it under — and leave everything else on the machine,
 * the game included, where it was.
 */
type MediaCommand = "playpause" | "play" | "pause" | "next" | "prev" | "volup" | "voldown"
/** What the machine is playing, as the player reported it to Windows. */
interface NowPlaying {
	readonly playing: boolean
	readonly title: string
	readonly artist: string
	readonly album: string
	/**
	 * Seconds into the track. The system only republishes this on seek, pause and track
	 * change, so it arrives already extrapolated from the last report — a progress bar can
	 * read it every frame and it will move.
	 */
	readonly position: number
	/** Seconds, or `0` when the player does not publish a length (a live stream, say). */
	readonly duration: number
	/** The app reporting it, e.g. `"Spotify.exe"` or `"Chrome"`. */
	readonly source: string
	/**
	 * The cover the player itself is showing, as image bytes — png or jpeg, whatever the
	 * player published. Present only when {@link MediaReadOptions.artwork} asked for it and
	 * the player publishes one; plenty report a title and no picture.
	 *
	 * This is the real artwork rather than a guess: no search that can land on the wrong
	 * album, and nothing leaves the machine to fetch it.
	 */
	readonly artwork?: ArrayBuffer
}
/** Narrows what a read asks the session for. */
interface MediaReadOptions {
	/**
	 * Follow one particular player, named as it appears in {@link MediaSessionSnapshot.sources}.
	 * Left out, the read follows whichever session the system considers current.
	 *
	 * A player that is named but is not running reads as nothing playing, rather than quietly
	 * falling back to another one — a panel told to follow Spotify must not start showing a
	 * browser tab.
	 */
	readonly source?: string
	/**
	 * Ask for the artwork as well. Off by default: it is tens of kilobytes and it travels the
	 * same pipe as everything else, so ask for it when the track changed rather than on every
	 * poll.
	 */
	readonly artwork?: boolean
}
/** One look at the media session: what is playing, and who could be. */
interface MediaSessionSnapshot {
	/** What is playing, or `undefined` when nothing is. */
	readonly track: Nullable<NowPlaying>
	/**
	 * Every app reporting a session right now. Filled in even when nothing is playing, which
	 * is exactly when a user is most likely to be choosing which player to follow.
	 */
	readonly sources: readonly string[]
}
/** Thrown when the media session could not be reached at all. */
declare class MediaSessionError extends Error {
	constructor(message: string)
}
/**
 * Sends a transport command to the player being followed, or to whatever holds the session when
 * following no one in particular. Rejects when no player is listening or when it does not offer
 * that control — plenty of sources have no notion of "previous".
 *
 * `source` names the player the same way {@link MediaReadOptions.source} does, so a card
 * following one player pauses that one and not whichever grabbed the session in between.
 * @example
 * await SharedSDK.sendMediaCommand("playpause")
 */
