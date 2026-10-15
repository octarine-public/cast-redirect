// AUTO-GENERATED - do not edit.
/**
 * What a damage estimate made inside a sequence has to know about the blows before it: the
 * health left to take, whether the target's shields and barriers are already spent, and the
 * game time the damage lands.
 */
interface IDamageContext {
	/** Health the target is expected to have when this damage lands. */
	RemainingHealth: number
	/** Whether an earlier blow of the sequence already took the target's shields and barriers. */
	ShieldsConsumed: boolean
	/** Game time this damage lands. */
	Time: number
}
/** How `SimulateKill` plays the sequence. */
interface IKillSimulationOptions {
	/** Seconds the first cast waits before it starts, such as a blink or a walk. */
	Delay?: number
	/** Whether the blows already on their way to the target count; on by default. */
	IncludeIncoming?: boolean
	/** Whether the caster's attack is added after the abilities, at `AttackStrength`. */
	WithAttack?: boolean
	/** The attack damage roll taken when `WithAttack` is set; the minimum by default. */
	AttackStrength?: ATTACK_DAMAGE_STRENGTH
}
/** What `SimulateKill` found. */
interface IKillSimulation {
	/** Whether the sequence brings the target down. */
	Killable: boolean
	/** Damage the sequence deals in total. */
	Damage: number
	/** Seconds from now the last blow of the sequence lands. */
	Time: number
	/** Indices of the abilities the sequence used, in cast order; the ones it could not cast are left out. */
	Used: number[]
}
