// AUTO-GENERATED - do not edit.
declare class modifier_item_sphere_target extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetLinkenProtection(): [number, boolean]
}
