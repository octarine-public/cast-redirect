// AUTO-GENERATED - do not edit.
declare class primal_beast_rock_throw extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetFragmentAOERadiusForLevel(level?: number): number
	public GetTravelTimeForDistance(distance: number, clampMinDistance?: number, rangeMax?: number, minTravelTime?: number, maxTravelTime?: number): number
	public GetEndRadius(startPos: Vector3, endPos: Vector3, startRadius: number, angleDeg?: number): number
	public get AppliesUnitState(): bigint
	/** The rock's flight time grows with distance; the speed at full range is the slowest it flies. */
	public GetBaseSpeedForLevel(level: number): number
}
