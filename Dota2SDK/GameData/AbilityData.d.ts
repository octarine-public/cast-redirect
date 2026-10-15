// AUTO-GENERATED - do not edit.
interface ISpecialValueOptions {
	useFacet?: boolean
}
declare class AbilityData {
	public static readonly empty: AbilityData
	public static readonly globalStorage: Map<string, AbilityData>
	public static readonly ShouldBeDrawable: Set<string>
	public static DisposeAllData(): void
	public static GetAbilityByName(name: string): Nullable<AbilityData>
	public static GetAbilityNameByID(id: number): Nullable<string>
	public static GetItemRecipeName(name: string): Nullable<string>
	protected static GetAbilityIDByName(name: string): Nullable<number>
	protected static get HasDebug(): boolean
	public readonly AbilityBehavior: DOTA_ABILITY_BEHAVIOR
	public readonly AbilityType: ABILITY_TYPES
	public readonly BonusStats: EDOTASpecialBonusStats
	public readonly MaxLevel: number
	public readonly TexturePath: string
	public readonly TargetFlags: DOTA_UNIT_TARGET_FLAGS
	public readonly TargetTeam: DOTA_UNIT_TARGET_TEAM
	public readonly TargetType: DOTA_UNIT_TARGET_TYPE
	public readonly SpellDispellableType: SPELL_DISPELLABLE_TYPES
	public readonly SharedCooldownName: string
	public readonly ModelName: string
	public readonly AlternateModelName: string
	public readonly DependentOnAbility: string
	public readonly IsItem: boolean
	public readonly IsGrantedByScepter: boolean
	public readonly ID: number
	public readonly EffectName: string
	public readonly Cost: number
	public readonly IsInnate: boolean
	public readonly Purchasable: boolean
	public readonly DamageType: DAMAGE_TYPES
	public readonly LevelsBetweenUpgrades: number
	public readonly RequiredLevel: number
	public readonly AbilityImmunityType: SPELL_IMMUNITY_TYPES
	public readonly ItemDisplayCharges: boolean
	public readonly ItemHideCharges: boolean
	public readonly SecretShop: boolean
	public readonly ItemRequirements: string[][]
	public readonly ItemQuality: Nullable<string>
	public readonly ItemResult: Nullable<string>
	public readonly ItemStockTime: number
	public readonly HasShardUpgrade: boolean
	public readonly HasScepterUpgrade: boolean
	public readonly ItemIsNeutralDrop: boolean
	public readonly ItemIsNeutralActiveDrop: boolean
	public readonly ShouldBeSuggested: number
	public readonly IsTempestDoubleClonable: boolean
	public readonly SuggestPregame: boolean
	public readonly ItemSupport: boolean
	public readonly SpeciallyBannedFromNeutralSlot: boolean
	public readonly CastAnimation: Nullable<GameActivity>
	public readonly LinkedAbility: string
	public readonly ShouldBeInitiallySuggested: boolean
	public readonly ItemStockInitial: Nullable<number>
	public readonly ItemDisassembleRule: DOTA_ITEM_DISASSEMBLE
	public readonly ItemAliases: string[]
	public readonly HasCastRangeSpecial: boolean
	public readonly HasManaCostSpecial: boolean
	public readonly HasChannelTimeSpecial: boolean
	public readonly HasAbilityDamageSpecial: boolean
	public readonly HasCastPointSpecial: boolean
	public readonly HasMaxChargesSpecial: boolean
	public readonly HasChargeRestoreTimeSpecial: boolean
	public readonly HasMaxCooldownSpecial: boolean
	public readonly HasMaxDurationSpecial: boolean
	public readonly HasHealthCostSpecial: boolean
	public readonly IsBreakable: boolean
	public readonly AllowedInBackpack: boolean
	public get ShouldBeDrawable(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public get CanHitSpellImmuneAlly(): boolean
	public get IsDispellable(): boolean
	public HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
	public HasTargetTeam(flag: DOTA_UNIT_TARGET_TEAM): boolean
	public HasBonusStats(flag: EDOTASpecialBonusStats): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public HasTargetType(flag: DOTA_UNIT_TARGET_TYPE): boolean
	public GetTexturePath(altCastState: boolean, abilName?: string): string
	public GetSpecialValue(specialName: string, level: number, abilityName?: string): number
	public GetSpecialValueWithTalent(owner: Unit, specialName: string, level: number, abilityName: string, { useFacet }: ISpecialValueOptions, checkShard?: boolean, checkScepter?: boolean, isStolen?: boolean): number
	public GetCastRange(level: number): number
	public GetHealthCost(level: number): number
	public GetManaCost(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public GetMaxCooldownForLevel(level: number): number
	public GetChannelTime(level: number): number
	public GetAbilityDamage(level: number): number
	public GetCastPoint(level: number): number
	public GetMaxCharges(level: number): number
	public GetChargeRestoreTime(level: number): number
}
