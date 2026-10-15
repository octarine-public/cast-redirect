// AUTO-GENERATED - do not edit.
/**
 * What an override asks for, beyond the styles themselves.
 *
 * An override is a HIGHLIGHT — "show me this unit" — rather than a look, which is why it offers a
 * material and a colour and none of the tuning a style carries. Anything that wants the tuning
 * wants the page's own cards.
 */
declare const enum EChamsOverride {
	/** Leave the style the page would have used, and change only the colour. */
	NoChange = -1,
	/**
	 * Draw the entity's own materials, and its cosmetics' own, whatever the page says.
	 *
	 * With a colour it keeps those materials and recolours them, which replaces nothing and so
	 * works on anything the game draws — including the units a substituted material cannot reach.
	 * With none it simply takes the page's dress off.
	 */
	ForceDefault = -2,
	/** A flat fill in the colour given. */
	Flat = 0,
	/** A lit body in the colour given: the page's Glossy at its defaults. */
	Glossy = 1,
	/** A rim in the colour given, its middle clear: the page's Fresnel at its defaults. */
	Fresnel = 2
}
/** One entity's override, and when it stops applying. */
interface ChamsOverrideEntry {
	readonly style: EChamsOverride
	readonly color: Nullable<Color>
	/** game time it lapses at, or undefined to hold until it is taken off */
	readonly until: Nullable<number>
}
/**
 * Per-entity overrides of what the chams page would otherwise draw.
 *
 * This is how one feature highlights a unit without knowing or disturbing how the page is set up:
 * an override outranks the audience a unit belongs to, applies whether chams are switched on or
 * not, and lapses on its own if it was given a time.
 *
 * Last writer wins. Two features highlighting the same unit is a question about those two features
 * rather than about this, and a priority here would only move the argument somewhere harder to see.
 */
declare class CChamsOverrides {
	/**
	 * Draws one entity a given way until it is taken off, or for a while.
	 *
	 * Covers what the entity WEARS as well as the entity: most of what you see of a Dota hero is
	 * his cosmetics, so a highlight that stopped at the body would light a man in ordinary armour.
	 * {@link EChamsOverride.NoChange} keeps whatever the page draws each of the two with.
	 *
	 * @param entity the entity, or its `Index`
	 * @param style what to draw it with; {@link EChamsOverride}
	 * @param color the colour to draw it in, or nothing to keep the one the page gives it
	 * @param time how long to hold it, in seconds; omitted holds until {@link Remove}. Either
	 * way it ends with the entity or the game
	 *
	 * @example
	 * ChamsSDK.Override(target, EChamsOverride.Flat, Color.Red, 3)
	 */
	public Override(entity: Entity | number, style: EChamsOverride, color?: Color, time?: number): void
	/** Takes one entity's override off, leaving it to whatever the page says. */
	public Remove(entity: Entity | number): void
	/** Takes every override off. */
	public Clear(): void
	/** Whether any override is in force, so a tick with none does no work. */
	public get Any(): boolean
	/** What is in force for an entity right now, or nothing. */
	public For(index: number): Nullable<ChamsOverrideEntry>
	/** Drops the ones that have lapsed, so a map that never draws them still forgets them. */
	public Expire(): void
}
/**
 * Overrides of the chams page, for highlighting a unit from anywhere.
 *
 * @example
 * ChamsSDK.Override(unit, EChamsOverride.Flat, Color.Red, 2)
 */
declare const ChamsSDK: CChamsOverrides
