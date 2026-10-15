// AUTO-GENERATED - do not edit.
declare namespace React {
	type Key = string | number

	interface RefObject<T> {
		current: Nullable<T>
	}

	type RefCallback<T> = (instance: T | null | undefined) => void
	type Ref<T> = RefObject<T> | RefCallback<T>

	interface ReactElement {
		type: unknown
		props: unknown
		key: Nullable<Key>
	}

	type ReactNode =
		ReactElement | string | number | bigint | boolean | undefined | null | ReactNode[]

	interface PropsWithChildren {
		children?: ReactNode
	}

	type FunctionComponent<P> = (props: P & PropsWithChildren) => ReactNode

	type Provider<T> = (props: { value: T } & PropsWithChildren) => ReactNode

	interface Context<T> {
		Provider: Provider<T>
		displayName?: string
	}

	interface ErrorInfo {
		componentStack: string
	}

	class Component<P, S> {
		public props: Readonly<P & PropsWithChildren>
		public state: Readonly<S>
		constructor(props: P)
		public setState(state: Partial<S> | ((prev: Readonly<S>) => Partial<S>)): void
		public render(): ReactNode
		public componentDidCatch?(error: Error, info: ErrorInfo): void
		public componentWillUnmount?(): void
	}

	const Fragment: FunctionComponent<PropsWithChildren>

	function createElement(
		type: string,
		props?: Record<string, unknown> | null,
		...children: ReactNode[]
	): ReactElement
	function createElement<P>(
		type: FunctionComponent<P>,
		props?: P | null,
		...children: ReactNode[]
	): ReactElement

	function useState<S>(
		initial: S | (() => S)
	): [S, (value: S | ((prev: S) => S)) => void]
	function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void
	function useLayoutEffect(
		effect: () => void | (() => void),
		deps?: readonly unknown[]
	): void
	function useMemo<T>(factory: () => T, deps: readonly unknown[]): T
	function useCallback<T extends (...args: never[]) => unknown>(
		callback: T,
		deps: readonly unknown[]
	): T
	function useRef<T>(initial: T): RefObject<T>
	function useRef<T>(): RefObject<T>
	function useContext<T>(context: Context<T>): T
	function useSyncExternalStore<T>(
		subscribe: (onChange: () => void) => () => void,
		getSnapshot: () => T
	): T

	function createContext<T>(defaultValue: T): Context<T>
	function memo<P>(component: FunctionComponent<P>): FunctionComponent<P>
	function forwardRef<T, P>(
		render: (props: P & PropsWithChildren, ref: Ref<T>) => ReactNode
	): FunctionComponent<P & { ref?: Ref<T> }>

	const version: string
}

declare namespace JSX {
	type Element = React.ReactElement
	type ElementType = string | ((props: never) => React.ReactNode)

	interface IntrinsicAttributes {
		key?: React.Key
	}

	interface IntrinsicClassAttributes<T> {
		ref?: React.Ref<T>
	}

	interface ElementAttributesProperty {
		props: unknown
	}

	interface ElementChildrenAttribute {
		children: unknown
	}

	interface IntrinsicElements {}
}

declare module "react" {
	export = React
}

declare namespace ReactReconciler {
	interface HostConfig<Type, Props, Container, Instance, TextInstance, PublicInstance> {
		supportsMutation: boolean
		supportsPersistence: boolean
		supportsHydration: boolean
		isPrimaryRenderer: boolean
		noTimeout: -1
		createInstance(type: Type, props: Props): Instance
		createTextInstance(text: string): TextInstance
		appendInitialChild(parent: Instance, child: Instance | TextInstance): void
		appendChild(parent: Instance, child: Instance | TextInstance): void
		appendChildToContainer(container: Container, child: Instance | TextInstance): void
		insertBefore(
			parent: Instance,
			child: Instance | TextInstance,
			before: Instance | TextInstance
		): void
		insertInContainerBefore(
			container: Container,
			child: Instance | TextInstance,
			before: Instance | TextInstance
		): void
		removeChild(parent: Instance, child: Instance | TextInstance): void
		removeChildFromContainer(
			container: Container,
			child: Instance | TextInstance
		): void
		commitUpdate(instance: Instance, type: Type, prev: Props, next: Props): void
		commitTextUpdate(instance: TextInstance, prev: string, next: string): void
		finalizeInitialChildren(instance: Instance, type: Type, props: Props): boolean
		shouldSetTextContent(type: Type, props: Props): boolean
		getRootHostContext(container: Container): Nullable<object>
		getChildHostContext(parent: Nullable<object>): Nullable<object>
		getPublicInstance(instance: Instance): PublicInstance
		prepareForCommit(container: Container): Nullable<object>
		resetAfterCommit(container: Container): void
		preparePortalMount(container: Container): void
		clearContainer(container: Container): void
		detachDeletedInstance(instance: Instance): void
		scheduleMicrotask(callback: () => void): void
		scheduleTimeout(callback: () => void, delay: number): number
		cancelTimeout(handle: number): void
		getCurrentUpdatePriority(): number
		setCurrentUpdatePriority(priority: number): void
		resolveUpdatePriority(): number
		maySuspendCommit(type: Type, props: Props): boolean
		now(): number
	}

	interface OpaqueRoot {
		current: unknown
	}

	interface Reconciler<Container> {
		createContainer(
			container: Container,
			tag: number,
			hydrationCallbacks: null,
			isStrictMode: boolean,
			concurrentUpdatesByDefaultOverride: Nullable<boolean>,
			identifierPrefix: string,
			onUncaughtError: (error: unknown) => void,
			onCaughtError: (error: unknown) => void,
			onRecoverableError: (error: unknown) => void,
			transitionCallbacks: null
		): OpaqueRoot
		updateContainer(
			element: React.ReactNode,
			root: OpaqueRoot,
			parentComponent: null,
			callback: Nullable<() => void>
		): void
		updateContainerSync(
			element: React.ReactNode,
			root: OpaqueRoot,
			parentComponent: null,
			callback: Nullable<() => void>
		): void
		flushSyncWork(): void
		flushSyncFromReconciler<T>(fn: () => T): T
		batchedUpdates<T>(fn: () => T): T
		getPublicRootInstance(root: OpaqueRoot): unknown
		injectIntoDevTools(config: unknown): void
	}
}

declare function ReactReconciler<
	Type,
	Props,
	Container,
	Instance,
	TextInstance,
	PublicInstance
>(
	config: ReactReconciler.HostConfig<
		Type,
		Props,
		Container,
		Instance,
		TextInstance,
		PublicInstance
	>
): ReactReconciler.Reconciler<Container>

declare module "react-reconciler" {
	export = ReactReconciler
}
