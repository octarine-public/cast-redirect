// AUTO-GENERATED - do not edit.
declare class modifier_pugna_decrepify extends Modifier implements IDebuff, IBuff, IShield {
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	public IsShield(): this is IShield
	protected GetMagicalResistanceDecrepifyUnique(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
