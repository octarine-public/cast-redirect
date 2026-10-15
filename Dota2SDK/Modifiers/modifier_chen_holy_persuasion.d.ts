// AUTO-GENERATED - do not edit.
declare class modifier_chen_holy_persuasion extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetDamageOutgoingPercentage(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
