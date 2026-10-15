// AUTO-GENERATED - do not edit.
declare class modifier_slark_armor_reduction_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
