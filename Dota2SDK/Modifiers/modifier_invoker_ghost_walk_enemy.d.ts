// AUTO-GENERATED - do not edit.
declare class modifier_invoker_ghost_walk_enemy extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName?: string, abilityName?: string, _level?: number): number
}
