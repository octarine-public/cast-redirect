// AUTO-GENERATED - do not edit.
declare class modifier_shredder_reactive_armor_bomb extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public get CurrentShieldDamage(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetTotalConstantBlock(): [number, boolean]
	protected UpdateSpecialValues(): void
}
