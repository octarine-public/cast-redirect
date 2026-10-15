// AUTO-GENERATED - do not edit.
type StringEntityPropertyType = Map<string, StringEntityPropertyType> | StringEntityPropertyType[] | string | Vector4 | Vector3 | Vector2 | bigint | number | boolean
declare class EntityPropertiesNode implements IEntityPropertiesNode {
	public map: Map<number, EntityPropertyType>
	public static ResetEntitySymbolCache(): void
	public get<T extends EntityPropertyType>(name: string, propType?: EPropertyType): Nullable<T>
	public set(id: number, prop: EntityPropertyType): void
	public has(id: number): boolean
	public ConvertToStringedMap(): Map<string, StringEntityPropertyType>
}
