// AUTO-GENERATED - do not edit.
declare class modifier_oracle_false_promise extends Modifier implements IBuff {
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public PreventsDeath(_damageType: DAMAGE_TYPES): boolean
	protected GetSpellAmplifyPercentage(): [number, boolean]
	protected GetPhysicalArmorBonus(): [number, boolean]
	protected GetBaseAttackTimeConstantAdjust(): [number, boolean]
	protected UpdateSpecialValues(): void
	protected GetSpecialValue(specialName: string, abilityName?: string, level?: number): number
}
