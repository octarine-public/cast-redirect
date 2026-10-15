// AUTO-GENERATED - do not edit.
/**
 * A completed HTTP response. The body arrived whole — there is no stream behind it — so unlike the
 * web platform's `Response` it can be read as often as you like.
 * @example
 * const res = await SharedSDK.fetch(url)
 * if (res.ok) {
 *   const data = await res.json<{ id: number }>()
 * }
 */
declare class Response {
	public readonly headers: Headers
	public readonly status: number
	public readonly statusText: string
	/** The URL that answered, which differs from the requested one when a redirect was followed. */
	public readonly url: string
	constructor(result: NetHttpResult)
	/** True for a 2xx status. */
	public get ok(): boolean
	/** True when the server answered with a redirect that was not followed. */
	public get redirected(): boolean
	/**
	 * The raw body.
	 * @example
	 * const buffer = await res.arrayBuffer()
	 */
	public arrayBuffer(): Promise<ArrayBuffer>
	/**
	 * The raw body as bytes.
	 * @example
	 * const bytes = await res.bytes()
	 */
	public bytes(): Promise<Uint8Array>
	/**
	 * The body decoded as UTF-8.
	 * @example
	 * const text = await res.text()
	 */
	public text(): Promise<string>
	/**
	 * The body parsed as JSON. Rejects the same way `JSON.parse` throws when the body is not JSON.
	 * @example
	 * const data = await res.json<{ items: string[] }>()
	 */
	public json<T = unknown>(): Promise<T>
}
