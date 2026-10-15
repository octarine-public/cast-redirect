// AUTO-GENERATED - do not edit.
declare class modifier_leshrac_decrepify extends Modifier implements IDebuff {
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetMagicalResistanceDecrepifyUnique(): [number, boolean]
	protected UpdateSpecialValues(): void
}
