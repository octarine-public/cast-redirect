// AUTO-GENERATED - do not edit.
declare class modifier_item_buckler_effect extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
