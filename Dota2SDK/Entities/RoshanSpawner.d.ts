// AUTO-GENERATED - do not edit.
declare class RoshanSpawner extends Entity {
	public static get InitialTime(): number
	public static get TimeUntilNextMove(): number
	public IsMovingRoshan: boolean
	public readonly RoshanPrediction: Vector3
	public readonly KillCount = 0
	public readonly LastKillerTeam: Team
	public TOPSpawner_: number
	public BOTSpawner_: number
	public readonly RoshanHandle: number
	public get Roshan(): Nullable<Unit>
	public get TOPLocation(): Vector3
	public get BOTLocation(): Vector3
	public set CustomGlowColor(_: Nullable<Color>)
	public set CustomDrawColor(_: Nullable<[Color, RenderMode]>)
	public get LocationType(): ERoshanLocation
	public get Position(): Vector3
}
