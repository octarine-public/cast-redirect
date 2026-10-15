// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** What one roll of the shuffler is allowed to change. */
	const enum EShuffleMode {
		/** Surfaces and accent together, around one hue drawn at random. */
		Whole = 0,
		/** The accent alone; the surfaces keep every color they were given. */
		Accent = 1,
		/** The surfaces alone; the accent keeps its hue and is only relit to stay readable. */
		Surfaces = 2,
		/** Surfaces and accent as {@link Whole}, rolled light instead of dark. */
		Light = 3
	}
}
