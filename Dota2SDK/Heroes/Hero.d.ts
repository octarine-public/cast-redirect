// AUTO-GENERATED - do not edit.
declare class Hero extends Unit {
	public readonly Index: number
	public readonly AbilityPoints: number
	public readonly CurrentXP: number
	public readonly IsReincarnating: boolean
	public readonly RecentDamage: number
	public readonly SpawnedAt: number
	public readonly Agility: number
	public readonly Intellect: number
	public readonly Strength: number
	public readonly TotalAgility: number
	public readonly BaseTotalIntellect: number
	public readonly TotalStrength: number
	public readonly HeroFacetKey: number
	public readonly RespawnTimePenalty: number
	public readonly RespawnTime: number
	public readonly FacetAbilities: number[]
	public readonly StartPosition: Vector3
	public FocusFireActive: boolean
	/** @internal (changed by CFocusFireChanged) */
	public FocusFireTargetIndex_: number
	protected readonly ReplicatingOtherHeroModel_: number
	/** @deprecated use HeroFacetKey */
	public get HeroFacetID(): number
	public get BaseMoveSpeed(): number
	public get BaseAttackRange(): number
	public get FocusFireTarget(): Nullable<Unit>
	public get IsRealHero(): boolean
	public get HeroID(): number
	public get MagicalDamageResist(): number
	public get IsIllusion(): boolean
	public get IsMyHero(): boolean
	public get MaxRespawnDuration(): number
	public get HealthBarSize(): Vector2
	public get HealthBarPositionCorrection(): Vector2
	public get HeroFacet(): string
}
