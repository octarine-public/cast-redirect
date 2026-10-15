// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Imperative access to the elements one overlaid item rendered. */
	interface IWorldOverlayHandle {
		/** Stable ref callback that stores the element under `name`. */
		Ref(name: string): (element: HTMLElement | null | undefined) => void
		Element(name: string): Nullable<HTMLElement>
		/** Applies a style to the named element, when it is mounted. */
		Style(name: string, style: RmlStyle): void
	}
	/**
	 * One world-anchored overlay. React renders structure when identity or structure changes; the
	 * adapter styles the mounted elements every frame, and an item whose Update returns false is
	 * hidden by the host — scripts never manage visibility themselves.
	 *
	 * An item is rendered into a root the size of the window, so its elements position in screen
	 * pixels and one with no width of its own shrinks to fit its content rather than to nothing.
	 */
	interface IWorldOverlayAdapter<T> {
		/** The items to overlay right now; called once per frame. */
		Items(): readonly T[]
		/** Stable identity of an item; a change re-mounts it. */
		Key(item: T): number
		/** Version of an item's rendered structure; a change re-renders it. */
		Structure(item: T): number
		/** Renders one item's structure, registering elements through the handle. */
		Render(item: T, handle: IWorldOverlayHandle): React.ReactNode
		/** Styles one item for this frame; false hides it until it returns true again. */
		Update(item: T, handle: IWorldOverlayHandle): boolean
		/**
		 * Distance from the overlay's view origin in world units. When provided, nearer items cover
		 * farther ones; distances are quantized so small movements do not re-sort the document.
		 */
		Distance?(item: T): number
		/** Frame setup before any Update; false hides every item this frame. */
		Begin?(): boolean
	}
	/** Mounts a world overlay into the panel host; returns the unregister handle. */
	function RegisterWorldOverlay<T>(key: string, adapter: IWorldOverlayAdapter<T>): () => void
	/** Per-frame pass over every overlay: structure reconciliation, then adapter updates. */
	function TickWorldOverlays(): void
}
