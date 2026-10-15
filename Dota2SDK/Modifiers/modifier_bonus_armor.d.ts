// AUTO-GENERATED - do not edit.
declare class modifier_bonus_armor extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public GetTexturePath(): string
	protected GetPhysicalArmorBonus(): [number, boolean]
}
