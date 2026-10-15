// AUTO-GENERATED - do not edit.
declare class terrorblade_sunder extends Ability implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	public GetHealthRestore(_target: Unit): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
