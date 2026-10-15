// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type VariantValues = Record<string, RmlStyle>
	type VariantMap = Record<string, VariantValues>
	type SelectedVariants<V extends VariantMap> = {
		[K in keyof V]?: keyof V[K]
	}
	interface StyledDefinition<V extends VariantMap> {
		base?: RmlStyle
		variants?: V
		defaults?: SelectedVariants<V>
	}
	type StyledFactory<V extends VariantMap> = (selected?: SelectedVariants<V>, extra?: RmlStyle) => RmlStyle
	function Styled<V extends VariantMap>(definition: StyledDefinition<V>): StyledFactory<V>
}
