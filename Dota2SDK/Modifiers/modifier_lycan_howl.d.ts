// AUTO-GENERATED - do not edit.
declare class modifier_lycan_howl extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetPreAttackBonusDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
