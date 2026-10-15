// AUTO-GENERATED - do not edit.
declare class modifier_kez_shodo_sai_mark extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public MulCritDamageBonus(target: Unit): number
	public IsDebuff(): this is IDebuff
	protected GetPreAttackTargetCriticalStrike(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
