// AUTO-GENERATED - do not edit.
declare class RuneSpawner extends Entity {
	public static readonly Locations: [Vector3, ERuneSpawnerLocation][]
	/** @readonly */
	public LastSpawnTime: number
	/** @readonly */
	public NextSpawnTime: number
	/** @readonly */
	public readonly Type: RuneSpawnerType
	/** @readonly */
	public Location: ERuneSpawnerLocation
	public get ModuleTime(): number
	public get Remaining(): number
	protected get GameTime(): number
	protected get SpawnsTime(): [number, number]
	public MaxDuration(timeType?: "seconds" | "minutes"): number
	protected CalculateNextSpawnTime(spawnTimeSec: number): number
	public UpdatePositions(parentTransform?: Matrix3x4): void
	public UpdatePositionByEntityCreated(): void
}
