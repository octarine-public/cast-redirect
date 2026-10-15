// AUTO-GENERATED - do not edit.
declare class modifier_rune_shield extends Modifier implements IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public get CurrentShield(): number
	public GetTexturePath(small?: boolean): string
	public IsShield(): this is IShield
	protected GetTotalConstantBlock(): [number, boolean]
	public AddModifier(): boolean
}
