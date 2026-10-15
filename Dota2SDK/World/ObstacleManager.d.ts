// AUTO-GENERATED - do not edit.
type MapObstacle = Map<number, [EObstacleType, Vector3, Vector3, number]>
declare class ObstacleManager {
	public readonly Obstacles: MapObstacle
	public AddObstacle(position: Vector3, radius: number, end?: Vector3, obstacleType?: EObstacleType): number
	public GetBestPosition(position: Vector3, rotationRad: number, speed: number, turnRate: number, hullRadius: number, flying: boolean): Vector3
	public DeleteObstacle(obstacleId: number): void
	public ClearObstacles(): void
}
