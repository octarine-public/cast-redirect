// AUTO-GENERATED - do not edit.
declare class modifier_ursa_fury_swipes_damage_increase extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public Remove(): boolean
	protected AddModifier(): boolean
	protected GetPreAttackIncomingDamageBonus(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
	protected UpdateMaulDamage(state: boolean): void
}
