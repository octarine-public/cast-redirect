// AUTO-GENERATED - do not edit.
declare const enum PARTICLE_RENDER_NAME {
	NORMAL = "Normal",
	ROPE = "Rope"
}
declare enum PARTICLE_RENDER {
	NORMAL = 0,
	ROPE = 1
}
interface IDrawCircleOptions {
	Attachment?: ParticleAttachment
	RenderStyle?: PARTICLE_RENDER
	Position?: Entity | Vector3
	Color?: Color
	Fill?: boolean
}
interface IDrawLineOptions {
	Attachment?: ParticleAttachment
	Position?: Entity | Vector3
	Color?: Color
	Width?: number
	Alpha?: number
	Mode2D?: number
}
interface IDrawLineTargetOptions {
	Attachment?: ParticleAttachment
	Start?: Entity | Vector3
	End?: Entity | Vector3
	Color?: Color
	Alpha?: number
}
interface IDrawBoundingAreaOptions {
	RenderStyle?: PARTICLE_RENDER
	Color?: Color
	Width?: number
}
interface IDrawRectangleOptions {
	Attachment?: ParticleAttachment
	Start?: Vector3
	End?: Vector3
	Color?: Color
	Width?: number
	WihtinSource?: boolean
	WihtinArrow?: boolean
	ArrowSize?: number
	ArrowAlpha?: number
}
interface IDrawConeOptions extends IDrawRectangleOptions {
	WidthEnd?: number
}
interface IDrawArrowOptions {
	Attachment?: ParticleAttachment
	Start?: Vector3
	End?: Vector3
	Alpha?: number
	Color?: Color
	Width?: number
}
declare class ParticlesSDK implements IParticleOwner {
	public static readonly Instances: ParticlesSDK[]
	public readonly AllParticles: Map<any, Particle>
	constructor()
	public AddOrUpdate(key: any, path: string, attachment: ParticleAttachment, entity: Entity, ...points: ControlPointParam[]): Particle
	public DrawCircle(key: string | number, entity: Entity, range: number, options: IDrawCircleOptions): Particle
	/** @deprecated use key number or string */
	public DrawCircle(key: any, entity: Entity, range: number, options: IDrawCircleOptions): Particle
	public DrawSelectedRing(key: any, entity: Entity, range?: number, position?: Entity | Vector3, color?: Color): Particle
	public DrawLine(key: any, entity: Entity, endPosition: Entity | Vector3, options?: IDrawLineOptions): Particle
	public DrawRangeLine(key: any, entity: Entity, endPosition: Entity | Vector3): Particle
	public DrawLineToTarget(key: any, entity: Entity, target: Entity, color?: Color, options?: IDrawLineTargetOptions): Particle
	public DrawRectangle(key: string, entity: Entity, options?: IDrawRectangleOptions): Particle
	public DrawCone(key: string, entity: Entity, options?: IDrawConeOptions): Particle
	public DrawArrow2D(key: string, entity: Entity, options?: IDrawArrowOptions): Particle
	/**
	 *
	 * ControlPoints:
	 * 0: Start Position (|| entity pos)
	 * 1: End Position
	 * 2: Color
	 * 3: Width
	 * 4: Alpha
	 */
	public DrawBoundingArea(key: any, entity: Entity, startPos: Entity | Vector3, endPosition?: Entity | Vector3, options?: IDrawBoundingAreaOptions): Particle
	public SetConstrolPointByKey(key: any, id: number, point: ControlPoint): void
	public SetInFogVisibleByKey(key: any, state: boolean): void
	public SetConstrolPointsByKey(key: any, ...points: ControlPointParam[]): void
	public RestartByKey(key: any): void
	public DestroyByKey(key: any, immediate?: boolean): void
	public DestroyAll(immediate?: boolean): void
	public CheckChangedRange(key: any, range: number): void
}
