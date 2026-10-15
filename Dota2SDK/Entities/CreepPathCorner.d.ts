// AUTO-GENERATED - do not edit.
declare class CreepPathCorner extends Entity {
	public OriginPosition: Vector3
	public Spawner: Nullable<LaneCreepSpawner>
	public Referencing: Set<CreepPathCorner>
	public TargetPath: Nullable<CreepPathCorner>
	public SelfTargetName: string
	public TargetName: Nullable<string>
	public get IsAlive(): boolean
	public set CustomGlowColor(_: Nullable<Color>)
	public set CustomDrawColor(_: Nullable<[Color, RenderMode]>)
}
