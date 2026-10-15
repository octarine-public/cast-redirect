// AUTO-GENERATED - do not edit.
declare class UnitPortalData {
	protected readonly CasterIndex: number
	public IsValid: boolean
	public IsCanceled: boolean
	public MaxDuration: number
	public AbilityName: string
	public readonly EndPosition: Vector3
	public readonly StartPosition: Vector3
	public get Caster(): Nullable<Unit>
	public get Target(): Nullable<Unit>
	public get RemainingTime(): number
	public IsValidPoint(point: PortalPoint): boolean
	public UpdateData(entIndex: Nullable<number>, startPosition: Vector3, endPosition: Vector3): void
	public UpdateDuration(pointsData: PortalPoint[], skipIteration?: boolean, duration?: number): void
	public DecreaseDuration(pointsData: PortalPoint[]): void
}
