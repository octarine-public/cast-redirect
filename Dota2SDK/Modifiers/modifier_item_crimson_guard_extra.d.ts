// AUTO-GENERATED - do not edit.
declare class modifier_item_crimson_guard_extra extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetPhysicalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
}
