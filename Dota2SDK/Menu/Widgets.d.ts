// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	const PanelPad = 10
	function PanelHeader(props: {
		title: string
		marker?: boolean
		underline?: boolean
		right?: string
		rightTint?: StyleColor
		badge?: boolean
	}): React.ReactElement
	/**
	 * The width, in dp, a {@link PanelHeader} with this title, its accent marker and no badge needs
	 * in the current theme's type - so a panel sized by its rows never cuts its own header short.
	 *
	 * @example
	 * const width = Math.max(rowsWidth, PanelHeaderWidth(Localization.Localize("Hotkeys")))
	 */
	function PanelHeaderWidth(title: string): number
	function Card(props: {
		title?: string
		children?: React.ReactNode
	}): React.ReactElement
}
