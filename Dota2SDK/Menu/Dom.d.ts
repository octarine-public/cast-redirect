// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function cssName(key: string): string
	function dp(value: number): string
	/**
	 * Whether an element is still there to be written to. The host frees the native object behind an
	 * element the moment its document lets go of it, and every property write past that throws - so
	 * anything holding an element across frames asks this before it writes.
	 *
	 * The answer costs a call into the host, which is a price per element rather than per frame:
	 * ask it once against {@link ElementsFreedEpoch} instead of every frame.
	 *
	 * @example
	 * if (!IsElementAlive(element)) { pool[index] = undefined; return }
	 */
	function IsElementAlive(element: Nullable<HTMLElement>): boolean
	/**
	 * Counts the times elements have been freed without whoever held them being told - a layer torn
	 * down, a foreign document closed. The destroy queue is not one of those: it takes elements React
	 * has already let go of, and a ref says so. Whatever keeps elements of its own holds the count it
	 * last checked them at and asks the host about them only when it has moved.
	 *
	 * @example
	 * const epoch = ElementsFreedEpoch()
	 * const verify = this.checkedAt !== epoch
	 * this.checkedAt = epoch
	 */
	function ElementsFreedEpoch(): number
	/**
	 * Says that elements were freed outside the destroy queue - a document closed, a root destroyed
	 * whole - so what holds elements of its own looks at them again.
	 */
	function NoteElementsFreed(): void
	function applyStyle(element: HTMLElement, style: RmlStyle): void
	function clearStyle(element: HTMLElement, keys: string[]): void
	function retintStyles(root: HTMLElement): void
	/**
	 * Attaches an event listener that re-arms itself after every dispatch.
	 *
	 * Pass `capture` to run on the way down, while the event still travels from the document
	 * towards its target. That is the only phase from which a key can be taken away from a
	 * focused control: a listener on the control itself runs after the widget that owns it, so
	 * stopping propagation there no longer prevents the built-in behaviour — the caret of a text
	 * field has already moved by then.
	 */
	function listen(element: HTMLElement, name: string, callback: (event: Event) => void, capture?: boolean): void
	/**
	 * Which way a wheel event turned: -1 towards the user's up, 1 towards down, 0 for a tick that
	 * carried no vertical delta.
	 */
	function WheelDirection(event: Event): -1 | 0 | 1
	function unlisten(element: HTMLElement, name: string, callback: (event: Event) => void, capture?: boolean): void
	/**
	 * The layer documents document-level listeners must also reach. An event bubbles only inside
	 * its own document, and with layer documents the menu's content no longer lives in the base
	 * one — a listener on `document` alone would never hear a key pressed in the menu. Listeners
	 * already attached are brought onto the new targets; ResetLayers clears the set before it
	 * closes the documents, so nothing is ever removed from a dead one.
	 */
	function SetListenBroadcast(targets: readonly HTMLElement[]): void
	/**
	 * Detaches the element and hands it to the destroy queue. Pass `parent` when the element is
	 * still attached; without it the caller asserts the element is already detached. A failed
	 * detach keeps the element alive — destroying an attached element is worse than leaking one —
	 * but once detached it is always queued: skipping the queue leaks the native element.
	 */
	function deferDestroy(element: HTMLElement, parent?: HTMLElement): void
	function runAfterFrame(action: () => void): void
	/**
	 * Defers an action until the engine has performed a document update, so
	 * element offsets and sizes read fresh layout. Unlike runAfterFrame, whose
	 * queue drains at several points inside one frame and runs re-queued actions
	 * immediately, this queue drains once per menu frame and an action queued
	 * while draining runs on the next frame — rescheduling from the callback
	 * retries at most once per document update.
	 */
	function runAfterLayout(action: () => void): void
	function flushAfterLayout(): void
	function flushDestroyQueue(): void
}
