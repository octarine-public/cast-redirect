// AUTO-GENERATED - do not edit.
declare class modifier_centaur_stampede extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly IsGlobally = true
	public readonly BuffModifierName: string
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public PostDataUpdate(): void
	protected GetMoveSpeedAbsoluteMin(): [number, boolean]
}
