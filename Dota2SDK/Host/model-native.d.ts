// AUTO-GENERATED - do not edit.
declare interface AnimationActivityData {
	readonly name: string
	readonly activity: number
	readonly flags: number
	readonly weight: number
}

declare interface AnimationData {
	readonly name: string
	readonly activities: AnimationActivityData[]
	readonly frameCount: number
	readonly fps: number
}

declare interface HitboxData {
	readonly name: string
	readonly boneName: string
	readonly boneIndex: number
	readonly groupId: number
	readonly shapeType: number // 0 = box, 1 = sphere, 2 - capsule
	readonly radius: number
	readonly translationOnly: boolean
	readonly localMin: [number, number, number]
	readonly localMax: [number, number, number]
	readonly min: [number, number, number]
	readonly max: [number, number, number]
}

declare interface HitboxSetData {
	readonly name: string
	readonly hitboxes: HitboxData[]
}

declare class ModelData {
	public readonly animations: AnimationData[]
	public readonly attachments: string[]

	/**
	 * @returns min: Vector3 to IOBuffer offset 0, max: Vector3 to IOBuffer offset 3
	 */
	public getBounds(): void
	public getHitboxSets(): HitboxSetData[]

	/**
	 * @param animationID ID in animations array, or -1 for default static skeleton
	 * @param attachmentID ID in attachments array
	 * @param time time of animation, in seconds
	 * @param scale scale of the model
	 *
	 * Pass Position: Vector3 at IOBuffer offset 0,
	 *      Angle: QAngle at IOBuffer offset 3
	 *
	 * @returns position: Vector3 to IOBuffer offset 0,
	 *          angle: QAngle at IOBuffer offset 3
	 */
	public getAttachmentData(
		animationID: number,
		attachmentID: number,
		time: number,
		scale: number,
	): void

	/**
	 * @param animationID ID in animations array, or -1 for default static skeleton
	 * @param attachmentID ID in attachments array
	 * @param time time of animation, in seconds
	 *
	 * Pass mat: Matrix3x4 at IOBuffer offset 0
	 *
	 * @returns mat: Matrix3x4 to IOBuffer offset 0
	 */
	public getAttachmentMatrix?(
		animationID: number,
		attachmentID: number,
		time: number,
	): void
}
