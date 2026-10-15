// AUTO-GENERATED - do not edit.
declare class modifier_item_royale_with_cheese extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly CachedAbilityName = "item_royale_with_cheese"
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public GetTexturePath(): string
	protected GetTotalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
}
