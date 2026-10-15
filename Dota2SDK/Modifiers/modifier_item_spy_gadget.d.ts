// AUTO-GENERATED - do not edit.
declare class modifier_item_spy_gadget extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetCastRangeBonusStacking(): [number, boolean]
	protected GetAttackRangeBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
