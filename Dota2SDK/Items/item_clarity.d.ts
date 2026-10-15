// AUTO-GENERATED - do not edit.
declare class item_clarity extends Item implements IManaRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public readonly ManaRestoreModifierName = "modifier_clarity_potion"
	public GetManaRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
}
