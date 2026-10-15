// AUTO-GENERATED - do not edit.
declare class Item extends Ability {
	public readonly EnableTime: number
	public readonly Shareability: EShareAbility
	public readonly IsDroppable: boolean
	public readonly AssembledTime: number
	public readonly CanBeUsedOutOfInventory: boolean
	public readonly InitialCharges: number
	public readonly IsAlertable: boolean
	public readonly IsCastedOnPickup: boolean
	public readonly IsCombinable: boolean
	public readonly IsCombineLocked: boolean
	public readonly IsDisassemblable: boolean
	public readonly IsKillable: boolean
	public readonly IsPermanent: boolean
	public readonly IsPurchasable: boolean
	public readonly IsPurchasedWhileDead: boolean
	public readonly IsRecipe: boolean
	public readonly RequiresCharges: boolean
	public readonly IsSellable: boolean
	public readonly IsStackable: boolean
	public readonly PlayerOwnerID: number
	public readonly PurchaseTime: number
	public readonly SecondaryCharges: number
	public readonly StackableMax: number
	public readonly IsNeutralActiveDrop: boolean
	public readonly IsNeutralPassiveDrop: boolean
	public readonly MarkForSell: boolean
	public readonly NeutralDropTeam: Team
	/** @readonly */
	public ItemSlot: DOTAScriptInventorySlot
	public LastDroppedTime: number
	/** @deprecated use IsNeutralActiveDrop */
	public get IsNeutralDrop(): boolean
	public get Purchaser(): Nullable<Hero>
	public get TexturePath(): string
	/**
	 * The charge count the game writes on the inventory slot: `CurrentCharges` for every item
	 * but the ward dispenser, which shows the count of the ward it places next.
	 */
	public get DisplayCharges(): number
	public get Cooldown(): number
	public get IsReady(): boolean
	public get CanBeUsable(): boolean
	public get SaleRemainingTime(): number
	public get IsMuted(): boolean
	public get Cost(): number
	public get EffectName(): string
	public get IsDisplayingCharges(): boolean
	public get IsHidingCharges(): boolean
	public get GroundModelName(): string
	public get ShouldDisplayCharges(): boolean
	public get CurrentCharges(): number
	public set CurrentCharges(newVal: number)
	public get CanMoveInBackpack(): boolean
	public DisassembleItem(queue?: boolean): void | undefined
	public MoveItem(slot: DOTAScriptInventorySlot): void | undefined
	public DropAtFountain(): void | undefined
	public EjectFromStash(): void | undefined
	public SellItem(): void | undefined
	public ItemLock(): void | undefined
	public ItemUnlock(): void | undefined
	/**
	 * TODO: need improve
	 * Owner.CanBeCastedWhileChanneling, IsImmediateCasting
	 * Owner.CanBeCastedWhileStunned, CanBeCastedWhileRooted,
	 * Owner.CanBeCastedWhileSilenced
	 */
	public CanBeCasted(bonusMana?: number): boolean
	public CanBeCastedAt(time: number): boolean
}
