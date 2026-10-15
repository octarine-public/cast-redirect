// AUTO-GENERATED - do not edit.
declare class modifier_spirit_breaker_bulldoze extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetTotalConstantBlock(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetStatusResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
