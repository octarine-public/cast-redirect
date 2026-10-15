// AUTO-GENERATED - do not edit.
declare class modifier_wisp_overcharge extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected GetSpellAmplifyPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
