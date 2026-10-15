// AUTO-GENERATED - do not edit.
declare class CPanorama {
	/**
	 * The root panel of a Panorama window, or undefined while the window does not exist.
	 * @example
	 * const hud = Panorama.Root(PanoramaWindow.Hud)
	 */
	public Root(window: string): Nullable<Panel>
	/**
	 * Finds a panel by id anywhere under a window and caches it, so repeated calls do not walk
	 * the tree again. The result is dropped automatically when the window is rebuilt.
	 * @example
	 * const map = Panorama.Find(PanoramaWindow.Hud, "map_render")
	 */
	public Find(window: string, id: string): Nullable<Panel>
	public Forget(window: string): void
}
