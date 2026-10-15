// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface IThemePalette {
		WindowBg: string
		/** Opaque window background for floating surfaces; derived, not editable. */
		PopoverBg: string
		PanelBorder: string
		CardBg: string
		CardBorder: string
		PillBg: string
		PillBorder: string
		SurfaceBg: string
		SurfaceBorder: string
		InputBg: string
		InputBorder: string
		InputBorderHover: string
		ButtonBorder: string
		TextPrimary: string
		TextBody: string
		TextBright: string
		TextDim: string
		TextSection: string
		TextCardTitle: string
		TextNavIdle: string
		TextNavHover: string
		TextMuted: string
		TextControl: string
		TextDisabled: string
		TextTooltip: string
		/** Title over a card of settings on a page. */
		TextHeading: string
		/** The value a settings row shows beside its label: a slider's number, a key bind. */
		TextValue: string
		SwitchOff: string
		/**
		 * Fill of the circle riding a switch track or a slider rail. A light theme keeps it
		 * near-white, tinted off the border just enough not to melt into the card, rather than
		 * letting it follow the dark text.
		 */
		Knob: string
		SliderTrack: string
		FilterDivider: string
		ScrollThumb: string
		ScrollThumbHover: string
		RowHover: string
		NavRowHover: string
		MenuItemBg: string
		MenuItemText: string
		GlassBg: string
		GlassBgMenu: string
		GlassBgPanel: string
		TriggerHover: string
		GlassBorder: string
		GlassHighlight: string
		PillInset: string
		GlassBlur: string
		BackdropDim: string
		BackdropDimSoft: string
		LockedZone: string
		LockedMark: string
		MarkNew: string
		MarkChanged: string
		Danger: string
		DangerSoft: string
		DangerBg: string
		DangerBorder: string
		StatusGood: string
		StatusWarn: string
		StatusBad: string
	}
	type PaletteColorToken = Exclude<keyof IThemePalette, "GlassBlur" | "PillInset" | "PopoverBg">
	interface IPaletteGroup {
		Name: string
		Icon: string
		Tokens: PaletteColorToken[]
	}
	const DefaultPalette: IThemePalette
	const PaletteTokenNames: Record<PaletteColorToken, string>
	/**
	 * The glyph each color row on the Colors page carries. A token is drawn as the surface, text or
	 * control it paints — `CardBg` is a card, `SliderTrack` is a slider — so a row is recognisable
	 * before its name is read, and a fill and its border share a silhouette.
	 *
	 * @example
	 * const picker = node.AddColorPicker(PaletteTokenNames[token], color)
	 * picker.IconPath = PaletteTokenIcons[token]
	 */
	const PaletteTokenIcons: Record<PaletteColorToken, MenuIconPath>
	const PaletteGroups: IPaletteGroup[]
}
