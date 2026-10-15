// AUTO-GENERATED - do not edit.
declare class item_soul_ring extends Item implements IHealthCost, IManaRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public GetManaRestore(_target: Unit): number
	public IsHealthCost(): this is IHealthCost
	public IsManaRestore(): this is IManaRestore<Unit>
}
