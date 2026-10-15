// AUTO-GENERATED - do not edit.
declare class Roshan extends Unit {
	public readonly Index: number
	public static HP: number
	public static MaxHP: number
	public static HPRegenCounter: number
	public static Spawner: Nullable<RoshanSpawner>
	public static Instance: Nullable<Unit | FakeUnit>
	public static readonly BaseHP = 6000
	public static readonly StaticMoveSpeed = 270
	public static readonly HPChangedPerMinute = 130
	public static readonly StaticAngles: QAngle
	public static get Angles(): Vector3
	public static get MoveSpeed(): number
	public static get HPRegen(): number
	public PredictionMoveSpeed: number
	public readonly PredictionAngles: QAngle
	public GoldenRoshan: boolean
	public get Angles(): QAngle
	public get MoveSpeed(): number
	public get RingRadius(): number
	public get Position(): Vector3
	public get HealthBarSize(): Vector2
	public get HealthBarPositionCorrection(): Vector2
}
