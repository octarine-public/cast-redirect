// AUTO-GENERATED - do not edit.
declare class modifier_medusa_mana_shield extends Modifier implements IShield {
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsShield(): this is IShield
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
