// AUTO-GENERATED - do not edit.
declare class modifier_muerta_spectral_slug_ethereal extends Modifier implements IDebuff {
	public readonly IsHidden: boolean
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
