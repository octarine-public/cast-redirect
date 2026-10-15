// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	function ShowHint(nextOwner: object, hint: MenuHint, anchor: ScreenRect): void
	function PinHint(state: boolean): void
	function IsHintOpenFor(target: object): boolean
	function ScheduleHintClose(target: object): void
	function CancelHintClose(): void
	function TickHint(now: number): void
	function HideHint(): void
}
