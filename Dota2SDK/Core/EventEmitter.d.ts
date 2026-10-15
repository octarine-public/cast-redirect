// AUTO-GENERATED - do not edit.
type EventListener<M extends Record<keyof M, unknown[]>, K extends keyof M> = (...args: M[K]) => false | unknown
type StoredListener = (...args: never[]) => unknown
type StoredEntry = [StoredListener, number]
declare class EventEmitter<M extends Record<keyof M, unknown[]> = EventsMap> {
	protected readonly events: Map<string, StoredEntry[]>
	protected readonly eventsAfter: Map<string, StoredEntry[]>
	protected readonly listener2line: WeakMap<StoredListener, string>
	public on<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	public after<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	public once<K extends keyof M>(name: K, listener: EventListener<M, K>, priority?: number): EventEmitter<M>
	public removeListener<K extends keyof M>(name: K, listener: EventListener<M, K>): EventEmitter<M>
	public hasListeners(name: keyof M): boolean
	/**
	 * Reports how many listeners every event currently has, `on` and `after` summed - the number
	 * that grows when a registration is never taken back.
	 * @example
	 * Events.CountListeners((name, count) => console.log(name, count))
	 */
	public CountListeners(sink: (name: string, count: number) => void): void
	public emit<K extends keyof M>(name: K, cancellable?: boolean, ...args: M[K]): boolean
}
