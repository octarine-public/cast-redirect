// AUTO-GENERATED - do not edit.
/**
 * What a particle attachment needs from whatever it is attached to. Dota also hangs particles off
 * units it cannot see, which are stand-ins rather than networked entities, so this is deliberately
 * narrower than {@link INativeEntity}.
 */
interface INativePredictionTarget {
	readonly Index: number
	LastPredictedPositionUpdate: number
	LastRealPredictedPositionUpdate: number
	readonly PredictedPosition: Vector3
	EntityMatches(other: INativeEntity): boolean
}

interface INativeEntity extends INativePredictionTarget {
	ClassName: string
	IsValid: boolean
	IsVisible: boolean
	IsGameRules: boolean
	BecameDormantTime: number
	readonly VisualPosition: Vector3
	readonly VisualAngles: QAngle
	readonly VisualVelocity: Vector3
	FieldHandlers_: Nullable<Map<number, FieldHandler>>
	Properties_: IEntityPropertiesNode
	SerialMatches(serial: number): boolean
}

interface INativeGameRules extends INativeEntity {
	readonly IsPaused: boolean
	readonly PauseStartTick: number
	readonly TotalPausedTicks: number | number[]
	RawGameTime: number
}

interface IEntityPropertiesNode {
	map: Map<number, EntityPropertyType>
}

type EntityPropertyType =
	| IEntityPropertiesNode
	| EntityPropertyType[]
	| string
	| Vector4
	| Vector3
	| Vector2
	| bigint
	| number
	| boolean

type FieldHandler = (entity: INativeEntity, newValue: EntityPropertyType) => unknown
