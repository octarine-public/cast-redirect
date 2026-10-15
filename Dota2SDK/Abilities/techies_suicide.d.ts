// AUTO-GENERATED - do not edit.
declare class techies_suicide extends Ability implements INuke {
	public readonly StartPosition: Vector3
	public readonly TargetPosition: Vector3
	public readonly LastKnownOwnerPosition_: Vector3
	public LastKnownOwnerPositionTick_: number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
}
