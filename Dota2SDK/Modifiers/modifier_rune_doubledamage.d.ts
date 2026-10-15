// AUTO-GENERATED - do not edit.
declare class modifier_rune_doubledamage extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get ForceVisible(): boolean
	public GetTexturePath(small?: boolean): string
	public IsBuff(): this is IBuff
	protected GetSpellAmplifyPercentage(): [number, boolean]
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
}
