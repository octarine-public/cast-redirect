// AUTO-GENERATED - do not edit.
declare class NeutralSpawnerBox {
	public readonly Spawner: NeutralSpawner
	public static readonly Sleeper: GameSleeper
	public static get TimeLeft(): number
	public static get RemainingTime(): number
	protected static get SpawnInterval(): number
	protected get IsValidGame(): boolean
	protected static get IsSpawnTime(): boolean
	public readonly Creeps: Creep[]
	public readonly Attackers: Unit[]
	public readonly Type: NeutralSpawnerType
	public Hits: number
	public IsEmpty: boolean
	public IsStack: boolean
	public LastAttackTime: number
	public TotalCreepAvgGold: number
	protected IsInitialSpawn: boolean
	protected IsStackMoveAttack: boolean
	public get IsValidSpawner(): boolean
	public get Team(): Team
	public get IsAlly(): boolean
	public get Position(): Vector3
	public get EndPosition(): Vector3
	public get StackEndTime(): number
	public get StackStartTime(): number
	public get ValidCreeps(): Creep[]
	protected get SpawnerTypeString(): "Small" | "Medium" | "Large" | "Ancient" | "Unknown"
	public CanBeStack(unit: Unit): boolean
	public Stack(unit: Unit, creeps: Creep[], endPosition: Vector3): boolean
	public PostDataUpdate(): void
	public EntityPositionChanged(entity: Unit): void
	public UnitPropertyChanged(_entity: Creep): void
	public EntityCreated(entity: Creep): void
	public EntityDestroyed(entity: NeutralSpawner | Unit): void
	public LifeStateChanged(unit: Creep): void
	public DrawDebug(pSDK: ParticlesSDK): void
	public AttackStarted(unit: Unit): void
}
