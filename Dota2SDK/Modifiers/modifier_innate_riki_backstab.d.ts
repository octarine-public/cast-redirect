// AUTO-GENERATED - do not edit.
declare class modifier_innate_riki_backstab extends Modifier {
	public CachedMulDamage: number
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public GetAttackBonusDamage(caster: Unit, target: Unit, withoutCalculation?: boolean): number
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
