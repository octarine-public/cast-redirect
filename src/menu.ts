import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public HeroNames: string[] = []
	public readonly State: Menu.Toggle
	public readonly dontRedirectToClones: Menu.Toggle
	public readonly searchRange: Menu.Slider
	private readonly tree: Menu.Node

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)

		this.State = this.tree.AddToggle("State")

		this.dontRedirectToClones = this.tree.AddToggle(
			"Dont redirect to clones",
			true,
		)

		this.searchRange = this.tree.AddSlider("search range", 2, 0, 9, 0, "Range of search heroes")
	}

}