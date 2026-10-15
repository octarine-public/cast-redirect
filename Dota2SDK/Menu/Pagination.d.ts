// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function PageCount(total: number, pageSize: number): number
	function Pagination(props: {
		page: number
		total: number
		pageSize: number
		style?: RmlStyle
		onMove: (delta: number) => void
	}): React.ReactElement | null
}
