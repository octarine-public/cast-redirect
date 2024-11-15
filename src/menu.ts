import {
	Ability,
	DOTA_ABILITY_BEHAVIOR,
	DOTA_UNIT_TARGET_TEAM,
	DOTA_UNIT_TARGET_TYPE,
	Menu
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly Creeps: Menu.Toggle
	public readonly Illusions: Menu.Toggle
	public readonly ToLowHPMeepo: Menu.Toggle
	public readonly ToFriend: Menu.Toggle
	public readonly SearchRange: Menu.Slider
	private readonly baseNode = Menu.AddEntry("Utility")

	private readonly items: string[] = [
		"item_dagon_5",
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

	private readonly cachedSpellNames = new Set<string>()

	private readonly tree = this.baseNode.AddNode(
		"Cast Redirect",
		"panorama/images/spellicons/brewmaster_drunken_haze_png.vtex_c",
		"Redirects single-target abilities to the hero in case of a illusion/creep misclick in a specified range"
	)

	private readonly fromTree: Menu.Node

	private readonly itemsState: Menu.ImageSelector
	private readonly abilitiesState: Menu.ImageSelector

	constructor() {
		this.tree.SortNodes = false

		this.State = this.tree.AddToggle("State")
		//this.fromTree = this.tree.AddNode("Redirection settings from")
		this.fromTree = this.tree
		this.Illusions = this.fromTree.AddToggle("Redirect from Illusions", true)

		this.Creeps = this.fromTree.AddToggle(
			"Redirect from Creeps",
			false,
			undefined,
			undefined,
			"panorama/images/emoticons/creepdance_png.vtex_c"
		)

		this.SearchRange = this.tree.AddSlider(
			"Radius",
			50,
			10,
			250,
			0,
			"Range of search heroes"
		)

		this.ToFriend = this.tree.AddToggle("Redirect to friend")
		this.ToLowHPMeepo = this.tree.AddToggle(
			"Redirect to low HP Meepo",
			true,
			undefined,
			undefined,
			"panorama/images/emoticons/surprise_png.vtex_c"
		)
		this.abilitiesState = this.tree.AddImageSelector(
			"Spells",
			[],
			undefined,
			undefined,
			true
		)
		//this.abilitiesState.IsHidden = true

		this.itemsState = this.tree.AddImageSelector("Items", this.items)
	}

	public IsEnabled(name: string, isItem: boolean): boolean {
		if (!isItem) {
			return this.abilitiesState.IsEnabled(name)
		}
		let temp = name
		if (name.startsWith("item_dagon_")) {
			temp = "item_dagon_5"
		}
		return this.itemsState.IsEnabled(temp)
	}

	public CanFriendCast(ability: Ability): boolean {
		return (
			(ability.HasTargetTeam(
				DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY
			) ||
				ability.HasTargetTeam(
					DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_CUSTOM
				)) &&
			this.ToFriend.value
		)
	}

	public AddSpellInMenu(ability: Nullable<Ability>, defaultState: boolean = true) {
		if (ability === undefined || !ability.IsValid) {
			return
		}
		if (ability.IsItem || ability.IsHidden) {
			return
		}
		if (!ability.ShouldBeDrawable || ability.IsPassive) {
			return
		}
		if (
			!ability.HasTargetType(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO) &&
			!ability.HasTargetType(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_CUSTOM)
		) {
			return
		}
		const name = ability.Name
		const isTargetable = ability.HasBehavior(
			DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET
		)
		if (!isTargetable || this.cachedSpellNames.has(name)) {
			return
		}
		if (!this.abilitiesState.defaultValues.has(name)) {
			this.abilitiesState.defaultValues.set(name, defaultState)
		}

		this.cachedSpellNames.add(name)
		this.abilitiesState.IsHidden = false
		this.abilitiesState.values.push(name)
		this.abilitiesState.Update()
		this.tree.Update()
	}

	public ResetSkills() {
		for (let i = this.abilitiesState.values.length; i--; ) {
			const n = this.abilitiesState.values[i]
			this.cachedSpellNames.delete(n)
			this.abilitiesState.values.remove(n)
		}
		//this.abilitiesState.IsHidden = arr.length === 0
		this.tree.Update(true)
	}
}
