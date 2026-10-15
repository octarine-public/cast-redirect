// AUTO-GENERATED - do not edit.
declare class earthshaker_enchant_totem extends Ability implements INuke {
	public HasModifier: boolean
	public get ScepterRadius(): number
	public get DamageType(): DAMAGE_TYPES.DAMAGE_TYPE_PHYSICAL | DAMAGE_TYPES.DAMAGE_TYPE_MAGICAL
	public get AOERadius(): number
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	public get AppliesUnitState(): bigint
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
