// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The ground a run of rows stands on, as the colour a label too long for its row fades out into.
	 * Rows rest on a card unless the host says otherwise: one drawing them on a popover or on the
	 * window itself wraps them in the provider, or the fade shows as a block of the wrong colour.
	 *
	 * @example
	 * <RowSurface.Provider value={Tokens.PopoverBg}>
	 * 	{rows.map((entry, index) => RenderControl(entry, index > 0))}
	 * </RowSurface.Provider>
	 */
	const RowSurface: React.Context<StyleColor>
	function MarkColorOf(entry: Entry): string
	/**
	 * Answers a click on a locked control: a Safe mode lock offers to release it, any other lock
	 * takes the click.
	 */
	function OfferLockRelease(entry: Entry): void
	/**
	 * Folds its content in when the entry turns visible and out when it hides, keeping a hidden
	 * entry mounted until the fold has run; `VisibleRows` is what lists such an entry meanwhile.
	 */
	function Reveal(props: {
		entry: Entry
		children?: React.ReactNode
	}): React.ReactElement | null
	function VisibleRows(children: Entry[], skip?: Entry): Entry[]
	function CloseSubSettings(): void
	function DescriptionRow(props: {
		entry: DescriptionEntry
		divider: boolean
	}): React.ReactElement
	/**
	 * The switch itself, detached from any entry: the same track, knob, classes and easing the
	 * menu's toggle rows wear, driven by a plain boolean — for a surface whose state lives
	 * somewhere no entry stands for, a floating window's sidebar being the one so far.
	 */
	function SwitchFace(props: {
		on: boolean
		inert?: boolean
		scope?: EThemeScope
		style?: RmlStyle
	}): React.ReactElement
	function ToggleTrack(props: {
		entry: ToggleEntry
		style?: RmlStyle
	}): React.ReactElement
	function ToggleRow(props: {
		entry: ToggleEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function SliderRow(props: {
		entry: SliderEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function SliderTrack(props: {
		entry: SliderEntry
	}): React.ReactElement
	function DropdownRow(props: {
		entry: DropdownEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The preset selector's bare dropdown chip, for the window's top bar: no row and no label,
	 * just the selected preset opening the panel — and beside it, where the selector carries
	 * settings of its own, the button that opens them.
	 */
	function PresetsHeader(props: {
		entry: PresetsEntry
	}): React.ReactElement
	function PresetsRow(props: {
		entry: PresetsEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function MultiSelectRow(props: {
		entry: MultiSelectEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function KeybindRow(props: {
		entry: KeybindEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function ButtonRow(props: {
		entry: ButtonEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function ColorSwatch(props: {
		entry: ColorEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function TextInputRow(props: {
		entry: TextEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	/**
	 * The list editor: the label with a count on the right, and under it a field with an Add
	 * button and the rows themselves, which scroll once there are more than a handful. Enter in
	 * the field adds and keeps the focus, so several strings go in one after another.
	 */
	function TextListRow(props: {
		entry: ListEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement
	function ImageSelectorRow(props: {
		entry: ImagesEntry
		divider: boolean
		nested?: boolean
	}): React.ReactElement | null
	function RenderControl(entry: Entry, divider?: boolean, nested?: boolean): React.ReactNode
}

declare namespace MenuSDK {
	/** The corner every plain surface is carved with, and the one its glow follows. */
	const SurfaceRadius = 8
	const surfaceStyle: StyledFactory<{
		elevation: {
			flat: {}
			raised: {
				boxShadow: string
			}
		}
	}>
	const rowStyle: StyledFactory<{
		state: {
			normal: {}
			hovered: {
				backgroundColor: ThemeTokenRef
			}
			disabled: {
				opacity: number
				pointerEvents: "none"
			}
		}
	}>
	const textStyle: StyledFactory<{
		tone: {
			normal: {}
			muted: {
				color: ThemeTokenRef
			}
			accent: {
				color: ThemeTokenRef
			}
		}
	}>
	/**
	 * The theme's glow as the element it is drawn through, for a surface that hosts one: nothing at
	 * all while the theme asks for no glow. It goes first among the surface's children, and the
	 * surface carries {@link SdfGlowHost}. `fill` is what the surface under the halo is painted, so
	 * an adaptive theme lights it in its own color; without it the halo keeps the theme's one color.
	 * It follows the glow on its own - a walking color moves it several times a second - so the
	 * surface hosting it is never rendered for that.
	 *
	 * @example
	 * <div style={{ ...SdfGlowHost, ...card }}>
	 * 	<GlowLayer radius={12} fill={Theme.ValueOf("CardBg")} />
	 * 	{children}
	 * </div>
	 */
	function GlowLayer(props: {
		radius: number
		fill?: string
	}): React.ReactElement | null
	/**
	 * A card of the theme's own material. `glow` lights it with the theme's glow, which a surface
	 * standing on its own wants and one in a list of them does not - the glow says "this is a thing
	 * of its own", and a column of glowing cards says nothing at all.
	 *
	 * A lit card lays out as a block with its rows in a column of their own: the glow layer is an
	 * absolutely placed quad, and a flex parent would seat it as a zero-height first row — the halo
	 * then radiates from a line at the top instead of hugging the card.
	 */
	function Surface(props: {
		elevation?: "flat" | "raised"
		glow?: boolean
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	function Row(props: {
		state?: "normal" | "hovered" | "disabled"
		style?: RmlStyle
		onClick?: (event: Event) => void
		onMouseOver?: (event: Event) => void
		onMouseOut?: (event: Event) => void
		children?: React.ReactNode
	}): React.ReactElement
	function Text(props: {
		tone?: "normal" | "muted" | "accent"
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * Single-line label whose overflow fades out through the text itself instead of ending at a
	 * hard cut: the renderer dissolves the glyphs into the clipped edge over a stretch that grows
	 * with how far the text runs past it, so a letter cut by a pixel loses only its last pixels
	 * softly and one cut in half melts away. Nothing is painted over the text and no layer is
	 * composited; text that fits keeps a clean edge.
	 */
	function FadeLabel(props: {
		/** Ref to the clipping element, for callers that also measure or hint from it. */
		labelRef?: React.RefObject<HTMLElement>
		className?: string
		style?: RmlStyle
		onClick?: (event: Event) => void
		onMouseDown?: (event: Event) => void
		children?: React.ReactNode
	}): React.ReactElement
	/**
	 * Single-line label whose overflow fades out through the text and, while `active`, scrolls the line
	 * so the whole of it can be read where it stands: it waits at its head, travels far enough to bring
	 * the tail in, waits there and comes back, for as long as the row asks. A line that fits is left
	 * alone and costs nothing — the row it sits in is what says when to read, so a preset row scrolls
	 * its own name under the cursor instead of standing a panel over it.
	 *
	 * The travel is one transform written by a tween, so nothing around the label lays out again while
	 * it reads, and it is snapped to whole screen pixels — a line resting between two of them is what
	 * makes glyphs shimmer as they move. The renderer dissolves the glyphs themselves into both edges,
	 * over a stretch that grows with how far the line runs past each one, so the surface behind the
	 * label shows through whatever it is painted at the moment, and the fades follow the travel: the
	 * head's comes up as the line leaves, the tail's goes out as it arrives.
	 *
	 * @example
	 * <ScrollLabel active={hovered} style={{ flex: "0 1 auto" }}>
	 *     {name}
	 * </ScrollLabel>
	 */
	function ScrollLabel(props: {
		/** Scrolls a line that does not fit while true, and sends it home when it goes false. */
		active: boolean
		className?: string
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	function Icon(props: {
		path: string
		size?: number
		width?: number
		height?: number
		tint?: StyleColor
		round?: number
		className?: string
		style?: RmlStyle
	}): React.ReactElement | null
}

declare namespace MenuSDK {
	/**
	 * The world drawing surface for one script, created on first use and kept for the session.
	 * Draw from a `Draw` listener with the immediate calls, or set up retained nodes once and
	 * let them follow their anchors. On a host without an engine — the standalone menu — every
	 * call is a quiet no-op.
	 */
	function CreateWorldLayer(key: string): IWorldLayer
	/**
	 * Opens the shader slot pool for the frame ahead. The menu ticks after the game has drawn, so
	 * this is the end of its tick: a card pinned to the screen claims its slots from a `Draw` of the
	 * game's, a world overlay claims from the tick that follows, and both belong to the same frame -
	 * resetting between them handed one slot to two writers and the second one's geometry won.
	 */
	function EndWorldFrame(): void
	/** Ticks every unit overlay, then flushes every world layer; the menu tick drives this. */
	function TickWorldLayers(): void
}
