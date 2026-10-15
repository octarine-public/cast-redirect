// AUTO-GENERATED - do not edit.
declare class modifier_lich_sinister_gaze_cryophobia_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	protected GetSlowResistanceStacking(): [number, boolean]
	public IsDebuff(): this is IDebuff
	protected UpdateSpecialValues(): void
}
