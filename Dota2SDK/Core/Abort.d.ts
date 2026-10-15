// AUTO-GENERATED - do not edit.
type AbortListener = (reason: unknown) => void
/**
 * The read side of an {@link AbortController}: what a caller passes to `fetch` so the request can
 * be cancelled after it has been handed over.
 * @example
 * const controller = new AbortController()
 * const promise = SharedSDK.fetch(url, { signal: controller.signal })
 * controller.abort()
 */
declare class AbortSignal {
	/**
	 * A signal that aborts itself after `ms`, for the common case where the only reason to cancel
	 * is time.
	 * @example
	 * SharedSDK.fetch(url, { signal: AbortSignal.timeout(5000) })
	 */
	public static timeout(ms: number): AbortSignal
	public aborted: boolean
	public reason: unknown
	/**
	 * Registers a listener for the abort. A signal that has already aborted calls it at once, so a
	 * late listener cannot miss the event.
	 * @example
	 * signal.addEventListener("abort", () => socket.close())
	 */
	public addEventListener(type: "abort", listener: AbortListener): void
	/**
	 * Removes a listener registered with {@link addEventListener}.
	 * @example
	 * signal.removeEventListener("abort", onAbort)
	 */
	public removeEventListener(type: "abort", listener: AbortListener): void
	/**
	 * Throws {@link reason} when the signal has already aborted, and does nothing otherwise.
	 * @example
	 * signal.throwIfAborted()
	 */
	public throwIfAborted(): void
	/** Fires the signal. Owned by {@link AbortController}. */
	public Abort_(reason: unknown): void
}
/**
 * Hands out one {@link AbortSignal} and the ability to fire it.
 * @example
 * const controller = new AbortController()
 * setTimeout(() => controller.abort(), 1000)
 */
declare class AbortController {
	public readonly signal: AbortSignal
	/**
	 * Aborts the signal. Aborting twice does nothing the second time.
	 * @example
	 * controller.abort("user cancelled")
	 */
	public abort(reason?: unknown): void
}
