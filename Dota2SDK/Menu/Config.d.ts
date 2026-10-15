// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type ConfigObject = Record<string, unknown>
	function IsLoadingConfig(): boolean
	/**
	 * Whether the boot config has landed — or never will, on a host that has none. Until it does,
	 * the window state, the navigation and every control are defaults: a surface that decides where
	 * to stand from them draws itself against a window that is about to move, so it waits for this.
	 */
	function ConfigSettled(): boolean
	/** Whether a config has been walked into the tree yet — false until the boot load lands. */
	function ConfigApplied(): boolean
	function SerializeConfig(node?: NodeEntry): ConfigObject
	/**
	 * Gives a newly attached entry the value the config already holds for it. The
	 * parent keeps the raw config subtree in `stored`, so a page built later still
	 * finds what was saved for it.
	 */
	function AdoptEntry(parent: NodeEntry, entry: Entry): void
	type ConfigMigration = (raw: ConfigObject) => void
	/**
	 * Registers a reshaper for the raw stored config, run once against the full
	 * tree before it is applied. Use it when a node moves or is renamed so a
	 * config saved under the old path still lands on the new node. A migration
	 * MUST be idempotent — no-op once the new path is present — because it runs on
	 * every load, including configs already saved in the new shape.
	 */
	function AddConfigMigration(migration: ConfigMigration): void
	/**
	 * Carries a node saved under one tab over to another, the navigation that pointed at it
	 * included, so a config written before the node moved still lands on it. Idempotent, as
	 * {@link AddConfigMigration} requires: a config already holding the new path is left alone.
	 *
	 * @example
	 * AddConfigMigration(raw => MigrateNodeTab(raw, "Visual", "Settings", "Watermark"))
	 */
	function MigrateNodeTab(raw: ConfigObject, from: string, to: string, name: string): void
	/**
	 * The raw subtree a node's rows are written under in a stored config, or nothing while the config
	 * holds none - for a migration that reshapes one node's rows and no other's.
	 *
	 * @example
	 * AddConfigMigration(raw => RenameStoredRow(ConfigSubtreeOf(raw, node), "Size (%)", "Size"))
	 */
	function ConfigSubtreeOf(raw: ConfigObject, node: NodeEntry): Nullable<ConfigObject>
	/**
	 * Carries the value a node's raw config keeps under a row's old name over to the name the row
	 * has now. Idempotent: a config already holding the new name keeps it, and the old key is dropped
	 * either way. The subtree is the one {@link ConfigSubtreeOf} finds at a load, or the one a node
	 * built after the load was adopted with - {@link NodeEntry.stored}.
	 */
	function RenameStoredRow(subtree: Nullable<ConfigObject>, from: string, to: string): void
	/**
	 * Walks a stored config into the tree. Only the boot load of the user's own config decides what
	 * is "new"; every later apply - a cloud config, a share code, a hard reset - keeps the marks it
	 * finds. The boot load also takes down the change marks raised while the tree was being built,
	 * since every value they stood for was just replaced, and asks for one write of the state so the
	 * keys the tree grew and the migrations it ran reach disk without re-dating the config.
	 */
	function ApplyConfig(config: unknown, node?: NodeEntry): void
	function IsDefaultValue(entry: ValueEntry): boolean
	function ResetEntries(node: NodeEntry): void
	function ResetEntry(entry: Entry): void
	function IsDefaultDeep(entry: Entry): boolean
	/**
	 * Whether the entry - every row under it, for a node - holds what the applied config held for
	 * it: the config switched to last, or the one the menu booted with. A row the applied config
	 * never named matches while it sits at its default.
	 */
	function MatchesAppliedConfig(entry: Entry): boolean
	/**
	 * Puts the entry - every row under it, for a node - back to what the applied config held for
	 * it, or to its default where the config named nothing, and marks the change for the write.
	 */
	function RestoreAppliedEntry(entry: Entry): void
	/**
	 * Puts every row back to the applied config - the one switched to last, or the one the menu
	 * booted with. Resolves to whether anything stood off it.
	 */
	function RestoreAppliedConfig(): boolean
	const WindowConfigKey = "Header"
	const LanguageConfigKey = "SelectedLocalization"
	/** Runs the listener after every config write; the returned call takes it off again. */
	function OnConfigWritten(listener: (config: ConfigObject) => void): () => void
	function FlushPendingConfig(): void
	/**
	 * Asks for a write of the state and flushes, for the paths where the runtime is about to die: a
	 * reload must carry the freshest window and navigation state even when nothing marked a save.
	 */
	function FlushConfigBeforeReload(): void
}
