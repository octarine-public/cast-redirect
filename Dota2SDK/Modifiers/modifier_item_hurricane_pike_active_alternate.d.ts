// AUTO-GENERATED - do not edit.
declare class modifier_item_hurricane_pike_active_alternate extends Modifier implements IBuff, IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	public IsDisable(): this is IDisable
	/**
	 * The push of a cast on an enemy, `enemy_length` each way: the target away from the caster,
	 * the caster away from the target. The caster carries no link to the target, so its direction
	 * is the step the game already applied in the tick the modifier appeared; without a position
	 * history there is none to read and the caster gets no motion.
	 */
	public CreateMotion(): Nullable<Motion>
}
