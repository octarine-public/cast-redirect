// AUTO-GENERATED - do not edit.
declare class modifier_bane_enfeeble_effect extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetCastRangeBonusPercentage(): [number, boolean]
	protected GetPreAttackBonusDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
