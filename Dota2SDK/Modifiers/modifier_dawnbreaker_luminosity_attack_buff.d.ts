// AUTO-GENERATED - do not edit.
declare class modifier_dawnbreaker_luminosity_attack_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetCriticalStrikeBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
