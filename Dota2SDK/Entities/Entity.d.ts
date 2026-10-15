// AUTO-GENERATED - do not edit.
declare var LocalPlayer: Nullable<Player>
declare let GameRules: Nullable<CGameRules>
declare class Entity implements INativeEntity {
	public readonly Index: number
	public CreateTime: number
	public readonly MaxHP: number
	public readonly PlaybackRate: number
	public readonly CBodyComponent_: Nullable<EntityPropertiesNode>
	public HP: number
	public HPPrediction: number
	public IsValid: boolean
	public ClassName: string
	public ModelName: string
	public Children: Entity[]
	public IsVisible: boolean
	public IsHideWorldHud: boolean
	public IsFogVisible: boolean
	public IsShop: boolean
	public IsUnit: boolean
	public IsAbility: boolean
	public IsGameRules: boolean
	public IsTree: boolean
	public IsTempTree: boolean
	public DeltaZ: number
	public AnimationTime: number
	public ModelScale: number
	public BecameDormantTime: number
	public NotVisibleTime: number
	public RotationDifference: number
	public PreviousRotationDifference: number
	public HierarchyAttachName: number
	public Attachments: string[]
	public ModelData: Nullable<ModelData>
	public Animations: AnimationData[]
	public Team: Team
	public LifeState: LifeState
	public LastLifeStateUpdate: number
	/**
	 * @private NOTE: this is internal field, use CreateTime
	 * @deprecated
	 */
	public FakeCreateTime_: number
	public readonly VisualPosition: Vector3
	public readonly NetworkedPosition: Vector3
	public readonly NetworkedPosition_: Vector3
	public readonly VisualAngles: QAngle
	/**
	 * Filled from the visual stream. Dota's stream carries only position and angles, so this stays
	 * zero - it exists because the shared entity contract declares it.
	 */
	public readonly VisualVelocity: Vector3
	public readonly NetworkedAngles: QAngle
	public readonly NetworkedAngles_: QAngle
	public readonly PredictedPosition: Vector3
	public readonly VisualPredictedPosition: Vector3
	public LastPredictedPositionUpdate: number
	public LastRealPredictedPositionUpdate: number
	/**
	 * @description added for compatibility (icore)
	 * @deprecated
	 */
	public readonly FogVisiblePosition: Vector3
	public readonly PreviousNetworkedAngles_: number[]
	public PositionHistoryIndex: number
	public readonly BoundingBox: AABB
	public readonly SpawnPosition: Vector3
	/** @private NOTE: this is internal field, use Name */
	public Name_: string
	/** @private NOTE: this is internal field, use Owner or OwnerEntity */
	public Owner_: number
	public OwnerEntity: Nullable<Entity>
	/** @private NOTE: this is internal field, use ParentEntity */
	public Parent_: number
	public ParentEntity: Nullable<Entity>
	/** @private NOTE: this is internal field use Target */
	public TargetIndex_: number
	public AttachmentsHashMap: Nullable<Map<number, number>>
	/** @private NOTE: this is internal field */
	public FieldHandlers_: Nullable<Map<number, FieldHandler>>
	/** @private NOTE: this is internal field */
	public Properties_: EntityPropertiesNode
	/**
	 * @private NOTE: this is internal field
	 *
	 * Whether where this entity stands still has to be worked out. A move arrives as several
	 * fields of one update - the cell and the offset in it per axis, the rotation - and each
	 * one walked the entity's whole hierarchy again, a transform per node, for the same place.
	 * A field that moves the entity raises this, and the walk happens once, when the update is
	 * done with.
	 */
	public PositionsStale_: boolean
	/**
	 * @deprecated use IsHideWorldHud
	 */
	public get HideHud(): boolean
	public get CustomGlowColor(): Nullable<Color>
	public set CustomGlowColor(val: Nullable<Color>)
	public get CustomDrawColor(): Nullable<[Color, RenderMode]>
	public set CustomDrawColor(val: Nullable<[Color, RenderMode]>)
	public get Name(): string
	public get Owner(): Nullable<Entity>
	public get RootOwner(): Nullable<Entity>
	public get Target(): Nullable<Entity>
	public get Position(): Vector3
	public get RealPosition(): Vector3
	public get Angles(): QAngle
	public get NetworkedRotation(): number
	public get Rotation(): number
	public get HPPercent(): number
	public get HPPercentDecimal(): number
	public get IsAlive(): boolean
	public get RotationRad(): number
	public get NetworkedRotationRad(): number
	public get IsNeutral(): boolean
	public get MoveSpeed(): number
	/** @deprecated Use MoveSpeed */
	public get Speed(): number
	/**
	 * @deprecated
	 */
	public get CollisionRadius(): number
	public get ProjectileCollisionSize(): number
	public get RingRadius(): number
	public get CustomNativeID(): number
	public get Handle(): number
	public get Forward(): Vector3
	public SerialMatches(serial: number): boolean
	public HandleMatches(handle: number): boolean
	public EntityMatches(ent: Entity): boolean
	public Distance(vec: Vector3 | Entity): number
	public Distance2D(vec: Vector3 | Vector2 | Entity): number
	public DistanceSqr(vec: Vector3 | Entity): number
	public DistanceSqr2D(vec: Vector3 | Vector2 | Entity): number
	public AngleBetweenFaces(front: Vector3): number
	public InFront(distance: number): Vector3
	public InFrontFromAngle(angle: number, distance: number): Vector3
	public GetAngle(position: Vector3 | Entity, rotationDiff?: boolean, currPos?: Vector3): number
	public FindRotationAngle(vec: Vector3 | Entity): number
	/**
	 * Returned angle must be compared against Math.cos of respective angles
	 * Examples of use: Bulwark, Bristleback, Backstab
	 */
	public GetSourceAngleToForward(source: Vector3 | Entity, rotationDiff?: boolean, currPos?: Vector3): number
	public IsInRange(ent: Vector3 | Vector2 | Entity, range: number): boolean
	public Closest(ents: Entity[]): Entity
	public ClosestGroup(groups: Entity[][], callback: (entity: Entity[]) => Vector3): [Entity[], Vector3]
	public IsEnemy(ent?: Entity): boolean
	public OnModelUpdated(): void
	public CalculateActivityModifiers(_activity: GameActivity, _ar: string[]): void
	public GetAnimationID(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<number>
	public GetAnimation(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<AnimationData>
	public GetAttachmentPosition(name: string, activity?: GameActivity, sequenceNum?: number, time?: number, pos?: Vector3, ang?: QAngle, scale?: number): Vector3
	/** @deprecated */
	public ForwardNativeProperties(_healthBarOffset: number): void
	public UpdatePositions(parentTransform?: Matrix3x4): void
	public CannotUseItem(_item: Item): boolean
	public toString(): string
	/**
	 * Recomputes the networked position from the body fields the game last sent, for after
	 * something else wrote it: a respawn point put on a hero the game keeps networking, a unit
	 * back in sight. The fields only reach their handlers when they change, so a standing unit
	 * would keep the written position until it moves.
	 */
	public RefreshPositionFromFields(): void
	public SetPosition(position: Vector3): void
	public SetAngles(qAngle: QAngle): void
}
