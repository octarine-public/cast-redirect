// AUTO-GENERATED - do not edit.
type ControlPointParam = [number, ControlPoint]
type ControlPoint = boolean | number | Entity | Vector3 | Vector2 | Color | number[]
/**
 * What a particle needs of the manager that made it: the book it enters itself in and takes
 * itself out of. Named here rather than taken from the manager so the manager can hold the
 * particle without the particle holding the manager back.
 */
interface IParticleOwner {
	readonly AllParticles: Map<any, Particle>
}
declare class Particle {
	public readonly Parent: IParticleOwner
	public readonly Key: any
	public readonly Path: string
	public readonly Attachment: ParticleAttachment
	public readonly AttachedTo: Entity
	public IsValid: boolean
	public IsHidden: boolean
	public readonly ControlPoints: Map<number, Vector3>
	constructor(Parent: IParticleOwner, Key: any, Path: string, Attachment: ParticleAttachment, AttachedTo: Entity, ...controlPoints: ControlPointParam[])
	public SetControlPoint(id: number, param: ControlPoint): void
	/**
	 * @param points rest params (index as number, point as Vector)
	 *
	 * @example
	 * particle.SetControlPoints(
	 * 	[1, new Vector3(1, 2, 3)],
	 * 	[2, new Vector2(1, 2, 3)],
	 * 	[3, new Color(1, 2, 3)],
	 * 	[4, false],
	 * 	[5, [1, 2]],
	 * 	[6, 646]
	 * )
	 */
	public SetControlPoints(...controlPoints: ControlPointParam[]): void
	public SetInFogVisible(state?: boolean): this
	public Restart(): void
	public Destroy(immediate?: boolean): this
	public toJSON(): {
		Key: any
		Path: string
		Attachment: ParticleAttachment
		Entity: Entity
		ControlPoints: [number, Vector3][]
		EffectIndex: number
	}
}
