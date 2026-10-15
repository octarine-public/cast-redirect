// AUTO-GENERATED - do not edit.
declare class modifier_skywrath_mage_shield_barrier extends Modifier implements IShield, IBuff {
	public readonly IsHidden = false
	public readonly HasVisualShield = true
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetMagicalConstantBlock(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName: string, abilityName: string, level?: number, optional?: ISpecialValueOptions): number
}
