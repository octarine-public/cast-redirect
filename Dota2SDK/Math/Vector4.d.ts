// AUTO-GENERATED - do not edit.
/** Mutable 4D vector (x, y, z, w) with component-wise math, interpolation and quaternion transforms. */
declare class Vector4 {
	public x: number
	public y: number
	public z: number
	public w: number
	/**
	 * Builds a Vector4 from a protobuf `CMsgQuaternion`-shaped map (fields `x`, `y`, `z`, `w`). Missing
	 * fields default to `0`; an `undefined` message yields a zero vector.
	 * @example
	 * const q = Vector4.FromProtobuf(msg.get("orientation") as RecursiveProtobuf)
	 */
	public static FromProtobuf(vec: Nullable<ReadonlyMap<string, unknown>>): Vector4
	/**
	 * Creates a NEW Vector4 from an array-like object; missing indices default to `0`.
	 * @example
	 * Vector4.fromArray([1, 2, 3, 4]) // (1, 2, 3, 4)
	 */
	public static fromArray(array: ArrayLike<number>): Vector4
	/**
	 * Parses a string of space-separated numbers into a NEW Vector4. Non-numeric
	 * tokens or fewer than four values yield `NaN`/`undefined` components.
	 * @example
	 * Vector4.FromString("1 2 3 4") // (1, 2, 3, 4)
	 */
	public static FromString(str: string): Vector4
	/**
	 * Creates a NEW Vector4 from a Vector3, setting `w` to `0`.
	 * @example
	 * Vector4.FromVector3(new Vector3(1, 2, 3)) // (1, 2, 3, 0)
	 */
	public static FromVector3(vec: Vector3): Vector4
	/**
	 * Reads four consecutive floats from the global `IOBuffer` starting at `offset` (default `0`) into a NEW Vector4.
	 * @example
	 * const v = Vector4.fromIOBuffer() // reads IOBuffer[0..3]
	 */
	public static fromIOBuffer(offset?: number): Vector4
	/**
	 * Creates a Vector4 from components; each defaults to `0` when omitted.
	 * @example
	 * const v = new Vector4(1, 2, 3, 4)
	 */
	constructor(x?: number, y?: number, z?: number, w?: number)
	/**
	 * True when all components are finite (alias of {@link IsFinite}).
	 * @example
	 * new Vector4(1, 2, 3, 4).IsValid // true
	 */
	public get IsValid(): boolean
	/**
	 * True when every component is a finite number (no `NaN`/`Infinity`).
	 * @example
	 * new Vector4(1, 2, 3, NaN).IsFinite // false
	 */
	public get IsFinite(): boolean
	/**
	 * True when all components lie within `±tolerance` of zero (default `0.01`).
	 * @example
	 * new Vector4(0.001, 0, 0, 0).IsZero() // true
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * MUTATES this vector, setting every component to `0`, and returns `this`.
	 * @example
	 * v.toZero() // (0, 0, 0, 0)
	 */
	public toZero(): Vector4
	/**
	 * MUTATES this vector, setting every component to `NaN`, and returns `this`.
	 * @example
	 * v.Invalidate().IsValid // false
	 */
	public Invalidate(): Vector4
	/**
	 * MUTATES this vector, flipping the sign of every component, and returns `this`.
	 * @example
	 * new Vector4(1, -2, 3, -4).Negate() // (-1, 2, -3, 4)
	 */
	public Negate(): Vector4
	/**
	 * Squared magnitude (`x²+y²+z²+w²`); cheaper than {@link Length} for comparisons.
	 * @example
	 * new Vector4(1, 2, 2, 0).LengthSqr // 9
	 */
	public get LengthSqr(): number
	/**
	 * Euclidean magnitude (`√(x²+y²+z²+w²)`).
	 * @example
	 * new Vector4(1, 2, 2, 0).Length // 3
	 */
	public get Length(): number
	/**
	 * True when all four components are strictly equal (`===`) to `vec`'s.
	 * @example
	 * new Vector4(1, 2, 3, 4).Equals(new Vector4(1, 2, 3, 4)) // true
	 */
	public Equals(vec: Vector4): boolean
	/**
	 * Returns a NEW Vector4 of the component-wise minimum of this and `vec` (a Vector4 or a scalar applied to every component).
	 * @example
	 * new Vector4(1, 5, 3, 8).Min(4) // (1, 4, 3, 4)
	 */
	public Min(vec: Vector4 | number): Vector4
	/**
	 * Returns a NEW Vector4 of the component-wise maximum of this and `vec` (a Vector4 or a scalar applied to every component).
	 * @example
	 * new Vector4(1, 5, 3, 8).Max(4) // (4, 5, 4, 8)
	 */
	public Max(vec: Vector4 | number): Vector4
	/**
	 * Returns a NEW Vector4 with each component clamped into the `[min, max]` range (each bound a Vector4 or scalar).
	 * @example
	 * new Vector4(-1, 5, 3, 8).Clamp(0, 4) // (0, 4, 3, 4)
	 */
	public Clamp(min: Vector4 | number, max: Vector4 | number): Vector4
	/**
	 * Returns a NEW Vector4 with the square root of each component; negative components yield `NaN`.
	 * @example
	 * new Vector4(4, 9, 16, 25).SquareRoot() // (2, 3, 4, 5)
	 */
	public SquareRoot(): Vector4
	/**
	 * Returns a NEW Vector4 with the absolute value of each component.
	 * @example
	 * new Vector4(-1, 2, -3, 4).Abs() // (1, 2, 3, 4)
	 */
	public Abs(): Vector4
	/**
	 * Returns a NEW Vector4 with each component rounded up to `count` decimal places (default `0`, i.e. whole numbers).
	 * @example
	 * new Vector4(1.2, 2.5, 3.9, 4.1).Ceil() // (2, 3, 4, 5)
	 */
	public Ceil(count?: number): Vector4
	/**
	 * MUTATES this vector, rounding each component up to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * v.CeilForThis(1) // rounds up in place to 1 decimal
	 */
	public CeilForThis(count?: number): Vector4
	/**
	 * Returns a NEW Vector4 with each component rounded to `count` decimal places (default `0`).
	 * @example
	 * new Vector4(1.25, 2.55, 3, 4).Round(1) // (1.3, 2.6, 3, 4)
	 */
	public Round(count?: number): Vector4
	/**
	 * MUTATES this vector, rounding each component to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * v.RoundForThis(2) // rounds in place to 2 decimals
	 */
	public RoundForThis(count?: number): Vector4
	/**
	 * Returns a NEW Vector4 with each component rounded down to `count` decimal places (default `0`, i.e. whole numbers).
	 * @example
	 * new Vector4(1.9, 2.1, 3.5, 4.99).Floor() // (1, 2, 3, 4)
	 */
	public Floor(count?: number): Vector4
	/**
	 * MUTATES this vector, rounding each component down to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * v.FloorForThis() // floors in place to whole numbers
	 */
	public FloorForThis(count?: number): Vector4
	/**
	 * Returns a NEW Vector4 of the component-wise sum of this and `vec`.
	 * @example
	 * new Vector4(1, 2, 3, 4).Add(new Vector4(1, 1, 1, 1)) // (2, 3, 4, 5)
	 */
	public Add(vec: Vector4): Vector4
	/**
	 * MUTATES this vector by adding `vec` component-wise and returns `this`.
	 * @example
	 * v.AddForThis(new Vector4(1, 1, 1, 1)) // adds in place
	 */
	public AddForThis(vec: Vector4): Vector4
	/**
	 * Returns a NEW Vector4 with `scalar` added to every component.
	 * @example
	 * new Vector4(1, 2, 3, 4).AddScalar(10) // (11, 12, 13, 14)
	 */
	public AddScalar(scalar: number): Vector4
	/**
	 * MUTATES this vector by adding `scalar` to every component and returns `this`.
	 * @example
	 * v.AddScalarForThis(1) // adds 1 to each in place
	 */
	public AddScalarForThis(scalar: number): Vector4
	/**
	 * Returns a NEW Vector4 of the component-wise difference `this - vec`.
	 * @example
	 * new Vector4(5, 5, 5, 5).Subtract(new Vector4(1, 2, 3, 4)) // (4, 3, 2, 1)
	 */
	public Subtract(vec: Vector4): Vector4
	/**
	 * MUTATES this vector by subtracting `vec` component-wise and returns `this`.
	 * @example
	 * v.SubtractForThis(new Vector4(1, 1, 1, 1)) // subtracts in place
	 */
	public SubtractForThis(vec: Vector4): Vector4
	/**
	 * Returns a NEW Vector4 with `scalar` subtracted from every component.
	 * @example
	 * new Vector4(11, 12, 13, 14).SubtractScalar(10) // (1, 2, 3, 4)
	 */
	public SubtractScalar(scalar: number): Vector4
	/**
	 * MUTATES this vector by subtracting `scalar` from every component and returns `this`.
	 * @example
	 * v.SubtractScalarForThis(1) // subtracts 1 from each in place
	 */
	public SubtractScalarForThis(scalar: number): Vector4
	/**
	 * Returns a NEW Vector4 of the component-wise product of this and `vec`.
	 * @example
	 * new Vector4(1, 2, 3, 4).Multiply(new Vector4(2, 2, 2, 2)) // (2, 4, 6, 8)
	 */
	public Multiply(vec: Vector4): Vector4
	/**
	 * MUTATES this vector by multiplying it by `vec` component-wise and returns `this`.
	 * @example
	 * v.MultiplyForThis(new Vector4(2, 2, 2, 2)) // scales in place
	 */
	public MultiplyForThis(vec: Vector4): Vector4
	/**
	 * Returns a NEW Vector4 with every component multiplied by `scalar`.
	 * @example
	 * new Vector4(1, 2, 3, 4).MultiplyScalar(2) // (2, 4, 6, 8)
	 */
	public MultiplyScalar(scalar: number): Vector4
	/**
	 * MUTATES this vector by multiplying every component by `scalar` and returns `this`.
	 * @example
	 * v.MultiplyScalarForThis(0.5) // halves in place
	 */
	public MultiplyScalarForThis(scalar: number): Vector4
	/**
	 * Returns a NEW Vector4 of the component-wise quotient `this / vec`; zero divisors yield `Infinity`/`NaN`.
	 * @example
	 * new Vector4(2, 4, 6, 8).Divide(new Vector4(2, 2, 2, 2)) // (1, 2, 3, 4)
	 */
	public Divide(vec: Vector4): Vector4
	/**
	 * MUTATES this vector by dividing it by `vec` component-wise and returns `this`; zero divisors yield `Infinity`/`NaN`.
	 * @example
	 * v.DivideForThis(new Vector4(2, 2, 2, 2)) // divides in place
	 */
	public DivideForThis(vec: Vector4): Vector4
	/**
	 * Returns a NEW Vector4 with every component divided by `scalar`; a zero `scalar` yields `Infinity`/`NaN`.
	 * @example
	 * new Vector4(2, 4, 6, 8).DivideScalar(2) // (1, 2, 3, 4)
	 */
	public DivideScalar(scalar: number): Vector4
	/**
	 * MUTATES this vector by dividing every component by `scalar` and returns `this`; a zero `scalar` yields `Infinity`/`NaN`.
	 * @example
	 * v.DivideScalarForThis(2) // halves in place
	 */
	public DivideScalarForThis(scalar: number): Vector4
	/**
	 * Returns a NEW Vector4 linearly interpolated from this toward `target` by `amount` (0 = this, 1 = target); not clamped.
	 * @example
	 * new Vector4(0, 0, 0, 0).Lerp(new Vector4(10, 10, 10, 10), 0.5) // (5, 5, 5, 5)
	 */
	public Lerp(target: Vector4, amount: number): Vector4
	/**
	 * MUTATES this vector, linearly interpolating it toward `vec` by `amount` (0 = unchanged, 1 = `vec`), and returns `this`.
	 * @example
	 * v.LerpForThis(target, 0.25) // moves 25% toward target in place
	 */
	public LerpForThis(vec: Vector4, amount: number): Vector4
	/**
	 * Returns a NEW Vector4 interpolated from this toward `vec` with smoothstep easing applied to `amount` (0-1).
	 * @example
	 * new Vector4(0, 0, 0, 0).SmoothStep(new Vector4(10, 10, 10, 10), 0.5) // (5, 5, 5, 5)
	 */
	public SmoothStep(vec: Vector4, amount: number): Vector4
	/**
	 * MUTATES this vector, interpolating it toward `vec` with smoothstep easing on `amount` (0-1), and returns `this`.
	 * @example
	 * v.SmoothStepForThis(target, 0.5) // eases toward target in place
	 */
	public SmoothStepForThis(vec: Vector4, amount: number): Vector4
	/**
	 * Returns a NEW Vector4 from a cubic Hermite spline between this (with tangent `tan1`) and `val2` (with tangent `tan2`) at position `amt` (0-1).
	 * @example
	 * p0.Hermite(t0, p1, t1, 0.5) // point halfway along the spline
	 */
	public Hermite(tan1: Vector4, val2: Vector4, tan2: Vector4, amt: number): Vector4
	/**
	 * Returns a NEW Vector4 at barycentric coordinates `(a1, a2)` over the triangle `this`, `v2`, `v3`:
	 * `this + a1*(v2 - this) + a2*(v3 - this)`. `(0, 0)` yields `this`, `(1, 0)` yields `v2`, `(0, 1)` yields `v3`.
	 * @example
	 * a.Barycentric(b, c, 0, 0) // a
	 */
	public Barycentric(v2: Vector4, v3: Vector4, a1: number, a2: number): Vector4
	/**
	 * Returns a NEW Vector4 with the `x/y/z` rotated by `rotation`; the original `w` is preserved.
	 * @example
	 * v.Transform(new Quaternion(0, 0, 0, 1)) // identity rotation, unchanged
	 */
	public Transform(rotation: Quaternion): Vector4
	/**
	 * MUTATES this vector, copying all components from `vec`, and returns `this`.
	 * @example
	 * v.CopyFrom(other) // v now equals other
	 */
	public CopyFrom(vec: Vector4): Vector4
	/**
	 * MUTATES `vec`, writing this vector's components into it, and returns `vec` (not `this`).
	 * @example
	 * v.CopyTo(dest) // dest now equals v
	 */
	public CopyTo(vec: Vector4): Vector4
	/**
	 * Returns a NEW `[x, y, z, w]` tuple of the components.
	 * @example
	 * new Vector4(1, 2, 3, 4).toArray() // [1, 2, 3, 4]
	 */
	public toArray(): [number, number, number, number]
	/**
	 * Writes the four components into the global `IOBuffer` starting at `offset` (default `0`) and always returns `true`.
	 * @example
	 * v.toIOBuffer() // writes IOBuffer[0..3]
	 */
	public toIOBuffer(offset?: number): true
	/**
	 * Returns a NEW Vector4 that is an independent copy of this one.
	 * @example
	 * const copy = v.Clone() // separate instance, equal values
	 */
	public Clone(): Vector4
}
