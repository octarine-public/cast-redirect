import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public HeroNames: string[] = []
	public readonly State: Menu.Toggle
	private readonly tree: Menu.Node

	private readonly baseNode = Menu.AddEntry("Utility")

	constructor() {
		this.tree = this.baseNode.AddNode(
			"Cast Redirect",
			ImageData.Paths.Icons.magic_resist
		)
		this.State = this.tree.AddToggle("State")
	}

}