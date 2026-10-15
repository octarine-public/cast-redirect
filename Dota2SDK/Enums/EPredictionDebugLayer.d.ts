// AUTO-GENERATED - do not edit.
declare enum EPredictionDebugLayer {
	Movement = 0,
	Path = 1,
	/** The shape, cast point and probability of the last prediction made through `PredictionSDK.Debug.Predict`. */
	Cast = 2,
	/** Health of the enemies around your hero at the landing of its next attack, and whether that attack kills. */
	Health = 3,
	/** Every threat on its way, when it reaches your hero and where it would walk to escape. */
	Threats = 4
}
