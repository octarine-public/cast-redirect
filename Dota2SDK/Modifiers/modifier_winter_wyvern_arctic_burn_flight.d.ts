// AUTO-GENERATED - do not edit.
declare class modifier_winter_wyvern_arctic_burn_flight extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShouldDoFlyHeightVisual = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetAttackPointConstant(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
