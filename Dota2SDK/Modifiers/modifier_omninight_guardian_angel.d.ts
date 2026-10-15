// AUTO-GENERATED - do not edit.
declare class modifier_omninight_guardian_angel extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetAbsoluteNoDamagePhysical(): [number, boolean]
}
