// AUTO-GENERATED - do not edit.
/** The server's integer step costs: ten straight, fourteen diagonal. */
declare const StraightCost = 10
declare const DiagonalCost = 14
declare const SectorSize = 16
declare const NoPortal = -1
/** The server convar with the cost it adds per axis whose step direction changes. */
declare const DirectionCostConvar = "dota_gridnav_direction_cost"
/**
 * The sector graph the server's long pather searches once it is more than thirty cells from
 * the start: the grid cut into 16x16 sectors, a portal for every run of open cells along a
 * sector edge that face open cells across it, and the cost of walking inside the sector between
 * the midpoints of any two of its portals. Built from the static grid the way the server builds
 * it, from the walkable and tree bits alone. The sectors sit on multiples of sixteen in the
 * grid's own cell coordinates, not at its corner: the server rounds the grid's minimum down to
 * a sector boundary, so on a map whose minimum is not a multiple of sixteen the first row or
 * column of sectors is cut short.
 */
declare class SectorGraph {
	public SectorsX: number
	public SectorsY: number
	public PortalCount: number
	/** Sector index of each portal. */
	public PortalSector: Int32Array
	/** Edge of each portal: 0 north, 1 east, 2 south, 3 west. */
	public PortalEdge: Uint8Array
	/** Cell at the midpoint of each portal, on the sector's own edge. */
	public PortalMid: Int32Array
	/** The cost per changed step axis the portal costs were walked with. */
	public get DirectionCost(): number
	/** Sector index of a cell. */
	public SectorOf(cell: number): number
	/** The portal of `sector` on `edge` that contains the cell `(x, y)`, or `NoPortal`. */
	public PortalAt(sector: number, edge: number, x: number, y: number): number
	/** First index into the connection lists of `portal`. */
	public ConnectionStart(portal: number): number
	/** One past the last index into the connection lists of `portal`. */
	public ConnectionEnd(portal: number): number
	/** Walking cost from the portal to the connection's target portal, in server cost units. */
	public ConnectionCost(index: number): number
	/** Target portal of a connection, on the same sector. */
	public ConnectionTarget(index: number): number
	/**
	 * Rebuilds the graph for a grid of `width` by `height` cells whose `passable` byte is
	 * non-zero on open cells and whose first cell has the grid coordinates `(minX, minY)`;
	 * `directionCost` is what the server adds per axis whose step direction changes.
	 */
	public Build(width: number, height: number, passable: Uint8Array, directionCost: number, minX: number, minY: number): void
	/**
	 * Brings the graph up to date after `cells` of the `passable` grid it was built from changed,
	 * rebuilding only the sectors that read them: the sector a cell lies in, and the neighbour
	 * whose edge portals look across at it. The result is the one a whole {@link Build} gives.
	 * A `directionCost` other than the one the graph was built with rebuilds every sector.
	 * @example
	 * sectors.Update(open, [treeCell], ConVarsSDK.GetInt(DirectionCostConvar, 1))
	 */
	public Update(passable: Uint8Array, cells: readonly number[], directionCost: number): void
}
