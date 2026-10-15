// AUTO-GENERATED - do not edit.
declare class modifier_item_gale_guard extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetSlowResistanceStacking(): [number, boolean]
	protected GetTotalConstantBlock(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
