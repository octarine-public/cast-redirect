// AUTO-GENERATED - do not edit.
declare class modifier_keeper_of_the_light_spirit_form extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public PostDataUpdate(): void
	public IsBuff(): this is IBuff
	protected GetCastRangeBonusStacking(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
