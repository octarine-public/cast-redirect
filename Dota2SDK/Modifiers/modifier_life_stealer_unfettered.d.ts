// AUTO-GENERATED - do not edit.
declare class modifier_life_stealer_unfettered extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected GetStatusResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
