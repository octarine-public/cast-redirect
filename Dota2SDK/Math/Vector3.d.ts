// AUTO-GENERATED - do not edit.
/** Mutable 3D vector (x, y, z) with a large set of math, geometry and angle helpers. */
declare class Vector3 {
	public x: number
	public y: number
	public z: number
	/** Shared immutable-by-convention zero vector `(0, 0, 0)`. Do not mutate. */
	public static readonly Zero: Vector3
	/** Shared invalid vector with all components `NaN`; useful as a sentinel. Do not mutate. */
	public static readonly Invalid: Vector3
	/**
	 * Wraps an angle (degrees) into the range `[-180, 180)`.
	 * @example
	 * Vector3.NormalizeAngle(270) // -90
	 */
	public static NormalizeAngle(angle: number): number
	/**
	 * Returns a new vector with each component wrapped into `[-180, 180)` degrees.
	 * @example
	 * Vector3.NormalizeAngles(new Vector3(270, -200, 45)) // Vector3(-90, 160, 45)
	 */
	public static NormalizeAngles(v: Vector3): Vector3
	/**
	 * Reads 3 consecutive floats from the shared `IOBuffer` starting at `offset` into a new vector.
	 * @example
	 * const vec = Vector3.fromIOBuffer(0)
	 */
	public static fromIOBuffer(offset?: number): Vector3
	/**
	 * Converts game units to meters (1 unit = 0.0254 m). Pass `squared = true` when converting a squared value.
	 * @example
	 * Vector3.toMeters(100) // 2.54
	 */
	public static toMeters(units: number, squared?: boolean): number
	/**
	 * Converts meters back to game units (1 m = 1 / 0.0254 units). Pass `squared = true` for squared values.
	 * @example
	 * Vector3.fromMeters(2.54) // 100
	 */
	public static fromMeters(meters: number, squared?: boolean): number
	/**
	 * Builds a vector from the first 3 entries of an array-like; missing entries default to `0`.
	 * @example
	 * Vector3.fromArray([1, 2]) // Vector3(1, 2, 0)
	 */
	public static fromArray(array: ArrayLike<number>): Vector3
	/**
	 * Builds a Vector3 from a protobuf `CMsgVector`-shaped map (fields `x`, `y`, `z`). Missing fields
	 * default to `0`; an `undefined` message yields a zero vector.
	 * @example
	 * const pos = Vector3.FromProtobuf(msg.get("position") as RecursiveProtobuf)
	 */
	public static FromProtobuf(vec: Nullable<ReadonlyMap<string, unknown>>): Vector3
	/**
	 * Builds a unit 2D direction `(cos, sin, 0)` from an angle in radians.
	 * @example
	 * Vector3.FromAngle(0) // Vector3(1, 0, 0)
	 */
	public static FromAngle(angle: number): Vector3
	/**
	 * Parses a space-separated string like `"1 2 3"` into a vector; absent components become `NaN`.
	 * @example
	 * Vector3.FromString("1 2 3") // Vector3(1, 2, 3)
	 */
	public static FromString(str: string): Vector3
	/**
	 * Converts Euler angles (degrees, using `x`=pitch, `y`=yaw) into a forward direction vector.
	 * @example
	 * const fwd = Vector3.AngleVectors(new Vector3(0, 90, 0)) // ~Vector3(0, 1, 0)
	 */
	public static AngleVectors(ang: Vector3): Vector3
	/**
	 * Builds a 2D vector from polar coordinates: radius `radial` and angle `polar` (radians); `z` is `0`.
	 * @example
	 * Vector3.FromPolarCoordinates(10, 0) // Vector3(10, 0, 0)
	 */
	public static FromPolarCoordinates(radial: number, polar: number): Vector3
	/**
	 * Averages the vectors produced by `callback` over `array` (arithmetic mean of each component).
	 * @example
	 * const mid = Vector3.GetCenterType(units, u => u.Position)
	 */
	public static GetCenterType<T>(array: T[], callback: (value: T) => Vector3): Vector3
	/**
	 * Returns the centroid (arithmetic mean) of the given vectors.
	 * @example
	 * Vector3.GetCenter([new Vector3(0, 0), new Vector3(2, 4)]) // Vector3(1, 2, 0)
	 */
	public static GetCenter(array: Vector3[]): Vector3
	/**
	 * Returns a new independent copy of `vec`.
	 * @example
	 * const copy = Vector3.CopyFrom(other)
	 */
	public static CopyFrom(vec: Vector3): Vector3
	/**
	 * Lifts a `Vector2` into 3D with `z = 0`.
	 * @example
	 * Vector3.FromVector2(new Vector2(1, 2)) // Vector3(1, 2, 0)
	 */
	public static FromVector2(vec: Vector2): Vector3
	/**
	 * Creates a new vector; each omitted component defaults to `0`.
	 * @example
	 * const vec = new Vector3(1, 2, 3)
	 */
	constructor(x?: number, y?: number, z?: number)
	/**
	 * Whether the vector is valid (every component is finite, i.e. not `NaN`/`Infinity`).
	 * @example
	 * Vector3.Invalid.IsValid // false
	 */
	public get IsValid(): boolean
	/**
	 * Whether every component is finite (not `NaN` or `±Infinity`).
	 * @example
	 * new Vector3(1, 2, 3).IsFinite // true
	 */
	public get IsFinite(): boolean
	/**
	 * Squared 3D magnitude (`x² + y² + z²`); cheaper than `Length` as it skips the square root.
	 * @example
	 * new Vector3(1, 2, 2).LengthSqr // 9
	 */
	public get LengthSqr(): number
	/**
	 * 3D magnitude (Euclidean length) of the vector.
	 * @example
	 * new Vector3(3, 4, 0).Length // 5
	 */
	public get Length(): number
	/**
	 * Squared 2D magnitude (`x² + y²`), ignoring `z`; cheaper than `Length2D`.
	 * @example
	 * new Vector3(3, 4, 99).LengthSqr2D // 25
	 */
	public get LengthSqr2D(): number
	/**
	 * 2D magnitude (length in the XY plane), ignoring `z`.
	 * @example
	 * new Vector3(3, 4, 99).Length2D // 5
	 */
	public get Length2D(): number
	/**
	 * Angle of the vector in the XY plane, in radians, via `atan2(y, x)`.
	 * @example
	 * new Vector3(1, 1, 0).Angle // ~0.785 (π/4)
	 */
	public get Angle(): number
	/**
	 * Polar angle of the vector in the XY plane in degrees, in `[0, 360)`.
	 * @example
	 * new Vector3(0, 1, 0).Polar // 90
	 */
	public get Polar(): number
	/**
	 * Exact (strict) component-wise equality with `vec`; no tolerance is applied.
	 * @example
	 * new Vector3(1, 2, 3).Equals(new Vector3(1, 2, 3)) // true
	 */
	public Equals(vec: Vector3): boolean
	/**
	 * Whether every component lies within `±tolerance` of zero (default `0.01`).
	 * @example
	 * new Vector3(0.005, 0, 0).IsZero() // true
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * Whether the 3D length is greater than `val` (compared via squared lengths).
	 * @example
	 * new Vector3(3, 4, 0).IsLengthGreaterThan(4) // true
	 */
	public IsLengthGreaterThan(val: number): boolean
	/**
	 * Whether the 3D length is less than `val` (compared via squared lengths).
	 * @example
	 * new Vector3(3, 4, 0).IsLengthLessThan(6) // true
	 */
	public IsLengthLessThan(val: number): boolean
	/**
	 * MUTATES this vector, setting every component to `NaN`, and returns `this`.
	 * @example
	 * vec.Invalidate() // vec is now (NaN, NaN, NaN)
	 */
	public Invalidate(): Vector3
	/**
	 * MUTATES this vector, setting every component to `0`, and returns `this`.
	 * @example
	 * vec.toZero() // vec is now (0, 0, 0)
	 */
	public toZero(): Vector3
	/**
	 * MUTATES this vector by negating every component (`x = -x`, `y = -y`, `z = -z`) and returns `this`.
	 * @example
	 * new Vector3(1, -2, 3).Negate() // Vector3(-1, 2, -3)
	 */
	public Negate(): Vector3
	/**
	 * MUTATES this vector, assigning an INDEPENDENT random value in `[minVal, maxVal]` to each component, and returns `this`.
	 * @example
	 * vec.Random(0, 10) // e.g. Vector3(4.2, 8.1, 1.7)
	 */
	public Random(minVal: number, maxVal: number): Vector3
	/**
	 * Returns a NEW vector taking the per-component minimum of this and `vec` (a vector or a scalar applied to all components).
	 * @example
	 * new Vector3(1, 5, 3).Min(2) // Vector3(1, 2, 2)
	 */
	public Min(vec: Vector3 | number): Vector3
	/**
	 * Returns a NEW vector taking the per-component maximum of this and `vec` (a vector or a scalar applied to all components).
	 * @example
	 * new Vector3(1, 5, 3).Max(2) // Vector3(2, 5, 3)
	 */
	public Max(vec: Vector3 | number): Vector3
	/**
	 * Returns a NEW vector with the absolute value of each component.
	 * @example
	 * new Vector3(-1, 2, -3).Abs() // Vector3(1, 2, 3)
	 */
	public Abs(): Vector3
	/**
	 * Returns a NEW vector with each component rounded up to `count` decimal places (default `0`).
	 * @example
	 * new Vector3(1.11, 2.22, 3.33).Ceil(1) // Vector3(1.2, 2.3, 3.4)
	 */
	public Ceil(count?: number): Vector3
	/**
	 * MUTATES this vector, rounding each component up to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * new Vector3(1.11, 2.22, 3.33).CeilForThis(1) // Vector3(1.2, 2.3, 3.4)
	 */
	public CeilForThis(count?: number): Vector3
	/**
	 * Returns a NEW vector with each component rounded to `count` decimal places (default `0`).
	 * @example
	 * new Vector3(1.15, 2.24, 3.5).Round(1) // Vector3(1.2, 2.2, 3.5)
	 */
	public Round(count?: number): Vector3
	/**
	 * MUTATES this vector, rounding each component to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * new Vector3(1.15, 2.24, 3.5).RoundForThis() // Vector3(1, 2, 4)
	 */
	public RoundForThis(count?: number): Vector3
	/**
	 * Returns a NEW vector with each component rounded down to `count` decimal places (default `0`).
	 * @example
	 * new Vector3(1.99, 2.5, 3.1).Floor() // Vector3(1, 2, 3)
	 */
	public Floor(count?: number): Vector3
	/**
	 * MUTATES this vector, rounding each component down to `count` decimal places (default `0`), and returns `this`.
	 * @example
	 * new Vector3(1.99, 2.5, 3.1).FloorForThis() // Vector3(1, 2, 3)
	 */
	public FloorForThis(count?: number): Vector3
	/**
	 * Returns a NEW vector linearly interpolated from this toward `target` by factor `t` (0 = this, 1 = target).
	 * @example
	 * new Vector3(0, 0, 0).Lerp(new Vector3(10, 0, 0), 0.5) // Vector3(5, 0, 0)
	 */
	public Lerp(target: Vector3, t: number): Vector3
	/**
	 * Returns a NEW vector interpolating toward `target` by `t`, taking the shortest path for `x`/`y` angles (degrees); `z` is a plain lerp.
	 * @example
	 * new Vector3(350, 0, 0).LerpAngle(new Vector3(10, 0, 0), 0.5) // ~Vector3(0, 0, 0)
	 */
	public LerpAngle(target: Vector3, t: number): Vector3
	/**
	 * MUTATES this vector, interpolating it toward `vec` by factor `amount`, and returns `this`.
	 * @example
	 * vec.LerpForThis(target, 0.25)
	 */
	public LerpForThis(vec: Vector3, amount: number): Vector3
	/**
	 * Returns a NEW vector interpolated toward `vec` using a smoothstep-eased `amount` (0 = this, 1 = vec).
	 * @example
	 * new Vector3(0, 0, 0).SmoothStep(new Vector3(10, 0, 0), 0.5) // Vector3(5, 0, 0)
	 */
	public SmoothStep(vec: Vector3, amount: number): Vector3
	/**
	 * Returns a NEW vector with the square root of each component (negative components yield `NaN`).
	 * @example
	 * new Vector3(4, 9, 16).SquareRoot() // Vector3(2, 3, 4)
	 */
	public SquareRoot(): Vector3
	/**
	 * MUTATES `vec`, copying this vector's components into it, and returns `vec` (not `this`).
	 * @example
	 * this.CopyTo(dest) // dest now equals this
	 */
	public CopyTo(vec: Vector3): Vector3
	/**
	 * MUTATES this vector, copying `vec`'s components into it, and returns `this`.
	 * @example
	 * this.CopyFrom(src) // this now equals src
	 */
	public CopyFrom(vec: Vector3): Vector3
	/**
	 * MUTATES this vector, setting all components (each omitted arg defaults to `0`), and returns `this`.
	 * @example
	 * vec.SetVector(1, 2, 3)
	 */
	public SetVector(x?: number, y?: number, z?: number): Vector3
	/**
	 * MUTATES this vector, setting `x`, and returns `this`.
	 * @example
	 * vec.SetX(5)
	 */
	public SetX(num: number): Vector3
	/**
	 * MUTATES this vector, setting `y`, and returns `this`.
	 * @example
	 * vec.SetY(5)
	 */
	public SetY(num: number): Vector3
	/**
	 * MUTATES this vector, setting `z`, and returns `this`.
	 * @example
	 * vec.SetZ(0)
	 */
	public SetZ(num: number): Vector3
	/**
	 * MUTATES this vector to unit length (optionally divided by an extra `scalar`) and returns `this`; a zero vector is left unchanged.
	 * @example
	 * new Vector3(0, 3, 0).Normalize() // Vector3(0, 1, 0)
	 */
	public Normalize(scalar?: number): Vector3
	/**
	 * Returns a NEW vector equal to the cross product `this × vec` (perpendicular to both).
	 * @example
	 * new Vector3(1, 0, 0).Cross(new Vector3(0, 1, 0)) // Vector3(0, 0, 1)
	 */
	public Cross(vec: Vector3): Vector3
	/**
	 * Dot product of this vector and `vec`.
	 * @example
	 * new Vector3(1, 2, 3).Dot(new Vector3(4, 5, 6)) // 32
	 */
	public Dot(vec: Vector3): number
	/**
	 * MUTATES this vector to have length `scalar` (keeping direction) and returns `this`; a zero vector stays zero.
	 * @example
	 * new Vector3(0, 3, 0).ScaleTo(10) // Vector3(0, 10, 0)
	 */
	public ScaleTo(scalar: number): Vector3
	/**
	 * MUTATES this vector, scaling it by `length / scalar` (keeping direction), and returns `this`; a zero vector stays zero.
	 * @example
	 * new Vector3(0, 10, 0).DivideTo(2) // Vector3(0, 5, 0)
	 */
	public DivideTo(scalar: number): Vector3
	/**
	 * Returns a NEW vector with each component clamped into the `[min, max]` box (per-component).
	 * @example
	 * new Vector3(5, -5, 0).Clamp(new Vector3(0, 0, 0), new Vector3(3, 3, 3)) // Vector3(3, 0, 0)
	 */
	public Clamp(min: Vector3, max: Vector3): Vector3
	/**
	 * Returns a NEW vector equal to `this + vec` (component-wise sum).
	 * @example
	 * new Vector3(1, 2, 3).Add(new Vector3(4, 5, 6)) // Vector3(5, 7, 9)
	 */
	public Add(vec: Vector3): Vector3
	/**
	 * MUTATES this vector, adding `vec` component-wise, and returns `this`.
	 * @example
	 * vec.AddForThis(new Vector3(1, 0, 0))
	 */
	public AddForThis(vec: Vector3): Vector3
	/**
	 * Returns a NEW vector with `scalar` added to every component.
	 * @example
	 * new Vector3(1, 2, 3).AddScalar(10) // Vector3(11, 12, 13)
	 */
	public AddScalar(scalar: number): Vector3
	/**
	 * MUTATES this vector, adding `scalar` to every component, and returns `this`.
	 * @example
	 * vec.AddScalarForThis(10)
	 */
	public AddScalarForThis(scalar: number): Vector3
	/**
	 * MUTATES this vector, adding `scalar` to `x` only, and returns `this`.
	 * @example
	 * vec.AddScalarX(5)
	 */
	public AddScalarX(scalar: number): Vector3
	/**
	 * MUTATES this vector, adding `scalar` to `y` only, and returns `this`.
	 * @example
	 * vec.AddScalarY(5)
	 */
	public AddScalarY(scalar: number): Vector3
	/**
	 * MUTATES this vector, adding `scalar` to `z` only, and returns `this`.
	 * @example
	 * vec.AddScalarZ(5)
	 */
	public AddScalarZ(scalar: number): Vector3
	/**
	 * Returns a NEW vector equal to `this - vec` (component-wise difference).
	 * @example
	 * new Vector3(5, 5, 5).Subtract(new Vector3(1, 2, 3)) // Vector3(4, 3, 2)
	 */
	public Subtract(vec: Vector3): Vector3
	/**
	 * Returns a NEW vector with the absolute remainder of each component modulo `value`.
	 * @example
	 * new Vector3(7, -8, 5).Module(3) // Vector3(1, 2, 2)
	 */
	public Module(value: number): Vector3
	/**
	 * MUTATES this vector, subtracting `vec` component-wise, and returns `this`.
	 * @example
	 * vec.SubtractForThis(new Vector3(1, 0, 0))
	 */
	public SubtractForThis(vec: Vector3): Vector3
	/**
	 * Returns a NEW vector with `scalar` subtracted from every component.
	 * @example
	 * new Vector3(11, 12, 13).SubtractScalar(10) // Vector3(1, 2, 3)
	 */
	public SubtractScalar(scalar: number): Vector3
	/**
	 * MUTATES this vector, subtracting `scalar` from every component, and returns `this`.
	 * @example
	 * vec.SubtractScalarForThis(10)
	 */
	public SubtractScalarForThis(scalar: number): Vector3
	/**
	 * MUTATES this vector, subtracting `scalar` from `x` only, and returns `this`.
	 * @example
	 * vec.SubtractScalarX(5)
	 */
	public SubtractScalarX(scalar: number): Vector3
	/**
	 * MUTATES this vector, subtracting `scalar` from `y` only, and returns `this`.
	 * @example
	 * vec.SubtractScalarY(5)
	 */
	public SubtractScalarY(scalar: number): Vector3
	/**
	 * MUTATES this vector, subtracting `scalar` from `z` only, and returns `this`.
	 * @example
	 * vec.SubtractScalarZ(5)
	 */
	public SubtractScalarZ(scalar: number): Vector3
	/**
	 * Returns a NEW vector equal to the component-wise product `this * vec`.
	 * @example
	 * new Vector3(1, 2, 3).Multiply(new Vector3(2, 2, 2)) // Vector3(2, 4, 6)
	 */
	public Multiply(vec: Vector3): Vector3
	/**
	 * MUTATES this vector, multiplying component-wise by `vec`, and returns `this`.
	 * @example
	 * vec.MultiplyForThis(new Vector3(2, 2, 2))
	 */
	public MultiplyForThis(vec: Vector3): Vector3
	/**
	 * Returns a NEW vector with every component multiplied by `scalar`.
	 * @example
	 * new Vector3(1, 2, 3).MultiplyScalar(2) // Vector3(2, 4, 6)
	 */
	public MultiplyScalar(scalar: number): Vector3
	/**
	 * MUTATES this vector, multiplying every component by `scalar`, and returns `this`.
	 * @example
	 * vec.MultiplyScalarForThis(2)
	 */
	public MultiplyScalarForThis(scalar: number): Vector3
	/**
	 * MUTATES this vector, multiplying `x` only by `scalar`, and returns `this`.
	 * @example
	 * vec.MultiplyScalarX(2)
	 */
	public MultiplyScalarX(scalar: number): Vector3
	/**
	 * MUTATES this vector, multiplying `y` only by `scalar`, and returns `this`.
	 * @example
	 * vec.MultiplyScalarY(2)
	 */
	public MultiplyScalarY(scalar: number): Vector3
	/**
	 * MUTATES this vector, multiplying `z` only by `scalar`, and returns `this`.
	 * @example
	 * vec.MultiplyScalarZ(2)
	 */
	public MultiplyScalarZ(scalar: number): Vector3
	/**
	 * Returns a NEW vector equal to the component-wise quotient `this / vec`.
	 * @example
	 * new Vector3(2, 4, 6).Divide(new Vector3(2, 2, 2)) // Vector3(1, 2, 3)
	 */
	public Divide(vec: Vector3): Vector3
	/**
	 * MUTATES this vector, dividing component-wise by `vec`, and returns `this`.
	 * @example
	 * vec.DivideForThis(new Vector3(2, 2, 2))
	 */
	public DivideForThis(vec: Vector3): Vector3
	/**
	 * Returns a NEW vector with every component divided by `scalar`.
	 * @example
	 * new Vector3(2, 4, 6).DivideScalar(2) // Vector3(1, 2, 3)
	 */
	public DivideScalar(scalar: number): Vector3
	/**
	 * MUTATES this vector, dividing every component by `scalar`, and returns `this`.
	 * @example
	 * vec.DivideScalarForThis(2)
	 */
	public DivideScalarForThis(scalar: number): Vector3
	/**
	 * MUTATES this vector, dividing `x` only by `scalar`, and returns `this`.
	 * @example
	 * vec.DivideScalarX(2)
	 */
	public DivideScalarX(scalar: number): Vector3
	/**
	 * MUTATES this vector, dividing `y` only by `scalar`, and returns `this`.
	 * @example
	 * vec.DivideScalarY(2)
	 */
	public DivideScalarY(scalar: number): Vector3
	/**
	 * MUTATES this vector, dividing `z` only by `scalar`, and returns `this`.
	 * @example
	 * vec.DivideScalarZ(2)
	 */
	public DivideScalarZ(scalar: number): Vector3
	/**
	 * Returns a NEW vector equal to `this * scalar + vec2`.
	 * @example
	 * new Vector3(1, 1, 1).MultiplyAdd(new Vector3(1, 2, 3), 2) // Vector3(3, 4, 5)
	 */
	public MultiplyAdd(vec2: Vector3, scalar: number): Vector3
	/**
	 * MUTATES this vector to `this * scalar + vec2` and returns `this`.
	 * @example
	 * vec.MultiplyAddForThis(new Vector3(1, 2, 3), 2)
	 */
	public MultiplyAddForThis(vec2: Vector3, scalar: number): Vector3
	/**
	 * Squared 3D distance to `vec`; pass `toMeters = true` to convert the result to squared meters.
	 * @example
	 * new Vector3(0, 0, 0).DistanceSqr(new Vector3(3, 4, 0)) // 25
	 */
	public DistanceSqr(vec: Vector3, toMeters?: boolean): number
	/**
	 * Squared 2D distance to `vec` (ignoring `z`); pass `toMeters = true` for squared meters.
	 * @example
	 * new Vector3(0, 0, 9).DistanceSqr2D(new Vector3(3, 4, 0)) // 25
	 */
	public DistanceSqr2D(vec: Vector3 | Vector2, toMeters?: boolean): number
	/**
	 * 3D distance to `vec`; pass `toMeters = true` to convert the result to meters.
	 * @example
	 * new Vector3(0, 0, 0).Distance(new Vector3(3, 4, 0)) // 5
	 */
	public Distance(vec: Vector3, toMeters?: boolean): number
	/**
	 * 2D distance to `vec` (ignoring `z`); pass `toMeters = true` to convert to meters.
	 * @example
	 * new Vector3(0, 0, 9).Distance2D(new Vector3(3, 4, 0)) // 5
	 */
	public Distance2D(vec: Vector3 | Vector2, toMeters?: boolean): number
	/**
	 * Returns a NEW vector rotated 90° in the XY plane; `isX` (default `true`) selects the rotation direction. `z` is preserved.
	 * @example
	 * new Vector3(1, 2, 3).Perpendicular() // Vector3(-2, 1, 3)
	 */
	public Perpendicular(isX?: boolean): Vector3
	/**
	 * Polar angle of the vector in the XY plane; degrees by default, radians if `radian` is `true`.
	 * @example
	 * new Vector3(1, 1, 0).PolarAngle() // 45
	 */
	public PolarAngle(radian?: boolean): number
	/**
	 * Returns a NEW vector rotated by `angle` radians about the Z axis (in the XY plane); `z` is preserved.
	 * @example
	 * new Vector3(1, 0, 0).Rotated(Math.PI / 2) // ~Vector3(0, 1, 0)
	 */
	public Rotated(angle: number): Vector3
	/**
	 * Returns a NEW vector rotated `angle` radians around unit axis `k` (Rodrigues' rotation formula).
	 * @example
	 * new Vector3(1, 0, 0).RotatedAxis(new Vector3(0, 0, 1), Math.PI / 2) // ~Vector3(0, 1, 0)
	 */
	public RotatedAxis(k: Vector3, angle: number): Vector3
	/**
	 * Returns a NEW vector offset from this by `rotation * distance` (extends along a direction vector).
	 * @example
	 * pos.Rotation(entity.Forward, 100) // point 100 units ahead
	 */
	public Rotation(rotation: Vector3, distance: number): Vector3
	/**
	 * Like `Rotation`, but first converts `rotation` from degrees to radians. Returns a NEW vector.
	 * @example
	 * pos.RotationRad(anglesInDegrees, 100)
	 */
	public RotationRad(rotation: Vector3, distance: number): Vector3
	/**
	 * Returns a NEW point `distance` units ahead of this along the 2D direction given by `angle` (radians).
	 * @example
	 * pos.InFrontFromAngle(0, 100) // Vector3(pos.x + 100, pos.y, pos.z)
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector3
	/**
	 * Angle (radians, in `[0, π]`) from this point to `vec`, optionally offset by `vecAngleRadian`.
	 * @example
	 * origin.FindRotationAngle(target)
	 */
	public FindRotationAngle(vec: Vector3, vecAngleRadian?: number): number
	/**
	 * Time to rotate to this vector's `Angle` at `rotSpeed` (turn rate), i.e. `Angle / (30 * rotSpeed)`.
	 * @example
	 * dir.RotationTime(hero.TurnRate)
	 */
	public RotationTime(rotSpeed: number): number
	/**
	 * Smallest angle (degrees, in `[0, 180]`) between this and `vec`, using their XY-plane polar angles.
	 * @example
	 * new Vector3(1, 0, 0).AngleBetweenVectors(new Vector3(0, 1, 0)) // 90
	 */
	public AngleBetweenVectors(vec: Vector3): number
	/**
	 * Direction from this point to `target` as an angle in `[0, 360)`, or in radians when asked -
	 * where to face to look at it, rather than the angle between two directions.
	 * @example
	 * hero.Position.GetAngleTo(target.Position) // 135
	 */
	public GetAngleTo(target: Vector3, inDegrees?: boolean): number
	/**
	 * Angle (radians) between this vector and `front` via the dot product; returns `0` if either has zero length.
	 * @example
	 * new Vector3(1, 0, 0).AngleBetweenFaces(new Vector3(0, 1, 0)) // ~1.571 (π/2)
	 */
	public AngleBetweenFaces(front: Vector3): number
	/**
	 * Returns a NEW unit vector pointing from this toward `target` (3D).
	 * @example
	 * origin.GetDirectionTo(target) // normalized direction
	 */
	public GetDirectionTo(target: Vector3): Vector3
	/**
	 * Returns a NEW unit vector pointing from this toward `target` in the XY plane (`z` forced to `0`).
	 * @example
	 * origin.GetDirection2DTo(target) // normalized 2D direction
	 */
	public GetDirection2DTo(target: Vector3): Vector3
	/**
	 * Returns a NEW point `distance` units from this toward `vec` (`this + distance * dir`); does not mutate `this`.
	 * @example
	 * origin.Extend(target, 100) // point 100 units toward target
	 */
	public Extend(vec: Vector3, distance: number): Vector3
	/**
	 * Like `Extend`, but the direction is taken in the XY plane (`z` ignored). Returns a NEW vector.
	 * @example
	 * origin.Extend2D(target, 100)
	 */
	public Extend2D(vec: Vector3, distance: number): Vector3
	/**
	 * Returns a NEW independent copy of this vector.
	 * @example
	 * const copy = vec.Clone()
	 */
	public Clone(): Vector3
	/**
	 * Whether `vec` is within `range` of this vector (3D distance).
	 * @example
	 * hero.Position.IsInRange(tower.Position, 700)
	 */
	public IsInRange(vec: Vector3, range: number): boolean
	/**
	 * Returns the vector in `vecs` nearest to this one (by 3D distance); assumes `vecs` is non-empty.
	 * @example
	 * hero.Position.Closest(enemyPositions)
	 */
	public Closest(vecs: Vector3[]): Vector3
	/**
	 * Whether this point's `x`/`y` lie strictly inside the axis-aligned rectangle at `(x, y)` with `width`/`height`.
	 * @example
	 * new Vector3(5, 5, 0).IsUnderRectangle(0, 0, 10, 10) // true
	 */
	public IsUnderRectangle(x: number, y: number, width: number, height: number): boolean
	/**
	 * Returns a NEW vector with each component converted from radians to degrees (`× 180 / π`).
	 * @example
	 * new Vector3(Math.PI, 0, 0).RadiansToDegrees() // Vector3(180, 0, 0)
	 */
	public RadiansToDegrees(): Vector3
	/**
	 * Returns a NEW vector with each component converted from degrees to radians (`× π / 180`).
	 * @example
	 * new Vector3(180, 0, 0).DegreesToRadians() // Vector3(π, 0, 0)
	 */
	public DegreesToRadians(): Vector3
	/**
	 * Returns a NEW vector of Euler angles in degrees (`x`=pitch, `y`=yaw, `z`=0) for this direction vector.
	 * @example
	 * new Vector3(1, 0, 0).ToEulerAngles() // Vector3(0, 0, 0)
	 */
	public ToEulerAngles(): Vector3
	/**
	 * Returns the components as a plain `[x, y, z]` tuple.
	 * @example
	 * new Vector3(1, 2, 3).toArray() // [1, 2, 3]
	 */
	public toArray(): [number, number, number]
	/**
	 * `JSON.stringify` hook; serializes the vector as an `[x, y, z]` array.
	 * @example
	 * JSON.stringify(new Vector3(1, 2, 3)) // "[1,2,3]"
	 */
	public toJSON(): [number, number, number]
	/**
	 * Writes `x`, `y`, `z` into the shared `IOBuffer` at `offset` and always returns `true`.
	 * @example
	 * vec.toIOBuffer(0)
	 */
	public toIOBuffer(offset?: number): true
	/**
	 * Returns a NEW vector of the per-component angle differences `this - v`, each normalized into `[-180, 180)` degrees.
	 * @example
	 * new Vector3(170, 0, 0).SubtractAngles(new Vector3(-170, 0, 0)) // Vector3(-20, 0, 0)
	 */
	public SubtractAngles(v: Vector3): Vector3
}
