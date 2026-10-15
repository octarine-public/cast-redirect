// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Registers the hook that hands a freshly attached entry its stored config.
	 * Entries created after the config was read - a hero page opened for the first
	 * time, a script registering late - would otherwise keep their defaults.
	 */
	function SetEntryAdopter(adopt: (parent: NodeEntry, entry: Entry) => void): void
	function SetImagePathResolver(resolver: (value: string) => string): void
	function ResolveImagePath(value: string): string
	function SetAbilityOwnerResolver(resolver: (value: string) => Nullable<[string, number]>): void
	/** The hero behind an ability name and its button number, where the host knows one. */
	function ResolveAbilityOwner(value: string): Nullable<[string, number]>
	const MenuTree: NodeEntry
	/**
	 * Moves an entry and everything under it to the document `document`: an entry attached later
	 * inherits its parent's, so the whole subtree stays in one document.
	 *
	 * @example
	 * SetEntryDocument(themes.entry, "theme")
	 */
	function SetEntryDocument(entry: Entry, document: EntryDocument): void
	function SortEntries(parent: NodeEntry): void
	/**
	 * Registers the host's tables of icons and sort priorities for menu pages, keyed by the page's
	 * path through the tree: `"Visual"` for a tab, `"Visual/Players"` for a page inside it. A page
	 * carries the priority whenever it is created, so a list several scripts fill in separately
	 * still holds the order the game asks for instead of falling back to the alphabet.
	 *
	 * Every page named by a table is placed by its number, lowest first; a page no table names keeps
	 * priority 0 and therefore sorts above a list numbered from 1, where it is seen rather than lost
	 * at the bottom.
	 * @example
	 * SetEntryDefaults(
	 *     { Visual: "menu/icons/eye.svg" },
	 *     { "Visual/Players": 1, "Visual/Orbs": 2 }
	 * )
	 */
	function SetEntryDefaults(icons: Record<string, string>, priorities: Record<string, number>): void
	function CreateNode(parent: NodeEntry, name: string, iconPath?: string, tooltip?: string, iconRound?: number, priority?: number): NodeEntry
	function CreateDescription(parent: NodeEntry, name: string, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): DescriptionEntry
	function CreateToggle(parent: NodeEntry, name: string, defaultValue: boolean, tooltip?: string, priority?: number, iconPath?: string, iconRound?: number): ToggleEntry
	function CreateSlider(parent: NodeEntry, name: string, defaultValue: number, min: number, max: number, precision: number, tooltip?: string, priority?: number): SliderEntry
	function CreateDropdown(parent: NodeEntry, name: string, values: string[], defaultValue: number, tooltip?: string, priority?: number): DropdownEntry
	function CreateMultiSelect(parent: NodeEntry, name: string, values: string[], defaultValue?: string[], tooltip?: string, priority?: number): MultiSelectEntry
	function CreateKeybind(parent: NodeEntry, name: string, defaultKey: string, tooltip?: string, priority?: number, defaultHotkeysHidden?: boolean): KeybindEntry
	function CreateButton(parent: NodeEntry, name: string, tooltip?: string, priority?: number, variant?: ButtonVariant, size?: ButtonSize): ButtonEntry
	function CreateColor(parent: NodeEntry, name: string, defaultColor: Color, tooltip?: string, priority?: number): ColorEntry
	function CreateTextInput(parent: NodeEntry, name: string, placeholder: string, priority?: number): TextEntry
	function CreateList(parent: NodeEntry, name: string, values: readonly string[], tooltip?: string, priority?: number, placeholder?: string, maxLength?: number, maxItems?: number): ListEntry
	function CreateImages(parent: NodeEntry, name: string, values: string[], defaults: Map<string, boolean> | [string, boolean][], tooltip?: string, priority?: number, createdDefault?: boolean, ordered?: boolean, draggable?: boolean): ImagesEntry
	/**
	 * Hands the picker the catalogue its browse modal lists, and lays every value in it out as a tile
	 * the row can carry, keeping whatever is already chosen. A value the catalogue no longer names
	 * goes with it: the picker speaks for what the catalogue holds and nothing else.
	 */
	function SetImageCatalogue(entry: ImagesEntry, sections: readonly CatalogueSection[]): void
	/** Puts every tile back into the state and the slot it was declared with. */
	function ResetImages(entry: ImagesEntry): void
	function ImagePairs(entry: ImagesEntry): [string, boolean][]
	function CreatePresets(parent: NodeEntry, name: string, baseName: string, tooltip?: string, priority?: number): PresetsEntry
	/** Hands the selector the catalogue its value picker offers. Claimed values stay as they are. */
	function SetPresetCatalogue(entry: PresetsEntry, sections: readonly CatalogueSection[]): void
	function SelectPreset(entry: PresetsEntry, index: number): void
	/** Adds an empty preset under a fresh unique name and selects it. */
	function AddPreset(entry: PresetsEntry): PresetGroup
	/**
	 * Hands one preset's settings to another through whoever is listening for it: the selector owns
	 * the presets, a script owns what a preset means, so the carry itself belongs to the script. The
	 * values a preset claims stay where they are — only the settings behind them travel.
	 */
	function CopyPresetSettings(entry: PresetsEntry, fromIndex: number, toIndex: number): void
	function RemovePreset(entry: PresetsEntry, index: number): void
	/**
	 * Moves a preset to another place in the list. The base preset stays first, so neither index may
	 * be 0, and the selection stays on the preset it was on wherever that one lands.
	 */
	function MovePreset(entry: PresetsEntry, from: number, to: number): void
	/** Renames a preset; an empty name or one another preset already carries is ignored. */
	function RenamePreset(entry: PresetsEntry, index: number, name: string): void
	/**
	 * Claims a catalogue value for the preset, taking it away from whichever other preset held it —
	 * a value belongs to at most one. The base preset claims nothing and is left alone.
	 */
	function AddPresetValue(entry: PresetsEntry, index: number, value: string): void
	/**
	 * Claims every value of `values` for the preset in one write — a whole catalogue section at
	 * once. Each value obeys the {@link AddPresetValue} rules; listeners hear one change, not one
	 * per value.
	 */
	function AddPresetValues(entry: PresetsEntry, index: number, values: readonly string[]): void
	function RemovePresetValue(entry: PresetsEntry, index: number, value: string): void
	/**
	 * Replaces every preset beyond the base and the selection in one write, for a config or a script
	 * restoring saved state. Names are made unique, a value stays with the first preset naming it,
	 * and every group is given a fresh id — read the ids back off the entry after the call.
	 */
	function SetPresetGroups(entry: PresetsEntry, groups: readonly {
		name: string
		values: readonly string[]
	}[], selected: number): void
	/**
	 * Marks the document `entry` belongs to as changed. A setter does it on its own; this is for the
	 * paths a setter cannot see - the end of a drag, a value typed into a field, a row a script runs -
	 * and it goes by the entry, so a theme control never re-dates the config.
	 */
	function MarkEntryChanged(entry: EntryCommon): void
	function SetToggleValue(entry: ToggleEntry, value: boolean): void
	/**
	 * Records that a driver — a hotkey or a logic rule — changed: the config is due and the menu
	 * re-renders, both deferred while a slider is being dragged.
	 */
	function MarkDriversChanged(): void
	/**
	 * Adds a hotkey to the entry: toggle mode, listed in the on-screen panel while
	 * it is active, unbound until the capture popup assigns a key. A toggle's
	 * hotkey drives the switch on; every other supported entry captures its
	 * current value.
	 */
	function AddEntryHotkey(entry: ToggleEntry, bind?: number): ToggleHotkey
	function AddEntryHotkey(entry: SliderEntry, bind?: number): SliderHotkey
	function AddEntryHotkey(entry: DropdownEntry, bind?: number): DropdownHotkey
	function AddEntryHotkey(entry: MultiSelectEntry, bind?: number): MultiSelectHotkey
	function AddEntryHotkey(entry: DriverHolder, bind?: number): EntryHotkey
	/** The option values a multiselect currently has on, in the entry's own order. */
	function SelectedMultiValues(entry: MultiSelectEntry): string[]
	function RemoveEntryHotkey(entry: DriverHolder, hotkey: EntryHotkey): void
	function SetEntryHotkeyBind(hotkey: EntryHotkey, bind: number): void
	function SetEntryHotkeyMode(hotkey: EntryHotkey, mode: HotkeyMode): void
	/** Sets whether this hotkey blocks game input on subsequent presses. */
	function SetEntryHotkeyClaimsKey(hotkey: EntryHotkey, value: boolean): void
	/**
	 * Stores the value a driver — a hotkey or a logic rule — holds its entry at. A slider's value
	 * is clamped and rounded like the slider itself; dropdown and multiselect values must name
	 * existing options or the call is ignored.
	 */
	function SetEntryDriverValue(entry: ToggleEntry, driver: EntryDriver<boolean>, value: boolean): void
	function SetEntryDriverValue(entry: SliderEntry, driver: EntryDriver<number>, value: number): void
	function SetEntryDriverValue(entry: DropdownEntry, driver: EntryDriver<string>, value: string): void
	function SetEntryDriverValue(entry: MultiSelectEntry, driver: EntryDriver<string[]>, value: string[]): void
	function SetEntryHotkeyVisibility(hotkey: EntryHotkey, visibility: HotkeyVisibility): void
	/**
	 * Walks every hotkey in the tree, in menu order — the on-screen panel and
	 * hotkey listings are built from this.
	 */
	function ForEachEntryHotkey(callback: (entry: DriverHolder, hotkey: EntryHotkey) => void, node?: NodeEntry): void
	/**
	 * The value a driver holds its entry at, as text: empty for a toggle, the number
	 * with the slider's precision and suffix, the option of a dropdown, or a
	 * multiselect summary. `localize` translates suffixes and option names.
	 *
	 * @example
	 * DriverValueName(entry, hotkey, name => Localization.Localize(name))
	 */
	function DriverValueName(entry: DriverHolder, driver: EntryDriver, localize?: (name: string) => string): string
	function SetSliderValue(entry: SliderEntry, value: number): void
	function FinishSliderChange(entry: SliderEntry): void
	function SetDropdownValue(entry: DropdownEntry, selectedID: number): void
	function SetMultiSelectValue(entry: MultiSelectEntry, value: string, selected: boolean): void
	/**
	 * Replaces the options at runtime, which is what a list that is discovered rather than
	 * declared needs — the players reporting a media session, say.
	 *
	 * The array is replaced rather than edited in place: the option panel caches the width it
	 * measured against the array it measured, so editing in place would leave that width stale.
	 *
	 * Selection is untouched, and survives an option going away: it is keyed by name, and a player
	 * that is closed and reopened comes back still ticked, which is what ticking it meant. The list
	 * itself is not a setting — only the selection is stored — so this does not dirty the config.
	 */
	/**
	 * Replaces a dropdown's options at runtime, for a list discovered rather than declared.
	 *
	 * The array is replaced rather than edited in place: the option panel caches the width it
	 * measured against the array it measured, so editing in place would leave that width stale.
	 *
	 * The selection follows the option it was on by name where that option survives, because an
	 * index into a list that has just changed points at whatever moved into that slot. A caller
	 * whose list can reorder between runs should still keep its own record of the choice: what a
	 * config stores for a dropdown is the index, and an index outlives nothing.
	 */
	function SetDropdownOptions(entry: DropdownEntry, values: string[]): void
	function SetMultiSelectOptions(entry: MultiSelectEntry, values: string[]): void
	function SetMultiSelectValues(entry: MultiSelectEntry, values: string[]): void
	/** Sets the saved hotkeys-panel visibility preference without changing key handling. */
	function SetKeybindHotkeysHidden(entry: KeybindEntry, hidden: boolean): void
	/** Saves whether this bind blocks game input, without changing an ongoing press. */
	function SetKeybindClaimsKey(entry: KeybindEntry, value: boolean): void
	function SetKeybindValue(entry: KeybindEntry, key: number): void
	/**
	 * What a picker is showing right now: the colour it holds, or the live one it
	 * {@link ColorEntry.follows} while nobody has touched it.
	 *
	 * @example
	 * ...SdfRounded(SwatchRadius, cssColor(ColorOf(entry)))
	 */
	function ColorOf(entry: ColorEntry): Color
	/**
	 * Where a rainbow stands in its walk right now, 0 to 1: the share of the hue circle it has
	 * walked from its seed.
	 */
	function ColorPhase(entry: ColorEntry): number
	/**
	 * The colour at one point along a gradient, 0 at its first colour and 1 at its second. A solid
	 * or a rainbow answers with its one colour at every point, so a surface that paints a gradient
	 * can ask this of any picker.
	 *
	 * @example
	 * const left = ColorAt(entry, 0)
	 * const right = ColorAt(entry, 1)
	 */
	function ColorAt(entry: ColorEntry, at: number): Color
	function SetColorValue(entry: ColorEntry, color: Color): void
	/**
	 * Switches how the picker makes its colour. A rainbow needs a hue to walk from, so a grey seed
	 * is given full saturation on the way in; a solid or gradient keeps whatever it held.
	 */
	function SetColorMode(entry: ColorEntry, wanted: ColorMode): void
	function SetColorSecond(entry: ColorEntry, color: Color): void
	function SetColorPeriod(entry: ColorEntry, period: number): void
	/**
	 * The palette a picker holds, as its own copies: what a copy of the row takes with it. A solid
	 * picker still following the theme hands over the colour it is showing rather than the default
	 * it has not been moved off, so the paste lands what was seen; a rainbow hands over its seed,
	 * so the paste walks the same circle rather than freezing one moment of it.
	 *
	 * @example
	 * SetCopiedColor(ColorPaletteOf(entry))
	 */
	function ColorPaletteOf(entry: ColorEntry): ColorPalette
	/**
	 * Whether pasting `palette` onto the picker would change nothing: it already makes its colour
	 * that way, from those colours — as far as its own modes let it, since a picker kept to one
	 * colour takes only the first stop of a gradient.
	 */
	function HoldsColorPalette(entry: ColorEntry, palette: ColorPalette): boolean
	/**
	 * Puts a whole palette onto the picker at once — mode, both colours and the period — so that a
	 * gradient pasted from another row arrives as a gradient, and the listeners hear one change
	 * rather than one per field. A mode the picker does not offer lands as solid, in the first
	 * colour.
	 *
	 * @example
	 * const copied = CopiedColor()
	 * if (copied !== undefined) {
	 * 	SetColorPalette(entry, copied)
	 * }
	 */
	function SetColorPalette(entry: ColorEntry, palette: ColorPalette): void
	/** Puts the picker back to the one colour it was declared with, still and alone. */
	function ResetColorEntry(entry: ColorEntry): void
	/** Whether the picker holds the one colour it was declared with, and nothing animated. */
	function IsColorEntryDefault(entry: ColorEntry): boolean
	function SetTextValue(entry: TextEntry, text: string): void
	/** Replaces the whole list; every value is trimmed, cut to length and deduplicated on the way in. */
	function SetListValues(entry: ListEntry, values: readonly string[]): void
	/** Appends one value; false when it is empty once trimmed, already there, or the list is full. */
	function AddListValue(entry: ListEntry, text: string): boolean
	function RemoveListValue(entry: ListEntry, index: number): void
	function IsListDefault(entry: ListEntry): boolean
	function SetImageEnabled(entry: ImagesEntry, value: string, on: boolean): void
	/**
	 * Moves a tile within the grid. `enabled` doubles as the stored order, so it is
	 * rebuilt alongside `values` rather than left to drift out of sync.
	 */
	function MoveImage(entry: ImagesEntry, from: number, to: number): void
	function TriggerButton(entry: ButtonEntry): void
	interface SearchHit {
		readonly entry: Entry
		readonly segments: readonly string[]
		readonly iconPath: string
	}
	/**
	 * Entries whose name — or a translated alias `localize` returns for it — contains the query,
	 * best match first. The query is also tried as if typed in the other keyboard layout and
	 * transliterated to Latin, so `ghbwtk` finds «Прицел» and `аимбот` finds "Aimbot"; hits as typed
	 * come first, then wrong-layout hits, then transliterated ones. Within a tier exact names beat
	 * prefixes beat substrings, with ties going to the entry sitting higher in the tree and finally
	 * to menu order. Entries flagged `searchHidden` are skipped together with their children.
	 */
	function SearchEntries(query: string, localize?: (name: string) => string[]): SearchHit[]
	/** Puts an entry among the ones a key or the clock reaches; one already there stays where it is. */
	function NoteBindHolder(entry: KeybindEntry | DriverHolder): void
	/**
	 * Walks the entries a key or the clock can reach, in the order they were put on one. What a
	 * keybind row, a hotkey or a logic rule fires from; a listing walks the tree instead, for the
	 * menu's own order.
	 */
	function ForEachBindHolder(callback: (entry: KeybindEntry | DriverHolder) => void): void
	/**
	 * What the capture popup binds into — a keybind row or one toggle hotkey.
	 * `entry` is set for keybind rows so their chips light up while capturing.
	 */
	interface CaptureTarget {
		readonly name: string
		readonly allowLeftMouse: boolean
		readonly allowCombinations: boolean
		readonly current: number
		readonly entry?: KeybindEntry
		readonly commit: (bind: number) => void
	}
	/**
	 * Starts a capture session for the target; the pending bind previews the
	 * current assignment until input or SetPendingBind replaces it.
	 */
	function BeginBindCapture(target: CaptureTarget): void
	/**
	 * The capture target of a keybind entry — what its row and the capture
	 * popup both hand to BeginBindCapture.
	 */
	function KeybindCaptureTarget(entry: KeybindEntry): CaptureTarget
	/**
	 * Ends the capture session discarding the pending bind.
	 */
	function CancelKeyCapture(): void
	/**
	 * Ends the capture session assigning the pending bind to its entry.
	 */
	function CommitKeyCapture(): void
	/**
	 * The keybind entry currently owning the capture session, if any.
	 */
	function CapturingEntry(): Nullable<KeybindEntry>
	/**
	 * The target of the capture session, if one is running.
	 */
	function CapturingTarget(): Nullable<CaptureTarget>
	/**
	 * The bind code pending in the capture session, 0 when none is pending.
	 */
	function PendingBindCode(): number
	/**
	 * Replaces the pending bind of the capture session; the next physical
	 * press starts a fresh gesture.
	 */
	function SetPendingBind(code: number): void
	/**
	 * Drives the entry to the driver's value, remembering what it held so a release puts it back.
	 * Does nothing for a driver already engaged, or one whose value no longer names an option of
	 * its entry.
	 */
	function EngageEntryDriver(entry: DriverHolder, driver: EntryDriver): void
	/**
	 * Puts back what the entry held before the driver engaged. Does nothing for a driver that is
	 * not engaged.
	 */
	function ReleaseEntryDriver(entry: DriverHolder, driver: EntryDriver): void
	function SetFocusedText(entry: Nullable<TextEntry>): void
	function FocusedText(): Nullable<TextEntry>
	/**
	 * A detached text entry that stands for a raw `<input>` owned by no menu row. Hand it to
	 * {@link SetFocusedText} while the input holds focus: the host routes key presses (Enter,
	 * Escape, Backspace, arrows) to the document only while some text field counts as focused.
	 */
	function FocusMarker(): TextEntry
	function SetPanicMode(value: boolean): void
	function IsPanicMode(): boolean
	/**
	 * Marks a drag across a picker's palette as begun or over. A picker set to call on release
	 * hears the colour the drag ends on as it ends, and nothing of the colours it passed through.
	 */
	function SetColorDragging(entry: ColorEntry, dragging: boolean): void
	function SetSliderDragging(value: boolean): void
	function PressKey(code: number, menuOpen?: boolean): boolean
	function ReleaseKey(code: number, menuOpen?: boolean): boolean
}
