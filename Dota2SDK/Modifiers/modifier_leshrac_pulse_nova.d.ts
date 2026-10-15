// AUTO-GENERATED - do not edit.
declare class modifier_leshrac_pulse_nova extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (_params?: IModifierParams) => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	protected GetIncomingDamagePercentage(_params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
