// AUTO-GENERATED - do not edit.
declare class modifier_necrolyte_ghost_shroud_active extends Modifier implements IBuff, IShield {
	public readonly IsGhost = true
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public PostDataUpdate(): void
	protected GetMoveSpeedBonusConstant(): [number, boolean]
	protected GetMagicalResistanceDecrepifyUnique(): [number, boolean]
	protected UpdateSpecialValues(): void
}
