// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type PanelAnchor = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right"
	function SetViewport(width: number, height: number): void
	function ViewportVersion(): number
	function Viewport(): [number, number]
	/**
	 * The viewport's own numbers. {@link Viewport} builds a pair to hand them over, which is what a
	 * caller reading them once wants and what a caller reading them thousands of times a frame - a
	 * length converted to pixels, a card measured - must not pay for.
	 */
	function ViewportWidth(): number
	function ViewportHeight(): number
	function OnViewportChanged(listener: () => void): () => void
	function AnchorStyle(anchor: PanelAnchor, offsetX: number, offsetY: number): RmlStyle
}
