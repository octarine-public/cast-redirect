// AUTO-GENERATED - do not edit.
declare const SharedSDK: {
	readonly AABB: typeof AABB
	readonly AbortController: typeof AbortController
	readonly AbortSignal: typeof AbortSignal
	readonly Benchmark: CBenchmark
	readonly CMaterial: typeof CMaterial
	readonly Capsule2D: typeof Capsule2D
	readonly Circle2D: typeof Circle2D
	readonly Color: typeof Color
	readonly EventEmitter: typeof EventEmitter
	readonly EventPriority: typeof EventPriority
	readonly HSVToRGB: (h: number, s: number, v: number) => [number, number, number]
	readonly Headers: typeof Headers
	readonly KeyNames: typeof KeyNames
	readonly LinearInterceptTime: (from: Vector2, anchor: Vector2, velocity: Vector2, speed: number, maxTime?: number) => Nullable<number>
	readonly LinearInterceptTime3D: (from: Vector3, anchor: Vector3, velocity: Vector3, speed: number, maxTime?: number) => Nullable<number>
	readonly LocalStorage: typeof LocalStorage
	readonly LocalStorageError: typeof LocalStorageError
	readonly LocalStorageErrorCode: typeof LocalStorageErrorCode
	readonly MapToObject: (map: Map<unknown, unknown>) => Record<string, unknown>
	readonly MatchProduct: typeof MatchProduct
	readonly MatchProductNames: (products: number) => string[]
	readonly MatchProductOtherMask: number
	readonly MaterialFlags: typeof MaterialFlags
	readonly Matrix3x4: typeof Matrix3x4
	readonly MediaSessionError: typeof MediaSessionError
	readonly MenuLanguageID: typeof MenuLanguageID
	readonly MinimalEnclosingCircle: (points: readonly Vector2[]) => Circle2D
	readonly NetError: typeof NetError
	readonly NetErrorCode: typeof NetErrorCode
	readonly ParseMaterial: (path: string) => CMaterial
	readonly Polygon2D: typeof Polygon2D
	readonly Polygon3D: typeof Polygon3D
	readonly ProfileBegin: () => boolean
	readonly ProfileEnd: (name: string, source: Nullable<string>, active: boolean) => void
	readonly ProfilePause: () => number
	readonly ProfileResume: (started: number) => void
	readonly ProjectionInfo: typeof ProjectionInfo
	readonly QAngle: typeof QAngle
	readonly Quaternion: typeof Quaternion
	readonly RGBToHSV: (r: number, g: number, b: number) => [number, number, number]
	readonly React: typeof React
	readonly ReactReconciler: typeof ReactReconciler
	readonly Rectangle: typeof Rectangle
	readonly Response: typeof Response
	readonly Segment2D: typeof Segment2D
	readonly Sleeper: typeof Sleeper
	readonly StringToUTF8: (str: string) => Uint8Array
	readonly TextFlags: typeof TextFlags
	readonly Trapezoid2D: typeof Trapezoid2D
	readonly UTF8ToString: (bytes: ArrayBuffer | ArrayBufferView) => string
	readonly UniformRandomStream: typeof UniformRandomStream
	readonly VKeys: typeof VKeys
	readonly VMouseKeys: typeof VMouseKeys
	readonly VXMouseKeys: typeof VXMouseKeys
	readonly Vector2: typeof Vector2
	readonly Vector3: typeof Vector3
	readonly Vector4: typeof Vector4
	readonly WebSocket: typeof WebSocket
	readonly fetch: (url: string, init?: FetchInit) => Promise<Response>
	readonly matchProducts: () => Promise<MatchProductsSnapshot>
	readonly openLocalStorage: (name: string) => Promise<LocalStorage>
	readonly readJSON: <T = unknown>(path: string) => T
	readonly readMediaSession: (options?: MediaReadOptions) => Promise<MediaSessionSnapshot>
	readonly readNowPlaying: (options?: MediaReadOptions) => Promise<Nullable<NowPlaying>>
	readonly readPlayerVolume: (source?: string) => Promise<number>
	readonly sendMediaCommand: (command: MediaCommand, source?: string) => Promise<Nullable<number>>
	readonly tryFindFile: (path: string, callstackDepth?: number) => Nullable<string>
}
