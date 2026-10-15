// AUTO-GENERATED - do not edit.
declare class modifier_slardar_sprint extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	/** The slow resistance lasts only for the burst at the start of the sprint. */
	protected GetSlowResistanceStacking(): [number, boolean]
	protected UpdateSpecialValues(): void
}
