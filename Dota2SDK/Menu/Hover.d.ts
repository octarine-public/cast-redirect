// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The pair `useHover` drives its state from, ready to spread onto an element. */
	interface HoverHandlers {
		readonly onMouseOver: (event: Event) => void
		readonly onMouseOut: (event: Event) => void
	}
	/**
	 * Hover state of a single element, as `[hovered, handlers]`.
	 *
	 * RmlUi dispatches `mouseover` and `mouseout` on every element that enters or leaves the
	 * hover chain and lets both bubble. A box that has children therefore sees a child's
	 * `mouseout` when the cursor only walks from that child onto the box itself, and a plain
	 * handler drops the state while the cursor is still well inside. These handlers answer to
	 * the element's own events alone — the enter/leave pair the state actually wants — and
	 * keep one identity for the life of the component, so a re-render never rebinds them.
	 *
	 * @example
	 * const [hovered, hover] = useHover(
	 * 	() => SetHoverTooltip(button, "More"),
	 * 	() => ClearHoverTooltip(button)
	 * )
	 * return <div ref={RefTo(button)} {...hover} style={{ opacity: hovered ? 1 : 0 }} />
	 */
	function useHover(enter?: () => void, leave?: () => void): [boolean, HoverHandlers]
}
