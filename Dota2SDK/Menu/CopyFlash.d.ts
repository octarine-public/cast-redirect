// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Floats a pill carrying the colour over the cursor, rising and fading out on its own. Copying
	 * changes nothing on screen, so the flash is the only thing saying the colour was taken.
	 */
	function ShowCopyFlash(color: Color): void
	/**
	 * The same pill under an icon rather than a colour swatch, for an action that leaves nothing on
	 * screen where it happened — settings taken out of one preset, settings landing in another.
	 * @example
	 * ShowActionFlash("menu/ui/copy.svg", Localization.Localize("Settings copied"))
	 */
	function ShowActionFlash(icon: string, label: string): void
}
