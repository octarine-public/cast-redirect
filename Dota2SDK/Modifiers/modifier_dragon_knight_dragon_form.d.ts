// AUTO-GENERATED - do not edit.
declare class modifier_dragon_knight_dragon_form extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackRangeBonus(): [number, boolean]
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName: string, abilityName: string, level?: number): number
}
