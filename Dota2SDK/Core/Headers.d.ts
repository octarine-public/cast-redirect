// AUTO-GENERATED - do not edit.
type HeadersInit = Headers | [string, string][] | Record<string, string>
/**
 * The header list of a request or a response, with the same case-insensitive lookup and the same
 * comma-joined multi-value reads the web platform's `Headers` has.
 * @example
 * const headers = new Headers({ Authorization: "Bearer " + token })
 * headers.append("Accept", "application/json")
 */
declare class Headers {
	/**
	 * @param init another Headers, `[name, value]` pairs, or a plain object of them
	 * @example
	 * new Headers([["Accept", "application/json"]])
	 */
	constructor(init?: HeadersInit)
	/**
	 * Adds a value, keeping any already stored under that name.
	 * @example
	 * headers.append("Accept", "text/plain")
	 */
	public append(name: string, value: string): void
	/**
	 * Replaces every value stored under `name`.
	 * @example
	 * headers.set("Content-Type", "application/json")
	 */
	public set(name: string, value: string): void
	/**
	 * Drops every value stored under `name`.
	 * @example
	 * headers.delete("Cookie")
	 */
	public delete(name: string): void
	/**
	 * Every value stored under `name`, joined with `", "`, or `undefined` when there is none.
	 * @example
	 * const type = headers.get("content-type")
	 */
	public get(name: string): Nullable<string>
	/**
	 * True when at least one value is stored under `name`.
	 * @example
	 * if (headers.has("etag")) { ... }
	 */
	public has(name: string): boolean
	/**
	 * Visits every stored value in insertion order.
	 * @example
	 * headers.forEach((value, name) => console.log(name, value))
	 */
	public forEach(callback: (value: string, name: string, headers: Headers) => void): void
	public entries(): IterableIterator<[string, string]>
	public keys(): IterableIterator<string>
	public values(): IterableIterator<string>
	public [Symbol.iterator](): IterableIterator<[string, string]>
	/** The pair list the host takes. */
	public ToPairs_(): [string, string][]
}
