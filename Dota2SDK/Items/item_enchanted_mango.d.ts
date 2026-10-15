// AUTO-GENERATED - do not edit.
declare class item_enchanted_mango extends Item implements IManaRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public IsManaRestore(): this is IManaRestore<Unit>
	public GetManaRestore(_target: Unit): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
