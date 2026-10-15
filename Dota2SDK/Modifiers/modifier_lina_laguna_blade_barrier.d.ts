// AUTO-GENERATED - do not edit.
declare class modifier_lina_laguna_blade_barrier extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetTotalConstantBlock(_params?: IModifierParams): [number, boolean]
}
