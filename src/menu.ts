import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	private readonly items: string[]

	private readonly baseNode = Menu.AddEntry("Utility")
	private readonly tree: Menu.Node
	public readonly State: Menu.Toggle

	public readonly RedirectFromIllusions: Menu.Toggle
	public readonly RedirectFromCreeps: Menu.Toggle
	public readonly RedirectFromClones: Menu.Toggle
	public readonly RedirectToLowHP: Menu.Toggle
	private readonly RedirectFrom: Menu.Node

	public readonly RedirectItems: Menu.Toggle
	public readonly RedirectItemsState: Menu.ImageSelector
	private readonly RedirectItemsTree: Menu.Node

	public readonly RedirectAbility: Menu.Toggle
	public RedirectAbilitiesState: Menu.ImageSelector
	private readonly RedirectAbilities: Menu.Node

	public readonly searchRange: Menu.Slider

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

		this.searchRange = this.tree.AddSlider("Search range", 900, 100, 1400, 0, "Range of search heroes")

		this.RedirectItemsTree = this.tree.AddNode("Item redirection settings")

		this.RedirectItems = this.RedirectItemsTree.AddToggle(
			"Redirect item casts",
		)

		this.items = [
			"item_dagon",
			"item_rod_of_atos", 
			"item_orchid", 
			"item_force_staff", 
			"item_ethereal_blade",
			"item_diffusal_blade",
			"item_abyssal_blade",
			"item_heavens_halberd",
			"item_cyclone",
			"item_sheepstick"
		]

		this.RedirectItemsState = this.RedirectItemsTree.AddImageSelector(
			"Items redirect",
			this.items,
			new Map(this.items.map(item => [item, true]))
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