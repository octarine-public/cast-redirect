// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Which edge of the panel the preview it was opened from lies beyond. */
	const enum ERevealEdge {
		Left = 0,
		Right = 1
	}
	/**
	 * A panel's entrance beside the preview it belongs to: it fades up out of the edge that faces the
	 * preview, growing to its size as it settles the last few dp away from it. That is what says where
	 * it came from — the panel stands off at a distance, and a settings page that simply appears there
	 * reads as a second window rather than as the element that was just clicked.
	 *
	 * The frames are a tween on the menu's own decelerating curve, written straight to the element:
	 * nothing about the panel changes class when it opens, and no render runs for any of them — the
	 * rows inside it are the menu's own and would each lay themselves out again.
	 *
	 * Only the mount plays it. The overlay carries one element's settings at a time and closing it
	 * takes the panel down, so every open is a panel that was not there a frame ago.
	 */
	function useReveal(root: React.RefObject<HTMLElement>, edge: ERevealEdge): void
}
