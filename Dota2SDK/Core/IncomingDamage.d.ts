// AUTO-GENERATED - do not edit.
/** One blow on its way to a unit: who deals it, how much lands and when. */
declare class IncomingDamageEntry {
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	public readonly Source: number
	/** Damage expected to land, already reduced by the target's armor, resistances and blocks. */
	public Damage: number
	/** Game time the damage lands. */
	public LandsAt: number
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	public HasProjectile: boolean
	constructor(
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	Source: number, 
	/** Damage expected to land, already reduced by the target's armor, resistances and blocks. */
	Damage: number, 
	/** Game time the damage lands. */
	LandsAt: number, 
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	HasProjectile: boolean)
}
/**
 * The blows on their way to one unit: attack swings past their start, attack and spell
 * projectiles in flight. `Before` sums what lands by a moment, which is what `HealthAt` takes
 * off the health. Entries settle on the `entity_hurt` event of their source and expire shortly
 * after their landing time when nothing confirms them, such as a missed attack.
 */
declare class IncomingDamage {
	public readonly Entries: IncomingDamageEntry[]
	/** Damage landing by the game time `time`, the blows of the source `except` left out: the asker's own. */
	public Before(time: number, except?: number): number
	/** Registers a blow; a swing from the same source still waiting for its projectile is replaced. */
	public Add(source: number, damage: number, landsAt: number, hasProjectile: boolean): IncomingDamageEntry
	/** The blow from `source` that has no projectile yet: the swing a projectile is about to leave. */
	public Pending(source: number): Nullable<IncomingDamageEntry>
	/** Drops the swing from `source` that never reached its attack point. */
	public Cancel(source: number): void
	/** Drops the projectile blow from `source` that will not land any more. */
	public Dodged(source: number): void
	/** Settles the earliest blow from `source`: the game just dealt it. */
	public Landed(source: number): void
	/** Drops the blows the game never confirmed within `grace` seconds after their landing time. */
	public Prune(now: number, grace: number): void
	public Clear(): void
}
