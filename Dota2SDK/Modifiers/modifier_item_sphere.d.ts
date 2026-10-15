// AUTO-GENERATED - do not edit.
declare class modifier_item_sphere extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public PostDataUpdate(): void
	public get ForceVisible(): boolean
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	protected GetLinkenProtection(): [number, boolean]
}
