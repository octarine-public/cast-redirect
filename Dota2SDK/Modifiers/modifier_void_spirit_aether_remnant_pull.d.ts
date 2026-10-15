// AUTO-GENERATED - do not edit.
declare class modifier_void_spirit_aether_remnant_pull extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetMoveSpeedAbsoluteMax(): [number, boolean]
	protected UpdateSpecialValues(): void
}
