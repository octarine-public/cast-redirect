import { CastRedirectIcons } from "./icons"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly Illusions: Menu.Toggle
	public readonly Creeps: Menu.Toggle
	public readonly ToFriend: Menu.Toggle
	public readonly ToLowHPMeepo: Menu.Toggle
	public readonly SearchRange: Menu.Slider

	private readonly tree: Menu.Node
	private readonly items: Menu.ImageSelector
	private readonly abilities: Menu.ImageSelector
	/** The switches on the titles of the two selectors, which turn the whole row on and off. */
	private readonly itemsState: Menu.Toggle
	private readonly abilitiesState: Menu.Toggle

	/** Every Dagon level stands under the last one's tile. */
	private readonly dagon = "item_dagon_5"
	private readonly itemNames: string[] = [
		this.dagon,
		"item_rod_of_atos",
		"item_orchid",
		"item_bloodthorn",
		"item_hurricane_pike",
		"item_ethereal_blade",
		"item_diffusal_blade",
		"item_disperser",
		"item_abyssal_blade",
		"item_heavens_halberd",
		"item_cyclone",
		"item_sheepstick",
		"item_nullifier",
		"item_force_staff",
		"item_glimmer_cape",
		"item_wind_waker",
		"item_lotus_orb",
		"item_sphere",
		"item_pavise",
		"item_solar_crest",
		"item_holy_locket",
		"item_royal_jelly",
		"item_book_of_shadows",
		"item_force_boots",
		"item_psychic_headband"
	]

	constructor() {
		this.tree = Menu.AddEntry("Utility").AddNode(
			"Cast Redirect",
			CastRedirectIcons.Page,
			"Redirects single-target abilities to the hero in case of a illusion/creep misclick in a specified range"
		)
		this.tree.SortNodes = false

		// the script's own switch rides the header of the page and gates it
		this.State = this.tree.AddToggle("State", false)
		this.State.IconPath = CastRedirectIcons.State
		this.tree.HeaderControl = this.State
		this.tree.Gate = this.State

		this.tree.AddSectionHeader("Redirect from")
		this.Illusions = this.tree.AddToggle("Illusions", true)
		this.Illusions.IconPath = CastRedirectIcons.Illusions
		this.Creeps = this.tree.AddToggle("Creeps", false)
		this.Creeps.IconPath = CastRedirectIcons.Creeps

		this.tree.AddSectionHeader("Redirect to")
		this.ToFriend = this.tree.AddToggle(
			"Allies",
			false,
			"Redirect casts on allied illusions and creeps as well"
		)
		this.ToFriend.IconPath = CastRedirectIcons.Allies
		this.ToLowHPMeepo = this.tree.AddToggle(
			"Low HP Meepo",
			false,
			"A cast on a Meepo goes to the Meepo with the least health"
		)
		this.ToLowHPMeepo.IconPath = CastRedirectIcons.LowHP
		this.SearchRange = this.tree.AddSlider(
			"Search range",
			150,
			50,
			250,
			0,
			"How far from the clicked unit a hero is searched"
		)
		this.SearchRange.IconPath = CastRedirectIcons.SearchRange

		this.items = this.tree.AddImageSelector(
			"Items",
			this.itemNames,
			this.itemNames.map(name => [name, true])
		)
		this.items.IconPath = CastRedirectIcons.Items
		this.itemsState = this.tree.AddToggle("Redirect items", true)
		this.items.HeaderControl = this.itemsState

		this.abilities = this.tree.AddImageSelector(
			"Abilities",
			[],
			undefined,
			"Abilities of your heroes appear here once they are learned"
		)
		this.abilities.IconPath = CastRedirectIcons.Abilities
		this.abilitiesState = this.tree.AddToggle("Redirect abilities", true)
		this.abilities.HeaderControl = this.abilitiesState
		this.abilities.IsHidden = true
	}

	public IsEnabled(ability: Ability): boolean {
		if (!ability.IsItem) {
			return this.abilitiesState.value && this.abilities.IsEnabled(ability.Name)
		}
		if (!this.itemsState.value) {
			return false
		}
		const name = ability.Name.startsWith("item_dagon") ? this.dagon : ability.Name
		return this.items.IsEnabled(name)
	}

	/** Lists a single-target hero ability of one of the player's own units. */
	public AddAbility(ability: Nullable<Ability>) {
		if (ability === undefined || !this.isRedirectable(ability)) {
			return
		}
		const name = ability.Name
		if (this.abilities.values.includes(name)) {
			return
		}
		this.abilities.AddImage(name, true)
		this.abilities.IsHidden = false
	}

	/** Forgets the abilities of the match that has ended. */
	public ResetAbilities() {
		this.abilities.values = []
		this.abilities.IsHidden = true
	}

	private isRedirectable(ability: Ability) {
		if (!ability.IsValid || ability.IsItem || ability.IsHidden) {
			return false
		}
		if (!ability.ShouldBeDrawable || ability.IsPassive) {
			return false
		}
		if (
			!ability.HasBehavior(DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET)
		) {
			return false
		}
		return (
			ability.HasTargetType(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO) ||
			ability.HasTargetType(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_CUSTOM)
		)
	}
}
