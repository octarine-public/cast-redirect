// AUTO-GENERATED - do not edit.
/** What a threat needs from the ability behind it. */
interface IThreatAbility {
	readonly Index: number
	readonly Name: string
	readonly DamageType: DAMAGE_TYPES
	/** The unit states the effect puts on what it hits, as a `modifierstate` mask. */
	readonly AppliesUnitState: bigint
	/** Whether the effect goes through spell immunity, so a Black King Bar does not answer it. */
	readonly CanHitSpellImmuneEnemy: boolean
	/** Which units the projectile stops at on its way; `None` for one that flies through everything or has none. */
	readonly CollisionFlags: CollisionFlag
	/** Whose units the projectile collides with. */
	readonly CollisionTeam: CollisionTeam
	/** Whether the projectile hits with a flat front as wide as the effect rather than a round head: a wave reaches a unit when its front line passes it. */
	readonly FlatFront: boolean
	/** Units the hitting front runs ahead of the projectile the game reports; zero for one that hits where it is. */
	readonly FrontLead: number
	/** Whether the effect landing at the game time `time` affects `target`. */
	CanHitAt(target: IPredictionTarget, time: number): boolean
	GetDamage(target: IPredictionTarget): number
}
/**
 * How a threat still being aimed reaches units: a cast in progress can turn to anyone within
 * reach before it goes off, so until then the aim, not the shape, says who is threatened.
 */
interface IThreatAim {
	/** Game time the effect reaches `unit` if aimed at it; `Infinity` when it cannot be, `undefined` once the aim is settled and the shape decides. */
	ImpactTime(unit: IPredictionTarget, horizon: number): Nullable<number>
	/** Whether a unit of hull `hull` standing at `position` is inside the effect aimed at `unit`; `undefined` once the aim is settled. */
	Covers(unit: IPredictionTarget, position: Vector3, hull: number): Nullable<boolean>
}
/**
 * One effect on its way: an ability, the unit casting it, and the shape it covers over time
 * from the moment the threat was seen. Everything a unit asks about it comes from the shape
 * timeline the ability also casts by, so the volume to dodge is the volume to hit. A threat
 * bound to a unit lands on that unit wherever it goes and is answered with a counter, never by
 * walking.
 */
declare class Threat {
	public readonly Kind: EThreatKind
	public readonly Ability: IThreatAbility
	public readonly Caster: IPredictionTarget
	/** The covered shape over time, in seconds from `Created`. */
	public Shape: IShapeTimeline
	/** Game time the shape was last laid; the shape counts from it. */
	public Created: number
	/** The unit a homing effect is bound to; `undefined` for one that covers ground. */
	public readonly Target?: IPredictionTarget | undefined
	/** What the threat came from, a projectile id or an entity index, to find it again when that goes away. */
	public readonly Handle: number
	/** The aim of an effect not yet placed; while it answers, it overrides the shape for who is reached and what is covered. */
	public Aim?: IThreatAim | undefined
	/** False once the effect was cancelled, dodged or finished. */
	public IsValid: boolean
	constructor(Kind: EThreatKind, Ability: IThreatAbility, Caster: IPredictionTarget, 
	/** The covered shape over time, in seconds from `Created`. */
	Shape: IShapeTimeline, 
	/** Game time the shape was last laid; the shape counts from it. */
	Created: number, 
	/** The unit a homing effect is bound to; `undefined` for one that covers ground. */
	Target?: IPredictionTarget | undefined, 
	/** What the threat came from, a projectile id or an entity index, to find it again when that goes away. */
	Handle?: number, 
	/** The aim of an effect not yet placed; while it answers, it overrides the shape for who is reached and what is covered. */
	Aim?: IThreatAim | undefined)
	/** Game time the effect starts to cover anything. */
	public get Start(): number
	/** Game time the effect is over; `Infinity` for one that lingers. */
	public get End(): number
	/** Whether the effect is bound to a unit and lands on it wherever it goes: no spot on the ground escapes it. */
	public get Bound(): boolean
	/** Whether the effect goes through spell immunity, so a Black King Bar does not answer it. */
	public get PiercesImmunity(): boolean
	/** The area covered at the game time `time`; `undefined` outside the threat's window. */
	public ShapeAt(time: number): Nullable<IShape2D>
	/** The area that harms at the game time `time`, a projectile's head rather than its trail; `undefined` outside the threat's window. */
	public ActiveAt(time: number): Nullable<IShape2D>
	/** Whether a unit of hull `hull` standing at `position` is harmed by the threat at the game time `time`. */
	public Contains(position: Vector3, time: number, hull?: number): boolean
	/**
	 * Whether a unit of hull `hull` standing at `position` is inside anything the threat covers
	 * over its whole life: the full path of a projectile, the area of a landing effect; for an
	 * effect still being aimed, the effect aimed at `unit`.
	 */
	public Covers(position: Vector3, hull?: number, unit?: IPredictionTarget): boolean
	/**
	 * Game time the effect first reaches `unit` walking its predicted path, looking at most
	 * `horizon` seconds ahead; `Infinity` when it never does. A bound effect lands on its unit
	 * when it arrives and on nobody else; a sweeping effect that already hurt the unit is past it.
	 */
	public ImpactTime(unit: IPredictionTarget, horizon: number): number
	/** Damage the effect deals to `unit` after its resistances and blocks. */
	public Damage(unit: IPredictionTarget): number
	/** Records that the effect hurt the unit with entity index `index`; a sweeping effect is past it from then on. */
	public Landed(index: number): void
	/** Lays a new shape from the game time `created`: the caster turned, the projectile moved on. */
	public Relay(shape: IShapeTimeline, created: number): void
}
