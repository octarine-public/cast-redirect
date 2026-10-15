// AUTO-GENERATED - do not edit.
declare class monkey_king_tree_dance extends Ability {
	public readonly StartPosition: Vector3
	public TargetTree: Nullable<Tree | TempTree>
	public PredictedPositionsPerTree: [Vector3, Tree | TempTree, number][]
	public StartedJumpingTime: number
	public EndedJumpingTime: number
	public IsJumping: boolean
	public IsJumpingToTree: boolean
	public get SpringSpeed(): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
