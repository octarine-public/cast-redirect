// AUTO-GENERATED - do not edit.
declare class modifier_viper_nethertoxin extends Modifier implements IDebuff, IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get EffMultiplier(): number
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
