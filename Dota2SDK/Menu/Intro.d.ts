// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type IntroTargetKey = "wordmark" | "search" | "collapse" | "controls" | "subpanel" | "topbar" | "topnav" | "content" | `nav:${number}` | `toptab:${number}`
	function SetIntroTarget(key: IntroTargetKey, element: Nullable<HTMLElement>): void
	function IntroPlayed(): boolean
	function IntroActive(): boolean
	function ResetIntro(): void
	/**
	 * Ends a running intro on the spot: every element it hid is shown again and its curtain comes
	 * down for good. The window calls this the moment it starts closing mid-intro — a curtain that
	 * dies with the window would otherwise leave the reopened menu holding the hidden elements,
	 * with nothing left to reveal them.
	 */
	function AbortIntro(): void
	function PlayIntro(frame: HTMLElement): void
	function TickIntro(now: number): void
}
