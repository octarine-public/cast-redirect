// AUTO-GENERATED - do not edit.
declare class item_urn_of_shadows extends Item implements IHealthRestore<Unit> {
	public readonly RestoresAlly = true
	public readonly RestoresSelf = true
	public readonly InstantRestore = false
	public HealthRestoreModifierName: string
	public get DamageType(): DAMAGE_TYPES
	public CanBeCasted(bonusMana?: number): boolean
	public GetHealthRestore(_target: Unit): number
	public GetMaxDurationForLevel(level: number): number
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
