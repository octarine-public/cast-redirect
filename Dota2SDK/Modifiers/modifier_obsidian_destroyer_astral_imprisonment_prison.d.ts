// AUTO-GENERATED - do not edit.
declare class modifier_obsidian_destroyer_astral_imprisonment_prison extends Modifier implements IDebuff, IBuff, IDisable, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDisable(): this is IDisable
	public IsDebuff(): this is IDebuff
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
