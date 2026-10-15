// AUTO-GENERATED - do not edit.
/**
 * The pump for work that must not overlap other work on the game main thread.
 *
 * `Panorama.EnterMainThread` only parks the game main thread — it does not move the caller onto
 * it. The callback keeps running on the V8 thread while the parked main thread drains native
 * tasks. Native operations that queue work for the main thread therefore run *concurrently* with
 * anything else awaiting inside another session, and two such callers mutating the same engine
 * structure corrupt it.
 *
 * Everything queued here is drained once per frame inside a single main-thread session, strictly
 * one task after another, so at any instant either the main thread runs one queued native
 * operation or the V8 thread runs direct ones — never both. A flush that outlives its frame is
 * not allowed to overlap the next one.
 */
declare class CMainThread {
	public get QueuedCount(): number
	/**
	 * Queues work for the next per-frame flush and resolves with its result. The task may be
	 * sync or async, and may await native operations — the session is held for the whole batch.
	 * @example
	 * await MainThread.Queue(() => PanoramaSDK.Root(PanoramaWindow.Hud)?.Find("map_render"))
	 */
	public Queue<T>(task: () => T | Promise<T>): Promise<T>
	public Flush_(): Promise<void>
}
declare const MainThread: CMainThread
