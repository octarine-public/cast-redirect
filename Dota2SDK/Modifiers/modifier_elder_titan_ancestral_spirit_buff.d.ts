// AUTO-GENERATED - do not edit.
declare class modifier_elder_titan_ancestral_spirit_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
}
