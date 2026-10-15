// AUTO-GENERATED - do not edit.
declare class modifier_beastmaster_axe_stack_counter extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
