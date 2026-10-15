// AUTO-GENERATED - do not edit.
declare class muerta_dead_shot extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public get RicochetRadiusStart(): number
	public get RicochetExpandPerSecond(): number
	public GetEndRadius(createTime: number, bulletTime: number): number
	public GetEndRadiusByTime(lifetime: number): number
	public GetEndRadiusByPoints(start: Vector3, end: Vector3, bulletSpeed?: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetMaxChargesForLevel(level: number): number
}
