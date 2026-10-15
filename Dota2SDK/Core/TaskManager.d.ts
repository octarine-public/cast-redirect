// AUTO-GENERATED - do not edit.
declare class CTaskManager {
	public get Size(): number
	public IsValid(handleID: bigint): boolean
	public Begin(callback: () => void, ms?: number): bigint
	public Cancel(handleID: bigint): boolean
	public Tick(): void
}
declare const TaskManager: CTaskManager
