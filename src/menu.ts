import {
	ImageData,
	Menu,
	Hero,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	// to do: reorgonize properties
	public localHero: Nullable<Hero>
	public readonly State: Menu.Toggle
	public readonly RedirectFromIllusions: Menu.Toggle
	public readonly RedirectFromCreeps: Menu.Toggle
	public readonly RedirectFromClones: Menu.Toggle
	public readonly RedirectToLowHP: Menu.Toggle

	public readonly RedirectItems: Menu.Toggle
	public readonly RedirectItemsState: Menu.ImageSelector

	public readonly searchRange: Menu.Slider
	private readonly tree: Menu.Node
	
	private readonly RedirectFrom: Menu.Node

	private readonly RedirectItemsTree: Menu.Node

	private readonly RedirectAbilities: Menu.Node
	public readonly RedirectAbility: Menu.Toggle
	public RedirectAbilitiesState: Menu.ImageSelector

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)

		this.State = this.tree.AddToggle("State")

		this.RedirectFrom = this.tree.AddNode("Redirection settings from")

		this.RedirectFromIllusions = this.RedirectFrom.AddToggle(
			"Redirect from Illusions",
		)

		this.RedirectFromCreeps = this.RedirectFrom.AddToggle(
			"Redirect from Creeps",
		)

		this.RedirectFromClones = this.RedirectFrom.AddToggle(
			"Redirect from Clones",
			true,
			"Redirect from Clones (e.x Meepo, Vengeful spirit)"
		)

		this.searchRange = this.tree.AddSlider("Search range", 800, 100, 1400, 0, "Range of search heroes")

		this.RedirectItemsTree = this.tree.AddNode("Item redirection settings")

		this.RedirectItems = this.RedirectItemsTree.AddToggle(
			"Redirect item casts",
		)

		this.RedirectItemsState = this.RedirectItemsTree.AddImageSelector(
			"Items redirect",
			[
				"item_dagon",
				"item_rod_of_atos", 
				"item_orchid", 
				"item_force_staff", 
				"item_ethereal_blade",
				"item_diffusal_blade",
				"item_abyssal_blade",
				"item_heavens_halberd",
				"item_cyclone",
				"item_spirit_vessel"
			]
		)

		this.RedirectAbilities = this.tree.AddNode("Ability redirection settings")

		this.RedirectToLowHP = this.tree.AddToggle(
			"Redirect to low HP hero",
		)

		this.RedirectAbility = this.RedirectAbilities.AddToggle(
			"Redirect abilities cast",
		)

		this.RedirectAbilitiesState = this.RedirectAbilities.AddImageSelector(
			"Spells",
			[],
		)
	}

	public updateRedirectSpellsMenu(spells: string[]) {
		this.RedirectAbilitiesState.values = spells
		this.RedirectAbilitiesState.defaultValues = new Map(spells.map(spell => [spell, true]))
		this.RedirectAbilitiesState.Update()
		this.tree.Update()
	}
	
}