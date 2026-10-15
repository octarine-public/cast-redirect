// AUTO-GENERATED - do not edit.
declare class modifier_item_ethereal_blade_ethereal extends Modifier implements IBuff, IDebuff, IShield {
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public PreventsDeath(damageType: DAMAGE_TYPES): boolean
	protected GetMagicalResistanceDecrepifyUnique(): [number, boolean]
	protected UpdateSpecialValues(): void
}
