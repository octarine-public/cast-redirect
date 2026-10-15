// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	const enum Ease {
		Standard = 0,
		Out = 1,
		Enter = 2,
		Pop = 3,
		Linear = 4
	}
	const Duration: {
		readonly Hover: 150
		readonly Slide: 180
		readonly Fade: 200
		readonly Reveal: 300
		readonly Page: 220
	}
	function EaseValue(ease: Ease, t: number): number
	/**
	 * The range the animation speed control offers, as a fraction of the designed pace, and what a
	 * stored theme is read into.
	 */
	const AnimationSpeedRange: readonly [0.4, 3]
	/**
	 * Global speed multiplier applied to every tween and stylesheet transition;
	 * 1 is the designed pace, higher is faster. Clamped to [0.4, 4].
	 */
	function SetAnimationSpeed(value: number): void
	function AnimationSpeed(): number
	class Tween {
		/**
		 * A value that eases towards a target, applied at most once per frame. `apply` runs with
		 * `scope` active, so a fill that reads the theme paints the surface the tween belongs to
		 * rather than whichever scope happened to be ticking. The default captures the scope of the
		 * render or effect that created the tween, which is right everywhere except a tween built at
		 * module scope for a surface outside the menu - name that scope explicitly.
		 *
		 * @example
		 * const reveal = new Tween(0, applyPanelReveal, EThemeScope.Panels)
		 */
		constructor(initial: number, apply: (value: number) => void, scope?: EThemeScope)
		public get Value(): number
		public get Running(): boolean
		public To(target: number, duration: number, ease?: Ease, done?: () => void): void
		public Set(value: number): void
		public Cancel(): void
		public Tick(now: number): void
	}
	function tickTweens(now: number): void
	interface PopInOptions {
		readonly scale?: number
		/** Where the element starts out from, in dp, relative to where the layout stands it. */
		readonly dx?: number
		readonly dy?: number
		readonly duration?: number
		/**
		 * Ramps the theme's glass blur along with the fade, for a surface that frosts what stands
		 * behind it. A backdrop filter does not answer to an element's own opacity, so a glass panel
		 * popped in without this holds a frosted rectangle at full strength from its first frame and
		 * then snaps away with the element. The element seeds `backdropFilter: "none"` in the style
		 * React writes and carries the raster `border-radius` the filter is cut by; the fill it wears
		 * is the one element in.
		 */
		readonly blur?: boolean
	}
	function PopIn(target: {
		current: Nullable<HTMLElement>
	}, options?: PopInOptions): void
	function usePopIn(target: {
		current: Nullable<HTMLElement>
	}, options?: PopInOptions): void
	/**
	 * Slides an element back from an offset to where the layout already stands it. The move is a
	 * transform, so nothing around it is laid out again and the element travels at whatever precision
	 * the compositor has rather than in whole pixels. `pinned` is the element doing something else
	 * with its transform - a tile being dragged writes its own and must not be written over.
	 */
	function useGlide(element: {
		current: Nullable<HTMLElement>
	}, pinned?: {
		current?: boolean
	}): (dx: number, dy: number) => void
}
