// AUTO-GENERATED - do not edit.
declare class modifier_item_dustofappearance extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	protected CalculateModifierMoveSpeedPercentage(): [number, boolean]
}
