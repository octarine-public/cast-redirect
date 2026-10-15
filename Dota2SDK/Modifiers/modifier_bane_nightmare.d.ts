// AUTO-GENERATED - do not edit.
declare class modifier_bane_nightmare extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetFixedDayVision(): [number, boolean]
	protected GetFixedNightVision(): [number, boolean]
}
