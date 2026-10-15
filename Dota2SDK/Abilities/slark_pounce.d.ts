// AUTO-GENERATED - do not edit.
declare class slark_pounce extends Ability {
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public get UsesRotation(): boolean
	public get Range(): number
	public get Speed(): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public get CollisionFlags(): CollisionFlag
	public get CollisionTeam(): CollisionTeam
	public get CastRange(): number
}
