// AUTO-GENERATED - do not edit.
declare class modifier_tidehunter_anchor_smash extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
