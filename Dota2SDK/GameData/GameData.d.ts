// AUTO-GENERATED - do not edit.
declare namespace GameData {
	/** @description use GameState.TickInterval */
	const DefaultTickInterval: number
	/**
	 * https://dota2.gamepedia.com/Attributes
	 */
	const MaxManaPerIntellect = 12
	const MaxManaRegenerationPerIntellect = 0.05
	const DamageAmplifyPerIntellectPrecent = 0.07
	const BaseMagicImmunityResist = 50
	function GetArmorResistInternal(armor: number): number
	let ArmorPerAgility: number
	function SetArmorPerAgilityInternal(value: number): void
	let HealthGainPerStrength: number
	function SetHealthGainPerStrengthInternal(value: number): void
	let MagicResistPerIntellect: number
	function SetMagicResistPerIntellectInternal(value: number): void
	let MeleeDamageBlockAmount: number
	function SetMeleeDamageBlockAmountInternal(value: number): void
	class CMoveSpeedData {
		/**
		 * @readonly
		 */
		public readonly Max = 550
		/**
		 * @readonly
		 */
		public readonly Min = 100
	}
	class CAttackSpeedData {
		/**
		 * @readonly
		 * @defaultvalue `0` default value may be changed in progress game
		 */
		public SpecialAttackDelay: number
		/**
		 * @readonly
		 * @defaultvalue `0.10000000149011612` default value may be changed in progress game
		 */
		public MinHaste: number
		/**
		 * @readonly
		 * @defaultvalue `7` default value may be changed in progress game
		 */
		public MaxHaste: number
		/**
		 * @readonly
		 * @defaultvalue `10.000000149011612` default value may be changed in progress game
		 */
		public Min: number
		/**
		 * @readonly
		 * @defaultvalue `700` default value may be changed in progress game
		 */
		public Max: number
		public SetMinMaxFactorInternal(min: number, max: number, special?: number): void
	}
	class CDataRune {
		/**
		 * @readonly
		 * @defaultvalue `7` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of XP runes.
		 * @description spawn XP runes every x minutes
		 */
		public XPSpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `4` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of bounty runes.
		 * @description spawn bounty runes every x minutes
		 */
		public BountySpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `2` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of Powerup runes.
		 * @description spawn Powerup runes every x minutes
		 */
		public PowerUpSpawnEveryMinutes: number
		/**
		 * @readonly
		 * @defaultvalue `420` default value may be changed in progress game
		 * @description Represents the number of seconds between each spawn of XP runes.
		 * @description spawn XP runes every x seconds
		 */
		public XPSpawnEverySeconds: number
		/**
		 * @readonly
		 * @defaultvalue `180` default value may be changed in progress game
		 * @description Represents the number of minutes between each spawn of bounty runes.
		 * @description spawn bounty runes every x seconds
		 */
		public BountySpawnEverySeconds: number
		/**
		 * @readonly
		 * @defaultvalue `120` default value may be changed in progress game
		 * @description Represents the number of seconds between each spawn of Powerup runes.
		 * @description spawn Powerup runes every x seconds
		 */
		public PowerUpSpawnEverySeconds: number
		/** @description Initial gold earned before the first 5 minutes */
		public readonly InitialGold: number
		/** @description Additional gold earned per minute after the first 5 minutes */
		public readonly GoldPerMinute: number
		/** @description Initial gold earned after 5 minutes */
		public readonly GoldAfterFiveMinute: number
		/**
		 * Calculates the total gold earned based on the game time.
		 * @param gameTime - The total game time in seconds.
		 * @param goldAfterFiveMinute - The initial gold earned after 5 minutes.
		 * @param goldPerMinute - The additional gold earned per minute after the first 5 minutes.
		 * @param initialGold - The initial gold earned before the first 5 minutes.
		 * @description https://dota2.fandom.com/wiki/Gold#Bounty_Rune
		 * @returns {number}
		 */
		public CalculateGoldBountyByTime(gameTime: number, goldAfterFiveMinute?: number, goldPerMinute?: number, initialGold?: number): number
	}
	const MoveSpeedData: CMoveSpeedData
	const AttackSpeedData: CAttackSpeedData
	const Runes: CDataRune
}
