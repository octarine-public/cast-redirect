// AUTO-GENERATED - do not edit.
declare class modifier_pugna_life_drain_spell_amp extends Modifier implements IDebuff, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected GetSpellAmplifyPercentage(): [number, boolean]
}
