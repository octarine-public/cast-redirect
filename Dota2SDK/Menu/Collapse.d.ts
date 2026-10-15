// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Advances every folding surface that is waiting for a content measurement or
	 * tracking one. Called once per menu frame, right after the engine has updated
	 * the document, so `scrollHeight` reads a formatted tree — a node RmlUi has not
	 * laid out yet measures as nothing.
	 */
	function TickCollapses(): void
	interface CollapseOptions {
		/** Plays the motion; `false` jumps straight to the open or shut state. */
		readonly animate: boolean
		/** Animates an element that mounts already open, instead of settling it. */
		readonly enter?: boolean
		/** Runs once the fold has finished, for hosts that unmount their body. */
		readonly onFolded?: () => void
	}
	/**
	 * Folds an element between zero and its content height, fading the content in
	 * over the middle of the travel. Every folding surface in the menu shares this
	 * one clock and curve, and the target height is re-read while the motion runs,
	 * so a card opening at the same moment a row appears inside it grows to the
	 * final height rather than snapping to it when the tween lands.
	 *
	 * The motion owns `height`, `opacity` and `overflow` on the element — do not
	 * set them in the element's own style, or the reconciler will fight the tween.
	 * The one exception is an element that mounts shut: give it the shut values in
	 * a render-stable style object, so the content never paints before the mount
	 * effect runs. The object must keep the same values on every render — the
	 * reconciler then writes them once and the motion owns them from there.
	 *
	 * @example
	 * const body = React.useRef<HTMLElement>()
	 * useCollapse(body, node.expanded, { animate: MenuFlags.TabOpenAnimation })
	 * return <div ref={RefTo(body)}>{rows}</div>
	 */
	function useCollapse(root: React.RefObject<HTMLElement>, open: boolean, options: CollapseOptions): void
	/**
	 * Turns a fold chevron between its pointing-right and pointing-down angles on
	 * the same curve the body uses, so the marker and the content move together.
	 * The motion owns `transform` on the element.
	 */
	function useFoldChevron(root: React.RefObject<HTMLElement>, open: boolean, animate: boolean): void
}
