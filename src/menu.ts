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

	private readonly itemsTree: Menu.Node
	private readonly abilitiesTree: Menu.Node

	private readonly redirectItems: Menu.Toggle
	private readonly redirectAbility: Menu.Toggle
	private readonly itemsState: Menu.ImageSelector
	private readonly abilitiesState: Menu.ImageSelector

	constructor() {
		this.State = this.tree.AddToggle("State")
		this.fromTree = this.tree.AddNode("Redirection settings from")
		this.Illusions = this.fromTree.AddToggle("Redirect from Illusions", true)

		this.Creeps = this.fromTree.AddToggle("Redirect from Creeps")

		this.SearchRange = this.tree.AddSlider(
			"Search range",
			150,
			50,
			250,
			0,
			"Range of search heroes"
		)

		this.itemsTree = this.tree.AddNode("Item redirection settings")
		this.redirectItems = this.itemsTree.AddToggle("Redirect item casts")

		this.itemsState = this.itemsTree.AddImageSelector(
			"Items",
			this.items,
			new Map(this.items.map(item => [item, true]))
		)

		this.abilitiesTree = this.tree.AddNode("Ability redirection settings")

		this.ToFriend = this.tree.AddToggle("Redirect to friend")
		this.ToLowHPMeepo = this.tree.AddToggle("Redirect to low HP meepo")
		this.redirectAbility = this.abilitiesTree.AddToggle("Redirect abilities cast")
		this.abilitiesState = this.abilitiesTree.AddImageSelector("Spells", [])
		this.abilitiesState.IsHidden = true
	}

	public IsEnabled(name: string, isItem: boolean): boolean {
		if (!isItem) {
			return this.redirectAbility.value && this.abilitiesState.IsEnabled(name)
		}
		if (!this.redirectItems.value) {
			return false
		}
		let temp = name
		if (name.startsWith("item_dagon_")) {
			temp = "item_dagon_5"
		}
		return this.itemsState.IsEnabled(temp)
	}

	public CanFriendCast(ability: Ability): boolean {
		return (
			ability.HasTargetTeam(DOTA_UNIT_TARGET_TEAM.DOTA_UNIT_TARGET_TEAM_FRIENDLY) &&
			this.ToFriend.value
		)
	}

	public AddSpellInMenu(ability: Nullable<Ability>, defualtState: boolean = true) {
		if (ability === undefined || !ability.IsValid) {
			return
		}
		if (ability.IsItem || ability.IsHidden) {
			return
		}
		if (!ability.ShouldBeDrawable || ability.IsPassive) {
			return
		}
		if (!ability.HasTargetType(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO)) {
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
			this.abilitiesState.defaultValues.set(name, defualtState)
		}

		this.cachedSpellNames.add(name)
		this.abilitiesState.IsHidden = false
		this.abilitiesState.values.push(name)
		this.abilitiesState.Update()
		this.tree.Update()
	}

	public ResetSkills() {
		const arr = this.abilitiesState.values
		for (let i = arr.length - 1; i > -1; i--) {
			const spellName = arr[i]
			this.cachedSpellNames.delete(spellName)
			this.abilitiesState.values.remove(spellName)
		}
		this.abilitiesState.IsHidden = arr.length === 0
		this.abilitiesState.Update()
		this.tree.Update()
	}
}
