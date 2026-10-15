// AUTO-GENERATED - do not edit.
declare class modifier_ice_vortex extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	protected GetMagicalResistanceBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
