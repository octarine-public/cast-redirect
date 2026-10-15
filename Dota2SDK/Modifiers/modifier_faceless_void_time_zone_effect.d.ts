// AUTO-GENERATED - do not edit.
declare class modifier_faceless_void_time_zone_effect extends Modifier implements IBuff, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected GetCastTimePercentage(): [number, boolean]
	protected GetTurnRatePercentage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
