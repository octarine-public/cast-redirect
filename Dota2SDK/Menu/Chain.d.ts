// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * One pooled element batch of capsule segments, drawn as a single quad through one native
	 * slot. Segments accumulate in screen px over the frame; `Flush` claims a slot, streams the
	 * buffer and stretches the quad over the padded bounds. Reused across frames — nothing here
	 * allocates once the buffer exists, and the decorator string is rebuilt only when the slot
	 * or the stroke actually changed.
	 */
	class CChainBatch {
		public count: number
		public Reset(): void
		/** Adds one segment in screen px; `chain` groups segments into one seamless union. */
		public Segment(x1: number, y1: number, x2: number, y2: number, chain: number): boolean
		/** Streams the batch and stretches the quad; `pinned` bypasses the frame allocator. */
		public Flush(element: HTMLElement, stroke: WorldStroke, pinned?: number): void
	}
}
