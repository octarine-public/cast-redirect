// AUTO-GENERATED - do not edit.
declare class modifier_razor_static_link_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public PostDataUpdate(): void
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
