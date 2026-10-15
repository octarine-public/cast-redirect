// AUTO-GENERATED - do not edit.
interface WebSocketOpenEvent {
	readonly type: "open"
}
interface WebSocketMessageEvent {
	readonly type: "message"
	/** A text frame arrives as a string, a binary frame as an ArrayBuffer. */
	readonly data: string | ArrayBuffer
}
interface WebSocketCloseEvent {
	readonly type: "close"
	readonly code: number
	readonly reason: string
	/** True when both ends exchanged a close frame. */
	readonly wasClean: boolean
}
interface WebSocketErrorEvent {
	readonly type: "error"
	readonly message: string
	readonly code: NetErrorCode
}
interface WebSocketEventMap {
	open: WebSocketOpenEvent
	message: WebSocketMessageEvent
	close: WebSocketCloseEvent
	error: WebSocketErrorEvent
}
interface WebSocketInit {
	/** Extra handshake headers. The transport's own (`Sec-WebSocket-*`, `Host`) are refused. */
	headers?: HeadersInit
}
type Listener<K extends keyof WebSocketEventMap> = (event: WebSocketEventMap[K]) => void
/**
 * A WebSocket, opened and driven by the client on the script's behalf. The surface is the web
 * platform's: `readyState`, `send`, `close`, the four `on*` handlers and `addEventListener`.
 *
 * Off this machine only `wss://` is reachable, and only on the public internet — our own
 * infrastructure and private networks are refused. A local helper may be reached over plain
 * `ws://` when the url names this machine outright (`localhost`, `*.localhost`, a loopback
 * address), except on the ports the client itself binds. A refusal arrives as an `error` event
 * followed by `close`, exactly as a failed connection does in a browser.
 * @example
 * const socket = new SharedSDK.WebSocket("wss://echo.example.com")
 * socket.onopen = () => socket.send("hello")
 * socket.onmessage = event => console.log(event.data)
 */
declare class WebSocket {
	public static readonly CONNECTING = 0
	public static readonly OPEN = 1
	public static readonly CLOSING = 2
	public static readonly CLOSED = 3
	public readonly CONNECTING = 0
	public readonly OPEN = 1
	public readonly CLOSING = 2
	public readonly CLOSED = 3
	public readonly url: string
	public onopen: Nullable<Listener<"open">>
	public onmessage: Nullable<Listener<"message">>
	public onclose: Nullable<Listener<"close">>
	public onerror: Nullable<Listener<"error">>
	/**
	 * @param url the `wss://` endpoint to connect to, or `ws://` for a local helper
	 * @param protocols subprotocols to offer during the handshake
	 * @throws SyntaxError when `url` is not a websocket url at all — a scheme the protocol has no
	 * meaning for is a typo, and a typo should fail on the line that made it rather than come back
	 * later as a socket that quietly closed.
	 * @example
	 * new SharedSDK.WebSocket("wss://example.com/stream", "graphql-ws")
	 */
	constructor(url: string, protocols?: string | string[], init?: WebSocketInit)
	/** One of `CONNECTING`, `OPEN`, `CLOSING`, `CLOSED`. */
	public get readyState(): number
	/** The subprotocol the server accepted, or `""` when none was negotiated. */
	public get protocol(): string
	/**
	 * Always `0`: the client owns the send queue, so there is nothing buffered on this side.
	 */
	public get bufferedAmount(): number
	/**
	 * Registers a listener. The matching `on*` handler is called too, before the listeners.
	 * @example
	 * socket.addEventListener("message", event => console.log(event.data))
	 */
	public addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void
	/**
	 * Removes a listener registered with {@link addEventListener}.
	 * @example
	 * socket.removeEventListener("message", onMessage)
	 */
	public removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void
	/**
	 * Queues one frame. A string goes out as text, anything else as binary. Throws while the
	 * socket is not open, the way the web platform's `send` does.
	 * @example
	 * socket.send(JSON.stringify({ subscribe: "ticks" }))
	 */
	public send(data: string | ArrayBuffer | ArrayBufferView): void
	/**
	 * Starts a clean close. `code` must be 1000 or in 3000-4999; anything else is sent as 1000.
	 * @example
	 * socket.close(1000, "done")
	 */
	public close(code?: number, reason?: string): void
}
