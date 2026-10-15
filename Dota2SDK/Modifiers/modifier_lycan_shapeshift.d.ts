// AUTO-GENERATED - do not edit.
declare class modifier_lycan_shapeshift extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	protected GetMaxAttackRange(): [number, boolean]
	protected GetBonusNightVision(): [number, boolean]
	protected UpdateSpecialValues(): void
}
