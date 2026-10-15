// AUTO-GENERATED - do not edit.
/**
 * Why a request or a socket failed. Mirrors the `error_code` contract the client answers with, so
 * a script can tell "the policy said no" from "the server was down" without matching on text.
 */
declare enum NetErrorCode {
	None = 0,
	/**
	 * The target is off limits: our own infrastructure, a private address, plaintext off this
	 * machine, or one of the loopback ports the client binds for itself.
	 */
	Blocked = 1,
	/** The request itself was malformed — a bad url, an illegal header, an unsupported method. */
	Invalid = 2,
	Timeout = 3,
	/** DNS, TCP, TLS or protocol failure. */
	Transport = 4,
	/** The body or the message was over the size cap. */
	TooLarge = 5,
	/** Too many requests or sockets at once, or too many over time. */
	Throttled = 6,
	Aborted = 7,
	/** The bridge is gone, which normally means the game is shutting down. */
	Unavailable = 8
}
/**
 * The error `fetch` rejects with and a socket's `error` event carries.
 * @example
 * try {
 *   await SharedSDK.fetch(url)
 * } catch (e) {
 *   if (e instanceof SharedSDK.NetError && e.code === SharedSDK.NetErrorCode.Blocked) { ... }
 * }
 */
declare class NetError extends Error {
	public readonly code: NetErrorCode
	constructor(message: string, code: NetErrorCode)
}
