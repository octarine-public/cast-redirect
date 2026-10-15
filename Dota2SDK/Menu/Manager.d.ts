// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	class CMenuManager {
		public get entries(): AnyHandle[]
		public get IsOpen(): boolean
		public set IsOpen(value: boolean)
		public get config(): ConfigObject
		public set config(value: ConfigObject)
		public Update(): void
		/**
		 * Re-renders once for everything `fn` changes, instead of once per entry it touches - for a
		 * preset or anything else that writes many rows at a time.
		 *
		 * @example
		 * MenuManager.Batch(() => {
		 * 	fov.value = preset.fov
		 * 	smooth.value = preset.smooth
		 * })
		 */
		public Batch(fn: () => void): void
		public foreachRecursive(callback: (handle: AnyHandle) => void, node?: NodeEntry): void
		/**
		 * Walks every hotkey the menu carries, in menu order, with the row it rides
		 * — what a listing of everything the user has bound is built from.
		 *
		 * @example
		 * Menu.MenuManager.foreachHotkey((holder, hotkey) =>
		 * 	console.log(holder.Name, hotkey.BindName)
		 * )
		 */
		public foreachHotkey(callback: (holder: AnyHandle, hotkey: AnyHotkey) => void): void
		/**
		 * Walks a stored config into the tree, the state kept beside the settings included. The
		 * place the menu stood at comes back with the boot load alone: a scripts reload lands on the
		 * same page, while a config switched to mid-session leaves the page the user is on alone.
		 */
		public LoadConfig(raw: unknown, onLanguage?: (name: string) => void): void
		public SaveConfig(language: string): ConfigObject
		public ReloadConfig(): Promise<void>
	}
	const MenuManager: CMenuManager
}
