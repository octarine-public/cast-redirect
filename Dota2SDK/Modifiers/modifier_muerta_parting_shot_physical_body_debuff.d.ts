// AUTO-GENERATED - do not edit.
declare class modifier_muerta_parting_shot_physical_body_debuff extends Modifier implements IDebuff, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public get Duration(): number
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	protected GetIncomingDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
