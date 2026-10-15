// AUTO-GENERATED - do not edit.
declare class keeper_of_the_light_chakra_magic extends Ability implements IManaRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public GetManaRestore(_target: Unit): number
	public IsManaRestore(): this is IManaRestore<Unit>
}
