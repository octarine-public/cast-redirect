// AUTO-GENERATED - do not edit.
declare class modifier_fountain_glyph extends Modifier implements IShield {
	public readonly IsHidden = false
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsShield(): this is IShield
	public GetTexturePath(): string
	protected GetAbsoluteNoDamagePure(): [number, boolean]
	protected GetAbsoluteNoDamageMagical(): [number, boolean]
	protected GetAbsoluteNoDamagePhysical(): [number, boolean]
}
