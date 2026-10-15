// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	class Handle<E extends EntryCommon> {
		public readonly entry: E
		public executeOnAdd: boolean
		constructor(entry: E)
		public get IsVisible(): boolean
		public set IsVisible(value: boolean)
		/** Whether this entry and its descendants may appear in the hotkeys panel. Does not hide menu settings or change key handling. */
		public get HotkeysVisible(): boolean
		public set HotkeysVisible(value: boolean)
		public get IsDisabled(): boolean
		public set IsDisabled(value: boolean)
		public get InternalName(): string
		/** The tooltip as the script wrote it, before the translation of the day. */
		public get InternalTooltipName(): string
		public get IconPath(): string
		public set IconPath(value: string)
		public foreachParent(callback: (node: Node) => void, includeSelf?: boolean): void
		public everyParent(predicate: (node: Node) => boolean): boolean
		public get parent(): Nullable<Node>
		public get IsHidden(): boolean
		public set IsHidden(value: boolean)
		public get Name(): string
		public get Hint(): Nullable<MenuHint>
		public set Hint(value: Nullable<MenuHint>)
		public get Description(): string
		public set Description(value: string)
		/**
		 * Entry this handle's row mirrors. When set, the row's context menu offers
		 * "Go to", which reveals the target the way search navigation does.
		 *
		 * @example
		 * const row = list.AddKeybind(path.join(" > "), source.assignedKeyStr)
		 * row.RevealTarget = source
		 */
		public get RevealTarget(): Nullable<AnyHandle>
		public set RevealTarget(value: Nullable<AnyHandle>)
		/**
		 * Rows of your own under the ones this entry's context menu builds for itself — the menu its
		 * row opens, and for a tab of a page whose children are tabs, the menu a right click on the
		 * tab opens. Asked for every time the menu opens, so a row can say what is true right then.
		 *
		 * @example
		 * page.ContextItems = () => [
		 * 	{ icon: "menu/ui/copy.svg", label: "Take style", disabled: false, run: take }
		 * ]
		 */
		public get ContextItems(): Nullable<() => readonly ContextMenuItem[]>
		public set ContextItems(value: Nullable<() => readonly ContextMenuItem[]>)
		public get tooltip(): string
		public set tooltip(value: string)
		public IsDefault(): boolean
		public get IsDefaultValue(): boolean
		public get IsNode(): boolean
		public ResetToDefault(): void
		public UpdateIsDefault(): void
		public Update(): void
		public get Priority(): number
		public set Priority(value: number)
		public get IconColor(): Nullable<Color>
		public set IconColor(value: Nullable<Color>)
		public DetachFromParent(): boolean
		public OnConfigLoaded(): void
		public get FirstTime(): boolean
		public get SaveConfig(): boolean
		public set SaveConfig(value: boolean)
	}
	/** A driven value as a script hands it over: whatever kind the owning entry carries. */
	type DrivenValue = boolean | number | string | string[]
	/**
	 * One hotkey riding an entry — the object the row's context menu edits. All
	 * setters persist to the config and repaint the menu. `T` is the driven
	 * value: boolean for a toggle, number for a slider, an option's value string
	 * for a dropdown, or option values for a multiselect.
	 */
	class HotkeyHandle<T extends DrivenValue> {
		public readonly hotkey: EntryHotkey<T>
		constructor(owner: DriverHolder, hotkey: EntryHotkey<T>)
		/** Packed bind code, 0 while unbound. */
		public get Bind(): number
		public set Bind(value: number)
		/**
		 * Full display name of the bind: "Ctrl + F" for combinations, "F" for
		 * single keys, "None" while unbound.
		 */
		public get BindName(): string
		/** "toggle" applies the value on every press, "hold" drives it only while the key is down. */
		public get Mode(): HotkeyMode
		public set Mode(value: HotkeyMode)
		/** Whether this hotkey blocks game input. Off by default; saved with the hotkey. */
		public get ClaimsKey(): boolean
		public set ClaimsKey(value: boolean)
		/**
		 * Value the hotkey drives the entry to while active. A slider's value is
		 * clamped and rounded like the slider itself; dropdown and multiselect
		 * values must name existing options or the assignment is ignored.
		 */
		public get Value(): T
		public set Value(value: T)
		/**
		 * The driven value as the on-screen panel writes it: empty for a toggle,
		 * the number with the slider's precision and suffix, the option of a
		 * dropdown, or the multiselect summary. What tells two hotkeys of one entry
		 * apart in a listing.
		 */
		public get ValueName(): string
		/**
		 * {@link ValueName} in the menu's language: the slider's suffix, the dropdown's option and
		 * the multiselect's options translated the way the menu shows them.
		 */
		public get LocalizedValueName(): string
		/** When this hotkey appears in the on-screen hotkeys panel. */
		public get Visibility(): HotkeyVisibility
		public set Visibility(value: HotkeyVisibility)
		/** Whether the hotkey is currently driving the entry to its value. */
		public get IsActive(): boolean
		/** Removes the hotkey from its entry. */
		public Remove(): void
	}
	/**
	 * One logic rule riding an entry — the object the row's context menu edits. The rule holds its
	 * entry at {@link LogicHandle.Value} while the match clock stands on its side of the threshold,
	 * and puts back what the entry held before as soon as it does not, so every match arms it
	 * again. All setters persist to the config and repaint the menu.
	 */
	class LogicHandle<T extends DrivenValue> {
		public readonly rule: EntryLogic<T>
		constructor(owner: DriverHolder, rule: EntryLogic<T>)
		/** Whether the rule holds its value after its threshold or before it. */
		public get When(): LogicWhen
		public set When(value: LogicWhen)
		/** Threshold on the match clock, in seconds. */
		public get At(): number
		public set At(value: number)
		/** The threshold as the menu writes it: `"5:00"`, `"12:30"`. */
		public get AtName(): string
		/**
		 * Value the rule holds the entry at while its condition does. A slider's value is clamped
		 * and rounded like the slider itself; dropdown and multiselect values must name existing
		 * options or the assignment is ignored.
		 */
		public get Value(): T
		public set Value(value: T)
		/**
		 * The held value as the menu writes it: empty for a toggle, the number with the slider's
		 * precision and suffix, the option of a dropdown, or the multiselect summary.
		 */
		public get ValueName(): string
		/** Whether the rule is holding the entry at its value right now. */
		public get IsActive(): boolean
		/** Removes the rule, putting back what the entry held before it engaged. */
		public Remove(): void
	}
	class Toggle extends Handle<ToggleEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		public get MarkColorToken(): string
		public set MarkColorToken(value: string)
		public TriggerOnValueChangedCBs(): Toggle
		public OnDeactivate(callback: (caller: Toggle) => void): Toggle
		public get value(): boolean
		public set value(next: boolean)
		/**
		 * The value the switch is pinned to, or nothing while it is free. Pinned, it takes the value
		 * at once and every later set lands on it - a config, a hotkey, a rule, a click - and the row
		 * reads as locked by Safe mode, which is what pins it.
		 */
		public get HoldValue(): Nullable<boolean>
		public set HoldValue(value: Nullable<boolean>)
		/** What this switch was declared with. {@link ResetToDefault} puts it back. */
		public get defaultValue(): boolean
		public OnValue(callback: (caller: Toggle) => void): Toggle
		public OnActivate(callback: (caller: Toggle) => void): Toggle
		/**
		 * Rides colour pickers on this toggle's row: swatches to the left of the switch open their
		 * palettes, the pickers lose rows of their own, and they show only while the toggle is on —
		 * a colour for something switched off is nothing to look at. For "show X" + "X colour" pairs
		 * that used to be two rows, and what each swatch stands for is read from its name on hover.
		 * @example
		 * const crates = objects.AddToggle("Crates", true)
		 * crates.PairColors(objects.AddColorPicker("Crate color", new Color(210, 180, 140)))
		 */
		public PairColors(...pickers: ColorPicker[]): Toggle
		public get PairedColors(): ColorPicker[]
		/**
		 * Adds a hotkey driving this toggle, exactly like "New Hotkey" in the row's
		 * context menu. Hotkeys persist in the config, so call it on a user action
		 * rather than on every script load — each call adds another hotkey.
		 * @example
		 * const panic = state.AddHotkey("F4", "hold")
		 * panic.Value = false
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<boolean>
		/** The hotkeys riding this toggle, in creation order. */
		public get Hotkeys(): HotkeyHandle<boolean>[]
		/**
		 * Adds a logic rule driving this toggle, exactly like "New logic" in the
		 * row's context menu; it captures the switch's current state until edited.
		 * Rules persist in the config, so call it on a user action rather than on
		 * every script load — each call adds another rule.
		 * @example
		 * const lateGame = state.AddLogic("after", 5 * 60)
		 * lateGame.Value = false
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<boolean>
		/** The logic rules riding this toggle, in creation order. */
		public get Logic(): LogicHandle<boolean>[]
	}
	class Slider extends Handle<SliderEntry> {
		public IsDefault(): boolean
		public get Suffix(): string
		public set Suffix(value: string)
		/**
		 * A live line under the rail naming what the value the slider stands at means - the
		 * detection-risk tier it falls in, the cost it buys, the range the number lands in. It
		 * rides the slider's own row, so nothing is drawn between the two and the pair reads as
		 * one control; a note replacing another one swaps through a blur, and `undefined` takes
		 * the line away.
		 * @example
		 * smooth.OnValue(caller => {
		 * 	caller.Note =
		 * 		caller.value >= 66
		 * 			? { text: "Minimal detection risk", iconPath: "shield-check.svg", tone: "good" }
		 * 			: { text: "High detection risk", iconPath: "triangle-warning.svg", tone: "bad" }
		 * })
		 */
		public get Note(): Nullable<SliderNote>
		public set Note(value: Nullable<SliderNote>)
		/**
		 * The rail painted in the tones stretches of the range read as, so what the value buys is
		 * in the colour under the thumb and where the {@link Note} is going to change is in view
		 * before the thumb gets there. The tones run into one another at their seams, the way a
		 * health bar's do; the ramp is bright up to the thumb and a ghost of itself beyond it. A
		 * value on a seam belongs to the later zone, and `undefined` gives the rail its accent back.
		 * @example
		 * smooth.Zones = [
		 * 	{ from: 0, to: 33, tone: "bad" },
		 * 	{ from: 33, to: 66, tone: "warn" },
		 * 	{ from: 66, to: 100, tone: "good" }
		 * ]
		 */
		public get Zones(): Nullable<SliderZone[]>
		public set Zones(value: Nullable<SliderZone[]>)
		/**
		 * Labelled tick marks under the track. `true` derives ticks from the range
		 * on a round stride; an array labels exactly those values.
		 * @example
		 * distance.Ticks = true
		 */
		public get Ticks(): Nullable<number[] | true>
		public set Ticks(value: Nullable<number[] | true>)
		public ResetToDefault(): void
		public get clampMin(): Nullable<number>
		public set clampMin(value: Nullable<number>)
		public get clampMax(): Nullable<number>
		public set clampMax(value: Nullable<number>)
		public get min(): number
		/** Moves the floor; the current value follows it. */
		public set min(value: number)
		public get max(): number
		/**
		 * Moves the ceiling; the current value follows it. For a slider whose real limit is only
		 * known once the game says so - an ability's cast range, a cooldown.
		 */
		public set max(value: number)
		public get value(): number
		public set value(next: number)
		/** What this slider was declared with. {@link ResetToDefault} puts it back. */
		public get defaultValue(): number
		public OnValue(callback: (caller: Slider) => void): Slider
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Slider
		public OnChangeFinished(callback: (caller: Slider) => void): Slider
		public get CallOnRelease(): boolean
		public set CallOnRelease(value: boolean)
		/**
		 * Adds a hotkey driving this slider, exactly like "New Hotkey" in the row's
		 * context menu; it captures the slider's current value until edited. A
		 * toggle-mode hotkey swaps the slider between the stored value and the one
		 * it had before; a hold-mode one restores the previous value on release.
		 * Hotkeys persist in the config, so call it on a user action rather than on
		 * every script load — each call adds another hotkey.
		 * @example
		 * const boost = fov.AddHotkey("F", "hold")
		 * boost.Value = 120
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<number>
		/** The hotkeys riding this slider, in creation order. */
		public get Hotkeys(): HotkeyHandle<number>[]
		/**
		 * Adds a logic rule driving this slider, exactly like "New logic" in the
		 * row's context menu; it captures the slider's current value until edited.
		 * Rules persist in the config, so call it on a user action rather than on
		 * every script load — each call adds another rule.
		 * @example
		 * const earlyGame = fov.AddLogic("before", 5 * 60)
		 * earlyGame.Value = 120
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<number>
		/** The logic rules riding this slider, in creation order. */
		public get Logic(): LogicHandle<number>[]
	}
	class Dropdown extends Handle<DropdownEntry> {
		public KeepArrowGap: boolean
		public IsDefault(): boolean
		public ResetToDefault(): void
		public get SelectedID(): number
		public set SelectedID(next: number)
		/**
		 * The option the dropdown is pinned to, or nothing while it is free. Pinned, it takes the
		 * option at once and every later set lands on it, and the row reads as locked by Safe mode.
		 */
		public get HoldOption(): Nullable<number>
		public set HoldOption(value: Nullable<number>)
		/** Which option this dropdown was declared with. {@link ResetToDefault} puts it back. */
		public get defaultValue(): number
		public get values(): string[]
		/** @deprecated the options are {@link values} */
		public get ValuesNames(): string[]
		/**
		 * Replaces the options offered, for a list discovered at runtime rather than declared.
		 * The selection stays on the option it was on where that option survives.
		 * @example
		 * players.SetOptions(["Automatic", ...sources])
		 */
		public SetOptions(values: string[]): Dropdown
		/**
		 * Rides an image on each option, given in the order the options were, so a list of things with
		 * faces is picked from by the face. An option whose entry is empty keeps its name alone.
		 * @example
		 * hero.SetOptionIcons(names.map(name => `${PathData.HeroIconsPath}/${name}_png.vtex_c`))
		 */
		public SetOptionIcons(icons: readonly string[]): Dropdown
		/** The images riding the options, or nothing where the list is names alone. */
		public get optionIcons(): string[]
		public OnValue(callback: (caller: Dropdown) => void): Dropdown
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Dropdown
		/**
		 * Rides colour pickers on one option's row, which is where a per-option colour belongs
		 * instead of in a row of its own further down the node.
		 * @example
		 * const team = node.AddDropdown("Show on", ["Enemies", "Allies"], 0)
		 * team.PairColors(0, node.AddColorPicker("Enemy color", new Color(227, 61, 61)))
		 */
		public PairColors(option: number | string, ...pickers: ColorPicker[]): Dropdown
		public PairedColors(option: number | string): ColorPicker[]
		/**
		 * Adds a hotkey driving this dropdown, exactly like "New Hotkey" in the
		 * row's context menu; it captures the currently selected option until
		 * edited. A toggle-mode hotkey swaps the selection between the stored
		 * option and the one before; a hold-mode one restores the previous option
		 * on release. Hotkeys persist in the config, so call it on a user action
		 * rather than on every script load — each call adds another hotkey.
		 * @example
		 * const legit = mode.AddHotkey("F2")
		 * legit.Value = "Legit"
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<string>
		/** The hotkeys riding this dropdown, in creation order. */
		public get Hotkeys(): HotkeyHandle<string>[]
		/**
		 * Adds a logic rule driving this dropdown, exactly like "New logic" in the
		 * row's context menu; it captures the selected option until edited. Rules
		 * persist in the config, so call it on a user action rather than on every
		 * script load — each call adds another rule.
		 * @example
		 * const lateGame = mode.AddLogic("after", 10 * 60)
		 * lateGame.Value = "Legit"
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<string>
		/** The logic rules riding this dropdown, in creation order. */
		public get Logic(): LogicHandle<string>[]
	}
	class MultiSelect extends Handle<MultiSelectEntry> {
		public KeepArrowGap: boolean
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Which options this list was declared with. {@link ResetToDefault} puts them back. */
		public get defaultValue(): string[]
		public get values(): string[]
		/** Selection aligned to `values`, which is the shape a caller usually folds. */
		public get SelectedFlags(): boolean[]
		public get SelectedIDs(): number[]
		public get SelectedNames(): string[]
		public set SelectedNames(next: string[])
		/**
		 * Replaces the options offered, for a list discovered at runtime rather than declared.
		 * The ticks stay on the names they were on, including names that have just gone away,
		 * so an option that comes back comes back chosen.
		 * @example
		 * players.SetOptions(sources)
		 */
		public SetOptions(values: string[]): MultiSelect
		public IsSelected(id: number): boolean
		public Select(id: number, selected: boolean): void
		public OnValue(callback: (caller: MultiSelect) => void): MultiSelect
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): MultiSelect
		/**
		 * Adds a hotkey driving this multiselect, exactly like "New Hotkey" in the
		 * row's context menu; it captures the currently selected options until
		 * edited. A toggle-mode hotkey swaps the selection with the previous one;
		 * a hold-mode one restores the previous selection on release.
		 * @example
		 * const enemies = audience.AddHotkey("F3", "hold")
		 * enemies.Value = ["Enemies"]
		 */
		public AddHotkey(defaultKey?: string, mode?: HotkeyMode): HotkeyHandle<string[]>
		/** The hotkeys riding this multiselect, in creation order. */
		public get Hotkeys(): HotkeyHandle<string[]>[]
		/**
		 * Adds a logic rule driving this multiselect, exactly like "New logic" in
		 * the row's context menu; it captures the selected options until edited.
		 * @example
		 * const lateGame = audience.AddLogic("after", 5 * 60)
		 * lateGame.Value = ["Enemies"]
		 */
		public AddLogic(when?: LogicWhen, at?: number): LogicHandle<string[]>
		/** The logic rules riding this multiselect, in creation order. */
		public get Logic(): LogicHandle<string[]>[]
		/**
		 * Rides colour pickers on one option's row, which is where a per-option colour belongs
		 * instead of in a row of its own further down the node.
		 * @example
		 * const team = node.AddMultiSelect("Show on", ["Enemies", "Allies"], ["Enemies"])
		 * team.PairColors(
		 * 	"Enemies",
		 * 	node.AddColorPicker("Visible", new Color(61, 181, 106)),
		 * 	node.AddColorPicker("Behind cover", new Color(227, 61, 61))
		 * )
		 */
		public PairColors(option: number | string, ...pickers: ColorPicker[]): MultiSelect
		public PairedColors(option: number | string): ColorPicker[]
	}
	class Keybind extends Handle<KeybindEntry> {
		/** Runtime active state shown in Hotkeys. Set undefined to follow the physical key again. */
		public get HotkeysActive(): boolean | undefined
		public set HotkeysActive(value: boolean | undefined)
		public IsDefault(): boolean
		public ResetToDefault(): void
		public get ActivatesInMenu(): boolean
		public set ActivatesInMenu(value: boolean)
		/**
		 * Whether a press this bind answers is taken from the game. Off by default; enable it
		 * to reserve this key for the menu action. Saved with the bind.
		 * @example
		 * this.HoldKey = tree.AddKeybind("Hold Key", "F3")
		 * this.HoldKey.ClaimsKey = true
		 */
		public get ClaimsKey(): boolean
		public set ClaimsKey(value: boolean)
		public get defaultKey(): string
		public set defaultKey(value: string)
		public get defaultKeyIdx(): number
		public set defaultKeyIdx(value: number)
		/**
		 * Full display name of the current bind: "Ctrl + F" for combinations,
		 * "F" for single keys, "None" when unbound.
		 */
		public get assignedKeyStr(): string
		/** Binds by name — "Shift", "Ctrl + F" — the way a config or a preset spells it. */
		public set assignedKeyStr(value: string)
		/**
		 * Shows the capture popup affordance that assigns the left mouse button.
		 * On by default; turn it off where a click is not a sensible trigger.
		 */
		public get AllowLeftMouse(): boolean
		public set AllowLeftMouse(value: boolean)
		/**
		 * Permits recording a two-key combination in the capture popup.
		 * On by default.
		 */
		public get AllowCombinations(): boolean
		public set AllowCombinations(value: boolean)
		public get ConfigValue(): number
		public set ConfigValue(value: number)
		public OnPressed(callback: (caller: Keybind) => void): Keybind
		public get assignedKey(): number
		public set assignedKey(next: number)
		public get isPressed(): boolean
		public OnValue(callback: (caller: Keybind) => void): Keybind
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): Keybind
		public OnRelease(callback: (caller: Keybind) => void): Keybind
	}
	class Button extends Handle<ButtonEntry> {
		public executeOnAdd: boolean
		/** Visual emphasis used to distinguish primary, neutral, quiet and destructive actions. */
		public get Variant(): ButtonVariant
		public set Variant(value: ButtonVariant)
		/** Height and spacing scale of the button. */
		public get Size(): ButtonSize
		public set Size(value: ButtonSize)
		public OnValue(callback: (caller: Button) => void): Button
		public Trigger(): void
	}
	class ColorPicker extends Handle<ColorEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/**
		 * The colour this picker stands for right now: its own, the one it {@link Follows} while
		 * untouched, the first colour of its gradient, or where its rainbow has walked to at this
		 * moment. An owner that draws every frame reads it every frame and gets the rainbow for
		 * free; one that reads it once, on change, sees a single moment of it and should call
		 * {@link SolidOnly}. An owner that can paint a gradient across its surface reads
		 * {@link ColorAt} or {@link GradientColors} instead.
		 */
		public get SelectedColor(): Color
		public set SelectedColor(next: Color)
		/** How the colour is made: one colour, a gradient between two, or a hue walking the circle. */
		public get Mode(): ColorMode
		public set Mode(next: ColorMode)
		/**
		 * The two ends of the gradient, as declared: the first is {@link SelectedColor} while the
		 * picker is solid, and the seed a rainbow walks from. For an owner that paints a gradient
		 * across its surface, from the first colour at one edge to the second at the other.
		 */
		public get GradientColors(): [Color, Color]
		public set SecondColor(next: Color)
		/**
		 * The colour at one point along the surface, 0 at its start and 1 at its end: the gradient
		 * blended that far, or the one colour a solid or a rainbow has everywhere. What a bar or a
		 * run of text asks per segment.
		 */
		public ColorAt(at: number): Color
		/** How long a rainbow takes to come back round, in seconds. */
		public get Period(): number
		public set Period(next: number)
		/** Where a rainbow stands in its walk right now, 0 to 1. */
		public get Phase(): number
		/**
		 * Keeps the palette to one colour: no gradient, no rainbow. For a picker whose owner reads
		 * the colour once, on change, where an animation would only ever show its first frame.
		 */
		public SolidOnly(): ColorPicker
		/**
		 * Keeps the palette to one colour or a rainbow: no gradient. For a picker whose owner paints
		 * one colour at a time, the way a picture is tinted or a line is drawn, where a gradient
		 * would only ever show its first colour.
		 */
		public NoGradient(): ColorPicker
		/** The colour this picker was declared with. {@link ResetToDefault} puts it back. */
		public get defaultColor(): Color
		/**
		 * Points this picker at a live colour for as long as nobody has touched it: the swatch shows
		 * `ink` and {@link SelectedColor} answers with it, so a card that draws in the theme's own ink
		 * until it is given a colour of its own says as much on its row.
		 *
		 * The declared default stays the literal it was declared with — it is what a config is
		 * compared against, and one that moved with the theme would make the same config read
		 * differently on two machines.
		 *
		 * @example
		 * node.AddColorPicker("Color", HudColorOf(DefaultPalette.TextDisabled)).Follows(
		 *     () => HudColors.faint
		 * )
		 */
		public Follows(ink: () => Color): ColorPicker
		public SetColor(color: Color): ColorPicker
		/**
		 * Whether the value listeners wait for the hand to let go: on, a drag across the palette
		 * reports the colour it ends on rather than every one it passes through, and a change made
		 * any other way reports at once. For an owner whose work per colour is dear - a glyph effect
		 * baked into the font atlas per colour.
		 */
		public get CallOnRelease(): boolean
		public set CallOnRelease(value: boolean)
		public OnValue(callback: (caller: ColorPicker) => void): ColorPicker
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): ColorPicker
	}
	class TextInput extends Handle<TextEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		public get text(): string
		public set text(next: string)
		public OnValue(callback: (caller: TextInput) => void): TextInput
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): TextInput
	}
	/**
	 * A list of short strings the user edits in the row itself: a field with an Add button, and a
	 * row per string with its own remove control. Values are trimmed, cut at {@link MaxLength} and
	 * kept unique; the list stops growing at {@link MaxItems}. A script that keeps the list
	 * somewhere of its own turns {@link SaveConfig} off and writes {@link values} back itself.
	 * @example
	 * const messages = node.AddTextList("Messages", defaults, "Sent after a kill", 0, "Type a message", 80)
	 * messages.SaveConfig = false
	 * messages.OnValue(list => this.store(list.values))
	 */
	class TextList extends Handle<ListEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** The list as it stands. The array is replaced on every change and never mutated in place. */
		public get values(): readonly string[]
		public set values(next: readonly string[])
		/** The longest string the list takes; what is typed past it is cut. */
		public get MaxLength(): number
		/** How many strings the list holds before the field stops adding. */
		public get MaxItems(): number
		/** Appends one string; false when it is empty once trimmed, already there, or the list is full. */
		public Add(text: string): boolean
		public Remove(index: number): void
		public OnValue(callback: (caller: TextList) => void): TextList
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): TextList
	}
	class ShortDescription extends Handle<DescriptionEntry> {
		public get Selected(): boolean
		public set Selected(value: boolean)
		/**
		 * Puts a button at the end of the note and makes the whole row press it: for a note that
		 * says what is missing and can set it right on the spot. `undefined` takes the button away.
		 * @example
		 * const note = node.AddShortDescription("Required humanizer")
		 * note.SetAction("Enable", () => Humanizer.RequestEnable())
		 */
		public SetAction(label: Nullable<string>, run?: () => void): ShortDescription
	}
	class ImageSelector extends Handle<ImagesEntry> {
		public get Variant(): ImageVariant
		public set Variant(value: ImageVariant)
		public get Draggable(): boolean
		public set Draggable(value: boolean)
		/**
		 * A switch at the end of the row's title line, for a selection that is itself something to
		 * turn on and off. The toggle gives up a row of its own: it flips from the title, takes its
		 * hotkeys and rules from the row's context menu, and is listed under the row's name. While
		 * it is off the tiles go grey, the way a page's rows do under its {@link Node.Gate}.
		 * @example
		 * const items = node.AddImageSelector("Pick up items", names)
		 * items.HeaderControl = node.AddToggle("Pick up items state", true)
		 */
		public get HeaderControl(): Nullable<Toggle>
		public set HeaderControl(value: Nullable<Toggle>)
		/** Moves a tile to another slot, exactly like a user drag would. */
		public MoveImage(from: number, to: number): void
		public IsDefault(): boolean
		public ResetToDefault(): void
		public IsZeroSelected(): boolean
		public get values(): string[]
		public set values(next: string[])
		public get enabledValues(): Map<string, boolean>
		/** Replaces the whole selection, for a script restoring one it saved itself. */
		public set enabledValues(next: Map<string, boolean> | [string, boolean][])
		/**
		 * The sections the picker's browse modal lists. Handing a catalogue over turns the row into
		 * the chosen tiles and a button that opens the modal, which is what keeps a picker with a
		 * whole shop behind it one row tall. Setting it lays every value out as a tile and keeps
		 * whatever is already chosen.
		 * @example
		 * picker.Catalogue = [{ title: "Weapon", accent: "#e0a44b", values: weaponItems }]
		 */
		public get Catalogue(): readonly CatalogueSection[]
		public set Catalogue(next: readonly CatalogueSection[])
		/** The selection as the config carries it. Same state as {@link enabledValues}. */
		public get ConfigValue(): Map<string, boolean>
		public set ConfigValue(next: Map<string, boolean> | [string, boolean][])
		public IsEnabled(value: string): boolean
		/** Adds a tile after the selector was built, e.g. an ability the game only now revealed. */
		public AddImage(value: string, enabled?: boolean): ImageSelector
		/** Where a tile sits in the current order, which is what a drag rearranges. */
		public GetPriority(value: string): number
		public OnValue(callback: (caller: ImageSelector) => void): ImageSelector
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): ImageSelector
	}
	/**
	 * A preset selector: its row shows the chosen preset and opens a panel listing a permanent base
	 * preset above the user's own. Presets are added, renamed and removed in the panel, and every
	 * one beyond the base claims values from {@link Catalogue} — each value belonging to at most
	 * one preset, so the base stands for whatever no other claims.
	 */
	class PresetSelector extends Handle<PresetsEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		/** Heading of the row's panel where it should differ from the row's own name. */
		public get PanelTitle(): string
		public set PanelTitle(value: string)
		/**
		 * Why the selector refuses a click while {@link IsDisabled} is set — for a selection a rule
		 * of the script makes on the user's behalf, so the chip that answers no click says what to
		 * do instead: a first line, and past a line break the way out. Shown on hover, with a lock
		 * in place of the chip's chevrons.
		 * @example
		 * presets.DisabledReason = "Following the weapon in hand\nSwitch weapon, or turn following off"
		 */
		public get DisabledReason(): string
		public set DisabledReason(value: string)
		/**
		 * The sections the panel's value picker offers, one row per value with its image and label.
		 * @example
		 * presets.Catalogue = [{ title: "Rifles", values: [{ value: icon, label: "AK-47" }] }]
		 */
		public get Catalogue(): readonly CatalogueSection[]
		public set Catalogue(next: readonly CatalogueSection[])
		/**
		 * Every preset, the permanent base always first. Each carries the stable id a script keys
		 * per-preset state of its own by. Treat as read-only — the selector owns the structure.
		 */
		public get Presets(): readonly PresetGroup[]
		public get SelectedID(): number
		public set SelectedID(next: number)
		/** The preset the panel has selected, which is the one a script should be editing. */
		public get Selected(): PresetGroup
		/** The preset claiming `value`, or nothing while no preset does — the base covers it then. */
		public OwnerOf(value: string): Nullable<PresetGroup>
		/**
		 * Replaces every preset beyond the base and the selection in one write, for a script
		 * restoring state it saved itself. Every group is given a fresh id — read them back off
		 * {@link Presets} after the call.
		 * @example
		 * presets.Load([{ name: "Rifles", values: rifleIcons }], 1)
		 */
		public Load(groups: readonly {
			name: string
			values: readonly string[]
		}[], selected?: number): PresetSelector
		public OnValue(callback: (caller: PresetSelector) => void): PresetSelector
		/**
		 * Carries one preset's settings over to another, for the Copy settings / Paste settings rows
		 * of the panel's right-click menu. Registering a listener is what puts those rows there: the
		 * selector owns the presets, the script owns what a preset means, so only the script can move
		 * the meaning. The values a preset claims stay where they are.
		 * @example
		 * presets.OnCopySettings((from, to) => byId.set(to.id, byId.get(from.id)!.Clone()))
		 */
		public OnCopySettings(callback: (from: PresetGroup, to: PresetGroup) => void): PresetSelector
		/** Runs the value listeners without a value having changed. */
		public TriggerOnValueChangedCBs(): PresetSelector
	}
	class Node extends Handle<NodeEntry> {
		public IsDefault(): boolean
		public ResetToDefault(): void
		public get entries(): AnyHandle[]
		/**
		 * Runs the callback whenever any control under this node changes - for a script that rebuilds
		 * the same thing no matter which setting moved. Covers the controls the node holds when it is
		 * called, so declare the page first and hang this off the end. Fires once on subscription
		 * itself rather than once per covered control.
		 * @example
		 * const page = tree.AddNode("Panel")
		 * page.AddToggle("State", true)
		 * page.OnValue(() => this.Rebuild())
		 */
		public OnValue(callback: (caller: Node) => void): Node
		public get IsOpen(): boolean
		public set IsOpen(value: boolean)
		public get IsOpenStored(): boolean
		/**
		 * Whether this node's card can be folded by clicking its header. Off on a page, it also
		 * pins the page's own General card open.
		 */
		public get Collapsible(): boolean
		public set Collapsible(value: boolean)
		/**
		 * Whether the menu is showing this node's page right now. A panel that belongs to a page —
		 * a preview of what it configures — has no business on screen while another page is open.
		 */
		public get IsActivePage(): boolean
		/**
		 * The tab this page is showing, for a page whose children are tabs — nothing for any other.
		 * A panel that belongs to one tab has no business on screen while another is open.
		 */
		public get ActiveTab(): Nullable<Node>
		public SetOpenRaw(value: boolean): void
		public get SortNodes(): boolean
		public set SortNodes(value: boolean)
		public get IconRound(): number
		public set IconRound(value: number)
		/**
		 * Name of the child node pinned above the list of this node's pages. The
		 * pinned page is what the tab opens on, so it is the current one - the hero
		 * being played - rather than merely the first page alphabetically.
		 * @example
		 * heroes.PinnedName = LocalPlayer?.Hero?.Name ?? ""
		 */
		public get PinnedName(): string
		public set PinnedName(value: string)
		public get PinnedLabel(): string
		public set PinnedLabel(value: string)
		/**
		 * Heading of this tab's page panel when it should differ from the tab
		 * itself, e.g. a rail tab "ESP" whose panel reads "Visuals".
		 */
		public get SubLabel(): string
		public set SubLabel(value: string)
		public get SearchPlaceholder(): string
		public set SearchPlaceholder(value: string)
		public get FilterGroups(): MenuFilterGroup[]
		public set FilterGroups(value: MenuFilterGroup[])
		/**
		 * Lists this node's pages under one heading per {@link FilterGroups} entry, in the
		 * order the groups are declared, instead of as one flat list. A heading reads the
		 * group's tooltip; pages of no declared group stay on top under the node's own name.
		 * @example
		 * heroes.FilterGroups = [{ id: EHeroType.Gunner, icon, tooltip: "Gunner" }]
		 * heroes.GroupHeadings = true
		 */
		public get GroupHeadings(): boolean
		public set GroupHeadings(value: boolean)
		public get FilterGroup(): Nullable<number>
		public set FilterGroup(value: Nullable<number>)
		public get IconTint(): boolean
		public set IconTint(value: boolean)
		/** Width-to-height ratio of this node's icon in navigation rows; `1` keeps the square default. */
		public get IconAspectRatio(): number
		public set IconAspectRatio(value: number)
		public get IconGrayScale(): boolean
		public set IconGrayScale(value: boolean)
		public get TextColor(): Nullable<Color>
		public set TextColor(value: Nullable<Color>)
		public get Popover(): boolean
		public set Popover(value: boolean)
		/** Status glyphs before this node's settings button. An empty list hides them without replacing the main icon. */
		public get StatusIconPaths(): readonly string[]
		public set StatusIconPaths(value: readonly string[])
		/** Preferred popover width in dp. Undefined uses the compact default; the panel fits within the screen. */
		public get PopoverWidth(): Nullable<number>
		public set PopoverWidth(value: Nullable<number>)
		public get TabbedChildren(): boolean
		public set TabbedChildren(value: boolean)
		/**
		 * Lays a top-level tab's child nodes out as collapsible section cards on the tab's own page,
		 * instead of listing them as sub-pages in the navigation column. Sections fold independently,
		 * and the tab's own rows stand in a General card above them.
		 * @example
		 * const tab = MenuSDK.Menu.AddEntry("Aimbot")
		 * tab.InlinePages = true
		 */
		public get InlinePages(): boolean
		public set InlinePages(value: boolean)
		public get SaveUnusedConfigs(): boolean
		public set SaveUnusedConfigs(value: boolean)
		public get HeaderControl(): Nullable<AnyHandle>
		public set HeaderControl(value: Nullable<AnyHandle>)
		/**
		 * Toggle that gates this page: while it is off everything under it paints with a muted
		 * accent instead of the live one, and the art of image selector tiles goes grey — switches
		 * stay on and keep their values, they simply stop reading as running. Nothing is locked
		 * and no label loses contrast, so the page is as easy to read and to set up as a working
		 * one. The gate itself keeps the accent: it is the switch that turns the page back on.
		 * @example
		 * const general = page.AddNode("General")
		 * this.State = general.AddToggle("State", false)
		 * general.HeaderControl = this.State
		 * page.Gate = this.State
		 */
		public get Gate(): Nullable<Toggle>
		public set Gate(value: Nullable<Toggle>)
		/**
		 * Banner shown above the page while its {@link Gate} is off, with a button that turns
		 * the gate on. It closes the page rather than muting it — the cards fade back and stop
		 * taking clicks — so declare it only where there is nothing to prepare while it is off.
		 */
		public get DisabledNotice(): Nullable<DisabledNotice>
		public set DisabledNotice(value: Nullable<DisabledNotice>)
		/**
		 * Draws the node's body instead of its rows: the whole page of a page node, the body of the
		 * card a section node stands as, or the panel of a node opened from a settings gear
		 * ({@link AddSubSettings}). The rows stay declared and saved as usual, so a custom body can
		 * still lay any of them out through `RenderControl`.
		 */
		public get CustomPage(): Nullable<() => React.ReactNode>
		public set CustomPage(value: Nullable<() => React.ReactNode>)
		/**
		 * Lets a custom page consume the menu's Back command before it falls through to the shared
		 * navigation history. Return `true` after handling the action, or `false` to use history.
		 */
		public get BackAction(): Nullable<() => boolean>
		public set BackAction(value: Nullable<() => boolean>)
		/**
		 * A popover of settings hanging off `host`: a row grows a button at its end, and the chip a
		 * page wears as its {@link HeaderControl} grows one beside it in the top bar, opening
		 * everything added to the node this returns. Named after the host by default; a name of its
		 * own heads the panel instead, and is what its rows are filed under in the config and in
		 * search. Settings of the header chip belong to no tab of the page, so no tab's gate greys them.
		 * @example
		 * const options = page.AddSubSettings(presets, "Weapon presets", "images/icons/crosshair.svg")
		 * options.AddToggle("Follow active weapon", false)
		 */
		public AddSubSettings(host: AnyHandle, name?: string, iconPath?: string): Node
		/**
		 * A settings row of this node's own: the row carries its name and the button that opens it,
		 * and everything added to the node it returns lives in the popover the button opens — the
		 * panel {@link AddSubSettings} opens for a row, titled with the name given here.
		 *
		 * For a block of settings that belongs to no single row of the card — the typography of a
		 * label, the timings of a feature — where a fold would spend the card's height on rows read
		 * once and left alone. Colours ride the row itself through {@link Node.PairColors}.
		 * @example
		 * const text = card.AddSettings("Text settings", "images/icons/text.svg")
		 * text.AddSlider("Font size", 13, 10, 24)
		 * text.PairColors(text.AddColorPicker("Text color", Color.White))
		 */
		public AddSettings(name: string, iconPath?: string, tooltip?: string): Node
		/**
		 * Rides colour pickers on this node's settings row: swatches beside the button open their
		 * palettes and the pickers lose rows of their own, inside the popover as well as outside it.
		 * What each one stands for is read from its name on hover.
		 */
		public PairColors(...pickers: ColorPicker[]): Node
		public AddSectionHeader(name: string, iconPath?: string): ShortDescription
		public AddShortDescription(name: string, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): ShortDescription
		public AddNode(name: string, iconPath?: string, tooltip?: string, iconRound?: number, priority?: number): Node
		public AddEntry(name: string, iconPath?: string, tooltip?: string, iconRound?: number, priority?: number): Node
		public AddToggle(name: string, defaultValue?: boolean, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): Toggle
		public AddSlider(name: string, defaultValue?: number, min?: number, max?: number, precision?: number, tooltip?: string, priority?: number): Slider
		public AddDropdown(name: string, values: string[], defaultValue?: number, tooltip?: string, priority?: number): Dropdown
		public AddMultiSelect(name: string, values: string[], defaultValue?: string[], tooltip?: string, priority?: number): MultiSelect
		/** Adds a keybind, optionally hidden from Hotkeys by default; users can change its visibility in the context menu. */
		public AddKeybind(name: string, defaultKey?: string, tooltip?: string, priority?: number, defaultHotkeysHidden?: boolean): Keybind
		/**
		 * Adds a styled action button. Set `IconPath` on the returned handle to prepend a glyph.
		 * @example
		 * const create = page.AddButton("Create", "", 0, "primary", "sm")
		 * create.IconPath = "menu/ui/plus.svg"
		 */
		public AddButton(name: string, tooltip?: string, priority?: number, variant?: ButtonVariant, size?: ButtonSize): Button
		public AddColorPicker(name: string, defaultColor?: Color, tooltip?: string, priority?: number): ColorPicker
		public AddTextInput(name: string, placeholder?: string, priority?: number): TextInput
		/**
		 * A list of short strings edited in place: `placeholder` is what the empty field says,
		 * `maxLength` the longest string it takes and `maxItems` how many the list holds.
		 * @example
		 * const messages = node.AddTextList("Messages", defaults, "Sent after a kill", 0, "Type a message", 80)
		 */
		public AddTextList(name: string, values?: readonly string[], tooltip?: string, priority?: number, placeholder?: string, maxLength?: number, maxItems?: number): TextList
		/**
		 * A node holding an X and a Y slider, for a position a script draws at.
		 * @example
		 * this.Position = tree.AddVector2("Panel", new Vector2(0, 547), 0, new Vector2(1920, 1080))
		 * const at = this.Position.Vector
		 */
		public AddVector2(name: string, vector: Vector2, minVector?: Vector2 | number, maxVector?: Vector2 | number): Vector2Handle
		/**
		 * A node holding what it takes to describe one drawn shape: whether to draw it at all, its
		 * colour, whether it is filled, and which of the renderer's styles to use.
		 * @example
		 * this.Ward = tree.AddParticlePicker("Ward", Color.Green, ["Normal", "Rope"], [true, false])
		 */
		public AddParticlePicker(name: string, color?: Color | number, styles?: string[], state?: [boolean, boolean]): ParticlePicker
		/**
		 * An image selector whose tiles are dragged into the order they should be tried in, and which
		 * a script keeps adding to as the game reveals what belongs there.
		 * @example
		 * this.lotus = node.AddDynamicImageSelector("Lotus", abilities, new Map(), false, "…")
		 * this.lotus.AddImage("item_sphere", false)
		 */
		public AddDynamicImageSelector(name: string, values: string[], defaultValues?: Map<string, boolean> | [string, boolean][], createdDefaultState?: boolean, tooltip?: string, priority?: number): ImageSelector
		public AddImageSelector(name: string, values: string[], defaultValues?: Map<string, boolean> | [string, boolean][], tooltip?: string, createdDefaultState?: boolean, priority?: number, draggable?: boolean): ImageSelector
		/**
		 * A preset selector: a row showing the chosen preset, opening a panel that lists a permanent
		 * base preset above the user's own — presets are added, renamed and removed there, and each
		 * claims values from the catalogue handed to the returned handle.
		 * @example
		 * const presets = node.AddPresetSelector("Preset", "Global")
		 * presets.Catalogue = [{ title: "Rifles", values: [{ value: icon, label: "AK-47" }] }]
		 */
		public AddPresetSelector(name: string, baseName?: string, tooltip?: string, priority?: number): PresetSelector
	}
	/** What {@link Node.AddVector2} hands back: the two sliders, and the point they make. */
	interface Vector2Handle {
		readonly node: Node
		readonly X: Slider
		readonly Y: Slider
		Vector: Vector2
	}
	/** What {@link Node.AddParticlePicker} hands back. */
	interface ParticlePicker {
		readonly Node: Node
		/** Only there when the picker was asked for one. */
		readonly State: Nullable<Toggle>
		readonly Fill: Toggle
		readonly Color: ColorPicker
		readonly Style: Dropdown
	}
	type AnyHandle = Node | Toggle | Slider | Dropdown | MultiSelect | Keybind | Button | ColorPicker | TextInput | TextList | ImageSelector | PresetSelector | ShortDescription
	/** A hotkey of any entry, whatever kind of value it drives. */
	type AnyHotkey = HotkeyHandle<DrivenValue>
	/** A logic rule of any entry, whatever kind of value it drives. */
	type AnyLogic = LogicHandle<DrivenValue>
	function WrapEntry(entry: Entry): AnyHandle
	const Menu: Node
}
