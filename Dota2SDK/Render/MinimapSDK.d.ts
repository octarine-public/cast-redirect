// AUTO-GENERATED - do not edit.
declare class MinimapOverview {
	public readonly material: string
	public readonly simpleMaterial: string
	public readonly pos: Vector2
	constructor(material: string, simpleMaterial: string, pos: Vector2)
}
declare class CMinimapSDK {
	public readonly MinimapBounds: Rectangle
	public CurrentMinimapOverview: Nullable<MinimapOverview>
	/**
	 * Draws icon at minimap
	 *
	 * @param icon_name can be found at https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/modTextures.txt
	 * @param size you can get that value for heroes from ConVarsSDK.GetFloat("dota_minimap_hero_size")
	 * @param endTime Must be for ex. Game.RawGameTime + ConVarsSDK.GetFloat("dota_minimap_ping_duration").
	 * @param endTime Changing it to 0 will hide icon from minimap if you're not calling it repeatedly in Draw event
	 * @param uid you can use this value to edit existing uid's location/color/icon/endTime
	 */
	public DrawIcon(name: string, worldPos: Vector3, size?: number, color?: Color, endTime?: number, uid?: any, minSizeAnimated?: number, animationCycle?: number, priority?: number): void
	public DeleteIcon(uid: any): void
	public GetIconSize(name: string): Nullable<Vector2>
	/**
	 * Draws ping at minimap
	 *
	 * @param endTime Must be for ex. Game.RawGameTime + ConVarsSDK.GetFloat("dota_minimap_ping_duration").
	 * @param endTime Changing it to 0 will hide icon from minimap if you're not calling it repeatedly in Draw event
	 * @param uid you can use this value to edit existing uid's location/color/icon, or specify 0x80000000 to make it unique
	 */
	public DrawPing(worldPos: Vector3, color?: Color, endTime?: number, uid?: any): void
	public DrawLineArrow(start: Vector3, end: Vector3, color?: Color, width?: number, arrowLength?: number, rotationDeg?: number): void
	public DeletePing(uid: any): void
	public SendPing(location: Vector2, type?: PingType, directPing?: boolean, target?: Entity): void
	/**
	 * Where a world position lands on the minimap, or undefined while the game lays out no
	 * minimap — there is then nothing to put it on.
	 */
	public WorldToMinimap(pos: Vector3): Nullable<Vector2>
	/** The world position under a minimap point, or undefined while it is not laid out. */
	public MinimapToWorld(pos: Vector2): Nullable<Vector3>
}
declare const MinimapSDK: CMinimapSDK
