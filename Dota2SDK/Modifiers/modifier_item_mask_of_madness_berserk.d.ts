// AUTO-GENERATED - do not edit.
declare class modifier_item_mask_of_madness_berserk extends Modifier implements IBuff, IDisable {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsDisable(): this is IDisable
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
