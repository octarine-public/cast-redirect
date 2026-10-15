// AUTO-GENERATED - do not edit.
declare class UnitModifierManager {
	public readonly Owner: Unit
	/** @private NOTE: this is internal field use Unit#CanUseItems */
	public CanUseAllItems_: boolean
	/** @private NOTE: this is internal field use Unit#NoIntellect */
	public NoIntellect_: boolean
	/** @private NOTE: this is internal field use Unit#HasAeigs */
	public HasAeigs_: boolean
	/** @private NOTE: this is internal field use Unit#IsTempestDouble */
	public IsTempestDouble_: boolean
	/** @private NOTE: this is internal field use Unit#IsChargeOfDarkness */
	public IsChargeOfDarkness_: boolean
	/** @private NOTE: this is internal field use Unit#IsClone */
	public IsClone_: boolean
	/** @private NOTE: this is internal field use Unit#IsIllusion */
	public IsIllusion_: boolean
	/** @private NOTE: this is internal field use Unit#IsReflection */
	public IsReflection_: boolean
	/** @private NOTE: this is internal field use Unit#IsStrongIllusion */
	public IsStrongIllusion_: boolean
	/** @private NOTE: this is internal field use Unit#IsFountainInvulnerable */
	public IsFountainInvulnerable_: boolean
	/** @private NOTE: this is internal */
	public IsMorphlingReplicateIllusion_: boolean
	public get AttacksPerSecond(): number
	public get ArmorPerAgility(): number
	public get MagicResistPerIntellect(): number
	public get SlowResistance(): number
	public get StatusResistance(): number
	public get SpellAmplification(): number
	public get SpellAmplificationTarget(): number
	public get IsSuppressCrit(): boolean
	public get IsAvoidTotalDamage(): boolean
	public get IsLinkensProtected(): boolean
	public get IsConvertManaCostToHPCost(): boolean
	public GetAttackDamageConvertPhysicalToMagical(target: Unit): boolean
	public GetBaseBonusPhysicalArmor(baseArmor: number): number
	public GetBaseTurnRate(baseTurnRate: number): number
	public GetBaseAttackTime(baseAttackTime: number): number
	public GetBaseAttackSpeed(baseAttackSpeed: number): number
	public GetBaseAttackRange(baseAttackRange: number): number
	public GetBaseMoveSpeed(baseMoveSpeed: number): number
	public GetBaseAttributePrimary(basePrimary: Attributes): Attributes
	public GetBaseMagicResistance(baseResist: number): number
	public GetAttackAnimationPoint(baseAnimationPoint: number): number
	public GetAttackSpeed(baseAttackSpeed: number): number
	public GetAttackRange(baseRange: number): number
	public GetTurnRate(baseTurnRate: number): number
	public GetCastRangeBonus(baseCastRange: number): number
	public GetMoveSpeed(baseSpeed: number, isUnslowable?: boolean): number
	public GetPhysicalArmor(baseArmor: number): number
	public GetMagicResistance(baseResist: number, ignoreMagicResist?: boolean): number
	public GetPredictiveArmor(target: Unit): number
	public GetPiercingArmor(target: Unit): number
	public GetTimeVisionRange(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	public GetNightTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	public GetDayTimeVisionRange(baseVision: number, ignoreFixedVision?: boolean): number
	public GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw: boolean): number
	public GetRawDamageBlock(rawDamage: number, damageType: DAMAGE_TYPES): number
	public GetPassiveDamageBlock(damageType: DAMAGE_TYPES): number
	public GetCritDamageBonus(target: Unit): number
	public GetCritDamageBonusTarget(target: Unit): number
	public GetIncomingRawAttackDamage(target: Unit): number
	public GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	public GetIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number): number
	public GetOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES): number
	public GetProcAttackDamageBonus(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number): number
	public GetPreAttackDamageBonus(baseDamage?: number, target?: Unit): number
	public GetAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	public GetHealthRegen(baseRegen: number): number
	public GetConstantFirstInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	public GetConstantLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean): number
	public GetConstantHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, params?: IModifierParams): number
	public GetConditionalAdditiveInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, incoming?: number, params?: IModifierParams): number
	public GetConditionalPercentageInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, multiplier?: number, reduction?: number, params?: IModifierParams): number
	public GetPercentageLowestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean): number
	public GetPercentageHighestInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean): number
	public GetPercentageMultiplicativeInternal(eModifierfunction: EModifierfunction, ignoreFlags?: boolean, isNegative?: boolean, applyOnlyPositive?: boolean, params?: IModifierParams): number
	/** @private NOTE: this is internal method */
	public AddOrRemoveInternal(eModifierfunctions: Nullable<ModifierMapFieldHandler>, isCreate: boolean): void
}
