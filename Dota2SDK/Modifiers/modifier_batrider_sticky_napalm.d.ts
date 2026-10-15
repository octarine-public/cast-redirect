// AUTO-GENERATED - do not edit.
declare class modifier_batrider_sticky_napalm extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public GetBonusDamage(target: Unit): number
	public IsDebuff(): this is IDebuff
	protected GetTurnRatePercentage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetProcAttackBonusDamageMagicalTarget(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
