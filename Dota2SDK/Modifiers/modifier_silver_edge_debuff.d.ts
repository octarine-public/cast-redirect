// AUTO-GENERATED - do not edit.
declare class modifier_silver_edge_debuff extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedLimit(): [number, boolean]
	protected GetMoveSpeedMaxOverride(): [number, boolean]
	protected UpdateSpecialValues(): void
}
