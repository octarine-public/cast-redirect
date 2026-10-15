// AUTO-GENERATED - do not edit.
/** How `Ability.GetCastTimeline` treats the caster's situation; every option has a default. */
interface ICastTimelineOptions {
	/**
	 * Let the caster finish its current cast point or channel before this cast; off means the
	 * order cancels it. On by default.
	 */
	readonly waitForCast?: boolean
	/** Let the caster's current attack land before this cast; off by default. */
	readonly waitForAttack?: boolean
	/** Walk into cast range along the grid when the target is out of it; on by default. */
	readonly approach?: boolean
	/** Count the humanizer queue and the input lag for the local player's units; on by default. */
	readonly dispatch?: boolean
	/** Aim at where a unit target will be when the effect lands; off aims at its current position. On by default. */
	readonly predictTarget?: boolean
	/** Turn at the current turn rate rather than the base one; on by default. */
	readonly currentTurnRate?: boolean
	/** Turn as a walking unit does, which faces the target only partly before moving; defaults to whether the cast needs an approach. */
	readonly moving?: boolean
	/** Skip the turn the way directional casts do; defaults to the ability's `DIRECTIONAL` behavior. */
	readonly directional?: boolean
}
/**
 * Every stretch of one cast, in seconds from now: the order reaching the server, the caster
 * finishing what it does, walking into range, turning, the cast point, the activation delay and
 * the flight. `HitTime` is their sum, `BackswingEnd` is when the cast animation lets the caster
 * go. One instance can be reused across calls.
 * @example
 * const timeline = ability.GetCastTimeline(target)
 * if (timeline.Reachable && ability.CanBeCastedAt(GameState.RawGameTime + timeline.StartTime)) {
 * 	ability.UseAbility(target)
 * }
 */
declare class CastTimeline {
	/** Humanizer queue plus input lag for the local player's units, zero for anyone else. */
	public DispatchTime: number
	/** Remaining cast point, channel or attack the cast waits for. */
	public BusyTime: number
	/** Walking along the grid until the target is in cast range. */
	public ApproachTime: number
	/** Turning to face the target. */
	public TurnTime: number
	/** The cast point, rounded up to a tick. */
	public CastTime: number
	/** Delay between the cast point and the effect starting. */
	public ActivationTime: number
	/** Flight of the projectile to the hit position. */
	public TravelTime: number
	/** Seconds until the effect lands: the sum of everything above. */
	public HitTime: number
	/** Seconds until the cast animation releases the caster: `CastEnd` plus the backswing. */
	public BackswingEnd: number
	/** Where the effect lands: the target's predicted position, or the point cast at. */
	public readonly HitPosition: Vector3
	/** Where the caster stands when the cast starts: its position, or the end of the approach. */
	public readonly CastPosition: Vector3
	/** False when no route brings the target into range; the approach then counts a straight line. */
	public Reachable: boolean
	/** Seconds until the cast point begins. */
	public get StartTime(): number
	/** Seconds until the cast point ends and the ability activates. */
	public get CastEnd(): number
	/** Clears every stretch for reuse. */
	public Reset(): this
}
