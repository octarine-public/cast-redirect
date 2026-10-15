// AUTO-GENERATED - do not edit.
/** Euler orientation angles (pitch, yaw, roll) as a `Vector3`; adds `CMsgQAngle` protobuf parsing. */
declare class QAngle extends Vector3 {
	/**
	 * Builds a QAngle from a protobuf `CMsgQAngle`-shaped map (fields `x`, `y`, `z`). Missing fields
	 * default to `0`; an `undefined` message yields a zero angle.
	 * @example
	 * const ang = QAngle.FromProtobuf(msg.get("angles") as RecursiveProtobuf)
	 */
	public static FromProtobuf(vec: Nullable<ReadonlyMap<string, unknown>>): QAngle
}
