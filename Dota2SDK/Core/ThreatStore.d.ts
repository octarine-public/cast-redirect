// AUTO-GENERATED - do not edit.
/**
 * Every effect on its way, from any caster: the monitors add threats as casts, projectiles,
 * spawned units, particles and modifiers reveal them, and units ask which of them reach them.
 * @example
 * for (const threat of PredictionSDK.Threats.For(hero, 3)) {
 * 	console.log(threat.Ability.Name, threat.ImpactTime(hero, 3) - GameState.RawGameTime)
 * }
 */
declare class ThreatStore {
	public readonly Threats: Threat[]
	constructor(tuning: PredictionTuning)
	public Add(threat: Threat): Threat
	/** Adds a sign's threat and keeps the sign updated until it has nothing left to follow. */
	public Follow(sign: ThreatSign): ThreatSign
	public Remove(threat: Threat): void
	/** Drops the threats of the ability `ability`, of one `kind` or of every kind. */
	public Cancel(ability: number, kind?: EThreatKind): void
	/** The threat of `kind` that came from `handle`, a projectile id or an entity index. */
	public ByHandle(kind: EThreatKind, handle: number): Nullable<Threat>
	/** The sign still following the threat of `kind` that came from `handle`. */
	public SignOf(kind: EThreatKind, handle: number): Nullable<ThreatSign>
	/** Lets every sign follow the game to `now`, then drops the threats that are over. */
	public Update(now: number): void
	/**
	 * Whether a threat a walk can answer covers the spot `position` for `unit`, of hull
	 * `hull`, and can affect it when it gets there, or now when it already has: the threats
	 * reaching the unit where it stands are not the only ones a spot has to be clear of.
	 */
	public Covers(unit: IPredictionTarget, position: Vector3, hull: number): boolean
	/**
	 * The threats that reach `unit` within `horizon` seconds along its predicted path and can
	 * affect it when they do, earliest first, written into `into`.
	 */
	public For(unit: IPredictionTarget, horizon: number, into?: Threat[]): Threat[]
}
