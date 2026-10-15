// AUTO-GENERATED - do not edit.
declare class modifier_earthshaker_enchant_totem extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public Remove(): boolean
	protected AddModifier(): boolean
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackBonusDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
