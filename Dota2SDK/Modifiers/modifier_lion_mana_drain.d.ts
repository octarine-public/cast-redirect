// AUTO-GENERATED - do not edit.
declare class modifier_lion_mana_drain extends Modifier implements IDebuff, IChannel {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public readonly ChannelModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsChannel(): this is IChannel
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
