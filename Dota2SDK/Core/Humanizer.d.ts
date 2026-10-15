// AUTO-GENERATED - do not edit.
/**
 * The humanizer's switch in Settings, for a script whose features run only through it: the
 * script offers to turn it on right where it says the humanizer is needed, instead of sending
 * the user to look for the switch.
 * @example
 * const note = node.AddShortDescription("Required humanizer")
 * note.SetAction("Enable", () => Humanizer.RequestEnable())
 */
declare class CHumanizer {
	/** Whether scripts' orders go through the humanizer right now. */
	public get Enabled(): boolean
	/** Takes the switch the Settings tab carries; the main menu binds it once, at load. */
	public Bind(toggle: MenuSDK.Toggle): void
	/**
	 * Asks the user to turn the humanizer on and turns it on once they agree, switching off the
	 * Server anti-cheat part of Safe mode first when that part holds it off. Does nothing while
	 * the humanizer is already on.
	 */
	public RequestEnable(): void
}
declare const Humanizer: CHumanizer
