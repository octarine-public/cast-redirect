// AUTO-GENERATED - do not edit.
declare class modifier_frogmen_water_bubble extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetMagicalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
}
