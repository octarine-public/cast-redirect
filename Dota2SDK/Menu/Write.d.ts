// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Writes `${value}px` when the number differs from the last one written. */
	function WritePx(element: HTMLElement, name: string, value: number): void
	/**
	 * Whether `value` differs from what this element was last marked with under `name`, marking it
	 * with it either way. Nothing reaches the document: this is the writers' own gate, offered to a
	 * caller whose whole run of writes follows one number and who would rather skip the run than
	 * have every write in it compare for itself. The mark rides the element, so one the document
	 * replaced answers true and is laid out afresh.
	 *
	 * `name` must not be a property any writer uses on the same element - the placement writer's
	 * `p:x` is the pattern to follow.
	 *
	 * @example
	 * if (MarkValue(cell, "m:layout", size)) { ...the cell's whole layout... }
	 */
	function MarkValue(element: HTMLElement, name: string, value: number): boolean
	/** Writes `${value}${suffix}` when the number differs from the last one written. */
	function WriteFmt(element: HTMLElement, name: string, value: number, suffix: string): void
	/** Writes a ready-made value when it differs from the last one written. */
	function WriteStyle(element: HTMLElement, name: string, value: string): void
	/**
	 * Scrolls the element's content `value` px to the left when that differs from the last scroll
	 * written. RmlUi holds it inside the overflow the content has at the time, so a run whose text
	 * is being replaced is scrolled from 0.
	 */
	function WriteScrollLeft(element: HTMLElement, value: number): void
	/**
	 * Shows or hides an absolutely positioned element; `display` is what showing means for it.
	 * Hiding writes `visibility` alone and leaves `display` in place: visibility does not dirty
	 * layout, so a marker that flaps with projection costs no document reformat — only its
	 * first show pays one.
	 */
	function WriteShown(element: HTMLElement, shown: boolean, display?: string): void
	/**
	 * Places an element by one `transform` write, gated on all its numbers together: a translation,
	 * a rotation about the element's `transform-origin` and a scale about it. On hosts with the fast
	 * path the primitives cross as numbers and skip the transform parser.
	 *
	 * The transform is where RmlUi keeps a fraction of a pixel - it rounds layout offsets and box
	 * sizes before they draw. A scale other than 1 needs a host with `RegisterSizedImageRegion`; one
	 * predating it takes the translation and the angle alone.
	 * @example
	 * WritePlacement(icon, 10.25, 20.5, 0, 18.6 / 64, 18.6 / 64)
	 */
	function WritePlacement(element: HTMLElement, x: number, y: number, angle: number, scaleX?: number, scaleY?: number): void
	/**
	 * Writes text by replacing the element's text node, never by rewriting markup: RmlUi hands a
	 * removed child back to the caller instead of freeing it, so a readout that ticks every frame
	 * would strand one node per frame. The stale node goes to the renderer's destroy queue.
	 */
	function WriteText(element: HTMLElement, text: string): void
	/**
	 * Points an image element at its artwork cut for the box it is drawn in. Mip selection lands only
	 * on a power-of-two level and rounds toward the smaller one, so art drawn at a size the chain does
	 * not hold reads soft however well the chain was built; a source minted for that box is cut once,
	 * straight to it, and an element that only moved re-mints nothing.
	 *
	 * Sizes and radius are in screen pixels, not dp. Radius defaults to zero and is baked into
	 * raster artwork; the element keeps no second rounded clip. Sources that cannot be baked keep
	 * their radius on the element. An empty path clears the element. What the source was
	 * minted from rides the element, so the one it replaces is handed back only once the new one is
	 * registered - a host counts the holders of a source, and dropping the last one first would free
	 * artwork the element is still drawing. An element the document lets go of is passed to
	 * {@link ReleaseSizedArt}.
	 *
	 * The host cuts a copy in the background after it is minted, and an element that loads it
	 * before it is cut is painted with nothing, or with a plain colour, and never asks again. So the
	 * element takes a copy only once the host has it decoded, and keeps what it showed until then,
	 * nothing where it showed nothing: {@link SettleSizedArt} lands the copy at the end of the frame
	 * it is ready, whether or not the element is written again.
	 *
	 * A `region` shows only that rectangle of the file, in the file's own pixels, cut out by the host
	 * and fitted to the box - one sprite of a sheet. Where the host cannot cut it the element is
	 * cleared rather than showing the whole sheet.
	 *
	 * @example
	 * WriteSizedArt(icon, ability.TexturePath, size, size)
	 * WriteSizedArt(icon, sheet, 32, 32, 0, { x: 32, y: 0, width: 32, height: 32 })
	 */
	function WriteSizedArt(element: HTMLElement, path: string, width: number, height: number, radius?: number, region?: ImageRegion): void
	/**
	 * Lands the copies the host has cut on the elements waiting for them, once a frame after everything
	 * has drawn: an element written once and then left alone would otherwise wait for ever. An element
	 * the document has let go of in the meantime hands its copy back instead of being written.
	 */
	function SettleSizedArt(): void
	/**
	 * Hands the source an element took from {@link WriteSizedArt} back to the host, for an element the
	 * document has let go of. An element still standing keeps its own until its artwork or its box
	 * changes: the source it draws from is the one it names, and freeing that while it is on screen
	 * leaves it naming artwork nothing holds.
	 */
	function ReleaseSizedArt(element: HTMLElement): void
}
