// AUTO-GENERATED - do not edit.
declare class modifier_kez_ravens_veil_blind extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public PostDataUpdate(): void
	protected GetFixedDayVision(): [number, boolean]
	protected GetFixedNightVision(): [number, boolean]
}
