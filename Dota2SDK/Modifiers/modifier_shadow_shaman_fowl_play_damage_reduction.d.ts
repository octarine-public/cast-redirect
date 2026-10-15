// AUTO-GENERATED - do not edit.
declare class modifier_shadow_shaman_fowl_play_damage_reduction extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetIncomingDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
