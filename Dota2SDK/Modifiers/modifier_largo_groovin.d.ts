// AUTO-GENERATED - do not edit.
declare class modifier_largo_groovin extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate: boolean
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	public GetBonusPhysicalArmor(): [number, boolean]
	public GetManaCostReductionConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
