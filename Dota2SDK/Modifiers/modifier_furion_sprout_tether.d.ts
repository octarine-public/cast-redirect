// AUTO-GENERATED - do not edit.
declare class modifier_furion_sprout_tether extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public get Duration(): number
	/** Where the bearer stood when the trees grew: the ring does not move. */
	public get LeashAnchor(): Nullable<Vector3>
	public get LeashRadius(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected UpdateSpecialValues(): void
}
