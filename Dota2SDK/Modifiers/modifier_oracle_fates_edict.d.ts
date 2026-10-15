// AUTO-GENERATED - do not edit.
declare class modifier_oracle_fates_edict extends Modifier implements IDebuff, IBuff, IDisable, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	public IsDisable(): this is IDisable
	public IsShield(): this is IShield
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
