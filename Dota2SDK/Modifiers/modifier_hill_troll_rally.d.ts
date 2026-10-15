// AUTO-GENERATED - do not edit.
declare class modifier_hill_troll_rally extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
