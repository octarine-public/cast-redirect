// AUTO-GENERATED - do not edit.
declare class modifier_windrunner_whirlwind extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
