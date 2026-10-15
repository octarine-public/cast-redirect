// AUTO-GENERATED - do not edit.
declare class modifier_ursa_increase_damage extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(): [number, boolean]
}
