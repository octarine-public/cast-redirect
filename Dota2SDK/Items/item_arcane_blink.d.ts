// AUTO-GENERATED - do not edit.
declare class item_arcane_blink extends item_blink implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public readonly RestoresAlly = false
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
}
