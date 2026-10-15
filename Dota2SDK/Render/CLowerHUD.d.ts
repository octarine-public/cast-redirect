// AUTO-GENERATED - do not edit.
/**
 * The lower HUD of whatever unit the player has selected.
 *
 * The game rebuilds this region for every selection — a hero gets a talent tree, an innate
 * display and a nine-slot inventory, a creep gets neither — so the panels are read rather than
 * predicted, and the ability and inventory lists are as long as the game currently makes them.
 */
declare class CLowerHUD extends CHUDSection {
	constructor(hud: HUDPanel)
	/**
	 * The area the lower HUD actually covers — the union of the panels the game is laying out,
	 * so it shrinks when a unit has no talent tree and grows when it gains extra abilities.
	 */
	public get FullHUDContainer(): Nullable<Rectangle>
	/** The whole lower HUD strip, including the space the game leaves empty around it. */
	public get LowerHUD(): Nullable<Rectangle>
	/** The block holding the portrait, abilities, health bars and inventory. */
	public get CenterBlock(): Nullable<Rectangle>
	public get LeftFlare(): Nullable<Rectangle>
	public get RightFlare(): Nullable<Rectangle>
	/** The unit portrait. */
	public get Portrait(): Nullable<Rectangle>
	/** The name label under the portrait. */
	public get UnitName(): Nullable<Rectangle>
	/** The attribute block that replaces the portrait backing for heroes. */
	public get StatsContainer(): Nullable<Rectangle>
	/** The level orb with its experience ring. */
	public get XP(): Nullable<Rectangle>
	/** The orb together with the experience label above it. */
	public get XPContainer(): Nullable<Rectangle>
	/** The unit group panel shown when several units are selected. */
	public get MultiUnit(): Nullable<Rectangle>
	/** The respawn timer and buyback button shown while the hero is dead. */
	public get DeathPanel(): Nullable<Rectangle>
	/** The level-up button column beside the abilities. */
	public get LevelUp(): Nullable<Rectangle>
	/** The health and mana bars. */
	public get HealthManaContainer(): Nullable<Rectangle>
	/** The talent tree, abilities and aghanim's status taken together. */
	public get AbilitiesContainer(): Nullable<Rectangle>
	/** The talent tree button; undefined for units that have none. */
	public get TalentTree(): Nullable<Rectangle>
	/** The innate ability display; undefined for units that have none. */
	public get RootInnateDisplay(): Nullable<Rectangle>
	/** The ability row itself, without the talent tree or aghanim's status. */
	public get Abilities(): Nullable<Rectangle>
	/**
	 * The icon square of every ability the game is showing, left to right. Slots the unit does
	 * not use are left out, so the length is the visible ability count.
	 * @example
	 * GUIInfo.LowerHUD.AbilitiesRects.forEach(rect =>
	 * 	RendererSDK.OutlinedRect(rect.pos1, rect.Size)
	 * )
	 */
	public get AbilitiesRects(): Rectangle[]
	/**
	 * The whole slot of every ability the game is showing — the hotkey above the icon and the
	 * level pips below it included.
	 */
	public get AbilitySlots(): Rectangle[]
	/** The aghanim's scepter and shard status block. */
	public get AghsStatusContainer(): Nullable<Rectangle>
	/** The extra ability bar Invoker and friends get above the main row. */
	public get SecondaryAbilities(): Nullable<Rectangle>
	/** The inventory block, backpack included. */
	public get InventoryContainer(): Nullable<Rectangle>
	/** The six main inventory slots, in slot order. */
	public get MainInventorySlots(): Nullable<Rectangle>[]
	/** The backpack slots, in slot order. */
	public get BackpackSlots(): Nullable<Rectangle>[]
	/** The neutral item and teleport slots taken together. */
	public get NeutralAndTPContainer(): Nullable<Rectangle>
	/** The neutral item slot. */
	public get NeutralSlot(): Nullable<Rectangle>
	/** The teleport scroll slot. */
	public get TPSlot(): Nullable<Rectangle>
	/** The buff row above the HUD. */
	public get Buffs(): Nullable<Rectangle>
	/** The debuff row above the HUD. */
	public get Debuffs(): Nullable<Rectangle>
	/**
	 * Re-derives the union rectangles the section owns, and counts the ability and backpack slots
	 * while the reading is open, so the first script to ask sees them.
	 */
	public Refresh(): void
	public DebugDraw(): void
}
