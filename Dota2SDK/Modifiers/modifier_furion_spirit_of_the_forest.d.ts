// AUTO-GENERATED - do not edit.
declare class modifier_furion_spirit_of_the_forest extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public get StackCount(): number
	public GetTexturePath(): string
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
