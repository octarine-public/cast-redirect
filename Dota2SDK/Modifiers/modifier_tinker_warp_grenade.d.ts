// AUTO-GENERATED - do not edit.
declare class modifier_tinker_warp_grenade extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetCastRangeBonusPercentage(): [number, boolean]
	protected GetAttackRangeBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
