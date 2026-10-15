// AUTO-GENERATED - do not edit.
declare type PanoramaSymbol = number

declare interface IUIPanel {
	FindChild(id: string): Nullable<IUIPanel>
	FindChildTraverse<T extends IUIPanel>(id: string): Nullable<T>
	FindChildInLayoutFile(id: string): Nullable<IUIPanel>
	FindPanelInLayoutFile(id: string): Nullable<IUIPanel>
	FindAncestor(id: string): Nullable<IUIPanel>
	FindLowestCommonAncestor(panel: IUIPanel): Nullable<IUIPanel>
	GetChildCount(): number
	GetChild(index: number): Nullable<IUIPanel>
	GetFirstChild(): Nullable<IUIPanel>
	GetLastChild(): Nullable<IUIPanel>
	GetChildIndex(child: IUIPanel): number
	GetChildCountOfType(symbol: PanoramaSymbol): number
	GetHiddenChildCount(): number
	GetHiddenChild(index: number): Nullable<IUIPanel>
	GetHiddenChildIndex(child: IUIPanel): number
	IsDescendantOf(child: IUIPanel): boolean
	MoveChildAfter(childToMove: IUIPanel, before: IUIPanel): void
	MoveChildBefore(childToMove: IUIPanel, after: IUIPanel): void
	RemoveAndDeleteChildren(): void
	RemoveAndDeleteChildrenOfType(symbol: PanoramaSymbol): void

	SetID(id: string): void
	GetID(): string
	BHasID(): boolean
	BIsLoaded(): boolean
	GetPanelType(): PanoramaSymbol
	LoadLayout(xmlPath: string, override: boolean): void

	GetActualXOffset(): number
	GetActualYOffset(): number
	GetRawActualXOffset(): number
	GetRawActualYOffset(): number
	GetActualLayoutWidth(): number
	GetActualLayoutHeight(): number
	GetActualRenderWidth(): number
	GetActualRenderHeight(): number
	GetContentWidth(): number
	GetContentHeight(): number
	GetDesiredLayoutWidth(): number
	GetDesiredLayoutHeight(): number
	GetActualUIScaleX(): number
	GetActualUIScaleY(): number
	GetActualUIScaleZ(): number

	GetContentsXScrollOffset(): number
	GetContentsYScrollOffset(): number
	GetContentsXScrollOffsetTarget(): number
	GetContentsYScrollOffsetTarget(): number
	ScrollToTop(): void
	ScrollToBottom(): void
	ScrollToLeftEdge(): void
	ScrollToRightEdge(): void
	IsScrolledIntoView(): boolean

	BHasClass(symbol: PanoramaSymbol): boolean
	BAscendantHasClass(symbol: PanoramaSymbol): boolean
	AddClass(symbol: PanoramaSymbol): void
	RemoveClass(symbol: PanoramaSymbol): void
	RemoveAllClasses(): void
	ToggleClass(symbol: PanoramaSymbol): void
	TriggerClass(symbol: PanoramaSymbol): void
	SetHasClass(symbol: PanoramaSymbol, value: boolean): void

	SetVisible(visible: boolean): void
	BIsVisible(): boolean
	SetEnabled(enable: boolean): void
	IsEnabled(): boolean
	SetSelected(enable: boolean): void
	IsSelected(): boolean
	IsActivationEnabled(): boolean
	SetActivationEnabled(enable: boolean): void
	SetAllChildrenActivationEnabled(enable: boolean): void
	SetDraggable(enable: boolean): void
	IsDraggable(): boolean

	BAcceptsInput(): boolean
	SetAcceptsInput(accepts: boolean): void
	BAcceptsFocus(): boolean
	SetAcceptsFocus(accepts: boolean): void
	BCanAcceptInput(): boolean
	SetDefaultFocus(childId: string): void
	GetDefaultFocus(): string
	SetDisableFocusOnMouseDown(disable: boolean): void
	BFocusOnMouseDown(): boolean
	BCanClearFocusByClicking(): boolean
	SetCanClearFocusByClicking(enable: boolean): void
	BAlwaysConsumeHoverClicks(): boolean
	SetAlwaysConsumeHoverClicks(enable: boolean): void
	BScrollParentToFitWhenFocused(): boolean
	SetScrollParentToFitWhenFocused(scrollParentToFit: boolean): void
	BTopOfInputContext(): boolean
	SetTopOfInputContext(top: boolean): void
	GetParentInputContext(): Nullable<IUIPanel>
	GetDefaultInputFocus(): Nullable<IUIPanel>
	SetFocus(): void
	SetRememberChildFocus(enable: boolean): void
	GetRememberChildFocus(): boolean
	SetChildFocusOnHover(enable: boolean): void
	GetChildFocusOnHover(): boolean
	SetFocusOnHover(enable: boolean): void
	GetFocusOnHover(): boolean

	SetHitTestEnabled(enable: boolean): void
	BHitTestEnabled(): boolean
	SetHitTestEnabledTraverse(enable: boolean): void
	SetHitTestChildrenEnabled(enable: boolean): void
	BHitTestChildrenEnabled(): boolean

	BHasOnActivateEvent(): boolean
	BHasOnMouseActivateEvent(): boolean
	GetAttribute(symbol: PanoramaSymbol, defaultValue: string): string
	SetAttribute(symbol: PanoramaSymbol, value: string): void
	RemoveAttribute(symbol: PanoramaSymbol): void
	BSetProperty(symbol: PanoramaSymbol, value: string): boolean
}

/** A panel of type Label (CLabel in C++). */
declare interface CLabel extends IUIPanel {
	SetText(text: string): void
	GetText(): string
}

/** A panel of type Image (CImagePanel in C++). */
declare interface CImage extends IUIPanel {
	SetImage(imageURL: string): void
	GetImage(): string
}

declare namespace Panorama {
	/** The root panel of a window the game has open, `undefined` while it is not up. */
	function FindRootPanel(window: string): Nullable<IUIPanel>
	function CreatePanel<T extends IUIPanel>(
		type: string,
		id: string,
		parent: IUIPanel
	): Nullable<T>
	/** Runs JavaScript inside the game's own Panorama context. */
	function ExecuteScript(panel: IUIPanel, script: string): void
	/** Interns a string; 65535 symbols is the engine's limit. */
	function MakeSymbol(name: string): PanoramaSymbol
	function GetSymbolString(symbol: PanoramaSymbol): string
	/**
	 * Attaches a callback to an event of the given type on one panel. The callback takes however
	 * many arguments that event carries.
	 * @returns the handle to unregister with
	 */
	function RegisterEventHandler(
		eventName: string,
		panel: IUIPanel,
		callback: (panel: IUIPanel, ...args: any[]) => void
	): number
	/**
	 * The same, for events no panel handled - either dispatched without one or ignored by it.
	 * @returns the handle to unregister with
	 */
	function RegisterForUnhandledEvent(
		eventName: string,
		callback: (panel: IUIPanel, ...args: any[]) => void
	): number
	function UnregisterEventHandler(handle: number): void
	function UnregisterForUnhandledEvent(handle: number): void
	/**
	 * Builds an event and sends it to a panel, or as an unhandled event when none is given.
	 * @param eventString what constructs the event, e.g. `Activated(mouse)`
	 * @param delay seconds to wait before dispatching
	 */
	function DispatchEventAsync(
		eventString: string,
		panel?: Nullable<IUIPanel>,
		delay?: number
	): void
	function EnterMainThread(): Promise<number>
	function LeaveMainThread(): number
}
