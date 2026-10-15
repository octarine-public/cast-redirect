// AUTO-GENERATED - do not edit.
declare class ExecuteOrder {
	public readonly OrderType: dotaunitorder_t
	public readonly Target: Nullable<Entity | number>
	public readonly Position: Vector3
	public readonly Ability_: Nullable<Ability | number>
	public readonly Issuers: Unit[]
	public readonly Queue: boolean
	public readonly ShowEffects: boolean
	public IsPlayerInput: boolean
	public static LastUserCmd: UserCmd
	public static readonly orderQueue: [ExecuteOrder, number, boolean, boolean][]
	public static lastMove: Nullable<[Vector3, number]>
	public static DebugOrders: boolean
	public static DebugDraw: boolean
	public static HoldOrders: number
	public static HoldOrdersTarget: Nullable<Vector3 | Entity>
	public static cameraMinimapSpaces: number
	public static cameraSpeed: number
	public static cursorSpeed: number
	public static cursorSpeedMinAccel: number
	public static cursorSpeedMaxAccel: number
	public static cursorBacklogBoost: number
	public static cursorTremor: number
	public static cursorTremorChance: number
	public static cursorOvershoot: number
	public static cursorReactionMs: number
	public static cursorArc: number
	public static cursorCorrectionChance: number
	public static cursorUndershoot: number
	public static PrefireOrders: boolean
	public static IsStandalone: boolean
	public static unsafeMode: boolean
	protected static readonly localMapList: Set<string>
	/**
	 * Orders by native CUnitOrder
	 *
	 * @param position default: new Vector3(0,0,0)
	 * @param issuer default: DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY
	 */
	constructor(OrderType: dotaunitorder_t, Target: Nullable<Entity | number>, Position: Vector3 | undefined, Ability_: Nullable<Ability | number>, Issuers: Unit[], Queue?: boolean, ShowEffects?: boolean, IsPlayerInput?: boolean)
	/**
	 * Seconds the humanizer will hold an order issued now before it reaches the game: the cursor
	 * glides of the orders already queued and, with `PrefireOrders` off, this order's own glide to
	 * `target`. Zero when the humanizer is disabled or bypassed on this map. Follows the cursor
	 * model the queue runs on (peak speed, acceleration and deceleration in screen widths, the
	 * reaction pause before a glide from rest, the pause after an order) without its random spread.
	 * @example
	 * const wait = ExecuteOrder.EstimateDispatchDelay(target) + GameState.InputLag
	 */
	public static EstimateDispatchDelay(target?: Vector3 | Entity): number
	public static get DisableHumanizer(): boolean
	public static set DisableHumanizer(newVal: boolean)
	public static PrepareOrder(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
	}): void
	public static Buyback(queue?: boolean, showEffects?: boolean): void
	public static Glyph(queue?: boolean, showEffects?: boolean): void
	public static CastRiverPaint(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static PreGameAdjustItemAssigment(itemID: number, queue?: boolean, showEffects?: boolean): void
	public static Scan(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static fromObject(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
	}): ExecuteOrder
	/**
	 * pass Position: Vector3 at IOBuffer offset 0
	 */
	public toNative(): {
		OrderType: dotaunitorder_t
		Target: number
		Ability: number
		Issuers: number[]
		Queue: boolean
		ShowEffects: boolean
		Flags: number
	}
	/**
	 * Execute order with this fields
	 */
	public Execute(): void
	public ExecuteQueued(): void
	protected CanBeClickHeightMapPosition(): boolean
}
