// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the picker's browse modal: everything its catalogue carries, laid out section by section,
	 * with a search over the labels and the words a section wrote beside them, and a tile that takes a
	 * value in or out of the picker on a click.
	 */
	function OpenCatalogue(entry: ImagesEntry): void
	/** Closes the browse modal, keeping whatever it left ticked. */
	function CloseCatalogue(): void
	/** Whether the browse modal is up. */
	function IsCatalogueOpen(): boolean
}
