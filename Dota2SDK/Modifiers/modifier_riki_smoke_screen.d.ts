// AUTO-GENERATED - do not edit.
declare class modifier_riki_smoke_screen extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected UpdateSpecialValues(): void
}
