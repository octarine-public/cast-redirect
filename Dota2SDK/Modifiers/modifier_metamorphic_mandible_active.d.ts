// AUTO-GENERATED - do not edit.
declare class modifier_metamorphic_mandible_active extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMagicResistBonus(): [number, boolean]
	protected GetPhysicalArmorBonusPercentagePost(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
