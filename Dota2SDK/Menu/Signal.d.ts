// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function Subscribe(onChange: () => void): () => void
	function Version(): number
	function Invalidate(): void
	/**
	 * Runs `fn` with every {@link Invalidate} it raises folded into one, delivered once it returns.
	 * For a change that writes many entries at a time - a preset, a config, Safe mode - where each
	 * setter would otherwise re-render the whole menu by itself.
	 */
	function BatchInvalidations(fn: () => void): void
}
