// AUTO-GENERATED - do not edit.
declare class modifier_item_giant_maul_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetCastTimePercentage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
