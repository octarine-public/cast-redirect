// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The per-frame allocator of the host's capsule vector slots, shared by every writer in the
	 * process: the slots are one native table, and two modules each keeping a cursor of their own
	 * would hand out the same slot twice. menu-sdk owns the reset — once per menu tick — and
	 * every consumer, this package's world surface and the game scripts alike, claims through
	 * here. The topmost slots are reserved for menu previews, which draw outside the world pass.
	 */
	/** Whether the running host carries the capsules shader; fixed for the session. */
	const CapsulesShaderSupported: boolean
	/** Segment capacity of one native slot — the size of `u_capsule_segments` in the shader. */
	const ShaderSlotSegments = 40
	/**
	 * How many slots stand reserved for menu previews. A preview stage draws in layers — a base
	 * skeleton, a halo under the chosen parts, the parts themselves, the one under the cursor —
	 * and each layer is one quad through one slot, pinned so a busy world frame can never leave a
	 * stage half drawn.
	 */
	const PreviewShaderSlots = 4
	/** The first slot reserved for menu previews, outside the per-frame cursor's range. */
	const PreviewShaderSlot: number
	/**
	 * One of the reserved preview slots, counted down from {@link PreviewShaderSlot}. Layers of one
	 * stage pin their own index, so what a layer draws never depends on what another claimed.
	 */
	function PinnedPreviewSlot(layer: number): number
	/** Resets the frame cursor; the menu tick calls this once at the start of every frame. */
	function ResetShaderSlots(): void
	/**
	 * The next free slot of this frame, or undefined when the pool is spent — a batch past the
	 * pool draws nothing this frame rather than corrupting another writer's slot. Slots are
	 * handed out downward from the preview slot: a script built before this allocator existed
	 * counts upward from zero on its own, and the two meet only with the pool nearly full.
	 */
	function ClaimShaderSlot(): Nullable<number>
}
