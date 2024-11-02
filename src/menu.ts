import {
	ImageData,
	Menu,
	Hero,
	Ability,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
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
	public RedirectAbilitiesState: Menu.ImageSelector

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		// this.hero = hero
		//this.spells = this.getHeroAbilities(this.hero)

		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)

		this.State = this.tree.AddToggle("State")

		this.RedirectFrom = this.tree.AddNode("Redirect from options")

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

		this.RedirectItemsTree = this.tree.AddNode("Redirect items options")

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
				"item_urn_of_shadows",
				"item_spirit_vessel"
			],
			new Map([
				["item_dagon", true],
			]),
			"Disable redirection for items that do not require it"
		)

		this.RedirectAbilities = this.tree.AddNode("Redirect abilities options")

		this.RedirectToLowHP = this.tree.AddToggle(
			"Redirect to low HP hero",
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