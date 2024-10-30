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
		)

		this.searchRange = this.tree.AddSlider("search range", 400, 100, 1200, 0, "Range of search heroes")
	}

}