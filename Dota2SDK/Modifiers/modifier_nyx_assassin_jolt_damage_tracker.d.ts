// AUTO-GENERATED - do not edit.
declare class DamageTracker {
	public readonly Damage: number
	public readonly LastDamageTime: number
	public get IsExpired(): boolean
}
declare class modifier_nyx_assassin_jolt_damage_tracker extends Modifier {
	public EchoDuration: number
	public BonusTotalDamage: number
	public readonly BonusDamages: DamageTracker[]
	protected readonly CanPostDataUpdate = true
	public PostDataUpdate(): void
	protected UpdateSpecialValues(): void
}
