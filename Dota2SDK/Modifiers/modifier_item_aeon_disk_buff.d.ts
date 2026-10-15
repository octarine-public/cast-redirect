// AUTO-GENERATED - do not edit.
declare class modifier_item_aeon_disk_buff extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetNoDamagePure(): [number, boolean]
	protected GetNoDamageMagical(): [number, boolean]
	protected GetNoDamagePhysical(): [number, boolean]
	protected GetStatusResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
