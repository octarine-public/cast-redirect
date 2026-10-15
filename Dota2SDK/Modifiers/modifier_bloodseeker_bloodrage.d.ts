// AUTO-GENERATED - do not edit.
declare class modifier_bloodseeker_bloodrage extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamagePercentage(): [number, boolean]
	protected GetPreAttackBonusDamagePure(params?: IModifierParams): [number, boolean]
	protected GetSpellAmplifyPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
