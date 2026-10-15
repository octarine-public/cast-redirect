// AUTO-GENERATED - do not edit.
declare class modifier_phantom_assassin_mark_of_death extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	public GetCriticalStrikeBonusTarget(params?: IModifierParams): [number, boolean]
	protected GetCriticalStrikeBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
