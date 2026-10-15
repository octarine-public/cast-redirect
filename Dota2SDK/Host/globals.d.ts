// AUTO-GENERATED - do not edit.
// Ambient globals provided by octarine-utils (L0). Prototype augmentations below are applied as a
// side-effect when the library is evaluated (Prototypes/*); base types and host file primitives are
// declarations only. Consumers see these without importing.

type Nullable<T> = T | undefined
type Constructor<T> = new (...args: any[]) => T
type RecursiveMap = Map<string, RecursiveMapValue>
type ProtobufFieldType =
	string | number | bigint | boolean | RecursiveProtobuf | Uint8Array
type RecursiveProtobuf = Map<string, ProtobufFieldType[] | ProtobufFieldType>
type RecursiveMapValue =
	RecursiveMap | RecursiveMapValue[] | Uint8Array | string | bigint | number | boolean

// Native host file primitives (game-agnostic)
declare function fexists(path: string): boolean
declare function parseKV(path: string, block?: string | number): RecursiveMap
declare function parseKV(data: Uint8Array, block?: string | number): RecursiveMap
declare function parseKVBlock(data: Uint8Array): RecursiveMap
declare function parseKVBlock(path: string): RecursiveMap
declare function MurmurHash2(str: string, seed: number): number
declare function setTimeout(callback: () => void, delay?: number): number
declare function setInterval(callback: () => void, delay?: number): number
declare function clearTimeout(handle: number): void
declare function clearInterval(handle: number): void
declare function queueMicrotask(callback: () => void): void
declare const performance: { now(): number }
declare function fread(path: string, binary: boolean): Nullable<ArrayBuffer | string>
declare function fread(path: string, binary: true): Nullable<ArrayBuffer>
declare function fread(path: string, binary: false): Nullable<string>

// Native shared IO buffer (game-agnostic serialization scratch)
declare var IOBuffer: Float32Array
declare var IOBufferView: DataView

// Native host high-resolution monotonic clock, in milliseconds
declare function hrtime(): number

declare interface BigInt {
	hasBit(bit: bigint): boolean
	hasMask(mask: bigint): boolean
	toMask: number[]
	toInt16: bigint
}

declare interface Number {
	hasBit(bit: number): boolean
	/** True if bit `this` is set in a packed uint32 bit-vector `mask` — word (N>>>5), bit (N&31). */
	hasBitInMask(mask: number[]): boolean
	hasMask(mask: number): boolean
	/** popcount */
	bitCount(): number
	toMask: number[]
	toInt16: number
}

declare interface String {
	/**
	 * Encodes this string as UTF-8 bytes.
	 * @example
	 * const bytes = "héllo".toUTF8()
	 */
	toUTF8(): Uint8Array
	/** Streams this string's UTF-8 bytes to a callback, one byte at a time. */
	toUTF8Cb(writeByte: (b: number) => void): void
}

declare interface Map<K, V> {
	/**
	 * Deep-converts this Map (and any nested Maps/arrays) into a plain object. Pass a type argument
	 * to type the result; defaults to `Record<string, unknown>`.
	 * @example
	 * new Map([["a", 1]]).toObject() // { a: 1 }
	 */
	toObject<T = Record<string, unknown>>(): T
}

declare interface Array<T> {
	/**
	 * In-place quicksort by a comparator (`< 0` = a before b). Returns this array.
	 * @example
	 * arr.qsort((a, b) => a - b)
	 */
	qsort(cmpFunc: (a: T, b: T) => number, left?: number, right?: number): T[]
	/** Mutating sort by key(s). */
	orderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/** Non-mutating sort by key(s). */
	toOrderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	orderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	toOrderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/** Lowest-scoring element in a single pass (≈ orderBy(cb)[0]). */
	orderByFirst(callback: (obj: T) => number): Nullable<T>
	/** Removes the first matching element; true if removed. */
	remove(value: T, useDelete?: boolean): boolean
	/** Removes the first element matching the callback; true if removed. */
	removeCallback(
		callback: (value: T, index: number, obj: T[]) => boolean,
		useDelete?: boolean
	): boolean
	count(element: T): number
	compare(array: T[]): boolean
	compare(array: T[], unique: boolean): boolean
	contains(array: T[]): boolean
	except(array: T[]): T[]
	intersect(array: T[]): T[]
	hasIntersect(array: T[]): boolean
	clear(): void
}

declare interface Math {
	radianToDegrees(radian: number): number
	degreesToRadian(degrees: number): number
	lerp(start: number, end: number, amount: number): number
	smoothStep(amount: number): number
	clamp(value: number, min: number, max: number): number
	remapRange(
		value: number,
		min: number,
		max: number,
		minResult: number,
		maxResult: number
	): number
	randomRange(min: number, max: number, skew?: number): number
	randomRangeGaussian(min: number, max: number, skew?: number): number
	/**
	 * Converts an RGB color (channels in `[0, 255]`) to HSL (components in `[0, 1]`).
	 * @example
	 * const [h, s, l] = Math.rgbToHSL(255, 128, 0)
	 */
	rgbToHSL(r: number, g: number, b: number): [number, number, number]
	/**
	 * Converts an HSL color (components in `[0, 1]`) to RGB (channels in `[0, 255]`).
	 * @example
	 * const [r, g, b] = Math.hslToRGB(0.083, 1, 0.5)
	 */
	hslToRGB(h: number, s: number, l: number): [number, number, number]
	/**
	 * Converts an RGB color (channels in `[0, 255]`) to HSV (components in `[0, 1]`).
	 * @example
	 * const [h, s, v] = Math.rgbToHSV(255, 128, 0)
	 */
	rgbToHSV(r: number, g: number, b: number): [number, number, number]
	/**
	 * Converts an HSV color (components in `[0, 1]`) to RGB (channels in `[0, 255]`). Pass
	 * `isHueDegrees` for a hue in `[0, 360)`, and `isRound` for whole channels.
	 * @example
	 * const [r, g, b] = Math.hsvToRGB(0.083, 1, 1)
	 * const [r2, g2, b2] = Math.hsvToRGB(30, 1, 1, true, true)
	 */
	hsvToRGB(
		h: number,
		s: number,
		v: number,
		isHueDegrees?: boolean,
		isRound?: boolean
	): [number, number, number]
	/**
	 * Returns `currentValue` as a percentage: `currentValue / maxValue * 100`, or `currentValue * 100`
	 * when `maxValue` is omitted. Non-finite inputs yield `0`.
	 * @example
	 * Math.toPercentage(30, 120) // 25
	 */
	toPercentage(currentValue: number, maxValue?: number): number
	/**
	 * Formats a duration in seconds as `m:ss` (or `m ss` in chat mode).
	 * @example
	 * Math.formatTime(95) // "1:35"
	 */
	formatTime(time: number, isChat?: boolean): string
}

declare const __OCT_PACKAGE_ROOT__: string
declare function LoadFont(path: string, isFallback: boolean, weight?: number): boolean
declare function SendListenerPerf(line: string, took: number, gameSecond: number): void

// The benchmark recorder bridge, present only in a build that carries the recorder
// (octarine-core, OCT_ENABLE_BENCHMARK). `Managers/Benchmark.ts` wraps it; a script should reach for that.
declare const BENCHMARK_ENABLED: boolean
declare function benchmarkSubmit(text: string): void
declare function benchmarkMark(label: string): void
