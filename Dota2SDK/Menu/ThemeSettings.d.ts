// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** Adds the Themes tab: the cloud pages, the presets, the surfaces and the customization controls. */
	function SetupThemeSettings(): void
	/**
	 * Applies theme control changes once per menu frame. Answers whether the text weight moved: it
	 * is baked into every written style, so the caller rebuilds the trees when it did.
	 */
	function TickThemeSettings(): boolean
	/**
	 * Reads the theme the account wears and dresses the menu in it. An account without one yet
	 * starts from the theme its booting config carried, when it carried one, and that is written as
	 * the account's; a theme that says nothing about the font takes the font the config carried the
	 * same way. So this runs once the config has landed. Resolves once the theme is settled, at once
	 * on a host that keeps none; until then nothing theme-related is written, and the marks raised
	 * while the tree was being built go down with the settling.
	 */
	function LoadStoredTheme(): Promise<void>
	/** Writes the theme once per menu frame when something moved it. */
	function FlushPendingTheme(): void
}
