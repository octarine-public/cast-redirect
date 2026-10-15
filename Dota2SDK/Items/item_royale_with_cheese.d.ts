// AUTO-GENERATED - do not edit.
declare class item_royale_with_cheese extends Item implements IHealthRestore<Unit>, IManaRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public GetHealthRestore(_target: Unit): number
	public GetManaRestore(_target: Unit): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
