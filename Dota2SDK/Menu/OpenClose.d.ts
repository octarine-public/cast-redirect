// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The open/close motion of the menu window. A linear progress value runs from
	 * 0 (fully closed) to 1 (fully open) across `MenuFlags.MenuOpenDuration`; the
	 * selected effect shapes it into the frame's opacity multiplier and backdrop
	 * blur fraction, both landing on the theme's own opacity and blur at 1.
	 * Closing has no motion: the progress drops to 0 and the window leaves the
	 * same frame, from any point mid-open. Surfaces that stand beside the window
	 * rather than inside it - a preview card and its stage - follow the same
	 * progress, so the menu opens as one thing. The module also owns the native
	 * backdrop capture, releasing it the moment the window closes.
	 */
	interface OpenEffect {
		readonly name: string
		/** Frame opacity as a fraction of the theme opacity, over progress 0..1. */
		readonly opacity: (t: number) => number
		/** Backdrop blur as a fraction of the theme blur, over progress 0..1. May overshoot 1. */
		readonly blur: (t: number) => number
	}
	const OpenEffects: OpenEffect[]
	/**
	 * The open effect the menu is set to, for a surface that comes in on the window's own terms
	 * without standing inside it - a HUD card that opens the way the menu does.
	 *
	 * @example
	 * surface.Fade(ActiveOpenEffect().opacity(t))
	 */
	function ActiveOpenEffect(): OpenEffect
	/** How long the menu's open motion runs at the designed pace, in ms. */
	function OpenDuration(): number
	/**
	 * Puts a surface standing outside the window on the window's own open motion, or takes it off
	 * again; `glass` is the layer inside it carrying the backdrop blur, for one that is frosted.
	 * The progress is written the moment it registers, so a card mounting into an open window is on
	 * screen the same frame and one mounting mid-open joins the fade where it stands.
	 */
	function SetMenuMotionFollower(key: string, element: Nullable<HTMLElement>, glass?: Nullable<HTMLElement>): void
	/**
	 * Registers the menu window frame with the motion driver. Mounting an opened
	 * window with the progress below 1 plays the open animation, so the first
	 * mount and a reopen both fade in through the same path; a rebuild remounts
	 * at progress 1 and shows the window untouched.
	 */
	function SetMenuMotionFrame(element: Nullable<HTMLElement>): void
	/** Wires the driver to window open/close transitions and takes over the backdrop capture. */
	function SetupOpenClose(): void
}
