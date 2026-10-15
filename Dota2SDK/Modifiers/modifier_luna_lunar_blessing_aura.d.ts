// AUTO-GENERATED - do not edit.
declare class modifier_luna_lunar_blessing_aura extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly IsGlobally = true
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get StackCount(): number
	public IsBuff(): this is IBuff
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName: string, abilityName: string, level?: number, _optional?: ISpecialValueOptions): number
}
