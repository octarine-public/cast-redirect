// AUTO-GENERATED - do not edit.
declare class modifier_item_nemesis_curse_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
