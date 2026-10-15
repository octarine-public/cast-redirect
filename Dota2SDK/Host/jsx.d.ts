// AUTO-GENERATED - do not edit.
interface RmlBaseProps {
	key?: React.Key
	id?: string
	className?: string
	style?: RmlStyle
	children?: React.ReactNode
	onClick?: (event: Event) => void
	onMouseOver?: (event: Event) => void
	onMouseOut?: (event: Event) => void
	onMouseDown?: (event: Event) => void
	onMouseUp?: (event: Event) => void
	onMouseMove?: (event: Event) => void
	onMouseScroll?: (event: Event) => void
	onKeyDown?: (event: Event) => void
	onKeyUp?: (event: Event) => void
	onChange?: (event: Event) => void
	onFocus?: (event: Event) => void
	onBlur?: (event: Event) => void
}

interface RmlDivProps extends RmlBaseProps {
	ref?: React.RefCallback<HTMLElement>
}

interface RmlImageProps extends RmlBaseProps {
	src?: string
	ref?: React.RefCallback<HTMLElementImage>
}

interface RmlInputProps extends RmlBaseProps {
	value?: string
	drag?: string
	ref?: React.RefCallback<HTMLElementFormControlInput>
}

declare namespace JSX {
	interface IntrinsicElements {
		div: RmlDivProps
		img: RmlImageProps
		input: RmlInputProps
		/**
		 * RmlUi SVG plugin: rasterizes the source at the exact display size, so
		 * vector icons stay sharp at any scale (image-color tint applies as usual).
		 */
		svg: RmlImageProps
	}
}
