// AUTO-GENERATED - do not edit.
declare class modifier_ringmaster_tame_the_beasts extends Modifier implements IChannel, IShield {
	public readonly IsHidden = false
	public readonly ShieldModifierName: string
	public readonly ChannelModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsChannel(): this is IChannel
	public IsShield(): this is IShield
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetMagicalResistanceBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
