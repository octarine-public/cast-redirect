// AUTO-GENERATED - do not edit.
declare class modifier_templar_assassin_meld extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackPhysicalArmorBonusTarget(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
