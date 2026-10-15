// AUTO-GENERATED - do not edit.
declare class modifier_invoker_ghost_walk_self extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName?: string, abilityName?: string, _level?: number): number
}
