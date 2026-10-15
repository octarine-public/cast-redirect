// AUTO-GENERATED - do not edit.
declare class modifier_broodmother_insatiable_hunger extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected GetBaseAttackTimeConstantAdjust(): [number, boolean]
	protected UpdateSpecialValues(): void
}
