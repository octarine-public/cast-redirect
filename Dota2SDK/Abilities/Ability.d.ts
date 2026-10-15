// AUTO-GENERATED - do not edit.
declare class Ability extends Entity implements IPredictionProfile {
	public readonly AbilityData: AbilityData
	public readonly AnimTime: number
	public readonly IsInIndefiniteCooldown: boolean
	public readonly MaxLevelOverride: number
	public readonly IsActivated: boolean
	public readonly AltCastState: boolean
	public readonly IsAutoCastEnabled: boolean
	public readonly IsCooldownFrozen: boolean
	public readonly IsReplicated: boolean
	public readonly IsStolen: boolean
	public readonly NetworkedManaCost: number
	public readonly OverrideCastPoint: number
	public readonly CastStartTime: number
	public readonly IsToggled: boolean
	public readonly DirtyButtons: number
	public readonly GrantedByFacet: boolean
	public readonly IsStealable: boolean
	public readonly HeroFacetKey: number
	public readonly ReflectionSourceAbility: number
	public readonly HiddenAbilityForDisplay: number
	public Level: number
	public IsEmpty: boolean
	public IsAbility: boolean
	public IsHidden: boolean
	public ChannelStartTime: number
	public AbilityChargeRestoreTimeRemaining: number
	/** @deprecated use by index */
	public AbilitySlot: EAbilitySlot
	/** Profile version of this ability; grows with level, scepter, shard, facet and talents. */
	public readonly Prediction: AbilityPrediction
	/** @private NOTE: this is internal field, use IsInAbilityPhase */
	public IsInAbilityPhase_: boolean
	public IsInAbilityPhaseChangeTime: number
	/** @private NOTE: this is internal field, use Owner or Cooldown */
	public Cooldown_: number
	public CooldownChangeTime: number
	/** @private NOTE: this is internal field, use CooldownRestore */
	public CooldownRestore_: number
	public CooldownRestoreTime: number
	/**@deprecated */
	public readonly ProjectilePath: Nullable<string>
	/**
	 * The shape prediction places for the ability, read from its behavior, radius and speed at
	 * the moment of the call: a vector cast is `Vector`, a point cast with a radius is `Line`
	 * when it travels, `Cone` when it widens, `Circle` otherwise, a no-target cast with a radius
	 * is `AreaOfEffect`, and unit targets, passives and attacks are `None`. A class overrides
	 * this only for a shape the behavior cannot tell, such as an arc.
	 */
	public get SkillShotType(): ESkillShotType
	/** Radius of the shape: the width of a line, the radius of a circle or an area of effect. */
	public get Radius(): number
	/**
	 * Distance the effect travels from the caster: the flight distance a directional ability or
	 * its class names, the cast range otherwise.
	 */
	public get Range(): number
	/** Which units the projectile stops at on its way; `None` for one that flies through everything or has none. */
	public get CollisionFlags(): CollisionFlag
	/** Whose units the projectile collides with. */
	public get CollisionTeam(): CollisionTeam
	/** The unit states the ability puts on what it hits, as a `modifierstate` mask; zero when it applies none. */
	public get AppliesUnitState(): bigint
	/**
	 * Whether the projectile hits with a flat front as wide as the effect rather than a round
	 * head: a wave reaches a unit when its front line passes it, a bolt when its head touches it.
	 */
	public get FlatFront(): boolean
	/**
	 * Units the hitting front runs ahead of the projectile the game reports; zero for one that
	 * hits where it is. A wave that widens harms from its leading edge, which stands its end
	 * radius ahead of that point: measured on the demo, Breathe Fire hit a unit 597 and 425
	 * away with its reported point 247 and 294 short of it, a tick either side of its 250
	 * unit end radius.
	 */
	public get FrontLead(): number
	public get IsDodgeableProjectile(): boolean
	/** Whether the target's status resistance shortens the ability's durations; off for the few the game exempts. */
	public get IsAffectedByStatusResistance(): boolean
	/** Whether casting at an enemy unit is eaten by Linken's Sphere or Lotus Orb: a targeted, non-attack ability aimed at enemy heroes or units. */
	public get TriggersSpellBlock(): boolean
	/** Seconds the cast animation holds the caster after the cast point; zero without animation data. */
	public get CastBackswing(): number
	/** Whether a cast `CastPredicted` sent is still before its cast point, where a stop order can take it back. */
	public get IsCastPending(): boolean
	/** A prediction the class runs instead of the core, built from the same primitives; `undefined` by default. */
	public get PredictionStrategy(): Nullable<IPredictionStrategy>
	/** Seconds the ability's effect lasts on `target`: the base duration, cut by the target's status resistance where the game applies it. */
	public GetAppliedDuration(target: Unit): number
	public get ProjectileAttachment(): string
	public get CastDelay(): number
	public get IsInvisibility(): boolean
	/** NOTE: @override in child classes */
	public get ShouldBeDrawable(): boolean
	public get IsUltimate(): boolean
	public get IsBreakable(): boolean
	public get IsAttributes(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public get CanHitSpellImmuneAlly(): boolean
	public get CanBeUsable(): boolean
	public get Owner(): Nullable<Unit>
	public get OwnerHasShard(): boolean
	public get OwnerHasScepter(): boolean
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public get TargetTypeMask(): DOTA_UNIT_TARGET_TYPE
	public get TargetTeamMask(): DOTA_UNIT_TARGET_TEAM
	public get TargetFlagsMask(): DOTA_UNIT_TARGET_FLAGS
	public get SpellDispellableType(): SPELL_DISPELLABLE_TYPES
	public get BonusStatsMask(): EDOTASpecialBonusStats
	public get AbilityDamage(): number
	public get AbilityType(): ABILITY_TYPES
	public get IsInnate(): boolean
	public get IsDispellable(): boolean
	public get IsInnateHidden(): boolean
	/** Radius the shape ends with: the wide end of a cone when the class names it, the radius otherwise. */
	public get EndRadius(): number
	public get CastPoint(): number
	public get ActivationDelay(): number
	public get MaxChannelTime(): number
	public get ChannelTime(): number
	public get ChannelEndTime(): number
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public get DamageType(): DAMAGE_TYPES
	public get ID(): number
	public get IsChanneling(): boolean
	public get IsInAbilityPhase(): boolean
	public get CooldownLength(): number
	public get IsCooldownReady(): boolean
	public get IsReady(): boolean
	public get BaseManaCost(): number
	public get ManaCost(): number
	public get HealthCost(): number
	public get IsGrantedByScepter(): boolean
	public get IsItem(): boolean
	public get LevelsBetweenUpgrades(): number
	public get MaxLevel(): number
	public get RequiredLevel(): number
	public get SharedCooldownName(): string
	public get DependentOnAbility(): string
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public get TargetFlags(): number[]
	public get TargetTeam(): number[]
	public get TargetType(): number[]
	public get TexturePath(): string
	public get IsPassive(): boolean
	public get IsNotLearnable(): boolean
	public get NoTarget(): boolean
	public get IgnoreBackSwing(): boolean
	public get IsUIInnate(): boolean
	public get CooldownRestore(): number
	public get Cooldown(): number
	public get CooldownPercent(): number
	public get CooldownPercentDecimal(): number
	public get CooldownDuration(): number
	public get CooldownDurationPercent(): number
	public get CooldownDurationPercentDecimal(): number
	public get StackCount(): number
	public get Speed(): number
	public get MaxDuration(): number
	public get MaxCooldown(): number
	public get BaseCastRange(): number
	public get CastRange(): number
	public get AOERadius(): number
	public get MinAOERadius(): number
	public get SkillshotRange(): number
	public get IsCastRangeFake(): boolean
	public get UsesRotation(): boolean
	public get CurrentCharges(): number
	public set CurrentCharges(newVal: number)
	public get SpellAmplify(): number
	protected get CanBeCastedWhileRooted(): boolean
	protected get CanBeCastedWhileStunned(): boolean
	protected get CanBeCastedWhileSilenced(): boolean
	public GetProjectileStartingPosition(pos: Vector3, ang: QAngle, scale?: number): Vector3
	public GetMaxCooldownForLevel(level: number): number
	public GetChargeRestoreTimeForLevel(level: number): number
	public GetMaxChargesForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public GetBaseCastPointForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseManaCostForLevel(level: number): number
	public GetBaseHealthCostForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** Delay between the cast point and the effect; a class names the key value it comes from. */
	public GetBaseActivationDelayForLevel(_level: number): number
	/** Projectile speed; a class names the key value it comes from. */
	public GetBaseSpeedForLevel(_level: number): number
	/** Radius of the shape; a class names the key value it comes from, and without one the ability has no shape. */
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseMinAOERadiusForLevel(_level: number): number
	/** Flight distance of the effect when it is not the cast range; a class names the key value it comes from. */
	public GetBaseRangeForLevel(_level: number): number
	public GetBaseChannelTimeForLevel(level: number): number
	public GetCastDelay(unit?: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * How a cast at `target` issued now plays out, stretch by stretch; see `CastTimeline`. The
	 * approach walks the grid to the nearest point in cast range, the turn follows the caster's
	 * turn data, and a unit target is aimed at where it will be when the effect lands.
	 * @example
	 * const timeline = ability.GetCastTimeline(enemy)
	 * const landsAt = GameState.RawGameTime + timeline.HitTime
	 */
	public GetCastTimeline(target: Unit | Vector3, options?: ICastTimelineOptions, out?: CastTimeline): CastTimeline
	/**
	 * Whether the ability can be cast at the game time `time`: levelled and usable, off cooldown
	 * and with a charge by then, enough mana by the owner's regeneration, and no stun, hex,
	 * silence or root known to last past it that the ability does not ignore.
	 */
	public CanBeCastedAt(time: number): boolean
	/**
	 * Whether the ability may be aimed at `unit` right now: its target team, type and flags,
	 * and the unit's immunities. Whether the effect still affects the unit when it lands is
	 * `CanHitAt`.
	 */
	public CanTarget(unit: Unit): boolean
	/**
	 * Whether the effect landing at the game time `time` affects `target`: alive, not
	 * invulnerable or immune by then, and not behind a spell block it would trigger.
	 */
	public CanHitAt(target: Unit, time: number): boolean
	/** The prediction's timeline: `GetCastTimeline` at `target` into `out`. */
	public Timeline(target: IPredictionTarget | Vector3, out: CastTimeline): CastTimeline
	/** Seconds the effect needs from `from` to `to`: the projectile flight rounded up to a tick, zero without one. */
	public GetTravelTime(from: Vector3, to: Vector3): number
	/** Where the effect really lands for the placement in `output`; the target's predicted position by default. */
	public GetHitPosition(output: PredictionOutput): Vector3
	/**
	 * The shape the placement in `output` covers over time, from the profile: a line as a
	 * capsule with a running front, a cone as a trapezoid that widens as its front runs, a
	 * circle and an area as discs, a vector cast as a rectangle from the cast point along its
	 * direction. A cone with no speed of its own appears whole.
	 */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
	/** Changes the prediction's input before the core runs; nothing by default. */
	public ModifyInput(_input: PredictionInput): void
	/** Changes the prediction's output after the core ran; nothing by default. */
	public ModifyOutput(_output: PredictionOutput): void
	/**
	 * Predicts one cast. The mode follows the ability's profile of this moment: a unit target
	 * gets its timeline and hit check, a point cast with a shape gets the shape placed on where
	 * the target will be, an area around the caster asks who will be inside. Without a target
	 * the best placement over every unit in reach is found.
	 * @example
	 * const output = hook.Predict(enemy)
	 * if (output.HitChance >= EHitChance.High) {
	 * 	hook.UseAbility(output.CastPosition)
	 * }
	 */
	public Predict(target?: Unit | Vector3, options?: IPredictOptions, out?: PredictionOutput): PredictionOutput
	/**
	 * Predicts and casts when the ability can be cast now and the prediction is good enough:
	 * `HitChance` at least `MinHitChance` and the shape covering at least `MinTargets` units.
	 * Returns the prediction when the order went out, `undefined` when it did not. Called again
	 * while the cast is still before its cast point, it sends no new order: it predicts afresh
	 * and takes the cast back with a stop order when the target has left what the cast covers,
	 * so a caller that calls it every tick guards its own casts.
	 * @example
	 * if (hook.CastPredicted(enemy, { MinHitChance: EHitChance.High }) !== undefined) {
	 * 	return
	 * }
	 */
	public CastPredicted(target?: Unit | Vector3, options?: IPredictOptions): Nullable<PredictionOutput>
	/**
	 * @description Returns the raw damage of the ability without any amplification
	 */
	public GetRawDamage(_target: Unit): number
	/**
	 * Damage the ability deals to `target` after its armor, resistances, amplification and
	 * blocks. Inside a sequence, `context` says the shields and barriers are already spent, so
	 * they are not taken off again.
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	public UseAbility(target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): void | undefined
	public UpgradeAbility(): void | undefined
	public PingAbility(): void | undefined
	public GetSpecialValue(specialName: string, level?: number, optional?: ISpecialValueOptions, checkShard?: boolean, checkScepter?: boolean): number
	public IsManaEnough(bonusMana?: number): boolean
	public HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
	public HasBonusStats(flag: EDOTASpecialBonusStats): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public HasTargetTeam(flag: DOTA_UNIT_TARGET_TEAM): boolean
	public HasTargetType(flag: DOTA_UNIT_TARGET_TYPE): boolean
	public CanHit(target: Unit | Vector3): boolean
	public CanBeCasted(bonusMana?: number): boolean
	public IsDoubleTap(_order: ExecuteOrder): boolean
	public IsNuke(): this is INuke
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDebuff(): this is IDebuff
	public IsHealthCost(): this is IHealthCost
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthCost(baseManaCost: number): number
	public GetManaCostModifier(baseManaCost: number): number
	protected GetCastPointModifier(baseCastPoint: number): number
	protected GetManaCostModifierSpellSteal(owner: Unit): number
	protected GetSpellAmpModifierSpellSteal(owner?: Nullable<Unit>): number
	protected IsAbsoluteNoDamage(source: Unit, target: Unit, damageType: DAMAGE_TYPES): boolean
}
