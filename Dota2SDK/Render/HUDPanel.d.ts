// AUTO-GENERATED - do not edit.
declare const enum PanelLookup {
	WindowRoot = 0,
	Child = 1,
	ChildIndex = 2,
	Descendant = 3
}
/**
 * A live reference to one Panorama panel, resolved lazily and kept across frames.
 *
 * The reference is what you hold onto; the panel behind it may come and go. Asking for
 * {@link HUDPanel.Rect} measures it against the game's own layout, so every number is the one
 * the game laid out at the last reading — nothing is guessed from the screen resolution.
 * @example
 * const slot = GUIInfo.HUD.Path("Hud", "HUDElements", "lower_hud").Descendant("inventory_slot_0")
 * const rect = slot.Rect
 * if (rect !== undefined) {
 * 	RendererSDK.OutlinedRect(rect.pos1, rect.Size)
 * }
 */
declare class HUDPanel {
	constructor(tree: CPanelTree, parent: Nullable<HUDPanel>, lookup: PanelLookup, id: string, index: number)
	/**
	 * The native panel as the last snapshot found it, or undefined while nothing answers this
	 * reference.
	 *
	 * Calling anything on it reaches into Panorama, which takes no lock and runs on the game's
	 * own thread: do it inside `MainThread.Queue`, the way this class reads everything else.
	 * @example
	 * await MainThread.Queue(() => panel.Native?.SetVisible(false))
	 */
	public get Native(): Nullable<IUIPanel>
	/** True while the game holds a panel for this reference. */
	public get IsValid(): boolean
	/**
	 * The id the game gave the panel, empty while it has none or is gone.
	 *
	 * Dota puts state into some ids — a top bar slot is `RadiantPlayer<playerID>`, and a slot
	 * with no player in it is `RadiantPlayer-1`.
	 *
	 * Read only for a panel something has asked about, the way class names are. A first ask made
	 * while GUIInfo is reading the HUD — a section's own refresh — is answered right then; one
	 * made anywhere else reads empty until the next reading.
	 */
	public get Id(): string
	/**
	 * False when the panel is gone, or when it or any of its ancestors is hidden.
	 *
	 * A hidden panel keeps its layout rectangle — the HUD folds elements away without moving
	 * them — so this is the only thing telling the two states apart.
	 */
	public get IsVisible(): boolean
	/** True while the panel takes part in layout, whether or not it is visible. */
	public get IsLaidOut(): boolean
	/**
	 * True when the last reading's measurement differs from the one before it — the panel moved,
	 * resized, or came into or went out of layout.
	 *
	 * It answers for the last reading, which GUIInfo takes once a `Draw2D` pass.
	 * @example
	 * if (GUIInfo.HUD.Descendant("inventory").HasChanged) { rebuildOverlay() }
	 */
	public get HasChanged(): boolean
	/**
	 * The panel's rectangle in screen pixels, or undefined while it is gone or takes part in no
	 * layout — where the element sits, whether or not the game is painting it right now.
	 *
	 * Visibility is deliberately a separate question ({@link HUDPanel.IsVisible}). The game
	 * leaves plenty of panels laid out while painting nothing into them — an enemy's top bar
	 * health bar with no vision on them, a respawn timer for a living hero — and a script
	 * drawing its own overlay there still needs to know where "there" is.
	 *
	 * The instance is reused between readings and re-measured at each one: copy it
	 * with `Clone()` before keeping or changing it.
	 * @example
	 * const rect = GUIInfo.Minimap.Minimap
	 * if (rect !== undefined && rect.Contains(cursor)) { }
	 */
	public get Rect(): Nullable<Rectangle>
	/**
	 * How many children the panel currently has, 0 while it is gone. Read only for a panel
	 * something has asked about, like {@link HUDPanel.Id}: a first ask made outside a reading
	 * reads 0 until the next one.
	 */
	public get ChildCount(): number
	/**
	 * A reference to the direct child with this id. The reference is cached, so asking twice
	 * hands back the same instance and costs nothing.
	 * @example
	 * const abilities = center.Child("AbilitiesAndStatBranch")
	 */
	public Child(id: string): HUDPanel
	/**
	 * A reference to the child at this index, for panels the game gives no unique id — the top
	 * bar names every player slot after the first `RadiantPlayer-1`.
	 * @example
	 * const slot = playersContainer.ChildAt(2)
	 */
	public ChildAt(index: number): HUDPanel
	/**
	 * A reference to a descendant at any depth. Prefer {@link HUDPanel.Path} where the layout is
	 * known: a direct child lookup costs well under a microsecond, while this walks the subtree.
	 * @example
	 * const tp = hud.Descendant("inventory_tpscroll_slot")
	 */
	public Descendant(id: string): HUDPanel
	/**
	 * A reference reached by walking direct children in order — the cheap way to address a panel
	 * whose layout you know.
	 * @example
	 * const lowerHUD = hud.Path("Hud", "HUDElements", "lower_hud")
	 */
	public Path(...ids: string[]): HUDPanel
	/** True when the panel carries the given CSS class. */
	public HasClass(name: string): boolean
	/** True when the panel or any of its ancestors carries the given CSS class. */
	public AscendantHasClass(name: string): boolean
	/**
	 * Takes the whole panel through the game's own API, and is the only place that touches
	 * it: everything else on this class answers from what this left behind.
	 *
	 * Panorama reads are not locked on the native side and the script runs on its own
	 * thread, so a read racing the game's own layout can catch a panel as it is being
	 * destroyed. GUIInfo runs this for every panel inside one main-thread session a pass,
	 * where the game main thread is parked and cannot be part-way through anything.
	 */
	public Snapshot_(): void
}
/**
 * Owns the panel cache: the window roots, the interned CSS class symbols, and the two epochs
 * that decide when a cached lookup and a cached measurement have gone stale.
 */
declare class CPanelTree {
	/**
	 * True while {@link CPanelTree.Snapshot} is under way, inside the main-thread session: the
	 * one stretch where a panel may be read out of the game directly.
	 */
	public get Reading(): boolean
	/** Bumped whenever every cached lookup has to be made again. */
	public get ResolveEpoch(): number
	/** Counts every panel measurement that came out different from the one before it. */
	public get Changes(): number
	/** Bumped once a reading; the first read of a panel after it re-measures. */
	public get FrameEpoch(): number
	/**
	 * The root of a Panorama window. The reference is cached and survives the window being torn
	 * down and built again.
	 * @example
	 * const hud = GUIInfo.Root(PanoramaWindow.Hud)
	 */
	public Root(window: PanoramaWindow): HUDPanel
	/** Interns a CSS class name once; Panorama's symbol table holds 65535 of them. */
	public Symbol(name: string): PanoramaSymbol
	/** Recorded by a panel whose rectangle came out different from the previous reading's. */
	public NoteChange(): void
	/** Drops every cached lookup, so the next read walks the game's tree again. */
	public Invalidate(): void
	/** Opens a new frame: the next read of any panel measures it again. */
	public Tick(): void
	/**
	 * Takes every panel the tree has handed out; a panel registers itself when built, and one
	 * built during a reading is read at once.
	 */
	public Register_(panel: HUDPanel): void
	/**
	 * Reads the whole tree out of the game in one go, then runs `during` with the reading still
	 * open, so whatever it asks about for the first time is read on the spot rather than a
	 * reading later.
	 *
	 * Panels are built parent first, so the list is already in an order where a panel is
	 * reached after the one it hangs off. Run this inside a main-thread session — it is the
	 * only moment anything here touches Panorama.
	 */
	public Snapshot(during: () => void): void
}
