// AUTO-GENERATED - do not edit.
declare class item_arcane_ring extends Item implements IManaRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public IsManaRestore(): this is IManaRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
}
