// AUTO-GENERATED - do not edit.
declare class modifier_bounty_hunter_track extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
