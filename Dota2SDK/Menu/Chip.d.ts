// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * A chip's frame through the sdf pipeline: menu AA runs at zero samples, so a raster corner
	 * of this radius stair-steps, and the selected state is exactly what the corner has to carry.
	 */
	function ChipFrame(active: boolean, radius: number): RmlStyle
	/**
	 * One switch of the stage rather than of an element on it: what the samples are shown doing, and
	 * what they are shown against. It is lit while it is on and says what it answers for under the
	 * cursor, and the card's header is where it stands — a question about the whole stage belongs
	 * beside the title rather than among the chips that each speak for one element.
	 *
	 * A switch with more to it than on and off takes `configure`, and a right click opens that the
	 * same way the element chips underneath open theirs.
	 */
	function StageChip(props: {
		icon: string
		label: string
		on: boolean
		press: () => void
		configure?: () => void
	}): React.ReactElement
}
