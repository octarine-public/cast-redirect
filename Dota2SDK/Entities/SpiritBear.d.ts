// AUTO-GENERATED - do not edit.
declare class SpiritBear extends Unit {
	public readonly Index: number
	/** @readonly */
	public ShouldRespawn: boolean
	public CanMove(checkChanneling?: boolean, checkAbilityPhase?: boolean): boolean
	public CanAttack(target?: Unit, checkChanneling?: boolean, checkAbilityPhase?: boolean, additionalRange?: number, checkAttackRange?: boolean): boolean
	public get HealthBarSize(): Vector2
	public get HealthBarPositionCorrection(): Vector2
}
