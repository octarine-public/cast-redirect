// AUTO-GENERATED - do not edit.
declare class modifier_medusa_stone_gaze_stone extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetIncomingPhysicalDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
