// AUTO-GENERATED - do not edit.
declare class CMaterial {
	public readonly TextureParams: Map<string, string>
	public readonly NumberAttributes: Map<string, number>
	public readonly StringAttributes: Map<string, string>
	/**
	 * The compiled dynamic expressions (`m_dynamicParams`) by parameter name: what the material
	 * recomputes from render attributes each draw. Evaluate them with {@link EvaluateDynamicParams}.
	 */
	public readonly DynamicParams: Map<string, Uint8Array>
	public readonly Flags = MaterialFlags.None
	/**
	 * The token a render attribute is referenced by in dynamic expressions - the key
	 * {@link EvaluateDynamicParams} looks attributes up by.
	 */
	public static AttributeToken(name: string): number
	constructor(path: string)
	/**
	 * The parameter values the dynamic expressions compute from `attributes` (render attribute token
	 * to value; one it lacks reads as 0). A parameter whose expression reads what cannot be evaluated
	 * outside the renderer - textures, matrices, material parameters, time - is left out, so the
	 * material's own value stands for it.
	 * @example
	 * const hue = CMaterial.AttributeToken("$ChickenHue")
	 * for (const [name, value] of material.EvaluateDynamicParams(new Map([[hue, 0.4]]))) {
	 * 	preview.SetMaterialParam(material, name, value)
	 * }
	 */
	public EvaluateDynamicParams(attributes: ReadonlyMap<number, number>): Map<string, number[]>
}
