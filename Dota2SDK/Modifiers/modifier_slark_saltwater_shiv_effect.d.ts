// AUTO-GENERATED - do not edit.
declare class modifier_slark_saltwater_shiv_effect extends Modifier implements IDebuff, IBuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
