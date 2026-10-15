// AUTO-GENERATED - do not edit.
declare class modifier_rune_haste extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate: boolean
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	public GetTexturePath(small?: boolean): string
	protected GetMoveSpeedAbsoluteMin(): [number, boolean]
}
