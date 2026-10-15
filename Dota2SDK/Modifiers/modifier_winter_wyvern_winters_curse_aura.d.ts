// AUTO-GENERATED - do not edit.
declare class modifier_winter_wyvern_winters_curse_aura extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetAbsoluteNoDamagePure(params?: IModifierParams): [number, boolean]
	protected GetAbsoluteNoDamageMagical(params?: IModifierParams): [number, boolean]
	protected GetAbsoluteNoDamagePhysical(params?: IModifierParams): [number, boolean]
}
