// AUTO-GENERATED - do not edit.
declare class Inventory {
	public readonly Owner: Unit
	public get TotalItems(): Nullable<Item>[]
	public get TPScroll(): Nullable<Item>
	public get NeutralItem(): Nullable<Item>
	public get Items(): Item[]
	public get Backpack(): Item[]
	public get Stash(): Item[]
	public get FreeSlotsInventory(): DOTAScriptInventorySlot[]
	public get FreeSlotsBackpack(): DOTAScriptInventorySlot[]
	public get FreeSlotsStash(): DOTAScriptInventorySlot[]
	public get HasAnyItemInventory(): boolean
	public get HasAnyItemBackpack(): boolean
	public get HasAnyItemStash(): boolean
	public get HasFreeSlotsInventory(): boolean
	public get HasFreeSlotsBackpack(): boolean
	public get HasFreeSlotsStash(): boolean
	public GetItem(slot: DOTAScriptInventorySlot): Nullable<Item>
	public GetItemSlot(item: Item): Nullable<DOTAScriptInventorySlot>
	public GetItems(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): Item[]
	public GetFreeSlots(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): DOTAScriptInventorySlot[]
	public HasAnyItem(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): boolean
	public HasFreeSlot(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot): boolean
	public HasFreeSlots(start: DOTAScriptInventorySlot, end: DOTAScriptInventorySlot, howMany: number): boolean
	public HasItemInInventory(name: string | RegExp, includeBackpack?: boolean): boolean
	public CountItemByOtherPlayer(player?: Nullable<Player>): number
	public GetItemByName(name: string | RegExp, includeBackpack?: boolean): Nullable<Item>
	public GetItemByClass<T extends Item>(class_: Constructor<T>, includeBackpack?: boolean): Nullable<T>
	public GetItemsByNames(names: string[], includeBackpack?: boolean): Item[]
	public GetItemsByClasses<T extends Item>(classes: Constructor<T>[], includeBackpack?: boolean): T[]
}
