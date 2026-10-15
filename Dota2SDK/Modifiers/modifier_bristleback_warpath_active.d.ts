// AUTO-GENERATED - do not edit.
declare class modifier_bristleback_warpath_active extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public PostDataUpdate(): void
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
}
