import { Paths } from "./paths"

/** Glyphs of the menu page: the SDK set where it has one, our own outline glyphs otherwise. */
export const CastRedirectIcons = {
	/** A dashed figure whose arrow bends over to a solid one: the page itself. */
	Page: `${Paths.Icons}/redirect.svg`,
	State: Menu.Icons.Power,
	/** A figure with its dashed copy beside it. */
	Illusions: `${Paths.Icons}/illusion.svg`,
	Creeps: `${Paths.Icons}/creep.svg`,
	/** Two figures side by side: casts on allies are redirected too. */
	Allies: `${Paths.Icons}/allies.svg`,
	/** A heart with a pulse through it: the Meepo with the least health. */
	LowHP: `${Paths.Icons}/low-hp.svg`,
	SearchRange: Menu.Icons.Radius,
	Items: `${Paths.Icons}/items.svg`,
	Abilities: Menu.Icons.Sparkles
} as const
