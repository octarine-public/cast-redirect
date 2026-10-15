// AUTO-GENERATED - do not edit.
declare class modifier_phantom_lancer_juxtapose_invisibility extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetSpecialValue(specialName: string, abilityName: string, level?: number): number
	protected UpdateSpecialValues(): void
}
