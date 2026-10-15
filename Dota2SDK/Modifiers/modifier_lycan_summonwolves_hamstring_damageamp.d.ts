// AUTO-GENERATED - do not edit.
declare class modifier_lycan_summonwolves_hamstring_damageamp extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetPreAttackIncomingDamageBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
