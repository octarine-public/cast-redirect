// AUTO-GENERATED - do not edit.
/** 2D vector with x/y math, geometry and rotation helpers. */
declare class Vector2 {
	public x: number
	public y: number
	/**
	 * Reads a Vector2 from two consecutive floats in the shared IOBuffer starting at `offset`.
	 * @example
	 * const vec = Vector2.fromIOBuffer(0)
	 */
	public static fromIOBuffer(offset?: number): Vector2
	/**
	 * Builds a Vector2 from `[x, y]`; missing entries default to `0`.
	 * @example
	 * const vec = Vector2.fromArray([1, 2]) // (1, 2)
	 */
	public static fromArray(array: number[]): Vector2
	/**
	 * Builds a Vector2 from a protobuf `CMsgVector2D`-shaped map (fields `x`, `y`). Missing fields
	 * default to `0`; an `undefined` message yields a zero vector.
	 * @example
	 * const vec = Vector2.FromProtobuf(msg.get("pos") as RecursiveProtobuf)
	 */
	public static FromProtobuf(vec: Nullable<ReadonlyMap<string, unknown>>): Vector2
	/**
	 * Unit vector pointing at `angle` radians: `(cos, sin)`.
	 * @example
	 * const dir = Vector2.FromAngle(Math.PI / 2) // (0, 1)
	 */
	public static FromAngle(angle: number): Vector2
	/**
	 * Parses a space-separated `"x y"` string into a Vector2.
	 * @example
	 * const vec = Vector2.FromString("1 2") // (1, 2)
	 */
	public static FromString(str: string): Vector2
	/**
	 * Builds a Vector2 from polar coordinates, where `polar` is the angle in radians.
	 * @example
	 * const vec = Vector2.FromPolarCoordinates(10, 0) // (10, 0)
	 */
	public static FromPolarCoordinates(radial: number, polar: number): Vector2
	/**
	 * Averages the vectors produced by `callback` for each item, returning their center point.
	 * @example
	 * const center = Vector2.GetCenterType(units, u => u.Position)
	 */
	public static GetCenterType<T>(array: T[], callback: (value: T) => Vector2): Vector2
	/**
	 * Averages an array of vectors, returning their center point.
	 * @example
	 * const center = Vector2.GetCenter([new Vector2(0, 0), new Vector2(2, 4)]) // (1, 2)
	 */
	public static GetCenter(array: Vector2[]): Vector2
	/**
	 * Returns a new Vector2 copied from `vec`.
	 * @example
	 * const copy = Vector2.CopyFrom(other)
	 */
	public static CopyFrom(vec: Vector2): Vector2
	/**
	 * Projects a Vector3 onto the XY plane, dropping its z component.
	 * @example
	 * const flat = Vector2.FromVector3(new Vector3(1, 2, 3)) // (1, 2)
	 */
	public static FromVector3(vec: Vector3): Vector2
	/**
	 * Creates a new Vector2; both components default to `0`.
	 * @example
	 * const vec = new Vector2(1, 2)
	 */
	constructor(x?: number, y?: number)
	/**
	 * True if both components are finite (not Infinity/NaN). Alias of `IsFinite`.
	 * @example
	 * if (vec.IsValid) vec.Normalize()
	 */
	public get IsValid(): boolean
	/**
	 * True if both components are finite (not Infinity/NaN).
	 * @example
	 * new Vector2(Infinity, 0).IsFinite // false
	 */
	public get IsFinite(): boolean
	/**
	 * Squared length of the vector; cheaper than `Length` (no sqrt).
	 * @example
	 * new Vector2(3, 4).LengthSqr // 25
	 */
	public get LengthSqr(): number
	/**
	 * Euclidean length (magnitude) of the vector.
	 * @example
	 * new Vector2(3, 4).Length // 5
	 */
	public get Length(): number
	/**
	 * Angle of the vector in radians, measured from the +X axis via `atan2(y, x)`.
	 * @example
	 * new Vector2(0, 1).Angle // Math.PI / 2
	 */
	public get Angle(): number
	/**
	 * Polar angle in degrees, normalized to `[0, 360)`.
	 * @example
	 * new Vector2(0, 1).Polar // 90
	 */
	public get Polar(): number
	/**
	 * Exact component-wise equality check.
	 * @example
	 * new Vector2(1, 2).Equals(new Vector2(1, 2)) // true
	 */
	public Equals(vec: Vector2): boolean
	/**
	 * True if both components lie within `±tolerance` (default `0.01`).
	 * @example
	 * new Vector2(0.001, 0).IsZero() // true
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * True if the vector's length is greater than `val`.
	 * @example
	 * new Vector2(3, 4).IsLengthGreaterThan(4) // true
	 */
	public IsLengthGreaterThan(val: number): boolean
	/**
	 * True if the vector's length is less than `val`.
	 * @example
	 * new Vector2(3, 4).IsLengthLessThan(6) // true
	 */
	public IsLengthLessThan(val: number): boolean
	/**
	 * MUTATES: sets both components to `NaN`, marking the vector invalid. Returns `this`.
	 * @example
	 * vec.Invalidate()
	 */
	public Invalidate(): Vector2
	/**
	 * MUTATES: sets both components to `0`. Returns `this`.
	 * @example
	 * vec.toZero()
	 */
	public toZero(): Vector2
	/**
	 * MUTATES: negates both components (`x = -x`, `y = -y`). Returns `this`.
	 * @example
	 * new Vector2(1, -2).Negate() // (-1, 2)
	 */
	public Negate(): Vector2
	/**
	 * MUTATES: sets each component to an INDEPENDENT random value in `[minVal, maxVal]`. Returns `this`.
	 * @example
	 * vec.Random(0, 100) // e.g. Vector2(37.4, 82.1)
	 */
	public Random(minVal: number, maxVal: number): Vector2
	/**
	 * Returns a NEW vector with the component-wise minimum against another vector or a scalar.
	 * @example
	 * new Vector2(3, 1).Min(2) // (2, 1)
	 */
	public Min(vec: Vector2 | number): Vector2
	/**
	 * Returns a NEW vector with the component-wise maximum against another vector or a scalar.
	 * @example
	 * new Vector2(3, 1).Max(2) // (3, 2)
	 */
	public Max(vec: Vector2 | number): Vector2
	/**
	 * Returns a NEW vector with the absolute value of each component.
	 * @example
	 * new Vector2(-1, -2).Abs() // (1, 2)
	 */
	public Abs(): Vector2
	/**
	 * Returns a NEW vector rounded up to `count` decimal places (default `0`).
	 * @example
	 * new Vector2(1.21, 1.25).Ceil(1) // (1.3, 1.3)
	 */
	public Ceil(count?: number): Vector2
	/**
	 * MUTATES: rounds each component up to `count` decimal places (default `0`). Returns `this`.
	 * @example
	 * new Vector2(1.2, 1.8).CeilForThis() // (2, 2)
	 */
	public CeilForThis(count?: number): Vector2
	/**
	 * Returns a NEW vector rounded to `count` decimal places (default `0`).
	 * @example
	 * new Vector2(1.24, 1.25).Round(1) // (1.2, 1.3)
	 */
	public Round(count?: number): Vector2
	/**
	 * MUTATES: rounds each component to `count` decimal places (default `0`). Returns `this`.
	 * @example
	 * new Vector2(1.4, 1.6).RoundForThis() // (1, 2)
	 */
	public RoundForThis(count?: number): Vector2
	/**
	 * Returns a NEW vector rounded down to `count` decimal places (default `0`).
	 * @example
	 * new Vector2(1.29, 1.25).Floor(1) // (1.2, 1.2)
	 */
	public Floor(count?: number): Vector2
	/**
	 * MUTATES: rounds each component down to `count` decimal places (default `0`). Returns `this`.
	 * @example
	 * new Vector2(1.8, 1.2).FloorForThis() // (1, 1)
	 */
	public FloorForThis(count?: number): Vector2
	/**
	 * Returns a NEW vector with the square root of each component.
	 * @example
	 * new Vector2(9, 16).SquareRoot() // (3, 4)
	 */
	public SquareRoot(): Vector2
	/**
	 * MUTATES `vec`: copies this vector's components into `vec` and returns `vec` (not `this`).
	 * @example
	 * const dst = new Vector2()
	 * src.CopyTo(dst) // dst now equals src
	 */
	public CopyTo(vec: Vector2): Vector2
	/**
	 * MUTATES: copies `vec`'s components into this vector. Returns `this`.
	 * @example
	 * dst.CopyFrom(src)
	 */
	public CopyFrom(vec: Vector2): Vector2
	/**
	 * MUTATES: sets both components (default `0`). Returns `this`.
	 * @example
	 * vec.SetVector(1, 2)
	 */
	public SetVector(x?: number, y?: number): Vector2
	/**
	 * MUTATES: sets the x component. Returns `this`.
	 * @example
	 * vec.SetX(5)
	 */
	public SetX(num: number): Vector2
	/**
	 * MUTATES: sets the y component. Returns `this`.
	 * @example
	 * vec.SetY(5)
	 */
	public SetY(num: number): Vector2
	/**
	 * MUTATES: scales this vector to length `1 / scalar` (default unit length); zero vectors are
	 * left unchanged. Returns `this`.
	 * @example
	 * new Vector2(3, 4).Normalize() // length 1
	 */
	public Normalize(scalar?: number): Vector2
	/**
	 * Returns the z component of the cross product (a signed scalar in 2D).
	 * @example
	 * new Vector2(1, 0).Cross(new Vector2(0, 1)) // -1
	 */
	public Cross(vec: Vector2): number
	/**
	 * Returns the dot product of this vector and `vec`.
	 * @example
	 * new Vector2(1, 2).Dot(new Vector2(3, 4)) // 11
	 */
	public Dot(vec: Vector2): number
	/**
	 * MUTATES: scales this vector to length `scalar`; a zero vector is left at zero. Returns `this`.
	 * @example
	 * new Vector2(3, 4).ScaleTo(10) // (6, 8)
	 */
	public ScaleTo(scalar: number): Vector2
	/**
	 * MUTATES: scales this vector to length `length / scalar`; a zero vector stays zero. Returns `this`.
	 * @example
	 * new Vector2(3, 4).DivideTo(5) // length 1
	 */
	public DivideTo(scalar: number): Vector2
	/**
	 * Returns a NEW vector with each component clamped between `min` and `max`.
	 * @example
	 * new Vector2(5, -5).Clamp(new Vector2(0, 0), new Vector2(3, 3)) // (3, 0)
	 */
	public Clamp(min: Vector2, max: Vector2): Vector2
	/**
	 * Returns a NEW vector that is the component-wise sum of this and `vec`.
	 * @example
	 * new Vector2(1, 2).Add(new Vector2(3, 4)) // (4, 6)
	 */
	public Add(vec: Vector2): Vector2
	/**
	 * MUTATES: adds `vec` component-wise into this vector. Returns `this`.
	 * @example
	 * vec.AddForThis(new Vector2(3, 4))
	 */
	public AddForThis(vec: Vector2): Vector2
	/**
	 * Returns a NEW vector with `scalar` added to both components.
	 * @example
	 * new Vector2(1, 2).AddScalar(5) // (6, 7)
	 */
	public AddScalar(scalar: number): Vector2
	/**
	 * MUTATES: adds `scalar` to both components. Returns `this`.
	 * @example
	 * vec.AddScalarForThis(5)
	 */
	public AddScalarForThis(scalar: number): Vector2
	/**
	 * MUTATES: adds `scalar` to the x component only. Returns `this`.
	 * @example
	 * vec.AddScalarX(5)
	 */
	public AddScalarX(scalar: number): Vector2
	/**
	 * MUTATES: adds `scalar` to the y component only. Returns `this`.
	 * @example
	 * vec.AddScalarY(5)
	 */
	public AddScalarY(scalar: number): Vector2
	/**
	 * Returns a NEW vector that is this minus `vec`, component-wise.
	 * @example
	 * new Vector2(5, 5).Subtract(new Vector2(1, 2)) // (4, 3)
	 */
	public Subtract(vec: Vector2): Vector2
	/**
	 * MUTATES: subtracts `vec` component-wise from this vector. Returns `this`.
	 * @example
	 * vec.SubtractForThis(new Vector2(1, 2))
	 */
	public SubtractForThis(vec: Vector2): Vector2
	/**
	 * Returns a NEW vector with `scalar` subtracted from both components.
	 * @example
	 * new Vector2(5, 6).SubtractScalar(1) // (4, 5)
	 */
	public SubtractScalar(scalar: number): Vector2
	/**
	 * MUTATES: subtracts `scalar` from both components. Returns `this`.
	 * @example
	 * vec.SubtractScalarForThis(1)
	 */
	public SubtractScalarForThis(scalar: number): Vector2
	/**
	 * MUTATES: subtracts `scalar` from the x component only. Returns `this`.
	 * @example
	 * vec.SubtractScalarX(1)
	 */
	public SubtractScalarX(scalar: number): Vector2
	/**
	 * MUTATES: subtracts `scalar` from the y component only. Returns `this`.
	 * @example
	 * vec.SubtractScalarY(1)
	 */
	public SubtractScalarY(scalar: number): Vector2
	/**
	 * Returns a NEW vector that is the component-wise product of this and `vec`.
	 * @example
	 * new Vector2(2, 3).Multiply(new Vector2(4, 5)) // (8, 15)
	 */
	public Multiply(vec: Vector2): Vector2
	/**
	 * MUTATES: multiplies this vector by `vec` component-wise. Returns `this`.
	 * @example
	 * vec.MultiplyForThis(new Vector2(4, 5))
	 */
	public MultiplyForThis(vec: Vector2): Vector2
	/**
	 * Returns a NEW vector with both components multiplied by `scalar`.
	 * @example
	 * new Vector2(2, 3).MultiplyScalar(2) // (4, 6)
	 */
	public MultiplyScalar(scalar: number): Vector2
	/**
	 * MUTATES: multiplies both components by `scalar`. Returns `this`.
	 * @example
	 * vec.MultiplyScalarForThis(2)
	 */
	public MultiplyScalarForThis(scalar: number): Vector2
	/**
	 * MUTATES: multiplies the x component by `scalar`. Returns `this`.
	 * @example
	 * vec.MultiplyScalarX(2)
	 */
	public MultiplyScalarX(scalar: number): Vector2
	/**
	 * MUTATES: multiplies the y component by `scalar`. Returns `this`.
	 * @example
	 * vec.MultiplyScalarY(2)
	 */
	public MultiplyScalarY(scalar: number): Vector2
	/**
	 * Returns a NEW vector that is this divided by `vec`, component-wise.
	 * @example
	 * new Vector2(8, 6).Divide(new Vector2(4, 2)) // (2, 3)
	 */
	public Divide(vec: Vector2): Vector2
	/**
	 * MUTATES: divides this vector by `vec` component-wise. Returns `this`.
	 * @example
	 * vec.DivideForThis(new Vector2(4, 2))
	 */
	public DivideForThis(vec: Vector2): Vector2
	/**
	 * Returns a NEW vector with both components divided by `scalar`.
	 * @example
	 * new Vector2(8, 6).DivideScalar(2) // (4, 3)
	 */
	public DivideScalar(scalar: number): Vector2
	/**
	 * MUTATES: divides both components by `scalar`. Returns `this`.
	 * @example
	 * vec.DivideScalarForThis(2)
	 */
	public DivideScalarForThis(scalar: number): Vector2
	/**
	 * MUTATES: divides the x component by `scalar`. Returns `this`.
	 * @example
	 * vec.DivideScalarX(2)
	 */
	public DivideScalarX(scalar: number): Vector2
	/**
	 * MUTATES: divides the y component by `scalar`. Returns `this`.
	 * @example
	 * vec.DivideScalarY(2)
	 */
	public DivideScalarY(scalar: number): Vector2
	/**
	 * Returns a NEW vector equal to `this * scalar + vec`; does not mutate `this`.
	 * @example
	 * new Vector2(1, 1).MultiplyAdd(new Vector2(2, 2), 3) // (5, 5)
	 */
	public MultiplyAdd(vec: Vector2, scalar: number): Vector2
	/**
	 * MUTATES: sets this vector to `this * scalar + vec2`. Returns `this`.
	 * @example
	 * vec.MultiplyAddForThis(new Vector2(2, 2), 3)
	 */
	public MultiplyAddForThis(vec2: Vector2, scalar: number): Vector2
	/**
	 * Returns the squared distance to `vec`; cheaper than `Distance` (no sqrt).
	 * @example
	 * new Vector2(0, 0).DistanceSqr(new Vector2(3, 4)) // 25
	 */
	public DistanceSqr(vec: Vector2): number
	/**
	 * Returns the Euclidean distance to `vec`.
	 * @example
	 * new Vector2(0, 0).Distance(new Vector2(3, 4)) // 5
	 */
	public Distance(vec: Vector2): number
	/**
	 * Projects this point onto the line/segment through `segmentStart`–`segmentEnd`, returning both
	 * the clamped on-segment point and the unclamped line point.
	 * @example
	 * const info = pt.ProjectOn(new Vector2(0, 0), new Vector2(10, 0))
	 */
	public ProjectOn(segmentStart: Vector2, segmentEnd: Vector2): ProjectionInfo
	/**
	 * Squared distance from this point to the segment; if `onlyIfOnSegment` is `true` and the
	 * projection falls outside the segment, returns `Number.MAX_VALUE`.
	 * @example
	 * pt.DistanceSegmentSqr(new Vector2(0, 0), new Vector2(10, 0))
	 */
	public DistanceSegmentSqr(segmentStart: Vector2, segmentEnd: Vector2, onlyIfOnSegment?: boolean): number
	/**
	 * Distance from this point to the segment; if `onlyIfOnSegment` is `true` and the projection
	 * falls outside the segment, returns `Number.MAX_VALUE`.
	 * @example
	 * pt.DistanceSegment(new Vector2(0, 0), new Vector2(10, 0))
	 */
	public DistanceSegment(segmentStart: Vector2, segmentEnd: Vector2, onlyIfOnSegment?: boolean): number
	/**
	 * Returns a NEW vector perpendicular to this one; `isX` (default `true`) selects which of the
	 * two 90° rotations to return.
	 * @example
	 * new Vector2(1, 0).Perpendicular() // (0, 1)
	 */
	public Perpendicular(isX?: boolean): Vector2
	/**
	 * Returns the vector's angle, in degrees by default or radians when `radian` is `true`.
	 * @example
	 * new Vector2(0, 1).PolarAngle() // 90
	 */
	public PolarAngle(radian?: boolean): number
	/**
	 * Returns a NEW vector rotated by `angle` radians about the origin.
	 * @example
	 * new Vector2(1, 0).Rotated(Math.PI / 2) // (~0, 1)
	 */
	public Rotated(angle: number): Vector2
	/**
	 * Returns a NEW point offset from this one by `distance` along direction `rotation`.
	 * @example
	 * pos.Rotation(hero.Forward, 100) // 100 units ahead
	 */
	public Rotation(rotation: Vector2, distance: number): Vector2
	/**
	 * Like `Rotation`, but converts `rotation` from degrees to radians first; returns a NEW vector.
	 * @example
	 * pos.RotationRad(dir, 100)
	 */
	public RotationRad(rotation: Vector2, distance: number): Vector2
	/**
	 * Returns a NEW point `distance` units ahead of this one along `angle` radians.
	 * @example
	 * pos.InFrontFromAngle(hero.RotationRad, 100)
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector2
	/**
	 * Returns the angle in radians (in `[0, π]`) between the direction to `vec` and `vecAngleRadian`.
	 * @example
	 * from.FindRotationAngle(to, hero.RotationRad)
	 */
	public FindRotationAngle(vec: Vector2, vecAngleRadian?: number): number
	/**
	 * Returns the time to rotate to this vector's angle for a given turn rate (`Angle / (30 * rotSpeed)`).
	 * @example
	 * dir.RotationTime(hero.TurnRate)
	 */
	public RotationTime(rotSpeed: number): number
	/**
	 * Returns the smallest angle in degrees (in `[0, 180]`) between this vector's and `vec`'s polar angles.
	 * @example
	 * a.AngleBetweenVectors(b)
	 */
	public AngleBetweenVectors(vec: Vector3): number
	/**
	 * Returns the angle in radians between this facing vector and `front`; `0` if either has zero length.
	 * @example
	 * hero.Forward.AngleBetweenFaces(enemy.Forward)
	 */
	public AngleBetweenFaces(front: Vector2): number
	/**
	 * Returns a NEW unit vector pointing from this vector toward `target`.
	 * @example
	 * from.GetDirectionTo(to) // normalized direction
	 */
	public GetDirectionTo(target: Vector2): Vector2
	/**
	 * Returns a NEW point extended `distance` units from this vector toward `vec`.
	 * @example
	 * from.Extend(to, 100) // 100 units from `from` toward `to`
	 */
	public Extend(vec: Vector2, distance: number): Vector2
	/**
	 * Returns a NEW copy of this vector.
	 * @example
	 * const copy = vec.Clone()
	 */
	public Clone(): Vector2
	/**
	 * True if the distance to `vec` is less than `range`.
	 * @example
	 * hero.Position.IsInRange(enemy.Position, 600)
	 */
	public IsInRange(vec: Vector2, range: number): boolean
	/**
	 * Returns the vector from `vecs` nearest to this one; assumes `vecs` is non-empty.
	 * @example
	 * hero.Position.Closest(creepPositions)
	 */
	public Closest(vecs: Vector2[]): Vector2
	/**
	 * True if this point lies strictly inside the axis-aligned rectangle at `(x, y)` with `width`/`height`.
	 * @example
	 * pt.IsUnderRectangle(0, 0, 100, 50)
	 */
	public IsUnderRectangle(x: number, y: number, width: number, height: number): boolean
	/**
	 * Returns a NEW vector with both components converted from radians to degrees.
	 * @example
	 * new Vector2(Math.PI, 0).RadiansToDegrees() // (180, 0)
	 */
	public RadiansToDegrees(): Vector2
	/**
	 * Returns a NEW vector with both components converted from degrees to radians.
	 * @example
	 * new Vector2(180, 0).DegreesToRadians() // (Math.PI, 0)
	 */
	public DegreesToRadians(): Vector2
	/**
	 * Returns a NEW vector linearly interpolated from this toward `target` by `amount` (`0`=this, `1`=target).
	 * @example
	 * new Vector2(0, 0).Lerp(new Vector2(10, 0), 0.5) // (5, 0)
	 */
	public Lerp(target: Vector2, amount: number): Vector2
	/**
	 * Returns the components as a `[x, y]` tuple.
	 * @example
	 * new Vector2(1, 2).toArray() // [1, 2]
	 */
	public toArray(): [number, number]
	/**
	 * JSON serialization hook; returns the `[x, y]` tuple.
	 * @example
	 * JSON.stringify(new Vector2(1, 2)) // "[1,2]"
	 */
	public toJSON(): [number, number]
	/**
	 * Writes the components to two consecutive floats in the shared IOBuffer at `offset`; always returns `true`.
	 * @example
	 * vec.toIOBuffer(0)
	 */
	public toIOBuffer(offset?: number): true
}
