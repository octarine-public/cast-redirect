// AUTO-GENERATED - do not edit.
declare class tiny_toss_tree extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	public get TriggersSpellBlock(): boolean
	public get CastRange(): number
}
