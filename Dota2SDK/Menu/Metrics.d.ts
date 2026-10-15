// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The proportions of the preview stage, in the menu's own units. They live in one place because
	 * three things have to agree on them and none of the three can tell when another moved: the card
	 * lays the band out, the scene renders a target stretched over it, and the camera frames the sample
	 * inside it.
	 *
	 * A stage measured one way and a sample measured another is how room added over a hero's head ends
	 * up going to the hero. The sample stands a height of its own here rather than a share of the
	 * stage — grow the stage and what grows is the room around it, which is the only reason to grow it.
	 */
	/** How wide the card stands, which is the stage's width less its border. */
	const PanelWidth = 300
	/**
	 * The card's border, in screen pixels. It is a layout border, so the stage lands inside it — and
	 * anything measuring off the stage has to add it back to reach the edge a reader sees.
	 */
	const CardBorder = 1
	/** How tall the stage band inside it stands. */
	const StageHeight = 450
}
