import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public HeroNames: string[] = []
	public readonly State: Menu.Toggle
	public readonly dontRedirectFromClones: Menu.Toggle
	public readonly searchRange: Menu.Slider
	private readonly tree: Menu.Node

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)

		this.State = this.tree.AddToggle("State")

		this.dontRedirectFromClones = this.tree.AddToggle(
			"Don't redirect from clones",
			false,
			"Don't redirect cast from clones (for example meepo, arc warden, etc.)"
		)

		this.searchRange = this.tree.AddSlider("search range", 400, 100, 1200, 0, "Range of search heroes")
	}

}