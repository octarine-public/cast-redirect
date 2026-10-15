// AUTO-GENERATED - do not edit.
/**
 * One recorded pair: what prediction said, what the game did, the game time of the check and the
 * source it was about, such as a unit index.
 */
interface IPredictionSample {
	readonly kind: string
	readonly time: number
	readonly predicted: number
	readonly actual: number
	readonly source: number
}
/** Error summary of one sample kind; errors are `actual - predicted`. */
interface IPredictionSampleStats {
	readonly count: number
	readonly meanError: number
	readonly medianError: number
	readonly p95Error: number
	readonly meanRatio: number
}
/** Ring buffers of "predicted → actual" pairs per sample kind, summarized on demand. */
declare class PredictionTelemetry {
	/** Stores one pair tagged with its source; the oldest pair of the kind is dropped past 4096. */
	public Record(kind: EPredictionSample, predicted: number, actual: number, source?: number): void
	/** Error summary per kind, keyed by the kind's name; `source` limits it to one source. */
	public Stats(source?: number): Record<string, IPredictionSampleStats>
	/** The newest `count` pairs of every kind, newest first. */
	public Dump(count?: number): IPredictionSample[]
	/** Drops every pair. */
	public Reset(): void
}
