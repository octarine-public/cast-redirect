// AUTO-GENERATED - do not edit.
declare class modifier_bloodseeker_thirst extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected GetIgnoreMoveSpeedLimit(): [number, boolean]
	protected UpdateSpecialValues(): void
}
