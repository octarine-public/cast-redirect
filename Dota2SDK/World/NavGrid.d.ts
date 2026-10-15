// AUTO-GENERATED - do not edit.
/**
 * The passability layer path queries run on: the static grid, trees, and the cells units stand
 * in, plus the clearance of every cell (its distance to the nearest impassable cell, in cells)
 * so a hull is a threshold test rather than a dilation per query. Builds itself lazily when the
 * map loads; a tree that falls or grows back updates only the clearance rows and the sectors its
 * cells reach, so a tree event costs a millisecond rather than a whole rebuild.
 */
declare class NavGrid {
	/** Grows whenever passability changes, units included; a path computed under an older version may be stale. */
	public Version: number
	/** Grows only when the map or a tree changes; the version to cache routes that ignore units by. */
	public StaticVersion: number
	/** The sector and portal graph of the static grid, the way the server's long pather sees it. */
	public get Sectors(): SectorGraph
	/** Cells per row. */
	public get Width(): number
	/** Cells per column. */
	public get Height(): number
	/** Number of cells. */
	public get CellCount(): number
	/** World size of a cell. */
	public get EdgeSize(): number
	/** True once a map grid is loaded. */
	public get IsReady(): boolean
	/**
	 * Cell index of a world position, `-1` outside the grid.
	 * @example
	 * const cell = PathfinderSDK.NavGrid.CellOf(unit.Position)
	 */
	public CellOf(position: Vector2 | Vector3): number
	/** Cell index of plane coordinates, `-1` outside the grid. */
	public CellOf2D(x: number, y: number): number
	/** The units currently standing on the grid as obstacles. */
	public Occupants(): IterableIterator<INavUnit>
	/** Cell index of grid coordinates, `-1` outside the grid. */
	public CellAt(gridX: number, gridY: number): number
	/** Grid X coordinate of a cell. */
	public GridX(cell: number): number
	/** Grid Y coordinate of a cell. */
	public GridY(cell: number): number
	/** World centre of a cell on the plane, written into `out`. */
	public CellCenter2D(cell: number, out?: Vector2): Vector2
	/** World centre of a cell, with terrain height, written into `out`. */
	public CellCenter(cell: number, out?: Vector3): Vector3
	/** Distance from the cell centre to the nearest cell a ground unit cannot enter, in cells. */
	public Clearance(cell: number): number
	/** Units standing in the cell, phased and flying ones excluded. */
	public Occupancy(cell: number): number
	/**
	 * Whether a unit of `hullRadius` can stand in the cell. Flying units ignore trees and
	 * unwalkable ground but not movement blockers. With `avoidUnits` a unit standing in the cell
	 * blocks it only where there is no room to slide past, a clearance below two cells: measured
	 * on the demo map, the server brushes past units in the open and detours around one in a gap.
	 */
	public IsPassable(cell: number, hullRadius: number, flying: boolean, avoidUnits: boolean): boolean
	/** Whether a tree stands in the cell. */
	public HasTree(cell: number): boolean
	/**
	 * Whether any tree cell lies inside the swept segment: what a projectile that trees stop
	 * runs into on its way.
	 * @example
	 * const blocked = PathfinderSDK.NavGrid.TreeInside(new Capsule2D(from, to, hookWidth))
	 */
	public TreeInside(shape: Capsule2D): boolean
	/** @internal */
	public Sync(): boolean
	/** @internal */
	public UpdateUnit(unit: INavUnit): void
	/** @internal */
	public RemoveUnit(unit: INavUnit): void
}
