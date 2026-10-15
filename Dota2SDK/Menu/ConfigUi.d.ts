// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	const CardRadius = 12
	const ControlRadius = 6
	const GridGap = 12
	function t(name: string): string
	/** Free-standing text entry for page-local fields that never touch the config. */
	function MakeField(placeholder: string): TextEntry
	/** Width of the page body inside the content scroll, in dp. */
	function PageContentWidth(): number
	/** Cell count and cell width for an auto-fill grid of `minW`-wide cards. */
	function GridColumns(contentW: number, minW: number): {
		cols: number
		cellW: number
	}
	/** «2 h ago» from a unix-milliseconds stamp — the largest unit that is not zero. */
	function FormatAgo(unixMs: number): string
	/** 1840 → «1.8k»: the order of magnitude decides, the exact count does not. */
	function FormatCompact(value: number): string
	type TagTone = "neutral" | "accent" | "success" | "warn" | "danger"
	/** The same, for a control the cursor rests on. */
	const HoverFillAlpha = 0.06
	/** The same, for a row of a list, which wears the wash over a busier surface. */
	const RowFillAlpha = 0.04
	function CfgTag(props: {
		text: string
		tone?: TagTone
		tooltip?: string
		style?: RmlStyle
		onClick?: () => void
	}): React.ReactElement
	/** Play-style label of a config: Legit / Semi-rage / Rage, toned like the reference. */
	function BadgeTag(props: {
		badge?: number
		style?: RmlStyle
	}): React.ReactElement | null
	type MetaItem = Nullable<string | false | {
		text: string
		color: string
	}>
	/**
	 * «a · b · c» fact line: dim, one row, separators drawn between non-empty parts.
	 * A part that does not fit fades out instead of cutting off.
	 */
	function Meta(props: {
		items: MetaItem[]
		style?: RmlStyle
	}): React.ReactElement | null
	/** Section header above a list or panel: quiet title, count, right-side controls. */
	function SectionTitle(props: {
		title: string
		count?: number
		right?: React.ReactNode
		style?: RmlStyle
	}): React.ReactElement
	/** Card surface without a header — the panel every configs list sits on. */
	function CfgPanel(props: {
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	function PanelDivider(): React.ReactElement
	/** Quiet explanatory line — the text-only hint under rows and pages. */
	function HintLine(props: {
		style?: RmlStyle
		children?: React.ReactNode
	}): React.ReactElement
	type CfgButtonKind = "primary" | "secondary" | "ghost" | "danger"
	type CfgButtonSize = "sm" | "md"
	/**
	 * A button of the config surface. Its action runs after the frame rather than inside the click:
	 * pressing Cancel or Delete takes the tile the button sits in off the screen, and destroying an
	 * element while the engine is still walking the event through it hangs the game.
	 */
	function CfgButton(props: {
		text?: string
		icon?: string
		kind?: CfgButtonKind
		size?: CfgButtonSize
		enabled?: boolean
		tooltip?: string
		style?: RmlStyle
		onClick: () => void
	}): React.ReactElement
	/** Laid-out side of a `CfgIconButton` in dp, for hosts that budget a toolbar row. */
	function CfgIconButtonSide(size?: CfgButtonSize): number
	/** Square glyph button for toolbar actions that a label would only make heavier. */
	function CfgIconButton(props: {
		icon: string
		tooltip: string
		size?: CfgButtonSize
		active?: boolean
		enabled?: boolean
		style?: RmlStyle
		onClick: (event: Event) => void
	}): React.ReactElement
	/** 2–4 mutually exclusive options, all visible — a sort order, a filter. */
	/**
	 * Laid-out width of a `CfgSegmented` with these `names` in dp, in the current language.
	 * Lets a toolbar row hand the remaining room to a sibling — a search field budgeting
	 * its placeholder — instead of guessing.
	 */
	function CfgSegmentedWidth(names: string[]): number
	function CfgSegmented(props: {
		names: string[]
		value: number
		tooltips?: string[]
		style?: RmlStyle
		onChange: (index: number) => void
	}): React.ReactElement
	/** Thin quota bar — amber near the ceiling, red at it. */
	function CfgMeter(props: {
		value: number
		max: number
		width: number
		style?: RmlStyle
	}): React.ReactElement
	/** What a list says when it has nothing to show; `action` is the way out. */
	function EmptyState(props: {
		icon?: string
		title: string
		text?: string
		action?: React.ReactNode
	}): React.ReactElement
	/**
	 * Short caption shown in place of a row's meta after an action with no visible
	 * result («Code copied»). Lives a couple of seconds and disappears.
	 */
	function useFlash(ms?: number): {
		flash: (id: string, text: string) => void
		flashOf: (id: string) => Nullable<string>
	}
	interface CfgAction {
		icon: string
		label: string
		disabled?: boolean
		color?: string
		danger?: boolean
		run: () => void
	}
	/** Opens the shared context menu under an anchor, right edges aligned. */
	function OpenActionsUnder(anchor: Nullable<HTMLElement>, actions: CfgAction[]): void
	/** Opens the shared context menu at the event's cursor position. */
	function OpenActionsAtCursor(event: Event, actions: CfgAction[]): void
	/**
	 * Grows or folds its children when `show` flips, on the shared collapse motion
	 * the settings cards and rows use. Children stay mounted in both states.
	 */
	function RevealBox(props: {
		show: boolean
		children?: React.ReactNode
	}): React.ReactElement
	/** Card surface that answers hover with the reference's border lift. */
	function CardFill(mix: number): RmlStyle
	/** Resting fill hex of the accent-tinted card, for overlays that must match it. */
	function AccentCardHex(): string
	/** Accent-tinted card surface of the applied config and recommended preset. */
	function AccentCardFill(): RmlStyle
}
