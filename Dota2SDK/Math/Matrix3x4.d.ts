// AUTO-GENERATED - do not edit.
/** Row-major 3x4 transform matrix (3x3 rotation/scale plus a translation column). */
declare class Matrix3x4 {
	/**
	 * Builds a transform from Euler angles (degrees), a translation and a uniform scale.
	 * @example
	 * Matrix3x4.AngleMatrix(new QAngle(0, 90, 0), new Vector3(1, 2, 3), 1)
	 */
	public static AngleMatrix(ang: QAngle, pos: Vector3, scale: number): Matrix3x4
	/**
	 * Returns a NEW matrix equal to the product in1 * in2, composing the two transforms.
	 * @example
	 * const world = Matrix3x4.ConcatTransforms(parent, local) // local applied then parent
	 */
	public static ConcatTransforms(in1: Matrix3x4, in2: Matrix3x4): Matrix3x4
	/**
	 * Backing storage of the 12 elements in row-major order (row * 4 + col).
	 * @example
	 * matrix.values[0 * 4 + 3] // element at row 0, column 3 (translation x)
	 */
	public readonly values: Float32Array
	/**
	 * Extracts the Euler angles (radians) from the rotation part as a Vector3 (x=pitch, y=yaw, z=roll).
	 * @example
	 * matrix.Angles // e.g. Vector3(0, Math.PI / 2, 0)
	 */
	public get Angles(): Vector3
	/**
	 * Returns the translation column (elements at column 3) as a NEW Vector3.
	 * @example
	 * matrix.Translation // Vector3 of the position component
	 */
	public get Translation(): Vector3
	/**
	 * Reads the element at the given row and column (both 0-based; row 0-2, col 0-3).
	 * @example
	 * matrix.GetRowValue(2, 3) // translation z
	 */
	public GetRowValue(row: number, col: number): number
	/**
	 * Writes val at the given row and column in place; MUTATES this matrix.
	 * @example
	 * matrix.SetRowValue(0, 3, 100) // set translation x to 100
	 */
	public SetRowValue(row: number, col: number, val: number): void
}
