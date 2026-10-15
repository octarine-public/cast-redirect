// AUTO-GENERATED - do not edit.
declare class CSoundSDK {
	/**
	 * Plays a sound event by name.
	 *
	 * @param position where the sound is placed in the world; ignored by a game whose sound
	 * manager is the portable panorama one, which can only play the event in 2D
	 * @example
	 * SoundSDK.EmitStartSoundEvent("General.Ping")
	 * SoundSDK.EmitStartSoundEvent("Roshan.Attack", entity.Position, entity)
	 */
	public EmitStartSoundEvent(name: string, position?: Vector3, sourceEntity?: INativeEntity, guid?: number, seed?: number): void
	/**
	 * Stops the sound event started with that guid.
	 *
	 * @example
	 * SoundSDK.EmitStopSoundEvent(guid)
	 */
	public EmitStopSoundEvent(guid: number): void
	/**
	 * Stops every sound event of that name, optionally only the ones the entity emitted.
	 *
	 * @example
	 * SoundSDK.EmitStopSoundEventByName("Roshan.PreAttack", entity)
	 */
	public EmitStopSoundEventByName(name: string, sourceEntity?: INativeEntity): void
	/**
	 * Registers the sound events a KV3 soundevent script declares — the text of a `.vsndevts`,
	 * which maps each event name to an operator stack and the `.vsnd` files it plays. Afterwards
	 * {@link EmitStartSoundEvent} plays them by name like any of the game's own.
	 *
	 * The compiled `.vsnd_c` files a script names are resolved by the game itself, so they have to
	 * ship under the package's `scripts_files/fs` directory — the only one the game can see. The
	 * script's own text is read by the cheat and may live anywhere under `scripts_files`.
	 *
	 * @param origin names the script in the engine's parser errors and keys its events, so
	 * registering the same origin again replaces exactly what it registered before
	 * @returns whether the script was taken. Its events are registered before any sound requested
	 * after this call plays; a script that does not parse is reported in the log instead
	 * @example
	 * const script = fread("soundevents/octarine/test.vsndevts", false)!
	 * SoundSDK.RegisterSoundEvents(script, "octarine/test")
	 * SoundSDK.EmitStartSoundEvent("Octarine.Test")
	 */
	public RegisterSoundEvents(kv3Text: string, origin: string): boolean
	/**
	 * Drops every sound event registered under `origin` and frees what they were parsed from.
	 * Registering the same origin again already replaces them, so this is for taking them away
	 * for good — a script unloading, or a feature the user turned off.
	 *
	 * @returns whether a script was taken under that origin and not dropped since
	 * @example
	 * SoundSDK.UnregisterSoundEvents("octarine/test")
	 */
	public UnregisterSoundEvents(origin: string): boolean
}
declare const SoundSDK: CSoundSDK
