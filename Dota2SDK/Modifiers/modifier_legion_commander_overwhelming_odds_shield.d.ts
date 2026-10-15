// AUTO-GENERATED - do not edit.
declare class modifier_legion_commander_overwhelming_odds_shield extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetTotalConstantBlock(): [number, boolean]
}
