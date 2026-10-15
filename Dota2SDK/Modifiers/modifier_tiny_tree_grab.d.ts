// AUTO-GENERATED - do not edit.
declare class modifier_tiny_tree_grab extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public CachedDamage: number
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected GetPreAttackBonusDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
