import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public HeroNames: string[] = []
	public readonly State: Menu.Toggle
	public readonly RedirectFromIllusions: Menu.Toggle
	public readonly RedirectFromCreeps: Menu.Toggle
	public readonly RedirectFromClones: Menu.Toggle
	public readonly RedirectToLowHP: Menu.Toggle

	public readonly RedirectItems: Menu.Toggle
	public readonly RedirectItemsState: Menu.ImageSelector

	public readonly searchRange: Menu.Slider
	private readonly tree: Menu.Node

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)

		this.State = this.tree.AddToggle("State")

		this.RedirectFromIllusions = this.tree.AddToggle(
			"Redirect from Illusions",
		)

		this.RedirectFromCreeps = this.tree.AddToggle(
			"Redirect from Creeps",
		)

		this.RedirectFromClones = this.tree.AddToggle(
			"Redirect from Clones",
			true,
			"Redirect from Clones (e.x Meepo, Vengeful spirit)"
		)

		this.searchRange = this.tree.AddSlider("Search range", 800, 100, 1400, 0, "Range of search heroes")

		this.RedirectItems = this.tree.AddToggle(
			"Redirect item casts",
		)

		this.RedirectToLowHP = this.tree.AddToggle(
			"Redirect to low HP hero",
		)

		this.RedirectItemsState = this.tree.AddImageSelector(
			"Redirect item",
			["item_dagon"],
			new Map([
				["item_dagon", true],
			])
		)
	}
}