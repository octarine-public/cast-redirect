// AUTO-GENERATED - do not edit.
declare class modifier_life_stealer_rage extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetMagicalResistanceBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
