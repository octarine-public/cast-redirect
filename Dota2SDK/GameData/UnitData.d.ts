// AUTO-GENERATED - do not edit.
interface IFacetAbilityData {
	AbilityName: string
	AbilityIndex: number
	ReplaceAbility: string
	AutoLevelAbility: boolean
}
interface IFacetData {
	Name: string
	Abilities: IFacetAbilityData[]
}
declare class UnitData {
	public static globalStorage: Map<string, UnitData>
	public static empty: UnitData
	public static unitNamesSorted: string[]
	public static GetUnitNameByNameIndex(index: number): Nullable<string>
	public static GetHeroID(name: string): number
	public static GetUnitDataByName(name: string): Nullable<UnitData>
	public static GetHeroNameByID(id: number): string
	public static GetHeroAttributePrimary(name: string): Attributes
	public readonly HeroID: number
	public readonly HeroEnabled: boolean
	public readonly ModelName: string
	public readonly MovementTurnRate: number
	public readonly BaseMovementSpeed: number
	public readonly AttackAcquisitionRange: number
	public readonly BaseAttackRange: number
	public readonly BaseAttackTime: number
	public readonly BaseAttackSpeed: number
	public readonly AttackAnimationPoint: number
	public readonly ProjectileSpeed: number
	public readonly AttackDamageType: AttackDamageType
	public readonly ArmorType: ArmorType
	public readonly HullRadius: number
	public readonly CollisionPadding: number
	public readonly ProjectileCollisionSize: number
	public readonly RingRadius: number
	public readonly MinimapIcon: string
	public readonly MinimapIconSize: number
	public readonly HasInventory: boolean
	public readonly HealthBarOffset: number
	public readonly WorkshopName: string
	public readonly AttributePrimary: Attributes
	public readonly MovementCapabilities: DOTAUnitMoveCapability
	public readonly ArmorPhysical: number
	public readonly MagicalResistance: number
	public readonly Abilities: Map<string, boolean>
	public readonly Facets: IFacetData[]
	public readonly AttackSpeedActivityModifiers: [number, string][]
	public readonly MovementSpeedActivityModifiers: [number, string][]
	public readonly AttackRangeActivityModifiers: [number, string][]
}
