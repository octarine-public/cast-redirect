// AUTO-GENERATED - do not edit.
declare class modifier_muerta_pierce_the_veil_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected GetProcAttackConvertPhysicalToMagical(): [number, boolean]
	protected UpdateSpecialValues(): void
}
