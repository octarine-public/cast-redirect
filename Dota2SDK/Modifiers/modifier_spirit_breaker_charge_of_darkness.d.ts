// AUTO-GENERATED - do not edit.
declare class modifier_spirit_breaker_charge_of_darkness extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public UnitPropertyChanged(changed?: boolean): boolean
	protected GetIgnoreMoveSpeedLimit(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
