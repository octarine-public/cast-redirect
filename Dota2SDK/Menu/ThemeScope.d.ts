// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Which of the menu's three stacks a style belongs to. Each stack is a layer document of its own,
	 * so each can wear a theme of its own: the window and everything it opens, the panels a user
	 * places on the screen, and the overlays anchored to a point in the world.
	 *
	 * @example
	 * WithThemeScope(EThemeScope.World, () => retintStyles(Layers().panels))
	 */
	const enum EThemeScope {
		/** The menu window and everything it opens: popovers, tooltips, dropdowns, modals. */
		Menu = 0,
		/** Screen-anchored panels and cards: hotkeys, widgets, the profiler, the preview card. */
		Panels = 1,
		/** Overlays anchored to a point in the world. */
		World = 2
	}
	/** How many scopes there are - the palette, the metrics and the accent are stored one per scope. */
	const ThemeScopeCount = 3
	/** The scope every theme read resolves against right now. */
	function ActiveThemeScope(): EThemeScope
	/**
	 * Runs `action` with `scope` active and puts the previous scope back afterwards, so a nested call
	 * cannot leak its scope into the caller. Every theme read inside - a token, a palette value, a
	 * radius - resolves against `scope`.
	 *
	 * @example
	 * WithThemeScope(EThemeScope.World, () => TickOverlays())
	 */
	function WithThemeScope<T>(scope: EThemeScope, action: () => T): T
	/** Binds a React container to the scope everything rendered into it resolves against. */
	function BindThemeScope(container: object, scope: EThemeScope): void
	/**
	 * Makes `scope` active and hands back the one it replaced, for a surface whose drawing opens and
	 * closes across separate calls and so cannot sit inside {@link WithThemeScope}. Every caller has
	 * to pair it with {@link RestoreThemeScope}, in a `finally`.
	 *
	 * @example
	 * const previous = EnterThemeScope(EThemeScope.Panels)
	 * try {
	 * 	surface.Draw()
	 * } finally {
	 * 	RestoreThemeScope(previous)
	 * }
	 */
	function EnterThemeScope(scope: EThemeScope): EThemeScope
	/**
	 * Makes the scope bound to `container` active and hands back the one it replaced. The renderer
	 * calls this as it enters a root's render and its commit: the scope has to come from the tree
	 * being built, not from whoever dirtied it. React alone decides when a root does its work, and
	 * the code that asked for it - the menu pushing a palette at the panels, say - is normally in a
	 * different scope by then. A container nobody bound reads as the menu's.
	 */
	function EnterContainerThemeScope(container: object): EThemeScope
	/** Puts back the scope {@link EnterContainerThemeScope} replaced. */
	function RestoreThemeScope(scope: EThemeScope): void
}
