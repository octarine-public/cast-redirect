// AUTO-GENERATED - do not edit.
declare class CStringTablesManager {
	public get Size(): number
	public GetTable(tableName: string): Map<number, [string, ArrayBuffer]> | undefined
	public GetValue(tableName: string, index: number): string
	public GetString(tableName: string, index: number): string
	public UpdateStringTable(name: string, update: Map<number, [string, ArrayBuffer]>): void
	public RemoveAllStringTables(): void
}
declare const StringTables: CStringTablesManager
