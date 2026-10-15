// AUTO-GENERATED - do not edit.
declare class modifier_huskar_life_break_charge extends Modifier implements IBuff, IShield {
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public GetTexturePath(): string
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetMagicalResistanceBonus(params?: IModifierParams): [number, boolean]
}
