// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface MenuHost {
		readonly onFrame?: (tick: () => void) => void
		/**
		 * The host's retained draw pass, run at a tick's rate rather than every frame: `begin` goes
		 * before the first listener of a pass and `end` after the last, both before the frame's own
		 * tick. A HUD surface drawn between the two keeps what it drew until the next pass, where one
		 * drawn every frame is wiped by any frame that does not draw it. The pass is for what stands on
		 * the screen; anything placed from a world position is drawn every frame, or it trails the
		 * camera. A host without one has every surface drawn per frame.
		 */
		readonly onRetainedPass?: (begin: () => void, end: () => void) => void
		/** Runs the retained pass on the next frame, for what a user is moving by hand. */
		readonly requestRetainedPass?: () => void
		readonly onTeardown?: (teardown: () => void) => void
		readonly onServerInfo?: (handler: () => void) => void
		readonly onKeyDown?: (handler: (code: number) => boolean) => void
		readonly onKeyUp?: (handler: (code: number) => boolean) => void
		readonly onMouseDown?: (handler: (code: number) => boolean) => void
		readonly onMouseUp?: (handler: (code: number) => boolean) => void
		readonly onMouseWheel?: (handler: (up: boolean) => boolean) => void
		readonly onCharInput?: (handler: () => boolean) => void
		readonly onViewportChanged?: (handler: () => void) => void
		readonly viewport?: () => [number, number]
		readonly resolveAsset?: (path: string) => string
		readonly resolveImage?: (value: string) => string
		/**
		 * Whether `path` is art whose shape is its alpha alone, to be loaded white on alpha. A game's
		 * ability icons are such silhouettes, and the colour under them is whatever each source file
		 * held; a host that does not answer loads every image as it is.
		 */
		readonly monochromeArt?: (path: string) => boolean
		/**
		 * The hero behind an ability name, where the name is a hero's own ability rather than an
		 * item: the hero's data name — {@link MenuHost.resolveImage} turns it into their portrait —
		 * and the number of the button that casts it, 1 to 4. A window's sidebar shows it as a
		 * quick hint over the row; a host that does not answer simply shows none.
		 */
		readonly abilityOwner?: (name: string) => Nullable<[hero: string, slot: number]>
		readonly scale?: () => number
		readonly cursor?: () => [number, number]
		readonly measureText?: (text: string, font: string, sizePx: number, weight: number, italic?: boolean) => Nullable<[number, number]>
		readonly imageSize?: (path: string) => Nullable<[number, number]>
		readonly inGame?: () => boolean
		/**
		 * Whether an overlay may draw right now: the game is in a match and has none of its own
		 * screens over it. Panels stand down while it says no - they stop drawing, stop holding
		 * their place in the snapping guides and stop taking the clicks that land where they were.
		 * A host that does not answer lets them draw whenever the game is running.
		 */
		readonly canDrawOverlays?: () => boolean
		/**
		 * True while the game has taken the keyboard — a chat box or a console. Keybinds stay quiet
		 * then, so typing a message does not fire them, unless {@link MenuFlags.TriggerWhileTyping}
		 * says otherwise.
		 */
		readonly inputCaptured?: () => boolean
		/** True while the game's text chat is open for interaction. */
		readonly chatOpen?: () => boolean
		/**
		 * Seconds on the match clock, `undefined` while no match is running - a menu, a hero select,
		 * an intro. Logic rules stand down without an answer and let go of whatever they were
		 * holding, so leaving a match puts every driven entry back where the user left it.
		 */
		readonly gameTime?: () => Nullable<number>
		readonly onConfigWritten?: (config: Record<string, unknown>) => void
		readonly onConfigsChanged?: (handler: () => void) => void
		readonly reloadScripts?: () => void
		/**
		 * The user moved the menu-scale slider in the shared Settings tab. The game
		 * stores the value it serves back through {@link MenuHost.scale} and
		 * relayouts whatever depends on it. Without this the slider is not shown.
		 */
		readonly menuScaleChanged?: (scale: number) => void
		/**
		 * The server pushed a UI language for this account. The settings menu
		 * applies it through Localization, ignoring the first push when the config
		 * already chose a language.
		 */
		readonly onSetLanguage?: (handler: (language: number) => void) => void
		/**
		 * Icons the game pins to menu pages, keyed by path — `"Visual"`, `"Visual/Players"`.
		 * @see {@link SetEntryDefaults}
		 */
		readonly entryIcons?: () => Record<string, string>
		/**
		 * The order the game puts menu pages in, keyed by path — `"Visual"`, `"Visual/Players"` —
		 * lowest number first. It is what a list of pages several scripts register has instead of
		 * the alphabet.
		 * @see {@link SetEntryDefaults}
		 */
		readonly entryPriorities?: () => Record<string, number>
	}
	function CurrentHost(): Nullable<MenuHost>
	function SetMenuHost(next: MenuHost): void
	/**
	 * Marks the host frame tick — the phase where the host is able to measure text and images.
	 * Measurement misses recorded outside this phase request one revalidating render inside it.
	 */
	function SetHostFrameActive(value: boolean): void
	/**
	 * True when a measurement fell back since the last call because the host could not answer.
	 * The frame tick consumes it and re-renders once, so every size settles on a host-measured
	 * value and never changes again.
	 */
	function ConsumeHostMeasureMiss(): boolean
	function MenuScale(): number
	/** Whether an overlay may draw right now; see {@link MenuHost.canDrawOverlays}. */
	function HostCanDrawOverlays(): boolean
	function HostCursorPosition(): [number, number]
	/**
	 * Text size in px, cached after the first successful host measurement, so the answer is
	 * identical no matter which phase asks for it. An unknown string measured while the host
	 * cannot answer returns undefined and records a measure miss.
	 */
	function HostMeasureText(text: string, font: string, sizePx: number, weight: number, italic?: boolean): Nullable<[number, number]>
	/** Image size in px, cached like HostMeasureText. */
	function HostImageSize(path: string): Nullable<[number, number]>
	/**
	 * Whether the host has a source decoded and in hand, asked afresh every time: a sized copy is
	 * cut in the background after it is minted, and this is what says the cut is done. Nothing is
	 * cached and no measure miss is noted - the answer is expected to change, and the next frame is
	 * the time to ask again. A host that cannot say is taken at its word that the source is ready.
	 */
	function HostImageReady(path: string): boolean
	function HostInGame(): boolean
	function HostInputCaptured(): boolean
	/** Seconds on the match clock; see {@link MenuHost.gameTime}. */
	function HostGameTime(): Nullable<number>
	/**
	 * Whether the game keeps a match clock at all; see {@link MenuHost.gameTime}. A game without
	 * one - a round-based shooter, a lobby-only host - is offered no logic rules rather than rules
	 * that can never come true.
	 */
	function HostHasGameClock(): boolean
	const PanicEntryTitle = "Try to reload"
	/**
	 * Registered by whoever writes a stored document - Store/Config for the config, the theme
	 * settings for the theme; importing them here would be a cycle. Each flushes what it holds
	 * before the runtime dies, so a change made in the same frame as a reload still reaches disk.
	 */
	function OnBeforeScriptsReload(fn: () => void): void
	/**
	 * Runs every flush registered for a reload. A reload is also the recovery path out of a broken
	 * menu, so a flush that throws never blocks the others, nor the reload.
	 */
	function FlushBeforeReload(): void
	/**
	 * Registered by the bootstrap (same cycle): takes the menu and its layer documents off the
	 * screen before the runtime dies. The render thread goes on compositing whatever documents
	 * exist while the new runtime compiles, with every asset of this one already freed — a ghost
	 * of white tiles and missing text for the whole freeze. Nothing on screen beats that.
	 */
	function SetOnScriptsReload(fn: () => void): void
	function ReloadScripts(): void
	/**
	 * Whether a reload is on its way, ticked once per frame by the bootstrap. The first tick takes
	 * the menu down — here rather than in {@link ReloadScripts}, which a button handler calls, and
	 * an unmount from inside the dispatch destroys the dispatching element under its own feet. The
	 * tick that reaches zero kills the runtime; every one until then keeps the menu from remounting
	 * into the frames the renderer is clearing.
	 */
	function TickScriptsReload(): boolean
}

declare namespace MenuSDK {
	const OverlayOrder: {
		Tooltip: number
		Popup: number
		Modal: number
		Drag: number
	}
	function ShowOverlay(key: string, order: number, render: () => React.ReactNode): void
	function HideOverlay(key: string): void
	function IsOverlayOpen(key: string): boolean
	function HasInteractiveOverlays(): boolean
	/**
	 * Positional input test: modal- and drag-order overlays cover the screen and
	 * consume everywhere; popup-order overlays consume only while the cursor is
	 * inside a panel rect, so outside clicks fall through to the game while the
	 * panels' own scrims close them. Full-screen children (scrims) are skipped.
	 */
	function CursorOverOverlays(): boolean
	function CloseOverlays(): void
	/**
	 * Closes what a new overlay replaces, keeping the one it is opened from: a panel carrying the row
	 * a popup hangs off has to outlive the click that opens the popup, or the settings of an element
	 * would close the preview panel they were asked for on. Modal-order overlays stay as they stay
	 * for {@link CloseOverlays}.
	 */
	function CloseOverlaysExcept(anchor: Nullable<HTMLElement>): void
	function TickOverlays(): void
	function ResetOverlays(): void
}

declare namespace MenuSDK {
	/** Where the preview card and its stage sit on screen this frame, in pixels. */
	interface PreviewLayout {
		readonly left: number
		readonly top: number
		readonly width: number
		readonly height: number
		readonly stageLeft: number
		readonly stageTop: number
		readonly stageWidth: number
		readonly stageHeight: number
	}
	const HeaderHeight = 40
	/**
	 * Puts the card where its placement says it stands and derives the stage rectangle inside it.
	 * Both panels lay out from this, so the stage always covers the card's middle band exactly: the
	 * card sizes to its border box, which leaves the band its border narrower on either side.
	 *
	 * The stage stands on whole pixels of the screen, each edge on the pixel the renderer lands the
	 * band's own edge on. What a page lays out on it in whole pixels then lands on whole pixels of
	 * the screen, the way it does in the world: a glyph is a bitmap, and over a stage standing a
	 * fraction off the grid it smears across two pixel rows, so a line set two pixels off a frame
	 * reads as one.
	 */
	function ComputeLayout(window: WindowState, ratio: number, height: number): PreviewLayout
	/**
	 * What one page shows on its preview: the scene, the model on it, what is drawn over it, and
	 * whatever it puts in the card's header and footer. Everything else — where the card sits, when
	 * it is on screen, how the stage is sized and driven — is the host's, and the same for all of
	 * them.
	 */
	interface PreviewSource {
		/** Distinguishes this preview's panels from another page's. */
		readonly key: string
		readonly scene: CPreviewScene
		/** Whether the page this belongs to is the one on screen. */
		Shown(): boolean
		/** The model on the stage this frame; the scene reloads only when it changes. */
		Model(): Nullable<string>
		/** A clip file to show the model in, for one that carries no animation of its own. */
		Clip?(): Nullable<string>
		/** The elements drawn over the stage, as structure — the frame pass positions them. */
		Stage(): React.ReactNode
		/** Whether stage elements may extend beyond the preview. Defaults to hidden. */
		readonly Overflow?: "visible" | "hidden"
		Header?(): React.ReactNode
		Footer?(): React.ReactNode
		/** Frame pass over the stage, in its own pixels. */
		Tick(visible: boolean, width: number, height: number): void
		/** Where the stage landed on screen, for a preview that can be dragged on. */
		Frame?(left: number, top: number, width: number, height: number): void
	}
	/** Mounts one page's preview: the glass card, the stage over it, and the pass that drives it. */
	function MountPreview(source: PreviewSource): void
}
