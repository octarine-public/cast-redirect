// AUTO-GENERATED - do not edit.
declare class NeutralSpawnBox {
	public readonly properties: EntityPropertiesNode
	public readonly Angles: QAngle
	public readonly StackEnd: number
	public readonly StackStart: number
	public get MinBounds(): Vector3
	public get MaxBounds(): Vector3
	public get Center(): Vector3
	public get SpawnBoxOrigin(): Vector3
	public get CampType(): number
	public get CampName(): string
	public Includes(vec: Vector3): boolean
	/** Whether the box holds the point on the ground plane; the height of a `Vector3` is ignored. */
	public Includes2D(vec: Vector2 | Vector3): boolean
	public toJSON(): any
	protected ParseStackData(stackName: string): string
	protected SetAngleEvil(): void
	protected SetAngleGood(): void
}
