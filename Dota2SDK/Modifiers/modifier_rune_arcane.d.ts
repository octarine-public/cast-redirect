// AUTO-GENERATED - do not edit.
declare class modifier_rune_arcane extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public GetTexturePath(small?: boolean): string
	protected GetManaCostPercentageStacking(): [number, boolean]
}
