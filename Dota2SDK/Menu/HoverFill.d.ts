// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Animates an analytic rounded fill between its idle and lit form, and returns the
	 * fragment to seed the element's inline style with on the current render.
	 *
	 * A fill built by `SdfRounded` lives in a shader decorator, so it cannot be handed to
	 * the stylesheet the way `background-color` is: a class rule that transitions the
	 * background overwrites the inline transparent value every frame. This drives the same
	 * hover fade through one `Tween` instead, leaving the class to carry only text, border
	 * and icon transitions.
	 *
	 * @example
	 * const fill = (mix: number) => SdfRounded(7, fadeHex(Theme.ValueOf("DangerBg"), mix))
	 * const style = useHoverFill(row, hovered, fill)
	 * return <div ref={RefTo(row)} className={Classes.Danger} style={rowStyle({}, style)} />
	 */
	function useHoverFill(target: {
		current: Nullable<HTMLElement>
	}, lit: boolean, fill: (mix: number) => RmlStyle): RmlStyle
}
