// AUTO-GENERATED - do not edit.
declare class item_ward_dispenser extends Item {
	/** Observer wards held; the game networks them as the item's own charges. */
	public get ObserverCharges(): number
	/** Sentry wards held; the game networks them as the item's secondary charges. */
	public get SentryCharges(): number
	/** True while the dispenser is switched to place sentries. */
	public get IsSentryActive(): boolean
	/** The game's own dispenser art: both wards, the one placed next in front. */
	public get TexturePath(): string
	public get DisplayCharges(): number
}
