// AUTO-GENERATED - do not edit.
declare class modifier_elder_titan_natural_order_magic_resistance extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetMagicalResistanceBaseReduction(): [number, boolean]
	protected UpdateSpecialValues(): void
}
