// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Whether the samples on a preview stage move. The card runs its elements through a cycle so
	 * they can be judged the way they read over a real unit, which is the wrong thing under the
	 * cursor while one of them is being placed or sized. It answers for every preview card at once,
	 * and it is offered on the card rather than as a row on a page: the motion it stops is only
	 * ever on screen there. Holding the stage still is a moment's tool, not a setting — the choice
	 * is not carried between sessions, so every load opens with the preview moving.
	 */
	const PreviewMotion: Toggle
	/**
	 * The clock the preview samples run on, in seconds. Health, barriers, stamina, cooldowns and
	 * distance are each a phase of it, so holding it still holds all of them where they stand — and
	 * nothing that reads it has to know the difference.
	 */
	function PreviewClock(): number
	/**
	 * The clock a drawing's own motion runs on, in seconds: the wall clock over the world, and the
	 * preview's own where the sample is a preview's. A flash or a trail is motion the drawing keeps
	 * rather than something the unit does, so holding a stage still has to hold those too.
	 */
	function DrawClock(preview: boolean): number
}
