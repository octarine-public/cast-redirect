// AUTO-GENERATED - do not edit.
declare class modifier_magnataur_empower extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public PostDataUpdate(): void
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
