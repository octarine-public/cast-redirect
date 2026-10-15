// AUTO-GENERATED - do not edit.
declare class modifier_templar_assassin_refraction_absorb extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetAvoidDamage(): [number, boolean]
	protected GetTotalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
}
