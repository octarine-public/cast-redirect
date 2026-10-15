// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface FontVariant {
		readonly family: string
		readonly file: string
		readonly weight: number
		readonly italic: boolean
		readonly fallback: boolean
		readonly language?: string
	}
	const FontsBase = "fonts/"
	const DefaultFamily = "Roboto"
	const FontRegistry: FontVariant[]
	/**
	 * How large `family` is drawn against the size a style asks for, so every face takes about the
	 * room the menu was laid out for in Roboto. It is measured from the lowercase width and the
	 * x-height: a family that sets larger is drawn smaller, a narrow one larger - never wider than
	 * Roboto, or a label that fit would be cut. A family setting within a few percent of Roboto is
	 * drawn at the size asked for: the engine cuts a font size down to a whole pixel, so a small
	 * correction would take a full pixel off. Inter and Montserrat also ship with their letters set
	 * 0.025em apart by `tools/track-font.cjs`, because the engine places every letter on a whole
	 * pixel and drops the fraction of a `letter-spacing`.
	 */
	function FamilySize(family: string): number
	function ActiveFonts(): FontVariant[]
	/**
	 * Families the font picker offers, in registry order: every family with a
	 * regular language-independent face, excluding pure fallbacks.
	 */
	function MenuFontFamilies(): string[]
	/** The weights the font weight picker offers, lightest first; the first is the default. */
	const FontWeightNames: string[]
	/**
	 * The typeface a surface is set in: a family the font picker offers, and a weight by its name
	 * in {@link FontWeightNames}. Part of a theme snapshot, one per surface the menu dresses.
	 */
	interface IThemeFont {
		family: string
		weight: string
		/**
		 * The weight the surface's settings rows are set in, by its name in {@link FontWeightNames}.
		 * Omitted means they follow {@link IThemeFont.weight} like everything else.
		 */
		settingsWeight?: string
	}
	/**
	 * Which weight setting a run of text is drawn under: the one its surface is set in, or the one
	 * the surface's settings rows carry apart from it.
	 */
	const enum EFontRole {
		/** Navigation, tabs, titles, popovers - everything on a surface that is not a settings row. */
		Surface = 0,
		/** A settings row: its label, description and value, and the card or panel title over it. */
		Settings = 1
	}
	/** The typeface a surface is set in until a theme says otherwise: the default family, regular. */
	function DefaultThemeFont(): IThemeFont
	/** Whether two themes are set in the same type. A theme that names none is set in the default one. */
	function fontsEqual(a: Nullable<IThemeFont>, b: Nullable<IThemeFont>): boolean
	/**
	 * Bumped whenever any surface's typeface moves. A writer that pins the face onto an element and
	 * rewrites it only when its own input moved - the HUD pools, whose commands say nothing about
	 * the face they are set in - watches this to know it owes the elements one more write.
	 */
	function FontEpoch(): number
	/** The family `scope` renders with, before language overrides; the active scope's by default. */
	function SelectedFontFamily(scope?: EThemeScope): string
	/**
	 * Selects the family `scope` renders with; names outside MenuFontFamilies fall back to the
	 * default. Returns whether the selection moved; the caller re-applies the root font and
	 * invalidates when it did.
	 */
	function SetMenuFontFamily(family: string, scope?: EThemeScope): boolean
	/** The name from {@link FontWeightNames} `scope` renders with; the active scope's by default. */
	function SelectedFontWeight(scope?: EThemeScope): string
	/**
	 * Selects the weight `scope` renders with by its name in {@link FontWeightNames}; names outside
	 * it fall back to regular. Returns whether the selection moved — a weight is baked into every
	 * written style, so the caller rebuilds the trees when it did.
	 */
	function SetMenuFontWeight(name: string, scope?: EThemeScope): boolean
	/**
	 * Selects the weight the settings rows of `scope` are set in by its name in
	 * {@link FontWeightNames}; undefined, or a name outside it, lets them follow the surface's weight.
	 * Returns whether the selection moved — the caller rebuilds the trees when it did, as it does for
	 * {@link SetMenuFontWeight}.
	 */
	function SetSettingsFontWeight(name: Nullable<string>, scope?: EThemeScope): boolean
	/**
	 * The weight text in `role` asking for `weight` is drawn at under the settings of `scope` - the
	 * active one by default: raised to the floor of the weight its role is set in, never lowered, so
	 * heavier runs keep their emphasis. Settings rows are set in their own weight while one is chosen
	 * and in the surface's otherwise.
	 */
	function RoleFontWeight(weight: number, role: EFontRole, scope?: EThemeScope): number
	/**
	 * The weight text asking for `weight` is drawn at under the font weight setting of `scope` -
	 * the active one by default: raised to the setting's floor, never lowered, so heavier runs keep
	 * their emphasis. The style writers and the text measurers apply it themselves — callers keep
	 * passing design weights.
	 */
	function MenuFontWeight(weight: number, scope?: EThemeScope): number
	/**
	 * The `font-weight` style value of settings-row text asking for `weight`. A number in a style is
	 * a design weight the writer lays the surface's setting over; this is the weight already resolved
	 * under the settings rows' own, so it is handed over as the written value instead.
	 *
	 * @example
	 * <Text style={{ fontSize: 13, fontWeight: SettingsFontWeight(500) }}>{label}</Text>
	 */
	function SettingsFontWeight(weight: number): string
	/**
	 * The `font-style` text asking for `style` is set in under `scope` - the active one by default.
	 * The engine draws nothing at all for italic text in a family that ships no italic face, so in
	 * such a family - the one the scope sets its language in - italic stands upright instead. It is
	 * resolved at render rather than at write: a language or typeface that moves re-renders the
	 * tree, and the style follows it.
	 *
	 * @example
	 * <Text style={{ fontStyle: MenuFontStyle("italic") }}>{hint}</Text>
	 */
	function MenuFontStyle(style: "normal" | "italic", scope?: EThemeScope): "normal" | "italic"
	/**
	 * The family `scope` draws `language` in: the language's own face where one is shipped, the
	 * family selected for the scope otherwise.
	 */
	function FamilyForLanguage(language: string, scope?: EThemeScope): string
}
