// AUTO-GENERATED - do not edit.
declare class modifier_sniper_take_aim_bonus extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetBonusDayVision(): [number, boolean]
	protected GetBonusNightVision(): [number, boolean]
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
