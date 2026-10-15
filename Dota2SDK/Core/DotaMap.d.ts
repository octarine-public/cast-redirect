// AUTO-GENERATED - do not edit.
declare namespace DotaMap {
	function IsRiver(pos: Vector3 | Vector2): boolean
	function GetPathCornerNearestTeam(corner: CreepPathCorner): Team
	function GetMapArea(pos: Vector3 | Vector2, ignoreBases?: boolean): [MapArea, Team]
	function GetCreepCurrentTarget(position: Vector3 | Vector2, team: Team, lane?: MapArea): Nullable<CreepPathCorner>
}
