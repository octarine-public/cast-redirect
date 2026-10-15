// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	class CScriptProfiler {
		/** Registers the shared profiler settings and RmlUi overlay once; a release build skips both. */
		public Setup(): void
		/**
		 * Publishes a completed sampling window on a stable menu frame boundary. Only the stack the
		 * panel stands in is asked for a render: a reading a second is not news to the world.
		 */
		public Tick(): void
	}
	const ScriptProfiler: CScriptProfiler
}
