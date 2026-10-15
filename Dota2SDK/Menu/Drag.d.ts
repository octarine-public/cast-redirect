// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function QueueDragMove(x: number, y: number): void
	function FlushDragMove(): void
	/**
	 * Opens the drag shield over the menu and hands the hand's moves to `onMove`, in layout units,
	 * flushed once per frame; `onEnd` runs when the button is let go, wherever that happens. A drag
	 * that follows the host's cursor on its own each frame - an overlay card - passes no `onMove`
	 * and takes only the release. A drag still open when the next one begins is released first, so
	 * its owner is told rather than forgotten.
	 */
	function BeginDrag(onMove?: (x: number, y: number) => void, onEnd?: () => void): void
	function EndDrag(): void
	/**
	 * Takes the shield down once the drag is over. The last move the shield queued still lands, and
	 * an owner the shield never got to tell hears the release here.
	 */
	function SettleDrag(): void
	function IsDragging(): boolean
}
