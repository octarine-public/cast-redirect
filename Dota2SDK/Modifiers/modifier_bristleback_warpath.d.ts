// AUTO-GENERATED - do not edit.
declare class modifier_bristleback_warpath extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public CachedMoveSpeed: number
	public CachedBonusDamage: number
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
