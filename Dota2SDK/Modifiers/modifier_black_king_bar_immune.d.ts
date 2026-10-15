// AUTO-GENERATED - do not edit.
declare class modifier_black_king_bar_immune extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetMagicalResistanceBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
