// AUTO-GENERATED - do not edit.
declare class modifier_lina_flame_cloak extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get DeltaZ(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetSpellAmplifyPercentage(): [number, boolean]
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
