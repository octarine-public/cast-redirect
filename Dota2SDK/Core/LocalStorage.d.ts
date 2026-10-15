// AUTO-GENERATED - do not edit.
/**
 * Why a storage op failed. Mirrors the `result` contract the client answers with, so a script can
 * tell a name it may not use from a disk that would not take the write.
 */
declare enum LocalStorageErrorCode {
	None = 0,
	/**
	 * The store name is not one the client will put on disk: empty, over 64 characters, or holding
	 * anything but `a-z`, `0-9`, `.`, `_` and `-`.
	 */
	InvalidName = 1,
	/** The key is empty, over 128 bytes, or carries a control character. */
	InvalidKey = 2,
	/** The request is malformed: the value is not JSON, or is past the 256 KiB per-value cap. */
	InvalidValue = 3,
	/** The store is full: 1024 keys, 1 MiB on disk, or 64 stores for this game. */
	QuotaExceeded = 4,
	/** The file could not be read or written. */
	IOFailed = 5,
	/** The store was never opened — reach it through {@link openLocalStorage}. */
	NotOpened = 6,
	/** Storage is gone, which normally means the client is shutting down. */
	Unavailable = 7
}
/**
 * The error every {@link LocalStorage} method rejects with.
 * @example
 * try {
 *   await storage.set("cheaters", list)
 * } catch (e) {
 *   if (
 *     e instanceof SharedSDK.LocalStorageError &&
 *     e.code === SharedSDK.LocalStorageErrorCode.QuotaExceeded
 *   ) { ... }
 * }
 */
declare class LocalStorageError extends Error {
	public readonly code: LocalStorageErrorCode
	constructor(message: string, code: LocalStorageErrorCode)
}
/**
 * One script's own key/value store on the user's disk — the web platform's `localStorage`, with the
 * client as the only writer and a JSON file anyone can open in an editor.
 *
 * The store is scoped to the running game by the client, not by the name given here, so the same
 * script under two games keeps two sets of data. Values are anything `JSON.stringify` handles.
 *
 * Unlike the web platform's, every method is a round trip to the client and so returns a promise. A
 * settled one means the file on disk already says so — read what you need once and keep it, rather
 * than reaching in from a frame handler.
 *
 * Nothing here is a security boundary: every script shares one isolate, so the name is a namespace,
 * not a lock. Do not put anything in a store you would not hand to another script.
 * @example
 * const storage = await SharedSDK.openLocalStorage("deadlock-heroes")
 * const cheaters = (await storage.get<string[]>("cheaters")) ?? []
 * cheaters.push(steamID)
 * await storage.set("cheaters", cheaters)
 */
declare class LocalStorage {
	public readonly name: string
	constructor(name: string)
	/**
	 * Creates the store if this is its first run and answers with every key it already holds.
	 * Until this has run, every other method rejects with {@link LocalStorageErrorCode.NotOpened}.
	 */
	public open(): Promise<string[]>
	/** The stored value, or `undefined` when nothing was ever stored under that key. */
	public get<T = unknown>(key: string): Promise<Nullable<T>>
	/**
	 * Stores one value, replacing whatever was there. Rejects with
	 * {@link LocalStorageErrorCode.InvalidValue} for anything `JSON.stringify` cannot carry —
	 * `undefined`, a function, a symbol, a `bigint`, a cycle — rather than storing a hole or
	 * throwing something that is not a {@link LocalStorageError}.
	 */
	public set(key: string, value: unknown): Promise<void>
	/** Drops one key. A key that was not there is not an error. */
	public remove(key: string): Promise<void>
	/** Empties the store, leaving the file behind. */
	public clear(): Promise<void>
	/** Every key the store holds, sorted. */
	public keys(): Promise<string[]>
}
