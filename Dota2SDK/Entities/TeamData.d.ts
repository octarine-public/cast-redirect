// AUTO-GENERATED - do not edit.
declare class TeamData extends Entity {
	public DataTeam: DataTeamPlayer[]
	public WorldTreeModelReplacements: TreeModelReplacement[]
	public readonly NextPowerRuneType: DOTA_RUNES
	public readonly NextPowerRuneSpawnIndex: number
	public readonly DesiredWardPlacement: Vector2[]
	public readonly PossibleWardPlacement: Vector2[]
	public readonly EnemyStartingPosition: number[]
	public readonly CaptainInspectedHeroID = 0
	public readonly SuggestedWardWeights: number[]
	public readonly SuggestedWardIndexes: number[]
	public readonly SuggestedLanes: number[]
	public readonly SuggestedLaneWeights: number[]
	public readonly SuggestedLaneRoam: boolean[]
	public readonly SuggestedLaneJungle: boolean[]
	public readonly NeutralItemsConsumed: number[]
	public readonly KnownClearCamps: number[]
	public readonly RoshanPhaseEndTime: number
	public readonly RoshanPhaseStartTime: number
	public NPCVisibleState: bigint[]
	public RoshanPhase: ERoshanSpawnPhase
	public toJSON(): {
		Team: Team
		DataTeam: DataTeamPlayer[]
		WorldTreeModelReplacements: TreeModelReplacement[]
		DesiredWardPlacement: Vector2[]
		EnemyStartingPosition: number[]
		CaptainInspectedHeroID: number
		SuggestedWardWeights: number[]
		SuggestedWardIndexes: number[]
		SuggestedLanes: number[]
		SuggestedLaneWeights: number[]
		SuggestedLaneRoam: boolean[]
		SuggestedLaneJungle: boolean[]
		NeutralItemsConsumed: number[]
	}
}
