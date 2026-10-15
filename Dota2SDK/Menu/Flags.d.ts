// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface Flashable {
		readonly entry: Entry
	}
	/**
	 * How an entry's tooltip is presented: "bubble" floats a shadowed hint at the
	 * cursor on hover, "inline" prints the same text under the row label, "side"
	 * opens a panel beside an explicit info icon, "off" shows nothing.
	 */
	type TooltipStyle = "bubble" | "inline" | "side" | "off"
	const MenuFlags: {
		/**
		 * Lets keybinds fire while the game has the keyboard — a chat box or a console. Off, because
		 * typing a message should not set off the binds its letters are on.
		 */
		TriggerWhileTyping: boolean
		/**
		 * Asks for the config to be written on the next frame. Raising it counts as a change to the
		 * settings: the config is stamped as changed and uploaded. The state the menu keeps beside the
		 * settings - the window, where the panels stand, the search history - asks for its write
		 * through {@link SaveConfigState} instead, which leaves the config as unchanged as it is.
		 */
		SaveConfigASAP: boolean
		NoWriteConfig: boolean
		IsLoadingConfig: boolean
		DrawMarksNew: boolean
		DrawMarksNonDefault: boolean
		KeepOriginalLogoColor: boolean
		/**
		 * The color the logo is tinted with instead of the accent, or nothing while it follows the
		 * accent. {@link MenuFlags.KeepOriginalLogoColor} draws the original artwork over it.
		 */
		LogoColor: Nullable<string>
		/**
		 * The color of the three pieces beside the logo's arrow, which makes the logo two-colored, or
		 * nothing while they wear {@link MenuFlags.LogoColor} with the arrow.
		 */
		LogoSecondColor: Nullable<string>
		/** The color the name beside the logo is set in, or nothing while it follows the theme. */
		WordmarkColor: Nullable<string>
		HoverAnimation: boolean
		IntroAnimation: boolean
		MenuOpenAnimation: boolean
		MenuOpenEffect: number
		MenuOpenDuration: number
		RailAnimation: boolean
		TabOpenAnimation: boolean
		LayoutSwitchAnimation: boolean
		HotkeysPanelAnimation: boolean
		PanelSnap: boolean
		PanelScreenCenterSnap: boolean
		TooltipStyle: TooltipStyle
		Flash(element: Flashable): void
	}
	/**
	 * Asks for the config to be written because state kept beside the settings moved - the window
	 * was dragged, the hotkeys panel was placed, the tour was closed. The bytes reach disk, but the
	 * config is not marked changed for it: its changed-at stays and nothing is uploaded. What a
	 * config carries as settings - every control, the HUD cards' places among them - marks a change
	 * through its setter instead.
	 *
	 * @example
	 * drag.Begin(element, () => SaveConfigState())
	 */
	function SaveConfigState(): void
	/** Whether the write that is due carries a change to the settings, not only to the state. */
	function SettingsChanged(): boolean
	function FlashedEntry(): Nullable<Entry>
	function ConsumeFlash(entry: Entry): void
}
