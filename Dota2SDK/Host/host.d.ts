// AUTO-GENERATED - do not edit.
// Universal isolate host globals provided by octarine-core at runtime. They live in octarine-utils
// (the base library) and propagate to every consumer via models/octarine-utils/host.d.ts, since —
// unlike fread/fexists/IOBuffer — they have no home in the per-game native octarine-core.d.ts.

interface Console {
	memory: any
	assert(condition?: boolean, ...data: any[]): void
	clear(): void
	count(label?: string): void
	countReset(label?: string): void
	debug(...data: any[]): void
	dir(item?: any, options?: any): void
	dirxml(...data: any[]): void
	error(...data: any[]): void
	exception(message?: string, ...optionalParams: any[]): void
	group(...data: any[]): void
	groupCollapsed(...data: any[]): void
	groupEnd(): void
	info(...data: any[]): void
	log(...data: any[]): void
	table(tabularData?: any, properties?: string[]): void
	time(label?: string): void
	timeEnd(label?: string): void
	timeLog(label?: string, ...data: any[]): void
	timeStamp(label?: string): void
	trace(...data: any[]): void
	warn(...data: any[]): void
}
declare var console: Console
declare var reload: () => void

// The script network bridge. These four functions are the whole of it: the game
// process opens no sockets and resolves no names, it hands every request to the
// Go client, which decides whether the target is allowed and does the talking.
// `Net/` wraps them into fetch() and WebSocket; a script should reach for those.

interface NetHttpRequestOptions {
	url: string
	method?: string
	/** `[name, value]` pairs, exactly what a Headers object iterates to. */
	headers?: [string, string][]
	body?: string | ArrayBuffer | ArrayBufferView
	timeoutMs?: number
	maxResponseBytes?: number
	followRedirects?: boolean
}

interface NetHttpResult {
	status: number
	statusText: string
	/** The URL that finally answered, which is not the requested one after a redirect. */
	url: string
	headers: [string, string][]
	body: ArrayBuffer
	/** Empty when the request reached a server; otherwise why it did not. */
	error: string
	errorCode: number
}

interface NetWebSocketOptions {
	url: string
	protocols?: string | string[]
	headers?: [string, string][]
}

/** type: 0 open, 1 message, 2 close, 3 error. `data` is set on a message and nothing else. */
interface NetWebSocketHostEvent {
	type: number
	data?: string | ArrayBuffer
	code: number
	reason: string
	protocol: string
	error: string
	errorCode: number
}

/** Returns the promise for the reply and the id `netHttpAbort` cancels it by. */
declare function netHttpRequest(options: NetHttpRequestOptions): {
	id: number
	response: Promise<NetHttpResult>
}
declare function netHttpAbort(requestID: number): void
/** Returns the socket id. Every event on that socket reaches `onEvent`. */
declare function netWsOpen(
	options: NetWebSocketOptions,
	onEvent: (event: NetWebSocketHostEvent) => void
): number
declare function netWsSend(
	socketID: number,
	data: string | ArrayBuffer | ArrayBufferView
): void
declare function netWsClose(socketID: number, code?: number, reason?: string): void

// The media session bridge. What the machine is playing lives behind a Windows
// API the game process has no business calling, so the question goes to the
// client and comes back here. `Media/MediaSession.ts` wraps these; a script
// should reach for that.

interface NetMediaSessionState {
	/** False when nothing on the machine is playing. An ordinary answer, not a failure. */
	hasSession: boolean
	playing: boolean
	title: string
	artist: string
	album: string
	position: number
	duration: number
	source: string
	/** Empty unless the session could not be read at all. */
	error: string
	/** Every app reporting a session, filled in even when none of them is playing. */
	sources: string[]
	/** The artwork, present only when it was asked for and the player publishes one. */
	thumbnail?: ArrayBuffer
	/** Where the player's volume slider stands, 0..1. Filled by mediaSessionVolume and by a
	 * volume command, which answers with where it left it. */
	volume: number
}

/**
 * `source` follows one particular player, named as it appears in `sources`; empty follows
 * whichever session the system calls current. `wantThumbnail` asks for the artwork, which is
 * tens of kilobytes and so is worth asking for only when the track changed.
 */
declare function mediaSessionRead(
	source: string,
	wantThumbnail: boolean
): Promise<NetMediaSessionState>
/** Where the player's own volume slider stands. */
declare function mediaSessionVolume(source: string): Promise<NetMediaSessionState>
/** command is "playpause", "play", "pause", "next" or "prev"; source as in mediaSessionRead. */
declare function mediaSessionCommand(
	command: string,
	source: string
): Promise<NetMediaSessionState>

// The script storage bridge. A script's own key/value store is a file on the
// user's disk, one directory per game, and the game process writes no files, so
// every read and write goes to the client and comes back here.
// `Storage/LocalStorage.ts` wraps these; a script should reach for that.

interface LocalStorageResult {
	/** 0 when the op succeeded; otherwise why it did not. */
	result: number
	error: string
	/** get only: whether the key was there at all. */
	found: boolean
	/** get only: the stored value as JSON text, empty when the key is absent. */
	value: string
	/** open and keys only: every key the store holds, sorted. */
	keys: string[]
}

/** Creates the store if it is not there yet. Until it has run, every other op is refused. */
declare function localStorageOpen(store: string): Promise<LocalStorageResult>
declare function localStorageGet(store: string, key: string): Promise<LocalStorageResult>
/** `value` is the JSON text to store, not the value itself. */
declare function localStorageSet(
	store: string,
	key: string,
	value: string
): Promise<LocalStorageResult>
declare function localStorageRemove(
	store: string,
	key: string
): Promise<LocalStorageResult>
declare function localStorageClear(store: string): Promise<LocalStorageResult>
declare function localStorageKeys(store: string): Promise<LocalStorageResult>

// Which of the other people in this match run our product. The game asks about
// nobody in particular and uploads no account ids: the client asks the loader
// server, which already knows who is in which match. `Match/MatchProducts.ts`
// wraps this; a script should reach for that.

interface MatchProductsHostPlayer {
	accountID: number
	/**
	 * Bit 0 is our product, running in this match right now. Bits 1-4 are other
	 * products our own client once found installed on that machine, one bit each.
	 */
	products: number
}

interface MatchProductsHostResult {
	/**
	 * False when the server would not answer at all. An empty `players` with this
	 * set means "nobody else to report", which is not the same thing.
	 */
	answered: boolean
	/** Our own users only. A player who is absent is unknown, not clean. */
	players: MatchProductsHostPlayer[]
}

declare function matchProductsRead(): Promise<MatchProductsHostResult>
