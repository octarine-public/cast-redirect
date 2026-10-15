// AUTO-GENERATED - do not edit.
declare class PlayerCustomData {
	public readonly PlayerID: number
	/**
	 * @description max cooldown of buyback in seconds
	 */
	public static readonly MaxBuyBackCooldown = 480
	/**
	 * @description Retrieves an array PlayerCustomData.
	 * @return {Array<PlayerCustomData>}
	 */
	public static readonly Array: PlayerCustomData[]
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public static readonly TeamData: TeamData[]
	/**
	 * @description Retrieves the player data for the given player ID.
	 * @param {number} playerID - The ID of the player.
	 * @return {PlayerCustomData | undefined}
	 */
	public static get(playerID: number): Nullable<PlayerCustomData>
	/**
	 * @description Checks if the given player ID exists in the PlayerCustomData.
	 * @param {number} playerID - The ID of the player to check.
	 * @return {boolean}
	 */
	public static has(playerID: number): boolean
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public static set(playerID: number, hero?: Hero): void
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public static PlayerCustomDataUpdatedAll(): void
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public static Delete(playerID: number): boolean
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public static DeleteAll(): void
	/** @readonly */
	public IsValid: boolean
	/** @readonly */
	public Hero: Nullable<Hero>
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public ItemsGold: number
	/**
	 * @description Returns whether the player is the local player.
	 * @return {boolean}
	 */
	public get IsLocalPlayer(): boolean
	/**
	 * @description Check if the player is a spectator.
	 * @return {boolean}
	 */
	public get IsSpectator(): boolean
	/**
	 * Returns the connection state of the player.
	 * @description The connection state of the player.
	 * @return {ConnectionState}
	 */
	public get ConnectionState(): ConnectionState
	/**
	 * Returns a boolean indicating whether the connection is in an abandoned state.
	 * @description The value indicating whether the connection is abandoned.
	 * @return {boolean}
	 */
	public get IsAbandoned(): boolean
	/**
	 * @description Returns a boolean indicating whether the connection is disconnected.
	 * @return {boolean}
	 */
	public get IsDisconnected(): boolean
	/**
	 * @description Retrieves the name of the hero.
	 * @return {string | undefined}
	 */
	public get HeroName(): Nullable<string>
	/**
	 * @description Retrieve the SteamID associated with this player.
	 * @return {bigint | undefined}
	 */
	public get SteamID(): Nullable<bigint>
	/**
	 * @description Returns an array of LaneSelection (roles that the player has selected).
	 * @return {Array<LaneSelection>}
	 */
	public get LaneSelections(): LaneSelection[]
	public get LaneSelectionFlags(): LaneSelectionFlags
	/**
	 * @description Gets the respawn position for the player.
	 * @return {Nullable<Vector3>}
	 */
	public get RespawnPosition(): Nullable<Vector3>
	/**
	 * @description The number of seconds it takes for a player to respawn.
	 * If the player team data is not available, -1 is returned.
	 * @return {number | -1}
	 */
	public get RespawnSeconds(): number | -1
	public get ReliableGold(): number
	public set ReliableGold(value: number)
	public get UnreliableGold(): number
	public set UnreliableGold(value: number)
	/**
	 * @description Returns the deny count of the player.
	 * @returns {number}
	 */
	public get DenyCount(): number
	/** @ignore */
	public set DenyCount(value: number)
	/**
	 * @description Returns the last hit count of the player.
	 * @returns {number}
	 */
	public get LastHitCount(): number
	/** @ignore */
	public set LastHitCount(value: number)
	/**
	 * @description Returns the player data for the current player.
	 * @return {Nullable<PlayerData>}
	 */
	public get PlayerData(): Nullable<PlayerData>
	/**
	 * @description Returns the player's team data.
	 * @return {Nullable<PlayerTeamData>}
	 */
	public get PlayerTeamData(): Nullable<PlayerTeamData>
	/**
	 * @description Returns the team of the player.
	 * @return {Team}
	 */
	public get Team(): Team
	/**
	 * @description Returns the color of the player.
	 * @return {Color}
	 */
	public get Color(): Color
	/**
	 * @description Get the name of the player.
	 * @return {Nullable<string>}
	 */
	public get PlayerName(): Nullable<string>
	/**
	 * Returns the TeamSlot of the PlayerTeamData.
	 * @description The TeamSlot value if PlayerTeamData is defined, otherwise -1.
	 * @return {number}
	 */
	public get TeamSlot(): number
	/**
	 * Get the index of the selected hero.
	 * @description The index of the selected hero, or -1 if no hero is selected.
	 * @return {number}
	 */
	public get SelectedHeroIndex(): number
	/**
	 * Returns the ID of the selected hero.
	 * @description The ID of the selected hero, or -1 if no hero is selected.
	 * @return {number}
	 */
	public get SelectedHeroID(): number
	/**
	 * @description Retrieves the DataTeamPlayer for the current player.
	 * @return {Nullable<DataTeamPlayer>}
	 */
	public get DataTeamPlayer(): Nullable<DataTeamPlayer>
	/**
	 * TODO: need test
	 * @description Determines whether the player chooses a hero
	 * @return {boolean}
	 */
	public get IsPreparedSelectionHero(): boolean
	public get EventsData(): PlayerEventData[]
	/**
	 * @description Returns the number of available salutes (tips player) for the player.
	 * @returns {number}
	 */
	public get AvailableSalutes(): number
	/**
	 * @description Returns the net worth of the player.
	 * @returns {number}
	 */
	public get NetWorth(): number
	/**
	 * see: https://dota2.fandom.com/wiki/Gold#Buyback
	 * @description Returns the buyback cost based on the net worth of the player.
	 * @returns {number}
	 */
	public get BuyBackCost(): number
	/**
	 * @description Calculate the gold loss on death.
	 * @returns {number}
	 */
	public get GoldLossOnDeath(): number
	/**
	 * @description Returns the time of the last salute sent by the hero's PlayerTeamData.
	 * @returns {number}
	 */
	public get TimeOfLastSaluteSent(): number
	/**
	 * @description Determines if the hero has enough gold to perform a buyback.
	 * @returns {boolean}
	 */
	public get HasGoldForBuyBack(): boolean
	/**
	 * The remaining cooldown time in seconds.
	 * @description Returns the remaining cooldown time for the buyback.
	 * @returns {number}
	 */
	public get BuyBackColdown(): number
	/**
	 * @description Determines if the hero has randomed.
	 * @returns {boolean}
	 */
	public get HasRandomed(): boolean
	/**
	 * @description Determines whether the specified entity is an enemy.
	 * @param {Entity} ent - The entity to check. Defaults to undefined.
	 * @return {boolean}
	 */
	public IsEnemy(ent?: Entity): boolean
	/**
	 * Calculates the 2D distance between this entity and the target entity.
	 * @description The 2D distance between this entity and the target entity. If the hero is not defined, returns Number.MAX_SAFE_INTEGER.
	 * @param {Entity} target - The target entity to calculate the distance to.
	 * @return {number}
	 */
	public Distance2D(target: Entity): number
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public SetBuyBack(): void
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public PreDataUpdate(): void
	/**
	 * @ignore
	 * @internal
	 * @description internal only for wrapper
	 */
	public PlayerDataChanged(hero?: Hero): void
	protected TeamChanged(): void
}
/**
 * ====================================================
 * NOTE: don't import this file into
 * PlayerData.ts
 * PlayerResource.ts
 * DataTeamPlayer.ts
 * PlayerTeamData.ts
 * ====================================================
 * */
