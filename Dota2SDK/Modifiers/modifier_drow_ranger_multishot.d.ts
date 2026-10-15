// AUTO-GENERATED - do not edit.
declare class modifier_drow_ranger_multishot extends Modifier implements IBuff, IChannel {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ChannelModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsChannel(): this is IChannel
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
