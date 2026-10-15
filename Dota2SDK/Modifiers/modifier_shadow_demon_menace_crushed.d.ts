// AUTO-GENERATED - do not edit.
declare class modifier_shadow_demon_menace_crushed extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public GetTexturePath(): string
	protected GetIncomingDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
