// AUTO-GENERATED - do not edit.
declare class FakeUnit {
	public readonly Index: number
	public readonly PredictionAngles: Vector3
	public readonly PredictedPosition: Vector3
	public Name: string
	public Level: number
	public ModelName: string
	public ParticlePath: string
	public PlayerID: number
	public PredictionMoveSpeed: number
	public LastPredictedPositionUpdate: number
	public LastRealPredictedPositionUpdate: number
	public get Angles(): Vector3
	public get PlayerCustomData(): Nullable<PlayerCustomData>
	public get BaseAttackRange(): number
	public get MoveSpeed(): number
	public SerialMatches(serial: number): boolean
	public HandleMatches(handle: number): boolean
	public EntityMatches(ent: Entity): boolean
	public UpdateName(): void
}
declare const FakeUnits: FakeUnit[]
