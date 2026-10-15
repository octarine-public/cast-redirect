// AUTO-GENERATED - do not edit.
declare class modifier_largo_song_attack_burst extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetSpellAmpPercentage(): [number, boolean]
	protected GetProcAttackBonusDamageMagical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
