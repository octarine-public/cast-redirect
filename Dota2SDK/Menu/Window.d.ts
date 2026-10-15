// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The gate in front of the window body. A closed menu still takes store invalidations — every
	 * bound hotkey press is one — and the body's page computation is not free; deciding on the
	 * window state alone keeps a closed menu's render at a subscription and one visibility check.
	 */
	function MenuWindow(): React.ReactElement | null
}
