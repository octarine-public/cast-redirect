// AUTO-GENERATED - do not edit.
declare class modifier_ringmaster_the_box_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetSlowResistanceStacking(): [number, boolean]
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
