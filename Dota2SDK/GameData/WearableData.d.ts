// AUTO-GENERATED - do not edit.
declare namespace WearableData {
	/**
	 * The default cosmetics a hero wears.
	 *
	 * What you SEE of a Dota hero is mostly these: the body in `npc_heroes.txt` is what the game draws
	 * before a hero is dressed, and every set the game equips him with by default is a separate model
	 * skinned to his skeleton. Anything standing a hero outside a match — a preview stage, a model
	 * browser — has to raise them itself or show a body nobody recognises.
	 *
	 * They live in the econ file keyed by the ITEM and naming the heroes each belongs to, so the only
	 * way to the handful of paths one hero wears is to read the lot. That is done once, lazily, and
	 * what is kept is the few hundred paths rather than the file it was read out of.
	 */
	/**
	 * The models a hero is dressed in by default, or nothing for a name the econ file does not equip.
	 *
	 * @example
	 * for (const model of DefaultWearables("npc_dota_hero_juggernaut")) {
	 *     scene.AddModel(model, { model, merge: true })
	 * }
	 */
	function DefaultWearables(hero: string): readonly string[]
	/** Drops what was read, for a game whose econ file has changed under it. */
	function ResetWearables(): void
}
