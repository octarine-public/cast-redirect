// AUTO-GENERATED - do not edit.
declare class CPlayerResource extends Entity {
	public PlayerData: Nullable<PlayerData>[]
	public RespawnPositions: Nullable<Vector3>[]
	public PlayerTeamData: Nullable<PlayerTeamData>[]
	public GetPlayerDataByPlayerID(playerID: number): Nullable<PlayerData>
	public GetPlayerTeamDataByPlayerID(playerID: number): Nullable<PlayerTeamData>
}
declare let PlayerResource: Nullable<CPlayerResource>
