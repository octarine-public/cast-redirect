// AUTO-GENERATED - do not edit.
declare class modifier_primal_beast_uproar extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
