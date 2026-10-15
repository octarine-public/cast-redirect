// AUTO-GENERATED - do not edit.
declare class TechiesMines extends Unit {
	/** Where a Sticky Bomb in flight was thrown from, traced back from the part of the flight that was seen. */
	public readonly StartPosition: Vector3
	/** Where a Sticky Bomb in flight comes to rest, predicted from the part of the flight that was seen. */
	public readonly TargetPosition: Vector3
	/** The last {@link TargetPosition}, kept after the landing while the bomb lies unseen. */
	public readonly LastTargetPosition: Vector3
	public get ShouldUnifyOrders(): boolean
	public get Position(): Vector3
}
