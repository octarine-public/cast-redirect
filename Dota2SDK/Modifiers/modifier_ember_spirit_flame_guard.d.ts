// AUTO-GENERATED - do not edit.
declare class modifier_ember_spirit_flame_guard extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetMagicalConstantBlock(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
