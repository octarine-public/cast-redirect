// AUTO-GENERATED - do not edit.
/** Quaternion (x, y, z, w) for representing and composing 3D rotations. */
declare class Quaternion {
	public x: number
	public y: number
	public z: number
	public w: number
	/**
	 * Builds a pure quaternion from a Vector3, setting w to 0.
	 * @example
	 * Quaternion.FromQuaternion(new Vector3(1, 2, 3)) // (1, 2, 3, 0)
	 */
	public static FromQuaternion(vec: Vector3): Quaternion
	/**
	 * Builds a quaternion from a Vector3 (x, y, z) and an explicit w scalar.
	 * @example
	 * Quaternion.FromQuaternionScalar(new Vector3(1, 2, 3), 4) // (1, 2, 3, 4)
	 */
	public static FromQuaternionScalar(vec: Vector3, scalar: number): Quaternion
	/**
	 * Builds a rotation quaternion from a (normalized) axis and an angle in radians.
	 * @example
	 * Quaternion.FromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2) // 90deg about Z
	 */
	public static FromAxisAngle(axis: Vector3, angle: number): Quaternion
	/**
	 * Builds a quaternion from yaw (Y), pitch (X) and roll (Z) angles, all in radians.
	 * @example
	 * Quaternion.FromYawPitchRoll(Math.PI, 0, 0) // 180deg yaw about Y
	 */
	public static FromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion
	/**
	 * Creates a quaternion from components. Defaults to identity (0, 0, 0, 1).
	 * @example
	 * new Quaternion() // identity (0, 0, 0, 1)
	 */
	constructor(x?: number, y?: number, z?: number, w?: number)
	/**
	 * Squared magnitude (x^2 + y^2 + z^2 + w^2). Cheaper than Length.
	 * @example
	 * new Quaternion(0, 0, 0, 1).LengthSqr // 1
	 */
	public get LengthSqr(): number
	/**
	 * Magnitude of the quaternion (sqrt of LengthSqr).
	 * @example
	 * new Quaternion(0, 0, 0, 2).Length // 2
	 */
	public get Length(): number
	/**
	 * Returns a NEW conjugate (negated x, y, z; same w) without mutating this.
	 * @example
	 * new Quaternion(1, 2, 3, 4).Conjugate() // (-1, -2, -3, 4)
	 */
	public Conjugate(): Quaternion
	/**
	 * Returns a NEW inverse (conjugate divided by LengthSqr); this is left unchanged.
	 * @example
	 * const inv = q.Invert() // q.Multiply(inv) approximates identity
	 */
	public Invert(): Quaternion
	/**
	 * Conjugates in place by negating x, y, z; MUTATES and returns this.
	 * @example
	 * new Quaternion(1, 2, 3, 4).ConjugateForThis() // this becomes (-1, -2, -3, 4)
	 */
	public ConjugateForThis(): Quaternion
	/**
	 * Scales in place to unit length, MUTATING this; divides each component by
	 * (Length * scalar), so scalar > 1 shrinks the result. No-op if length is 0.
	 * @example
	 * new Quaternion(0, 0, 0, 5).Normalize() // this becomes (0, 0, 0, 1)
	 */
	public Normalize(scalar?: number): Quaternion
	/**
	 * True if all four components are strictly equal (===) to the other's.
	 * @example
	 * new Quaternion().Equals(new Quaternion()) // true
	 */
	public Equals(quat: Quaternion): boolean
	/**
	 * Returns a NEW quaternion combining this rotation with quat via the Hamilton product `this * quat`
	 * (equivalent to Multiply); this is unchanged.
	 * @example
	 * const ab = a.Concatenate(b) // same as a.Multiply(b)
	 */
	public Concatenate(quat: Quaternion): Quaternion
	/**
	 * Component-wise dot product (x*x + y*y + z*z + w*w) with another quaternion.
	 * @example
	 * new Quaternion(0, 0, 0, 1).Dot(new Quaternion(0, 0, 0, 1)) // 1
	 */
	public Dot(quat: Quaternion): number
	/**
	 * Returns a NEW component-wise sum; this is unchanged. See AddForThis to mutate.
	 * @example
	 * new Quaternion(1, 1, 1, 1).Add(new Quaternion(1, 2, 3, 4)) // (2, 3, 4, 5)
	 */
	public Add(quat: Quaternion): Quaternion
	/**
	 * Component-wise adds quat in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(1, 1, 1, 1).AddForThis(new Quaternion(1, 2, 3, 4)) // this is (2, 3, 4, 5)
	 */
	public AddForThis(quat: Quaternion): Quaternion
	/**
	 * Returns a NEW quaternion with scalar added to every component; this is unchanged.
	 * @example
	 * new Quaternion(1, 2, 3, 4).AddScalar(1) // (2, 3, 4, 5)
	 */
	public AddScalar(scalar: number): Quaternion
	/**
	 * Adds scalar to every component in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(1, 2, 3, 4).AddScalarForThis(1) // this is (2, 3, 4, 5)
	 */
	public AddScalarForThis(scalar: number): Quaternion
	/**
	 * Returns a NEW component-wise difference (this - quat); this is unchanged.
	 * @example
	 * new Quaternion(2, 3, 4, 5).Substract(new Quaternion(1, 1, 1, 1)) // (1, 2, 3, 4)
	 */
	public Substract(quat: Quaternion): Quaternion
	/**
	 * Returns a NEW quaternion with scalar subtracted from every component; this is unchanged.
	 * @example
	 * new Quaternion(2, 3, 4, 5).SubstractScalar(1) // (1, 2, 3, 4)
	 */
	public SubstractScalar(scalar: number): Quaternion
	/**
	 * Component-wise subtracts quat in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(2, 3, 4, 5).SubstractForThis(new Quaternion(1, 1, 1, 1)) // this is (1, 2, 3, 4)
	 */
	public SubstractForThis(quat: Quaternion): Quaternion
	/**
	 * Subtracts scalar from every component in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(2, 3, 4, 5).SubstractScalarForThis(1) // this is (1, 2, 3, 4)
	 */
	public SubstractScalarForThis(scalar: number): Quaternion
	/**
	 * Returns a NEW Hamilton product (this * quat), composing rotations; this is unchanged.
	 * @example
	 * const ab = a.Multiply(b) // apply rotation b then a
	 */
	public Multiply(quat: Quaternion): Quaternion
	/**
	 * Returns a NEW quaternion with every component multiplied by scalar; this is unchanged.
	 * @example
	 * new Quaternion(1, 2, 3, 4).MultiplyScalar(2) // (2, 4, 6, 8)
	 */
	public MultiplyScalar(scalar: number): Quaternion
	/**
	 * Multiplies every component by scalar in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(1, 2, 3, 4).MultiplyScalarForThis(2) // this is (2, 4, 6, 8)
	 */
	public MultiplyScalarForThis(scalar: number): Quaternion
	/**
	 * Returns a NEW quaternion holding the vector cross product of the (x, y, z) parts,
	 * with w set to 0; this is unchanged.
	 * @example
	 * new Quaternion(1, 0, 0, 0).Cross(new Quaternion(0, 1, 0, 0)) // (0, 0, 1, 0)
	 */
	public Cross(quat: Quaternion): Quaternion
	/**
	 * In-place Hamilton product (this * quat); MUTATES and returns this.
	 * @example
	 * a.MultiplyForThis(b) // a becomes a * b
	 */
	public MultiplyForThis(quat: Quaternion): Quaternion
	/**
	 * Returns a NEW quaternion equal to this multiplied by quat's inverse; this is unchanged.
	 * @example
	 * const c = a.Divide(b) // c.Multiply(b) approximates a
	 */
	public Divide(quat: Quaternion): Quaternion
	/**
	 * Returns a NEW quaternion with every component divided by scalar; this is unchanged.
	 * @example
	 * new Quaternion(2, 4, 6, 8).DivideScalar(2) // (1, 2, 3, 4)
	 */
	public DivideScalar(scalar: number): Quaternion
	/**
	 * Divides every component by scalar in place; MUTATES and returns this.
	 * @example
	 * new Quaternion(2, 4, 6, 8).DivideScalarForThis(2) // this is (1, 2, 3, 4)
	 */
	public DivideScalarForThis(scalar: number): Quaternion
	/**
	 * Returns a NEW normalized linear interpolation toward quat; amount in [0, 1]
	 * (0 = this, 1 = quat). This is unchanged.
	 * @example
	 * a.Lerp(b, 0.5) // normalized midpoint between a and b
	 */
	public Lerp(quat: Quaternion, amount: number): Quaternion
	/**
	 * Returns a NEW normalized spherical interpolation toward quat; amount in [0, 1].
	 * Picks the shortest arc and falls back to lerp for near-parallel inputs. This is unchanged.
	 * @example
	 * a.Slerp(b, 0.5) // constant-speed rotation halfway from a to b
	 */
	public Slerp(quat: Quaternion, amount: number): Quaternion
	/**
	 * Rotates vec by this quaternion, writing the result into out; MUTATES and returns out.
	 *
	 * Takes a destination rather than returning a new vector because rotating model-space
	 * geometry runs per bone per frame, where an allocation per corner is the cost that matters.
	 * @example
	 * const world = boneRotation.RotateVector(localCorner, new Vector3())
	 */
	public RotateVector(vec: Vector3, out: Vector3): Vector3
	/**
	 * Returns a NEW independent copy with identical components.
	 * @example
	 * const copy = q.Clone() // mutating copy leaves q untouched
	 */
	public Clone(): Quaternion
	/**
	 * Writes this quaternion's components into quat; MUTATES and returns quat (not this).
	 * @example
	 * a.CopyTo(b) // b now equals a, returns b
	 */
	public CopyTo(quat: Quaternion): Quaternion
	/**
	 * Copies quat's components into this; MUTATES and returns this.
	 * @example
	 * a.CopyFrom(b) // a now equals b, returns a
	 */
	public CopyFrom(quat: Quaternion): Quaternion
}
