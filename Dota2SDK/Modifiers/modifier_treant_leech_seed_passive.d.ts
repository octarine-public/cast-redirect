// AUTO-GENERATED - do not edit.
/**
 * Leech Seed is an autocast attack: while it is ready, the attack deals its `leech_damage` to an
 * enemy as a separate magical hit on the tick the attack lands
 */
declare class modifier_treant_leech_seed_passive extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	protected GetPreAttackBonusDamageMagical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
