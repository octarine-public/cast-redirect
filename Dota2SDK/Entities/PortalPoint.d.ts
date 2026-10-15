// AUTO-GENERATED - do not edit.
declare class PortalPoint {
	public readonly StartPosition: Vector3
	public readonly EndPosition: Vector3
	public static readonly CheckDistance = 1600
	public IsValid: boolean
	public Team: Team
	public RecentTime: number
	public readonly CreateTime: number
	public InternalSkipIteration: boolean
	public InternalSkipEmitNotify: boolean
	public get IsExpired(): boolean
	public get Caster(): Nullable<Unit>
	protected UpdateData(caster: Nullable<Unit>, endPosition: Vector3): void
}
