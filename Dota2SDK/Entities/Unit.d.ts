// AUTO-GENERATED - do not edit.
declare class Unit extends Entity {
	public static IsNpcVisibleState(state: bigint[], entId: number): boolean
	public static UpdateCellIsVisibleForEnemies(unit: Unit): void
	public readonly BaseHPRegen: number
	public readonly ManaRegen: number
	public readonly IsAncient: boolean
	public readonly NetworkedBaseArmor: number
	public readonly NetworkedBaseMagicResist: number
	public readonly CurrentShop: DOTA_SHOP_TYPE
	public readonly BKBChargesUsed: number
	public readonly AeonChargesUsed: number
	public readonly RefresherUseTime: number
	public readonly RefresherLastCooldown: number
	public readonly NetworkedBaseDayVision: number
	public readonly DeathTime: number
	public readonly HasStolenScepter: boolean
	public readonly HasUpgradeableAbilities: boolean
	public readonly IsDominatable: boolean
	public readonly CanBeRespawn: boolean
	public readonly BaseDamageMin: number
	public readonly BaseDamageMax: number
	public readonly AttackDamageMin: number
	public readonly AttackDamageMax: number
	public readonly IsMoving: boolean
	public readonly IsPhantom: boolean
	public readonly IsSummoned: boolean
	public readonly LastAttackTime: number
	public readonly LastDealtDamageTime: number
	public readonly NetworkBaseMoveSpeed: number
	public readonly NetworkBaseAttackRange: number
	public readonly NetworkBaseAttackTime: number
	public PredictedIsWaitingToSpawn: boolean
	public Mana: number
	public readonly MaxMana: number
	public readonly NetworkedBaseNightVision: number
	public readonly TauntCooldown: number
	public readonly TauntCooldown2: number
	public readonly XPBounty: number
	public readonly XPBountyExtra: number
	public readonly GoldBountyMin: number
	public readonly GoldBountyMax: number
	public readonly HealthBarOffsetOverride: number
	public HealthBarOffset_: Nullable<number>
	public readonly NetworkActivity: GameActivity
	public NetworkActivityPrev: GameActivity
	public NetworkActivityStartTime: number
	public readonly NetworkSequenceIndex: number
	public NetworkSequenceIndexPrev: number
	public SequenceParity: number
	public SequenceParityPrev: number
	public readonly StartSequenceCycle: number
	public readonly OwnerPlayerID: number
	public readonly Parity: number
	public readonly NetworkAttackDamageBonus: number
	public readonly UnitType: number
	public readonly AbilityPoints: number
	public readonly LastDispellTime: number
	public readonly RefresherChargesUsed: number
	public readonly TotalAbilityPoints: number
	/** @private NOTE: this is internal field use LastDamageTime */
	public LastDamageTime_: number
	public readonly ScepterUpgradeID: number
	public readonly ShardUpgradeID: number
	public Level: number
	public Agility: number
	public Intellect: number
	public Strength: number
	public TotalAgility: number
	public BaseTotalIntellect: number
	public TotalStrength: number
	public AttackCapabilities: number
	public UnitStateNetworked: bigint
	public IsWaitingToSpawn: boolean
	/** @private NOTE: this is internal field, use Spawner */
	public Spawner_: number
	public Spawner: Nullable<NeutralSpawner>
	public LastActivity: GameActivity
	public LastActivitySequenceVariant: number
	public LastAnimationStartTime: number
	public LastAnimationEndTime: number
	public LastAnimationRawCastPoint: number
	public LastAnimationCastPoint: number
	public LastAnimationPlaybackRate: number
	public LastAnimationIsAttack: boolean
	public LastAnimationCasted: boolean
	public IsInAnimation: boolean
	public LastGestureActivity: GameActivity
	public LastGestureSequenceVariant: number
	public LastGesturePlaybackRate: number
	public AttackTimeAtLastTick: number
	public AttackTimeLostToLastTick: number
	public YawVelocity: number
	public IsVisibleState: boolean
	public IsAttacking: boolean
	public IsVisibleForEnemiesLastTime: number
	public IsRoshan: boolean
	public IsCourier: boolean
	public IsHero: boolean
	public IsSpiritBear: boolean
	public IsCreep: boolean
	public IsTower: boolean
	public IsOutpost: boolean
	public IsBuilding: boolean
	public IsUnit: boolean
	public IsVisibleForTeamMask: number
	public UnitData: UnitData
	public IsTrueSightedForEnemies: boolean
	public HasModifierVisibleForEnemies: boolean
	public HasScepterModifier: boolean
	public HasShardModifier: boolean
	public CanBeHealed: boolean
	/** @private NOTE: this is internal field use Name */
	public UnitName_: string
	public PlayerID: number
	public HPRegenCounter: number
	public IsControllableByPlayerMask: bigint
	/** @private NOTE: this is internal field use MyWearables */
	public MyWearables_: number[]
	public MyWearables: Wearable[]
	/** @private NOTE: this is internal field use OwnerNPC */
	public OwnerNPC_: number
	/** @description The owner of the Unit. (example: Spirit Bear) */
	public OwnerNPC: Nullable<Unit>
	public cellIsVisibleForEnemies_: boolean
	public LastVisibleForEnemies: boolean
	public readonly Buffs: Modifier[]
	public readonly Inventory: Inventory
	public readonly ModifierManager: UnitModifierManager
	/** Position history, velocity and the ability version of this unit; updated once per tick. */
	public readonly Prediction: UnitPrediction
	public readonly Spells_: number[]
	public readonly Spells: Nullable<Ability>[]
	public readonly TotalItems_: number[]
	public readonly TotalItems: Nullable<Item>[]
	public readonly TPEndPosition: Vector3
	public readonly TPStartPosition: Vector3
	protected readonly ReplicatingOtherHeroModel_: number
	public get Armor(): number
	public get ArmorType(): ArmorType
	public get HPRegen(): number
	public get AttacksPerSecond(): number
	public get AttackAnimationPoint(): number
	public get AttackHasteFactor(): number
	public get AttackPoint(): number
	public get AttackBackswing(): number
	/** @deprecated Use SecondsPerAttack */
	public get AttackRate(): number
	public get AttackSpeed(): number
	public get ReplicatingOtherHeroModel(): Nullable<Unit>
	public get AttackDamageClassType(): AttackDamageType
	public get AttackDamageAverage(): number
	public get AttackProjectileSpeed(): number
	public get BaseAttackTime(): number
	public get BaseAttackRange(): number
	public get BaseAttackSpeed(): number
	public get BaseAttackSpeedIncrease(): number
	public get BaseAttackProjectileSpeed(): number
	public get BaseAttackAnimationPoint(): number
	public get BaseTurnRate(): number
	public get BaseMoveSpeed(): number
	public get BaseArmor(): number
	public get BaseBonusArmor(): number
	public get BonusArmorPerAgility(): number
	public get BaseMagicalResist(): number
	public get DayVisionRange(): number
	public get LastDamageTime(): number
	public get MoveSpeed(): number
	/**
	 * Velocity over the last server tick in units per second, derived from networked positions;
	 * zero while the unit is unseen or has just jumped.
	 */
	public get Velocity(): Vector3
	public get MagicalDamageResist(): number
	/** @deprecated Use MoveSpeed */
	public get Speed(): number
	public get SecondsPerAttack(): number
	public get StatusResistance(): number
	public get SpellAmp(): number
	public get SpellAmpTarget(): number
	public get EffSpellAmp(): number
	public get EffSpellAmpTarget(): number
	public get TotalIntellect(): number
	public get NightVisionRange(): number
	public get VisionRange(): number
	/** @deprecated Use DayVisionRange */
	public get DayVision(): number
	/** @deprecated Use NightVisionRange */
	public get NightVision(): number
	/** @deprecated Use VisionRange */
	public get Vision(): number
	public get Color(): Color
	public get MovementTurnRate(): number
	/**
	 * Returns a boolean value indicating if the Unit is a clone.
	 * @returns {boolean}
	 */
	public get IsClone(): boolean
	/**
	 * @description Determines if the instance is the current player's hero.
	 * @returns {boolean}
	 */
	public get IsMyHero(): boolean
	public get IsMovementImpaired(): boolean
	public get GoldBountyAverage(): number
	public get IsIllusion(): boolean
	/** @description e.g: Terror Blade conjure image */
	public get IsReflection(): boolean
	public get IsSuppressCrit(): boolean
	public get IsStrongIllusion(): boolean
	/** @deprecated use IsIllusion or IsStrongIllusion */
	public get IsHiddenIllusion(): boolean
	public get CanReincarnate(): boolean
	public get CanUseAllItems(): boolean
	public get IsFountainInvulnerable(): boolean
	public get IsTempestDouble(): boolean
	/** @deprecated use IsChargeOfDarkness */
	public get IsCharge(): boolean
	public get IsChargeOfDarkness(): boolean
	public get IsLinkensProtected(): boolean
	public get CanBeMainHero(): boolean
	public get IsRooted(): boolean
	public get IsCommandRestricted(): boolean
	public get CanUseBackpack(): boolean
	public get IgnoreMoveAndAttackOrders(): boolean
	public get IsUnslowable(): boolean
	public get IsDisarmed(): boolean
	public get IsAttackImmune(): boolean
	public get IsSilenced(): boolean
	public get IsMuted(): boolean
	public get IsAttacksAreMelee(): boolean
	public get IsStunned(): boolean
	public get IsNightmared(): boolean
	public get IsHexed(): boolean
	public get IsPassiveDisabled(): boolean
	public get IsTethered(): boolean
	public get IsInvisible(): boolean
	public get IsNoTeamMoveTo(): boolean
	public get IsInvulnerable(): boolean
	public get IsUntargetable(): boolean
	public get IsMagicImmune(): boolean
	public get IsDebuffImmune(): boolean
	public get IsDeniable(): boolean
	public get IsAttackReady(): boolean
	public get IsAttackImpaired(): boolean
	public get HasAegis(): boolean
	public get HasIntellect(): boolean
	public get HasNoHealthBar(): boolean
	public get HasNoCollision(): boolean
	/**
	 * Whether ground units have to walk around this one: false for flyers, for units without
	 * collision, and for dummies such as the announcer.
	 */
	public get BlocksPathing(): boolean
	public get IsBlind(): boolean
	public get IsTrueSightImmune(): boolean
	public get IsInFadeTime(): boolean
	public get IsControllableByAnyPlayer(): boolean
	/** @deprecated */
	public get IsRangeAttacker(): boolean
	public get HasShard(): boolean
	public get HasScepter(): boolean
	public get HasInventory(): boolean
	public get HealthBarOffset(): number
	public get WorkshopName(): string
	public get InvisibilityLevel(): number
	public get IsControllable(): boolean
	public get IsMelee(): boolean
	public get IsRanged(): boolean
	public get IsSpawned(): boolean
	public get ManaPercent(): number
	public get ManaPercentDecimal(): number
	public get MinimapIcon(): string
	public get MinimapIconSize(): number
	/** The networked unit states plus the ones expected after the local player's own casts (`ExpectState`). */
	public get UnitStateMask(): bigint
	public get UnitState(): modifierstate[]
	public get IsGhost(): boolean
	public get IsEthereal(): boolean
	public get CanUseAbilitiesInInvisibility(): boolean
	public get Items(): Item[]
	public get HullRadius(): number
	public get CollisionPadding(): number
	public get PaddedCollisionRadius(): number
	public get ProjectileCollisionSize(): number
	public get PrimaryAttribute(): Attributes
	/** @deprecated use PrimaryAttribute */
	public get PrimaryAtribute(): Attributes
	public get IsRotating(): boolean
	public get IsChanneling(): boolean
	public get IsInAbilityPhase(): boolean
	public get PhysicalDamageResist(): number
	public get Name(): string
	public get RealPosition(): Vector3
	public get Position(): Vector3
	public get HasFlyingVision(): boolean
	public get HasVisualShield(): boolean
	public get ShouldDoFlyHeightVisual(): boolean
	public get SlowResistance(): number
	/** @deprecated use HasVisualShield */
	public get IsShield(): boolean
	public get IsFlyingVisually(): boolean
	public get IsGloballyTargetable(): boolean
	public get ShouldUnifyOrders(): boolean
	public get HealthBarSize(): Vector2
	public get HealthBarPositionCorrection(): Vector2
	public get HeroFacet(): string
	public get IsConvertManaCostToHPCost(): boolean
	public get IsAvoidTotalDamage(): boolean
	/** Where the unit is heading on its own account: the point of its last move order. */
	protected get MovementDestination(): Nullable<Vector3>
	/** Game time the unit can move again; `now` while nothing holds it. */
	public get ImmobileUntil(): number
	/** Game time the unit can be hit again; the moment itself already counts. */
	public get InvulnerableUntil(): number
	/** Game time magic damage lands on the unit again. */
	public get SpellImmuneUntil(): number
	/** Game time debuffs stick to the unit again: what Black King Bar and its kin grant. */
	public get DebuffImmuneUntil(): number
	/**
	 * The threats that reach this unit within `PredictionTuning.ThreatHorizon` along its
	 * predicted path and can affect it when they land, earliest first.
	 */
	public get Threats(): Threat[]
	/**
	 * Game time the next attack animation can begin: after the backswing of the last attack, or
	 * after the attack in progress lands and its backswing runs.
	 */
	public get NextAttackTime(): number
	public AttackDamageType(target: Unit): DAMAGE_TYPES
	/**
	 * @description example: panorama/images/heroes/npc_dota_hero_windrunner_png.vtex_c
	 */
	public TexturePath(small?: boolean, team?: Team): Nullable<string>
	public IsAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	public IsMagicAttackDamage(target: Unit): boolean
	public IsVisibleForEnemies(seconds?: number): boolean
	public GetMagicalDamageResist(ignoreMagicResist?: boolean): number
	public GetMoveSpeedModifier(baseSpeed?: number, isUnslowable?: boolean): number
	public GetAttackRangeModifier(baseAttackRange?: number): number
	public GetCastRangeBonus(baseCastRange: number): number
	public GetAttackSpeedModifier(baseAttackSpeed?: number): number
	public GetPhysicalArmorModifier(baseArmor?: number): number
	public GetPredictiveArmorModifier(target: Unit): number
	public GetPiercingArmorModifier(target: Unit): number
	public GetPhysicalDamageResist(predictiveArmor?: number): number
	public GetAttackDamageBase(damageValue?: ATTACK_DAMAGE_STRENGTH): number
	public GetAttackDamageBonus(baseDamage?: number, target?: Unit): number
	public GetEffectiveIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number): number
	public GetEffectiveOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES): number
	public GetTimeVisionModifier(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	public GetNextAttackPoint(delay: number, nth?: number): number
	public GetProjectileStartingPosition(activity: GameActivity, seqVariant: number, attackPoint: number, hasteFactor: number, pos: Vector3, ang: QAngle, scale?: number): Vector3
	public CanMove(checkChanneling?: boolean, checkAbilityPhase?: boolean): boolean
	public CanAttack(target?: Unit, checkChanneling?: boolean, checkAbilityPhase?: boolean, additionalRange?: number, checkAttackRange?: boolean): boolean
	public CanHitAttackImmune(target: Unit): boolean
	/** @deprecated - use custom logic in script */
	public HealthBarPosition(useHpBarOffset?: boolean, overridePosition?: Vector3): Nullable<Vector2>
	public GetAttackRange(target?: Entity, additional?: number, includeHull?: boolean): number
	public GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw?: boolean): number
	public GetPassiveDamageBlock(damageType: DAMAGE_TYPES): number
	public GetEffectiveDamageResist(target: Unit, ignoreMagicAttack?: boolean, predictiveArmor?: number): number
	public GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	public GetRawAttackDamage(target: Unit, damageValueType?: ATTACK_DAMAGE_STRENGTH, critMulDamage?: number): number
	public GetAttackDamageTypeResist(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number): number
	public GetAttackDamagePure(target: Unit, rawDamageBase: number): number
	public GetAttackDamageMagic(target: Unit, rawDamageBase: number): number
	public GetAttackDamage(target: Unit, damageValue?: ATTACK_DAMAGE_STRENGTH, overrideRawDamage?: number, damageType?: DAMAGE_TYPES, predictedArmor?: number, canDamageBlockMelee?: boolean): number
	public GetDamageAmplification(source: Unit, damageType: DAMAGE_TYPES, predictiveArmor?: number, ignoreMagicResist?: boolean, ignoreMagicAttack?: boolean, rawDamage?: number): number
	public GetDamageSpellEmpower(target: Unit): number
	public VelocityWaypoint(delay: number, movespeed?: number): Vector3
	public GetItemByName(name: string | RegExp, includeBackpack?: boolean): Nullable<Item>
	public GetItemByClass<T extends Item>(class_: Constructor<T>, includeBackpack?: boolean): Nullable<T>
	public HasItemInInventory(name: string | RegExp, includeBackpack?: boolean): boolean
	/**
	 * @param flag if not exists => is Melee or Range attack
	 */
	public HasAttackCapability(flag?: DOTAUnitAttackCapability): boolean
	/**
	 * @param flag if not exists => isn't move NONE
	 */
	public HasMoveCapability(flag?: DOTAUnitMoveCapability): boolean
	public IsUnitStateFlagSet(flag: modifierstate): boolean
	public IsControllableByPlayer(playerID: number): boolean
	/**
	 * @internal
	 * @deprecated
	 */
	public ForwardNativeProperties(healthBarOffset: number): void
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance(vec: Vector3 | Entity, fromCenterToCenter?: boolean): number
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance2D(vec: Vector3 | Vector2 | Entity, fromCenterToCenter?: boolean): number
	public GetAbilityByName(name: string | RegExp): Nullable<Ability>
	public GetAbilityByClass<T extends Ability>(class_: Constructor<T>): Nullable<T>
	public GetBuffByName(name: string): Nullable<Modifier>
	public HasBuffByName(name: string): boolean
	public GetBuffByRegexp(regex: RegExp): Nullable<Modifier>
	public GetBuffByClass<T extends Modifier>(class_: Constructor<T>): Nullable<T>
	public GetAnyBuffByNames(names: string[]): Nullable<Modifier>
	public HasAnyBuffByNames(names: string[]): boolean
	/**
	 * @description faster (Distance <= range)
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public IsInRange(ent: Vector3 | Entity, range: number, fromCenterToCenter?: boolean): boolean
	/** ================================ Turn Time ======================================= */
	/** @deprecated */
	public GetTurnTime(angle: number | Vector3, currentTurnRate?: boolean, rotationDiff?: boolean): number
	/** @deprecated */
	public GetRotationTime(vec: Vector3, currentTurnRate?: boolean): number
	/** @deprecated */
	public TurnTime(angle: number, currentTurnRate?: boolean): number
	public TurnRate(currentTurnRate?: boolean): number
	/**
	 * Seconds the unit needs to turn `angle` radians from its heading: to face a path only as
	 * far as walking needs when `movement`, all the way otherwise.
	 */
	public TurnTimeForAngle(angle: number, movement: boolean): number
	public TurnTimeNew(target: Vector3, movement: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public IsInside(vec: Vector3, radius: number): boolean
	public IsManaEnough(abil: Ability): boolean
	public HasLinkenAtTime(time?: number): boolean
	public CalculateActivityModifiers(activity: GameActivity, ar: string[]): void
	public GetAnimationID(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<number>
	public GetAnimation(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<AnimationData>
	public GetAttachmentPosition(name: string, activity?: GameActivity, sequenceNum?: number, time?: number, pos?: Vector3, ang?: QAngle, scale?: number): Vector3
	public ExtendUntilWall(start: Vector3, direction: Vector3, distance: number): Vector3
	/**
	 * Where this unit is expected to be `delay` seconds from now: exact for a known motion or an
	 * own move order, walked along the heading around obstacles otherwise.
	 * @example
	 * const ahead = enemy.PredictPosition(0.6)
	 * if (ahead.Confidence >= EMovementConfidence.Straight) { ... }
	 */
	public PredictPosition(delay: number, options?: IMovementOptions, out?: MovementPrediction): MovementPrediction
	/** The route this unit is expected to walk over `duration` seconds, a point every `step` seconds. */
	public PredictPath(duration: number, step?: number, options?: IMovementOptions): Path
	/** Every cell this unit can reach within `delay` seconds, the turn it must make first included. */
	public PredictRegion(delay: number): ReachableRegion
	/**
	 * The route this unit would walk to `to`, with its own hull, flight and collision state.
	 * @example
	 * const path = hero.FindPath(InputManager.CursorOnWorld)
	 */
	public FindPath(to: Vector3, options?: IPathOptions): Nullable<Path>
	/**
	 * Seconds of walking along the route to `to` at the current move speed; `Infinity` without a
	 * route.
	 */
	public TimeToReach(to: Vector3, options?: IPathOptions): number
	/**
	 * Records that this unit is expected to hold `state` until the game time `until`, as right
	 * after a disable was cast at it; `UnitStateMask` counts it until the server confirms it or
	 * the time passes.
	 * @example
	 * target.ExpectState(modifierstate.MODIFIER_STATE_STUNNED, GameState.RawGameTime + stun.GetAppliedDuration(target))
	 */
	public ExpectState(state: modifierstate, until: number): void
	/**
	 * Game time the unit stops being in `state`: the later of the expected state and the
	 * modifiers observed to bring the networked one; `now` when it is not in the state,
	 * `Infinity` when nothing with a duration explains it.
	 */
	public StateUntil(state: modifierstate): number
	/** Whether a targeted spell landing at the game time `time` meets a Linken's Sphere or a Lotus Orb. */
	public SpellBlockAt(time: number): boolean
	/**
	 * Health at the game time `time`: the regeneration until then added, the blows on their way
	 * that land by then taken off, never past the maximum and never below zero. The blows of
	 * `except` are left out: the unit asking about its own attack does not count it twice.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 * if (creep.HealthAt(landsAt) <= hero.GetAttackDamage(creep)) {
	 * 	hero.AttackTarget(creep)
	 * }
	 */
	public HealthAt(time: number, except?: Unit): number
	/**
	 * Whether something keeps the unit alive through `damageType` landing at the game time
	 * `time`: Shallow Grave, Borrowed Time, False Promise, a ready Reincarnation or Aeon Disk,
	 * Ghost Scepter against physical damage.
	 */
	public PreventsDeathAt(time: number, damageType: DAMAGE_TYPES): boolean
	/**
	 * Whether `damage` of `damageType` landing at the game time `time` brings the unit down on
	 * top of the blows already on their way, with nothing keeping it alive then.
	 */
	public IsKillableAt(time: number, damage: number, damageType?: DAMAGE_TYPES, attacker?: Unit): boolean
	/**
	 * Plays `abilities` on this unit in order and tells whether they kill it: each cast waits
	 * for the one before it, lands by its own timeline, spends its mana from the budget of its
	 * owner by `ManaAt`, takes the shields and barriers once, and the health regenerates until
	 * every blow lands. An ability on cooldown, out of mana or unable to affect the target by
	 * then is left out of `Used`.
	 * @example
	 * const kill = enemy.SimulateKill([laguna, dragonSlave], { WithAttack: true })
	 * if (kill.Killable) {
	 * 	laguna.UseAbility(enemy)
	 * }
	 */
	public SimulateKill(abilities: readonly Ability[], options?: IKillSimulationOptions): IKillSimulation
	/**
	 * Whether `response`, cast on this unit now, is done before `threat` lands: a blink, a
	 * Black King Bar or a cyclone answers a threat only when its cast point and activation fit
	 * before the impact.
	 */
	public CanResolve(threat: Threat, response: Ability): boolean
	/**
	 * The closest spot this unit can walk to before the earliest of `threats` lands that no
	 * threat in the store covers, with the moment the walk has to start; `undefined` when
	 * there is none in time, or when every threat is bound to this unit and walking answers
	 * none of them. The
	 * cells the grid holds as blocked never come up, so the answer does not run into trees or
	 * cliffs. A spot ahead beats one behind by the time the turn would take, and among spots
	 * equally near the one needing the smallest turn wins. A spot is taken with half a grid
	 * cell to spare beyond the threat's edge, the resolution spots are placed at, so a shape
	 * laid again a tick later does not put it back inside; when no such spot is reachable in
	 * time, one just past the edge is.
	 * @example
	 * const escape = hero.Escape()
	 * if (escape !== undefined && escape.Due) {
	 * 	hero.MoveTo(escape.Position)
	 * }
	 */
	public Escape(threats?: readonly Threat[]): Nullable<Escape>
	/** Mana at the game time `time` by the current regeneration, at most the maximum. */
	public ManaAt(time: number): number
	/**
	 * Game time the unit can move without losing an attack: the attack point of the animation
	 * it is in, `now` while idle or in backswing.
	 */
	public get CanMoveAfterAttackAt(): number
	/** Seconds the cast point or channel in progress keeps the unit from starting another cast. */
	public get CastBusyTime(): number
	/**
	 * Seconds until this unit's next attack on `target` lands, the way an attack order would
	 * play out: the attack in progress or the backswing left to wait, input lag for the local
	 * player's units, walking into range along the grid, turning, the next attack point and, for
	 * a ranged unit with `includeProjectile`, the projectile's flight to where the target will be.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 */
	public GetAttackLandingTime(target: Unit, includeProjectile?: boolean): number
	public GetPredictionPosition(delay?: number, useUntilWall?: boolean, forceMovement?: boolean): Vector3
	public ChangeFieldsByEvents(): void
	public UseSmartAbility(ability: Ability, target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): void
	public MoveTo(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public MoveToTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): void
	public AttackMove(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public AttackTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): void
	public CastPosition(ability: Ability, position: Vector3, queue?: boolean, showEffects?: boolean): void
	public PurchaseItem(itemID: number, queue?: boolean, showEffects?: boolean): void
	public CastTarget(ability: Ability, target: Entity | number, queue?: boolean, showEffects?: boolean): void
	public CastTargetTree(ability: Ability, tree: Tree | TempTree | number, queue?: boolean, showEffects?: boolean): void
	public CastNoTarget(ability: Ability, queue?: boolean, showEffects?: boolean): void
	public CastToggle(ability: Ability, queue?: boolean, showEffects?: boolean): void
	public CastAltToggle(ability: Ability, queue?: boolean, showEffects?: boolean): void
	public HoldPosition(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public TrainAbility(ability: Ability): void
	public DropItemAtFountain(item: Item, queue?: boolean, showEffects?: boolean, slot?: DOTAScriptInventorySlot): void
	public DropItem(item: Item, position: Vector3, queue?: boolean, showEffects?: boolean): void
	public GiveItem(item: Item, target: Entity | number, queue?: boolean, showEffects?: boolean): void
	public PickupItem(physicalItem: PhysicalItem | number, queue?: boolean, showEffects?: boolean): void
	public PickupRune(rune: Rune | number, queue?: boolean, showEffects?: boolean): void
	public SellItem(item: Item): void
	public DisassembleItem(item: Item, queue?: boolean): void
	public ItemSetCombineLock(item: Item, lock?: boolean | number, queue?: boolean): void
	public TakeItemFromNeutralStash(item: Item): void
	public MoveItem(item: Item, slot: DOTAScriptInventorySlot): void
	public CastToggleAuto(item: Ability, queue?: boolean, showEffects?: boolean): void
	public OrderStop(queue?: boolean, showEffects?: boolean): void
	public UnitTaunt(queue?: boolean, showEffects?: boolean): void
	public EjectItemFromStash(item: Item): void
	public CastRune(runeItem: Item | number, queue?: boolean, showEffects?: boolean): void
	public PingAbility(ability: Ability): void
	public MoveToDirection(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public Patrol(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public VectorTargetPosition(ability: Ability, direction: Vector3, target?: Nullable<Entity | number>, queue?: boolean, showEffects?: boolean): void
	public CastVectorTargetPosition(ability: Ability, position: Vector3 | Unit, direction: Vector3, queue?: boolean, showEffects?: boolean): void
	public ItemLock(item: Item, state?: boolean): void
	public OrderContinue(item: Item, queue?: boolean, showEffects?: boolean): void
	public VectorTargetCanceled(position: Vector3, queue?: boolean, showEffects?: boolean): void
}
