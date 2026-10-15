// AUTO-GENERATED - do not edit.
declare class modifier_faceless_void_time_dilation_selfbuff extends Modifier implements IBuff {
	public readonly IsHidden: boolean
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
