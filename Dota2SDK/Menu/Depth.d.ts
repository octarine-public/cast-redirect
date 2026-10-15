// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The shared stacking index for a world-space item at `distance` world units from the view
	 * origin. Nearer items receive a higher index; `priority` raises an entire class of items over
	 * the ordinary distance stack. Distance is quantized so small movements do not make the document
	 * rebuild its stacking order every frame.
	 */
	function WorldDepthIndex(distance: number, priority?: number): number
}
