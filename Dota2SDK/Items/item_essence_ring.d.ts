// AUTO-GENERATED - do not edit.
declare class item_essence_ring extends Item implements IHealthRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public readonly ManaRestoreModifierName = "modifier_item_essence_ring_active"
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
