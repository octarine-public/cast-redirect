// AUTO-GENERATED - do not edit.
declare class invoker_chaos_meteor extends invoker_spell_extends {
	/** The meteor falls for a fixed time rather than flying at a speed. */
	public get Speed(): number
	public get LandTime(): number
	/** Units the meteor rolls on from where it lands, along the direction it was cast in. */
	public get TravelDistance(): number
	/** Speed of the roll. */
	public get TravelSpeed(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/** The meteor lands whole where it was cast and rolls on along the cast direction, harming whatever is under it. */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
}
