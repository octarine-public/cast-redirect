// AUTO-GENERATED - do not edit.
type StyleLength = number | string
type StyleColor = string | ThemeTokenRef

interface ThemeTokenRef {
	readonly token: string
}

interface RmlStyle {
	display?: "flex" | "block" | "inline" | "inline-block" | "none"
	visibility?: "visible" | "hidden"
	position?: "absolute" | "relative" | "fixed"
	overflow?: "visible" | "hidden" | "auto" | "scroll"
	pointerEvents?: "auto" | "none"
	boxSizing?: "border-box" | "content-box"
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
	flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
	alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
	textAlign?: "left" | "center" | "right" | "justify"

	flex?: StyleLength
	zIndex?: number
	opacity?: number
	clip?: "auto" | "none" | "always" | number

	width?: StyleLength
	height?: StyleLength
	minWidth?: StyleLength
	maxWidth?: StyleLength
	minHeight?: StyleLength
	top?: StyleLength
	right?: StyleLength
	bottom?: StyleLength
	left?: StyleLength

	padding?: StyleLength
	paddingTop?: StyleLength
	paddingRight?: StyleLength
	paddingBottom?: StyleLength
	paddingLeft?: StyleLength
	marginTop?: StyleLength
	marginRight?: StyleLength
	marginBottom?: StyleLength
	marginLeft?: StyleLength

	borderWidth?: StyleLength
	borderTopWidth?: StyleLength
	borderRightWidth?: StyleLength
	borderBottomWidth?: StyleLength
	borderLeftWidth?: StyleLength
	borderRadius?: StyleLength
	borderTopLeftRadius?: StyleLength
	borderTopRightRadius?: StyleLength
	borderBottomRightRadius?: StyleLength
	borderBottomLeftRadius?: StyleLength

	color?: StyleColor
	backgroundColor?: StyleColor
	borderColor?: StyleColor
	borderTopColor?: StyleColor
	borderRightColor?: StyleColor
	borderBottomColor?: StyleColor
	borderLeftColor?: StyleColor
	imageColor?: StyleColor

	fontFamily?: string
	letterSpacing?: string | number
	whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line"
	fontSize?: StyleLength
	fontWeight?: number | string
	fontStyle?: "normal" | "italic"
	lineHeight?: StyleLength
	/** Glyph effects, e.g. `outline(1px #000000)` or `shadow(2px 2px #000000)`. Inherited. */
	fontEffect?: string

	transform?: string
	transformOrigin?: string
	transition?: string
	boxShadow?: string | ThemeTokenRef
	backdropFilter?: string | ThemeTokenRef
	filter?: string
	decorator?: string
	/** Alpha mask over the element and everything in it, e.g. a `linear-gradient(...)`; `none` lifts it. */
	maskImage?: string
	drag?: "none" | "drag" | "drag-drop" | "block" | "clone"
}

type StyleProperty = keyof RmlStyle
