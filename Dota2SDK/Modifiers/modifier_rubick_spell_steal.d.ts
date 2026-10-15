// AUTO-GENERATED - do not edit.
declare class modifier_rubick_spell_steal extends Modifier implements IBuff {
	public CachedSpellAmpDamage: number
	public CachedManaCostReduction: number
	public StealAbilityName: Nullable<string>
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	protected UpdateSpecialValues(): void
}
