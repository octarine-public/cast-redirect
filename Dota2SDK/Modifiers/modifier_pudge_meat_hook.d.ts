// AUTO-GENERATED - do not edit.
declare class modifier_pudge_meat_hook extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/**
	 * The pull: from where the hook caught the bearer to the edge of the caster at the hook
	 * speed, starting one tick after the modifier appears. The game snaps the last stretch
	 * of about 150 units in one tick, so the end comes a few ticks before the timing says.
	 */
	public CreateMotion(): Nullable<Motion>
}
