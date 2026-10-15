// AUTO-GENERATED - do not edit.
declare class modifier_pangolier_rollup extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public GetTexturePath(): string
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetDisableTurning(): [number, boolean]
	protected GetMagicalResistanceBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
