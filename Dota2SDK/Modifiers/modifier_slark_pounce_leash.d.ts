// AUTO-GENERATED - do not edit.
declare class modifier_slark_pounce_leash extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	/** Slark himself: the leash follows him. */
	public get LeashAnchor(): Nullable<Vector3>
	public get LeashRadius(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected UpdateSpecialValues(): void
}
