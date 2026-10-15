// AUTO-GENERATED - do not edit.
declare class modifier_hoodwink_bushwhack_trap extends Modifier implements IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetFixedDayVision(): [number, boolean]
	protected GetFixedNightVision(): [number, boolean]
}
