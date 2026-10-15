// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface ILockable {
		readonly entry: Entry
		IsDisabled: boolean
	}
	interface IClampable {
		readonly entry: Entry
		clampMin: Nullable<number>
		clampMax: Nullable<number>
	}
	interface IHoldableValue {
		readonly entry: Entry
		HoldValue: Nullable<boolean>
	}
	interface IHoldableOption {
		readonly entry: Entry
		HoldOption: Nullable<number>
	}
	/** A control a part of Safe mode holds, as the Safe mode window lists it. */
	interface ISafeModeFeature {
		readonly entry: Entry
		/**
		 * What gives the feature away or why the part holds it, shown under its name: the convars it
		 * writes, say. Localized, so a localization key reads in the user's language and a key with no
		 * translation - a convar name - reads as it is.
		 */
		readonly detail: string
	}
	/** How a game introduces a part of Safe mode. See {@link CSafeMode.AddGroup}. */
	interface ISafeModeGroupOptions {
		/** The part's title, a localization key. */
		readonly name: string
		/** What the part guards against and what its features risk, a localization key. */
		readonly description: string
		/** Icon beside the title; the Safe mode shield when omitted. */
		readonly iconPath?: string
	}
	/**
	 * One part of Safe mode, with a switch of its own. The switch is the machine's own, kept in the
	 * client's store apart from every config: a config applied, switched to or taken from a share
	 * code never moves it. While it is on, every control registered on the part is held - locked,
	 * clamped, or pinned to its safe value - whatever a config, a hotkey or a rule tries to set it to.
	 */
	class CSafeModeGroup {
		/** The part's title, a localization key. */
		public readonly Name: string
		/** What the part guards against and what its features risk, a localization key. */
		public readonly Description: string
		/** Icon beside the title. */
		public readonly IconPath: string
		constructor(options: ISafeModeGroupOptions, storedKey: string, follows?: CSafeModeGroup)
		public get Enabled(): boolean
		public set Enabled(value: boolean)
		/** The controls this part holds, in the order they were registered. */
		public get Features(): readonly ISafeModeFeature[]
		/** Calls `listener` every time the part turns on or off. */
		public OnChanged(listener: (enabled: boolean) => void): void
		/**
		 * Reads the state the machine keeps, before any config is walked into the tree: what a
		 * config lands under must already be the holds the user chose. A store that holds nothing,
		 * or cannot be opened, leaves the switch as it is. A choice made before the store answered
		 * wins over what it held.
		 */
		public Restore(): Promise<void>
		/**
		 * Takes the state a config carried from before the switch moved into the machine's store,
		 * once: the first config walked in after the move seeds the store, and from then on no
		 * config moves the switch. Anything but a boolean, or a state already known, is ignored.
		 */
		public Seed(stored: unknown): void
		/**
		 * Locks the control while the part is on; its value stays whatever it was. `detail` goes
		 * under the control's name in the Safe mode window.
		 */
		public Register(control: ILockable, detail?: string): void
		/** Keeps the slider at or below `safeMax` while the part is on. */
		public RegisterMax(slider: IClampable, safeMax: number, detail?: string): void
		/** Keeps the slider at or above `safeMin` while the part is on. */
		public RegisterMin(slider: IClampable, safeMin: number, detail?: string): void
		/**
		 * Pins the switch to `safe` while the part is on: it takes that value at once, and every
		 * set that follows - from a config, a hotkey, a rule or a click - lands on it too.
		 * @example
		 * MenuSDK.SafeMode.RegisterValue(antiAim, false)
		 */
		public RegisterValue(toggle: IHoldableValue, safe: boolean, detail?: string): void
		/**
		 * Pins the dropdown to the option `safe` while the part is on, the way
		 * {@link RegisterValue} pins a switch.
		 * @example
		 * MenuSDK.SafeMode.RegisterOption(aimType, EAimType.Standard)
		 */
		public RegisterOption(dropdown: IHoldableOption, safe: number, detail?: string): void
		/** Whether the part is on and holds `entry` itself. */
		public Holds(entry: Entry): boolean
	}
	/**
	 * The switch that keeps the dangerous settings out of reach, going off only through
	 * {@link ConfirmDisable}. A game may split it into parts with {@link AddGroup}, each with a
	 * switch of its own: the Settings tab then opens the Safe mode window instead of carrying the
	 * switch, and a part the user has not switched yet follows this one.
	 */
	class CSafeMode extends CSafeModeGroup {
		constructor()
		/** The parts {@link AddGroup} split Safe mode into, in the order they were added. */
		public get Groups(): readonly CSafeModeGroup[]
		public Restore(): Promise<void>
		/**
		 * Splits off a part of Safe mode with a switch of its own, kept under `id` in the machine's
		 * store; until the user switches it, the part follows the whole of Safe mode. Split before
		 * `MenuSDK.AttachHost`: the Settings tab builds its Safe mode row once, as the switch while
		 * there are no parts and as the button opening the Safe mode window once there are.
		 * @example
		 * const convars = MenuSDK.SafeMode.AddGroup("convars", {
		 * 	name: "Convars",
		 * 	description: "The server can read these, and may ban for them later"
		 * })
		 * convars.RegisterValue(disableFog, false, "fog_enable")
		 */
		public AddGroup(id: string, options: ISafeModeGroupOptions): CSafeModeGroup
		public BindPanel(open: (focus: Nullable<CSafeModeGroup>) => void): void
		/** Opens the Safe mode window of a split Safe mode, on `focus` when one is given. */
		public Open(focus?: CSafeModeGroup): void
		/** The part holding `entry` directly or through its owning page or switch, while it is on. */
		public HolderOf(entry: Entry): Nullable<CSafeModeGroup>
		/**
		 * Answers a click on a row Safe mode holds. Split into parts, it opens the Safe mode window on
		 * the part holding the row; whole, it asks to turn Safe mode off and runs `onDisabled` once
		 * it is.
		 */
		public OfferRelease(entry: Entry, onDisabled?: () => void): void
		public ConfirmDisable(onConfirm?: () => void, onCancel?: () => void): void
	}
	const SafeMode: CSafeMode
}
