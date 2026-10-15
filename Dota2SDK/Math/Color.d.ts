// AUTO-GENERATED - do not edit.
/** An RGBA color with 8-bit channels (0-255), packed into a single 32-bit integer. */
declare class Color {
	/**
	 * Builds a Color from a packed 32-bit RGBA integer (`0xAABBGGRR` byte order). `undefined` yields
	 * the default color.
	 * @example
	 * const c = Color.FromNumber(0xff0000ff) // red, opaque
	 */
	public static FromNumber(num: Nullable<number>): Color
	/**
	 * The five standard Dire player colors, indexed by team slot.
	 * @example
	 * const c = Color.PlayerColorDire[0] // pink
	 */
	public static get PlayerColorDire(): Color[]
	/**
	 * The five standard Radiant player colors, indexed by team slot.
	 * @example
	 * const c = Color.PlayerColorRadiant[0] // blue
	 */
	public static get PlayerColorRadiant(): Color[]
	/** A new opaque black color (0, 0, 0). */
	public static get Black(): Color
	/** A new opaque red color (255, 0, 0). */
	public static get Red(): Color
	/** A new opaque green color (0, 255, 0). */
	public static get Green(): Color
	/** A new opaque blue color (0, 0, 255). */
	public static get Blue(): Color
	/** A new opaque royal-blue color (78, 121, 248). */
	public static get RoyalBlue(): Color
	/** A new opaque light-blue color (91, 199, 255). */
	public static get LightBlue(): Color
	/** A new opaque yellow color (255, 255, 0). */
	public static get Yellow(): Color
	/** A new opaque orange color (255, 128, 0). */
	public static get Orange(): Color
	/** A new opaque fuchsia color (255, 0, 255). */
	public static get Fuchsia(): Color
	/** A new opaque aqua color (0, 255, 255). */
	public static get Aqua(): Color
	/** A new opaque dark-gray color (90, 90, 90). */
	public static get BlackGray(): Color
	/** A new opaque gray color (128, 128, 128). */
	public static get Gray(): Color
	/** A new opaque light-gray color (190, 190, 190). */
	public static get LightGray(): Color
	/** A new opaque white color (255, 255, 255). */
	public static get White(): Color
	/** Shared opaque white instance. Do not mutate; treat as read-only. */
	public static WhiteReadonly: Color
	/** Shared fully-transparent black instance (all channels 0). Do not mutate; treat as read-only. */
	public static ZeroReadonly: Color
	/**
	 * Inverse of {@link toUint32}: rebuilds a Color from a packed 32-bit integer. A zero alpha byte is
	 * promoted to fully opaque (255) unless the whole value is 0.
	 * @example
	 * const c = Color.fromUint32(0x00ff0000) // blue, forced opaque
	 */
	public static fromUint32(num: number): Color
	/** The packed 32-bit RGBA value backing this color; every channel getter/setter reads and writes it. */
	public data32: number
	/**
	 * Creates a color from individual channels (0-255), each masked to a byte. Alpha defaults to 255
	 * (opaque); pass `u32` to seed the packed value directly and ignore r/g/b/a.
	 * @example
	 * const c = new Color(255, 128, 0) // opaque orange
	 */
	constructor(r?: number, g?: number, b?: number, a?: number, u32?: undefined | number)
	/** Red channel (0-255). @example const red = color.r */
	public get r(): number
	/** Sets the red channel; the value is clamped to 0-255. @example color.r = 128 */
	public set r(v: number)
	/** Green channel (0-255). @example const green = color.g */
	public get g(): number
	/** Sets the green channel; the value is clamped to 0-255. @example color.g = 128 */
	public set g(v: number)
	/** Blue channel (0-255). @example const blue = color.b */
	public get b(): number
	/** Sets the blue channel; the value is clamped to 0-255. @example color.b = 128 */
	public set b(v: number)
	/** Alpha channel (0-255). @example const alpha = color.a */
	public get a(): number
	/** Sets the alpha channel; the value is clamped to 0-255. @example color.a = 128 */
	public set a(v: number)
	/**
	 * Overwrites the packed 32-bit value directly and returns `this` (mutates).
	 * @example
	 * color.Set32(0xff0000ff) // red, opaque
	 */
	public Set32(int32: number): Color
	/**
	 * Sets all four channels (0-255) at once and returns `this` (mutates). Alpha defaults to 255.
	 * @example
	 * color.SetColor(255, 128, 0) // opaque orange
	 */
	public SetColor(r?: number, g?: number, b?: number, a?: number): Color
	/**
	 * Sets the red channel (0-255) and returns `this` (mutates).
	 * @example
	 * color.SetR(128)
	 */
	public SetR(r: number): Color
	/**
	 * Sets the green channel (0-255) and returns `this` (mutates).
	 * @example
	 * color.SetG(128)
	 */
	public SetG(g: number): Color
	/**
	 * Sets the blue channel (0-255) and returns `this` (mutates).
	 * @example
	 * color.SetB(128)
	 */
	public SetB(b: number): Color
	/**
	 * Sets the alpha channel and returns `this` (mutates); the value is clamped to 0-255.
	 * @example
	 * color.SetA(128)
	 */
	public SetA(a: number): Color
	/**
	 * Returns `true` if the other color has an identical packed value (all channels equal).
	 * @example
	 * Color.Red.Equals(new Color(255, 0, 0)) // true
	 */
	public Equals(col: Color): boolean
	/**
	 * Returns a new Color with the same channel values (independent copy).
	 * @example
	 * const copy = color.Clone()
	 */
	public Clone(): Color
	/**
	 * Copies this color's channels into `color` and returns that target (mutates the argument).
	 * @param color The destination color
	 * @returns the destination color
	 * @example
	 * source.CopyTo(dest) // dest now equals source
	 */
	public CopyTo(color: Color): Color
	/**
	 * Copies `color`'s channels into this color and returns `this` (mutates).
	 * @param color The source color
	 * @returns this color
	 * @example
	 * dest.CopyFrom(source) // dest now equals source
	 */
	public CopyFrom(color: Color): Color
	/**
	 * Returns the channels as a `[r, g, b, a]` tuple (each 0-255).
	 * @example
	 * Color.Red.toArray() // [255, 0, 0, 255]
	 */
	public toArray(): [number, number, number, number]
	/**
	 * Returns the packed 32-bit RGBA value (`0xAABBGGRR` byte order).
	 * @example
	 * const packed = color.toUint32()
	 */
	public toUint32(): number
	/**
	 * JSON serialization hook; returns the `[r, g, b, a]` tuple.
	 * @example
	 * JSON.stringify(Color.Red) // "[255,0,0,255]"
	 */
	public toJSON(): [number, number, number, number]
}
