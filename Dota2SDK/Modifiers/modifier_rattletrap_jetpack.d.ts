// AUTO-GENERATED - do not edit.
declare class modifier_rattletrap_jetpack extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get DeltaZ(): number
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	protected GetDisableTurning(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
