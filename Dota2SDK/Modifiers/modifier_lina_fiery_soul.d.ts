// AUTO-GENERATED - do not edit.
declare class modifier_lina_fiery_soul extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public GetSpellBonusDamage(rawDamage: number): number
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
