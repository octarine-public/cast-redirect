// AUTO-GENERATED - do not edit.
declare class modifier_sven_warcry extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName = "modifier_sven_warcry_barrier"
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
