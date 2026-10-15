// AUTO-GENERATED - do not edit.
declare class modifier_dawnbreaker_fire_wreath_caster extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetDisableTurning(): [number, boolean]
	protected GetMoveSpeedAbsoluteMin(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
