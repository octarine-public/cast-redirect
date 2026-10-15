// AUTO-GENERATED - do not edit.
declare class modifier_faceless_void_chronosphere_speed extends Modifier implements IBuff {
	public readonly IsHidden: boolean
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedAbsoluteMin(): [number, boolean]
	protected GetIgnoreMoveSpeedLimit(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
