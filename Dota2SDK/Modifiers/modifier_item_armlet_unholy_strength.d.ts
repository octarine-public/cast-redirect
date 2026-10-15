// AUTO-GENERATED - do not edit.
declare class modifier_item_armlet_unholy_strength extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
