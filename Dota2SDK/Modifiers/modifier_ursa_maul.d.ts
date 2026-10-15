// AUTO-GENERATED - do not edit.
declare class modifier_ursa_maul extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	/**@private */
	public HasFurrySwipes: boolean
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
