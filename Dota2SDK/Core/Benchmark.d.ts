// AUTO-GENERATED - do not edit.
/** Reports one gauge of the current bucket; the recorder stores it under `js.<name>`. */
type BenchmarkGaugeSink = (name: string, value: number) => void
/** Runs once per bucket on the script thread and reports whatever it counts. */
type BenchmarkProvider = (emit: BenchmarkGaugeSink) => void
/**
 * The script half of the in-process benchmark recorder. Every listener the emitters run is
 * timed through the profiler and folded into five-second buckets beside the native zones;
 * providers add the counts that say what grew. Everything is a no-op in a build without the
 * recorder, so a layer registers what it knows without checking first.
 */
declare class CBenchmark {
	public get Enabled(): boolean
	/**
	 * Writes a labelled point in time into the session, to line a change up with what the
	 * numbers did around it.
	 * @example
	 * SharedSDK.Benchmark.Mark("config applied")
	 */
	public Mark(label: string): void
	/**
	 * Registers gauges reported once per bucket. The provider runs on the script thread every
	 * five seconds, so it should read counts it already has, not compute them.
	 * @example
	 * SharedSDK.Benchmark.RegisterProvider(emit => emit("modifiers.active", active.size))
	 */
	public RegisterProvider(provider: BenchmarkProvider): void
	/**
	 * Starts a span in code the emitters do not see - a parser, a loop body - and returns what
	 * `End` needs. Zero when the recorder is absent, and `End` does nothing with it then.
	 * @example
	 * const started = SharedSDK.Benchmark.Begin()
	 * parse(buffer)
	 * SharedSDK.Benchmark.End("parse", started)
	 */
	public Begin(): number
	public End(name: string, started: number): void
}
