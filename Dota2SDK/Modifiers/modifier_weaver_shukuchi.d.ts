// AUTO-GENERATED - do not edit.
declare class modifier_weaver_shukuchi extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected GetMoveSpeedAbsoluteMin(): [number, boolean]
	protected UpdateSpecialValues(): void
}
