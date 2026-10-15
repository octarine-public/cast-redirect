// AUTO-GENERATED - do not edit.
declare class CGridNav {
	public readonly EdgeSize: number
	public readonly Offset: Vector2
	public readonly Size: Vector2
	public readonly Min: Vector2
	public readonly Max: Vector2
	/** Grows whenever a cell flag changes, so a consumer can tell a stale copy of the grid from a fresh one. */
	public Version: number
	public readonly UnitGridPos: Map<INavUnit, Vector2>
	public readonly UnitGridVisiblePos: Map<INavUnit, Vector2>
	constructor(EdgeSize: number, Offset: Vector2, Size: Vector2, Min: Vector2, CellFlags: Uint8Array)
	public IsInWorld(position: Vector3, buffer?: number): boolean
	public IsTraversable(position: Vector3): boolean
	public GetCellFlagsForPos(pos: Vector3 | Vector2): number
	public GetCellFlagsForGridPos(gridPosX: number, gridPosY: number): number
	public GetGridPosForPos(pos: Vector3 | Vector2): Vector2
	public GetRectForGridPos(gridPosX: number, gridPosY: number): Rectangle
	public UpdateUnitState(unit: INavUnit, deleteUnit: boolean): void
	public UpdateTreeState(tree: INavTree): void
	public UpdateVisionState(unit: INavUnit, deleteUnit: boolean): void
}
declare let GridNav: Nullable<CGridNav>
