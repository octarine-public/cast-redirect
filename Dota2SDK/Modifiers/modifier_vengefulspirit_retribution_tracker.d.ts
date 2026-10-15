// AUTO-GENERATED - do not edit.
declare class modifier_vengefulspirit_retribution_tracker extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
