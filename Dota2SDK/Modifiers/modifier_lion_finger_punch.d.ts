// AUTO-GENERATED - do not edit.
declare class modifier_lion_finger_punch extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMaxAttackRange(): [number, boolean]
	protected GetPreAttackBonusDamage(_params?: IModifierParams): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
