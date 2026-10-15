// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type EntryKind = "node" | "toggle" | "slider" | "dropdown" | "multiSelect" | "keybind" | "button" | "color" | "text" | "list" | "images" | "presets" | "description"
	interface MenuHintMedia {
		kind: "image" | "gif" | "video"
		src: string
		alt?: string
		caption?: string
		ratio?: number
		fit?: "cover" | "contain"
	}
	interface MenuHint {
		/** Trigger glyph: the default (i) states a fact, "help" asks "how does this work". */
		glyph?: "info" | "help"
		title?: string
		text?: string
		bullets?: string[]
		keys?: string[]
		note?: string
		noteTone?: "tip" | "warn"
		media?: MenuHintMedia | MenuHintMedia[]
		mediaFirst?: boolean
		meta?: string
	}
	/**
	 * Which stored document an entry's value is written to: the per-game config, or the theme the
	 * account wears. The two are written, read and switched apart, so an entry belongs to one.
	 */
	type EntryDocument = "config" | "theme"
	interface EntryCommon {
		readonly kind: EntryKind
		readonly name: string
		readonly parent: Nullable<NodeEntry>
		tooltip: string
		description?: string
		hint?: MenuHint
		iconPath: string
		priority: number
		visible: boolean
		/** Runtime visibility in the hotkeys panel; false also excludes descendant binds. Defaults to true. */
		hotkeysVisible?: boolean
		searchHidden: boolean
		disabled: boolean
		firstTime: boolean
		saveConfig: boolean
		document: EntryDocument
		iconColor: Nullable<Color>
		iconRound: number
		markColorToken?: string
		subSettings?: NodeEntry
		hostedBy?: Entry
		/**
		 * Entry this one is a stand-in for. When set, the row's context menu offers
		 * navigation to the target instead of to the row itself, so generated lists
		 * (the keybinds list) can jump to the setting they mirror.
		 */
		revealTarget?: Entry
	}
	function IsEntryVisible(entry: EntryCommon): boolean
	/**
	 * Whether this entry's rows live in a floating window rather than on a page or in a popover:
	 * some ancestor is a hosted node that is not a popover — the combination only a window's page
	 * carries. Such a row answers the right button with its own context menu the way a page row
	 * does; carrying the click into the menu belongs to the window's title bar alone.
	 */
	function IsWindowHosted(entry: EntryCommon): boolean
	/**
	 * Whether this node is a page of its own, rather than a row of the one holding it. A node that
	 * opens in a popover is a row wherever rows are listed and a page nowhere: the extra settings of
	 * another row, or a settings row of its own.
	 */
	function IsPageNode(entry: Entry): entry is NodeEntry
	/** The switch an entry wears on its own row: the one at the end of an image selector's title. */
	function RowSwitchOf(entry: Entry): Nullable<ToggleEntry>
	/**
	 * What an entry stands for where it is shown away from its row — a hotkey, a timed rule, a
	 * reveal: the row hosting it, or the card or page whose header switch it is, and the entry
	 * itself otherwise. A header switch is usually called "State", which says nothing out there.
	 */
	function ListedEntryOf(entry: Entry): Entry
	/**
	 * Whether the entry sits under a switch that is off — a page's {@link NodeEntry.gate}, the
	 * header control of a card above it, or the switch on its own row. Nothing is locked and no
	 * value is lost; the accent goes muted so the block reads as set up but not running, and stays
	 * as easy to read and to change as a live one. The switch itself is never inert — it is what
	 * turns the block back on.
	 */
	function IsEntryInert(entry: Entry): boolean
	/** Whether Safe mode pins the entry to a value of its choosing. */
	function IsEntryHeld(entry: Entry): boolean
	/**
	 * Whether an owner or Safe mode locks this entry, directly or through an ancestor, page gate
	 * or header control. Locked rows stop taking clicks, hotkeys and rules; ordinary gate muting
	 * leaves editing available. Only a Safe mode lock offers to disable Safe mode.
	 */
	function IsEntryLocked(entry: Entry): boolean
	/** Whether Safe mode locks this entry directly or through its owning page or switch. */
	function IsEntrySafeModeLocked(entry: Entry): boolean
	interface MenuFilterGroup {
		id: number
		icon: string
		tooltip?: string
		color?: Color
	}
	interface DisabledNotice {
		title: string
		description: string
		enableText: string
	}
	interface NodeEntry extends EntryCommon {
		readonly kind: "node"
		readonly children: Entry[]
		expanded: boolean
		collapsible?: boolean
		sortNodes: boolean
		iconTint: boolean
		/** Width-to-height ratio of the icon in navigation rows; omitted keeps the square default. */
		iconAspectRatio?: number
		filterGroup: Nullable<number>
		filterGroups: MenuFilterGroup[]
		filtersOff: Set<number>
		groupHeadings?: boolean
		saveUnusedConfigs: boolean
		stored?: Record<string, unknown>
		pinnedName?: string
		pinnedLabel?: string
		subLabel?: string
		searchPlaceholder?: string
		/**
		 * Whether this node opens in a popover instead of on the page: the extra settings of a row,
		 * or a settings row of its own carrying nothing but its name, its swatches and the button.
		 */
		popover?: boolean
		/** Heading of this node's popover, where it should differ from the name of the row hosting it. */
		popoverTitle?: string
		/** Preferred settings-popover width in dp; omitted uses the compact default. */
		popoverWidth?: number
		/** Colour pickers riding this node's settings row, which lose rows of their own. */
		swatches?: ColorEntry[]
		/** Optional status glyphs before the settings button, separate from the row's main icon. */
		statusIconPaths?: readonly string[]
		textColor?: Color
		iconGrayScale?: boolean
		tabbedChildren?: boolean
		/**
		 * Whether a top-level tab lays its child nodes out as section cards on its own page instead
		 * of listing them as sub-pages in the navigation column.
		 */
		inlinePages?: boolean
		headerControl?: ValueEntry
		/** Toggle whose off state makes every card of this page read as inert. */
		gate?: ToggleEntry
		disabledNotice?: DisabledNotice
		customPage?: () => React.ReactNode
		backAction?: () => boolean
	}
	/** A button a note carries at its end, which a click anywhere on the note presses too. */
	interface DescriptionAction {
		/** The button's label, a localization key. */
		readonly label: string
		readonly run: () => void
	}
	interface DescriptionEntry extends EntryCommon {
		readonly kind: "description"
		selected: boolean
		header?: boolean
		action?: DescriptionAction
	}
	/** How a hotkey drives its entry: apply on every press, or follow the key while it is held. */
	type HotkeyMode = "toggle" | "hold"
	/** When a bound hotkey appears in the on-screen hotkeys panel. */
	type HotkeyVisibility = "hidden" | "active" | "always"
	/**
	 * What holds an entry at a stored value: a hotkey while its key is engaged, a logic rule while
	 * its condition holds. Both drive the entry and let it go the same way — only what turns them
	 * on differs.
	 */
	interface EntryDriver<T = unknown> {
		/** Value the driver holds the entry at while it is active. */
		value: T
		/** Whether the driver is currently holding the entry at its value; not persisted. */
		active: boolean
		/** Value the entry held before the driver engaged, restored on release; not persisted. */
		restore?: T
	}
	/**
	 * A key bound to an entry from its row's context menu. While the hotkey is active it drives
	 * the entry to {@link EntryDriver.value}; a hold-mode hotkey reverts on release, a toggle-mode
	 * one applies on every press.
	 */
	interface EntryHotkey<T = unknown> extends EntryDriver<T> {
		/** Packed bind code (`PackBind` in Store/Bind), 0 while unbound. */
		bind: number
		/** "toggle" applies the value on every press, "hold" drives it only while the key is down. */
		mode: HotkeyMode
		/** When this hotkey appears in the on-screen hotkeys panel. */
		visibility: HotkeyVisibility
		/** Whether this hotkey blocks its key from reaching the game. Off by default. */
		claimsKey: boolean
	}
	/** Which side of its threshold a logic rule holds its value on. */
	type LogicWhen = "after" | "before"
	/**
	 * A condition bound to an entry from its row's context menu. While the match clock stands on the
	 * {@link when} side of {@link at} the rule drives the entry to its value, and puts back whatever
	 * the entry held before as soon as it does not — so the next match arms the rule again.
	 */
	interface EntryLogic<T = unknown> extends EntryDriver<T> {
		/** Whether the rule holds its value after the threshold or before it. */
		when: LogicWhen
		/** Threshold on the match clock, in seconds. */
		at: number
	}
	/** Hotkey of a toggle: a press flips the switch or drives it to the stored state. */
	type ToggleHotkey = EntryHotkey<boolean>
	/** Hotkey of a slider: while active the slider holds the stored number. */
	type SliderHotkey = EntryHotkey<number>
	/**
	 * Hotkey of a dropdown: while active the stored option is selected. Keyed by the option's
	 * value rather than by index, so a renamed or reordered list cannot move it onto a
	 * different item.
	 */
	type DropdownHotkey = EntryHotkey<string>
	/** Hotkey of a multiselect: the option values selected while the hotkey is active. */
	type MultiSelectHotkey = EntryHotkey<string[]>
	/** Logic rule of a toggle: while its condition holds the switch sits at the stored state. */
	type ToggleLogic = EntryLogic<boolean>
	/** Logic rule of a slider: while its condition holds the slider sits at the stored number. */
	type SliderLogic = EntryLogic<number>
	/**
	 * Logic rule of a dropdown: while its condition holds the stored option is selected. Keyed by
	 * the option's value for the same reason a dropdown hotkey is.
	 */
	type DropdownLogic = EntryLogic<string>
	/** Logic rule of a multiselect: the option values selected while its condition holds. */
	type MultiSelectLogic = EntryLogic<string[]>
	interface ToggleEntry extends EntryCommon {
		readonly kind: "toggle"
		readonly defaultValue: boolean
		value: boolean
		/** The value Safe mode holds the switch at; every set lands on it while it stands. */
		holdValue?: boolean
		/** Colours riding this toggle's row, shown while it is on. */
		swatches?: ColorEntry[]
		/** Keys bound to this toggle from its context menu, in creation order. */
		hotkeys: ToggleHotkey[]
		/** Conditions bound to this toggle from its context menu, in creation order. */
		logic: ToggleLogic[]
		listeners: ((entry: ToggleEntry) => void)[]
	}
	/**
	 * How a slider's note reads: `muted` states a fact, the other three grade what the value buys
	 * against the theme's own status poles, so the line keeps its meaning on every palette.
	 */
	type SliderNoteTone = "muted" | "good" | "warn" | "bad"
	/**
	 * The line under a slider's rail saying what the value it stands at means - the risk tier it
	 * falls in, the cost it buys, the name of the range it lands in. It belongs to the slider
	 * rather than to a row of its own: nothing is drawn between the two, and a note replacing
	 * another one swaps through a blur instead of appearing under the control.
	 */
	interface SliderNote {
		/** The line itself, localized like every other string a script hands the menu. */
		readonly text: string
		/** The glyph in front of it; a note without one starts at the text. */
		readonly iconPath?: string
		/** What the line says about the value. Muted where it is left out. */
		readonly tone?: SliderNoteTone
	}
	/** Whether two notes say the same thing, so an evaluator re-run cannot restart the swap. */
	function SameSliderNote(current: Nullable<SliderNote>, next: Nullable<SliderNote>): boolean
	/**
	 * A stretch of a slider's range in the tone its values read as. The zones are the colour of the
	 * rail itself: it wears them as one ramp, the way a health bar runs from red to green, each tone
	 * holding across its stretch and crossing into the next at their seam, bright up to the thumb
	 * and a ghost of itself beyond it - so what the value buys is read off the colour under the
	 * thumb, and where the note under the slider is going to change is in view before the thumb gets
	 * there. A zone runs from `from` to `to`; where two meet, the value on the seam belongs to the
	 * later one.
	 */
	interface SliderZone {
		readonly from: number
		readonly to: number
		readonly tone: SliderNoteTone
	}
	/** Whether two zone lists paint the same ramp, so an evaluator re-run cannot redraw it. */
	function SameSliderZones(current: Nullable<SliderZone[]>, next: Nullable<SliderZone[]>): boolean
	interface SliderEntry extends EntryCommon {
		readonly kind: "slider"
		readonly defaultValue: number
		/** The declared range. A script that only learns the ceiling at runtime may move it. */
		min: number
		max: number
		readonly precision: number
		value: number
		clampMin?: number
		clampMax?: number
		suffix?: string
		ticks?: number[] | true
		note?: SliderNote
		zones?: SliderZone[]
		callOnRelease: boolean
		/** Keys bound to this slider from its context menu, in creation order. */
		hotkeys: SliderHotkey[]
		/** Conditions bound to this slider from its context menu, in creation order. */
		logic: SliderLogic[]
		listeners: ((entry: SliderEntry) => void)[]
		finishListeners: ((entry: SliderEntry) => void)[]
	}
	interface DropdownEntry extends EntryCommon {
		readonly kind: "dropdown"
		readonly defaultValue: number
		values: string[]
		selectedID: number
		/** The option Safe mode holds the dropdown at; every set lands on it while it stands. */
		holdOption?: number
		/**
		 * An image riding each option, parallel to {@link values} and empty where an option has none.
		 *
		 * By position rather than by value, because the selection is: a list whose options are things
		 * with faces - heroes, maps, weapons - is one a reader picks from by the picture rather than by
		 * reading down the names.
		 */
		icons?: string[]
		swatches?: OptionSwatches
		/** Keys bound to this dropdown from its context menu, in creation order. */
		hotkeys: DropdownHotkey[]
		/** Conditions bound to this dropdown from its context menu, in creation order. */
		logic: DropdownLogic[]
		listeners: ((entry: DropdownEntry) => void)[]
	}
	/**
	 * Colour pickers riding an option's own row, keyed by the option's value for the same reason
	 * the selection is: a renamed or reordered list must not move them onto a different item.
	 */
	type OptionSwatches = Map<string, ColorEntry[]>
	/**
	 * Selection is keyed by value rather than by index, so reordering or renaming
	 * the list cannot silently move a stored choice onto a different item.
	 */
	interface MultiSelectEntry extends EntryCommon {
		readonly kind: "multiSelect"
		readonly defaultValue: string[]
		values: string[]
		enabled: Map<string, boolean>
		swatches?: OptionSwatches
		/** Keys bound to this multiselect from its context menu, in creation order. */
		hotkeys: MultiSelectHotkey[]
		/** Conditions bound to this multiselect from its context menu, in creation order. */
		logic: MultiSelectLogic[]
		listeners: ((entry: MultiSelectEntry) => void)[]
	}
	interface KeybindEntry extends EntryCommon {
		readonly kind: "keybind"
		/** Runtime active state for the hotkeys panel; undefined follows the physical key. */
		hotkeysActive?: boolean
		/** Whether this keybind is hidden from the hotkeys panel until the user changes its visibility. */
		defaultHotkeysHidden: boolean
		/** Saved user preference to exclude this keybind from the hotkeys panel. */
		hotkeysHidden?: boolean
		defaultKey: string
		defaultKeyIdx: number
		assignedKey: number
		active: boolean
		activatesInMenu: boolean
		/**
		 * Whether a press this bind answers is taken from the game. Off by default so the
		 * menu action and the game's action can both respond to the same press.
		 */
		claimsKey: boolean
		/**
		 * Whether the press that made the bind active was taken from the game. Auto-repeats of that
		 * key and its release are then taken too: the game never saw the key go down, so it must not
		 * see it held or come up either, or it would keep the key pressed until the window loses focus.
		 */
		claimed: boolean
		allowLeftMouse: boolean
		allowCombinations: boolean
		listeners: ((entry: KeybindEntry) => void)[]
	}
	/** Visual emphasis of an action button. */
	type ButtonVariant = "primary" | "secondary" | "ghost" | "danger"
	/** Height and spacing scale of an action button. */
	type ButtonSize = "sm" | "md"
	interface ButtonEntry extends EntryCommon {
		readonly kind: "button"
		variant: ButtonVariant
		size: ButtonSize
		listeners: ((entry: ButtonEntry) => void)[]
	}
	/**
	 * How a picker makes its colour: one colour, a gradient laid across the surface from one colour
	 * to another, or a hue walking the whole circle at the entry's period.
	 */
	type ColorMode = "solid" | "gradient" | "rainbow"
	/** The colour modes in the order the palette lists them. */
	const ColorModes: readonly ColorMode[]
	/** How long an animated colour takes to come back round by default, in seconds. */
	const DefaultColorPeriod = 4
	/** The shortest and longest period an animated colour may be given, in seconds. */
	const ColorPeriodRange: readonly [number, number]
	interface ColorEntry extends EntryCommon {
		readonly kind: "color"
		readonly defaultColor: Color
		/** The colour itself, and the first stop of a gradient or the seed of a rainbow. */
		color: Color
		mode: ColorMode
		/** The colour at the far end of a gradient; the other modes never read it. */
		color2: Color
		/** How long a rainbow takes to come back round, in seconds. */
		period: number
		/**
		 * The modes the palette offers, solid always among them. A picker whose owner reads it
		 * once, on change, keeps to one colour: an animation nobody samples is a colour that never
		 * moves; one whose owner tints a picture offers no gradient, since a tint is one colour.
		 */
		modes: readonly ColorMode[]
		/**
		 * The colour this picker stands for while nobody has touched it, read every render. A default
		 * that follows the theme rather than a literal, for a swatch whose owner draws in the theme's
		 * own ink until it is given a colour of its own.
		 *
		 * {@link defaultColor} stays the literal it was declared with: it is what a config is compared
		 * against, and one that moved with the theme would make the same config read differently on
		 * two machines.
		 */
		follows?: () => Color
		/**
		 * Runs the value listeners once the hand lets go rather than on every colour a drag passes
		 * through, for an owner whose work per colour is dear - a glyph effect baked per colour.
		 */
		callOnRelease: boolean
		listeners: ((entry: ColorEntry) => void)[]
	}
	/**
	 * Everything a picker holds about its colour, as one value: how the colour is made, the colour
	 * itself, the far end of its gradient and the period of its rainbow. What copying a row takes
	 * off it and pasting puts onto another, so a gradient travels whole rather than as its first
	 * stop.
	 */
	interface ColorPalette {
		readonly mode: ColorMode
		readonly color: Color
		readonly color2: Color
		readonly period: number
	}
	interface TextEntry extends EntryCommon {
		readonly kind: "text"
		readonly placeholder: string
		text: string
		listeners: ((entry: TextEntry) => void)[]
	}
	/**
	 * A list of short strings the user edits in the row itself: a field to type a new one into and
	 * a row per string with its own remove control. Values are trimmed, cut at `maxLength` and
	 * kept unique; the list stops growing at `maxItems`.
	 */
	interface ListEntry extends EntryCommon {
		readonly kind: "list"
		readonly maxLength: number
		readonly maxItems: number
		/** Replaced whole on every change and never mutated in place, so a held reference reads as it was. */
		values: string[]
		/** The values the entry was created with, kept for resets and the changed mark. */
		defaultValues: string[]
		/** The row's own field, never attached to the tree: it carries what is being typed. */
		readonly draft: TextEntry
		listeners: ((entry: ListEntry) => void)[]
	}
	type ImageVariant = "square" | "item" | "hero" | "circle"
	/** One value a catalogue offers, as the picker's browse modal lists it. */
	interface CatalogueValue {
		/** The value itself, which is also what the tile's image is resolved from. */
		readonly value: string
		/** What the tile is called, localized before it is shown. */
		readonly label: string
		/** Short text displayed over the image's upper-right corner. */
		readonly cornerLabel?: string
		/** Semantic accent for the corner label; the menu accent is used when omitted. */
		readonly cornerAccent?: string
		/** Words the modal's search matches besides the label, such as what the value does. */
		readonly keywords?: string
	}
	/** A titled run of values in the browse modal, such as one shop category. */
	interface CatalogueSection {
		readonly title: string
		readonly values: readonly CatalogueValue[]
		/** Colour the heading and a chosen tile's edge wear, in place of the theme's accent. */
		readonly accent?: string
	}
	interface ImagesEntry extends EntryCommon {
		readonly kind: "images"
		variant?: ImageVariant
		values: string[]
		/** The arrangement the entry was created with, kept for resets. */
		defaultOrder: string[]
		enabled: Map<string, boolean>
		ordered: boolean
		/** Lets the user rearrange the grid by dragging tiles. */
		draggable: boolean
		createdDefault: boolean
		/** The state each tile was declared with, kept for resets and the changed mark. */
		defaultEnabled: Map<string, boolean>
		/**
		 * What the row's own tiles are chosen from. A picker with a catalogue keeps the chosen tiles
		 * in the row and hands the rest to a modal, so a hundred-value picker stays one row tall.
		 */
		catalogue: readonly CatalogueSection[]
		/**
		 * The switch standing at the end of the row's title line, which runs what the tiles choose
		 * for. It is hosted by the row and has none of its own.
		 */
		headerControl?: ToggleEntry
		listeners: ((entry: ImagesEntry) => void)[]
	}
	/** One preset of a preset selector: its display name and the catalogue values it claims. */
	interface PresetGroup {
		/**
		 * Identity that survives renames and the removal of other presets, unique within its entry.
		 * What a script keys per-preset state of its own by; the base preset always carries 0.
		 */
		readonly id: number
		name: string
		values: string[]
	}
	/**
	 * A preset selector: a row showing the chosen preset, opening a panel that lists a permanent
	 * base preset above the user's own. Every other preset claims values from the catalogue, each
	 * value belonging to at most one preset; values the base covers are whatever no other claims.
	 */
	interface PresetsEntry extends EntryCommon {
		readonly kind: "presets"
		/** Name of the permanent first preset. It claims no values and cannot be renamed or removed. */
		readonly baseName: string
		/** Heading of the row's panel where it should differ from the row's own name. */
		panelTitle?: string
		/**
		 * Why the selector refuses a click while it is disabled, told on hover: a first line, and
		 * past a line break the way out.
		 */
		disabledReason?: string
		/** Every preset, the base always first. Mutate only through the Store's preset calls. */
		presets: PresetGroup[]
		selected: number
		nextId: number
		/** What preset values are picked from, laid out section by section like a browse catalogue. */
		catalogue: readonly CatalogueSection[]
		listeners: ((entry: PresetsEntry) => void)[]
		/**
		 * Who carries one preset's settings over to another. The selector owns no settings of its
		 * own, so the panel offers Copy/Paste only while something is listening here.
		 */
		copyListeners: ((from: PresetGroup, to: PresetGroup) => void)[]
	}
	type ValueEntry = ToggleEntry | SliderEntry | DropdownEntry | MultiSelectEntry | KeybindEntry | ButtonEntry | ColorEntry | TextEntry | ListEntry | ImagesEntry | PresetsEntry | DescriptionEntry
	type Entry = NodeEntry | ValueEntry
	/** Entries whose rows carry hotkeys and logic rules from the context menu. */
	type DriverHolder = ToggleEntry | SliderEntry | DropdownEntry | MultiSelectEntry
	/**
	 * Whether the entry's row offers hotkeys and logic rules in its context menu.
	 */
	function IsDriverHolder(entry: Entry): entry is DriverHolder
}
