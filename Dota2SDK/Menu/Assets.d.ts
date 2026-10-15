// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type AssetMode = "raster" | "vector"
	function SetAssetResolver(next: (path: string) => string): void
	/**
	 * Registers the host's rule for art whose shape is its alpha alone. A game's ability icons are
	 * such silhouettes, and the colour under them is whatever each source file held, black in a few
	 * and white in most; a path the rule claims is loaded white on alpha, so every one of them reads
	 * the same and takes a tint the same way.
	 */
	function SetMonochromeArt(next: (path: string) => boolean): void
	/**
	 * Element tag for a resolved asset: <svg> (SVG plugin) rasterizes the vector
	 * source at the exact display size, <img> decodes a raster texture.
	 */
	/** Vector sources render through the svg element; panorama ships them as vsvg containers. */
	function AssetElementTag(src: string): "svg" | "img"
	/** A rectangle of an image file in the file's own whole pixels: one sprite of a sheet, or a crop. */
	interface ImageRegion {
		readonly x: number
		readonly y: number
		readonly width: number
		readonly height: number
	}
	/**
	 * Whether {@link RegisterSizedAsset} cuts `path` to size, and so can bake a radius into it: raster
	 * files only, on a host that resamples.
	 */
	function CanBakeSizedAsset(path: string): boolean
	/**
	 * Whether {@link RegisterSizedAsset} can cut a rectangle of `path` out on its own: raster files
	 * only, on a host with `RegisterSizedImageRegion`.
	 */
	function CanCutSizedRegion(path: string): boolean
	/** Returns a previously prepared raster source without creating or retaining a new asset. */
	function PeekSizedAsset(path: string, width: number, height: number, radius?: number): string
	/**
	 * A source for `path` resampled to the pixel size it will be drawn at, or `path` itself where that
	 * cannot help. Mip selection lands only on a power-of-two level and rounds toward the smaller one,
	 * so art drawn at a size the chain does not hold reads soft however well the chain was built; art
	 * cut once, straight to its drawn size, does not.
	 *
	 * Raster only: a vector source rasterizes at its display size already, and a scheme source names
	 * something the host serves rather than a file to resample. Sizes are in whole screen pixels, not
	 * dp — pass them through {@link DpToPx} first. Every source taken here is handed back to
	 * {@link ReleaseSizedAsset} when the element drawing it goes away or asks for another size.
	 *
	 * Radius is in screen pixels and defaults to zero. Rounded sources bake coverage into their
	 * alpha; draw them without another rounded clip. Hosts predating radius support keep square art.
	 * Hosts predating the function keep the raw path, which the mip chain still covers.
	 *
	 * A `region` cuts that rectangle of the file out on its own - one sprite of a sheet - so nothing
	 * around it bleeds in; cut at the region's own size it keeps the frame's texels as they are. There
	 * is no stand-in for a region: where it cannot be cut (a host without
	 * `RegisterSizedImageRegion`, a vector or scheme source, a rectangle that is not whole pixels)
	 * the answer is `""`, which draws nothing, never the whole sheet in the sprite's place.
	 * @example
	 * const src = RegisterSizedAsset(sheet, 32, 32, 0, { x: 32, y: 0, width: 32, height: 32 })
	 */
	function RegisterSizedAsset(path: string, width: number, height: number, radius?: number, region?: ImageRegion): string
	/** Hands back a source taken from {@link RegisterSizedAsset}. A raw path is ignored. */
	function ReleaseSizedAsset(source: string): void
	function ResolveAsset(path: string, mode?: AssetMode): string
	/**
	 * Whether `path` resolves to a vector source, which only the svg element draws. Answered once per
	 * path: a HUD routes every image it is handed through this on every frame.
	 */
	function IsVectorAsset(path: string): boolean
}
