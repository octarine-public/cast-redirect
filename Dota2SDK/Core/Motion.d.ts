// AUTO-GENERATED - do not edit.
/**
 * A displacement the unit does not walk: its start, end and timing are known, so its position at
 * any moment is exact rather than predicted.
 */
declare abstract class Motion {
	public readonly Kind: EMotionKind
	public readonly StartTime: number
	public readonly EndTime: number
	constructor(Kind: EMotionKind, StartTime: number, EndTime: number)
	/** Seconds the motion takes. */
	public get Duration(): number
	/** True while the motion is still going on at `time`. */
	public IsActiveAt(time: number): boolean
	/** Where the unit is once the motion ends. */
	public abstract get EndPosition(): Vector3
	/** Where the unit is at `time`, written into `out`. */
	public abstract PositionAt(time: number, out?: Vector3): Vector3
}
/** Straight travel from `Start` to `End` at constant speed over the motion's duration. */
declare class LinearMotion extends Motion {
	public readonly Start: Vector3
	public readonly End: Vector3
	constructor(kind: EMotionKind, startTime: number, endTime: number, Start: Vector3, End: Vector3)
	/**
	 * The motion a modifier reveals: the game applies its first tick in the tick the modifier
	 * appears, so the unit seen at `position` at `seenAt` is already one tick into a travel of
	 * `length` units along the unit vector `direction` over `duration` seconds.
	 */
	public static Observed(kind: EMotionKind, seenAt: number, position: Vector3, direction: Vector3, length: number, duration: number): LinearMotion
	public get EndPosition(): Vector3
	public PositionAt(time: number, out?: Vector3): Vector3
}
/** Standing at `Start` until `EndTime`, then being at `End`: a teleport. */
declare class TeleportMotion extends Motion {
	public readonly Start: Vector3
	public readonly End: Vector3
	constructor(startTime: number, endTime: number, Start: Vector3, End: Vector3)
	public get EndPosition(): Vector3
	public PositionAt(time: number, out?: Vector3): Vector3
}
