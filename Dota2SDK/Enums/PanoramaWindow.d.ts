// AUTO-GENERATED - do not edit.
/**
 * The Panorama windows the client can hand out a root panel for.
 *
 * The names are the ones the native layer matches against, so they are what
 * `Panorama.FindRootPanel` and every {@link HUDPanel} lookup take.
 * @example
 * const hud = GUIInfo.Root(PanoramaWindow.Hud)
 */
declare const enum PanoramaWindow {
	/** The layer Octarine builds for its own panels; created on the first ask. */
	Octarine = "OctarineRoot",
	/** The out-of-game dashboard. */
	Dashboard = "DotaDashboard",
	/** The in-game HUD, which also carries the hero-selection and post-game screens. */
	Hud = "DotaHud",
	/** The map loading screen. */
	LoadingScreen = "DotaLoadingScreen",
	/** The engine's own Panorama console. */
	Console = "PanoramaEngineConsole"
}
