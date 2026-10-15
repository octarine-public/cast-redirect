// AUTO-GENERATED - do not edit.
declare class modifier_ursa_enrage extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetStatusResistanceStacking(): [number, boolean]
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
