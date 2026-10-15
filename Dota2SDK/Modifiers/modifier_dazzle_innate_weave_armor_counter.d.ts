// AUTO-GENERATED - do not edit.
declare class modifier_dazzle_innate_weave_armor_counter extends Modifier implements IDebuff, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
