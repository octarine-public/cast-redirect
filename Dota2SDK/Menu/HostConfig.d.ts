// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type Instance = HTMLElement
	interface TextInstance {
		node: HTMLElementText
		pending?: string
	}
	type Container = HTMLElement
	const hostConfig: {
		supportsMutation: boolean
		supportsPersistence: boolean
		supportsHydration: boolean
		isPrimaryRenderer: boolean
		noTimeout: -1
		createInstance(type: string, props: HostProps): Instance
		createTextInstance(text: string): TextInstance
		appendInitialChild(parent: Instance, child: Instance | TextInstance): void
		appendChild(parent: Instance, child: Instance | TextInstance): void
		appendChildToContainer(container: Container, child: Instance | TextInstance): void
		insertBefore(parent: Instance, child: Instance | TextInstance, before: Instance | TextInstance): void
		insertInContainerBefore(container: Container, child: Instance | TextInstance, before: Instance | TextInstance): void
		removeChild(parent: Instance, child: Instance | TextInstance): void
		removeChildFromContainer(container: Container, child: Instance | TextInstance): void
		commitUpdate(instance: Instance, _type: string, prevProps: HostProps, nextProps: HostProps): void
		commitTextUpdate(instance: TextInstance, _prev: string, next: string): void
		finalizeInitialChildren(): boolean
		shouldSetTextContent(): boolean
		getRootHostContext(rootContainer: Container): Nullable<object>
		getChildHostContext(parentContext: Nullable<object>): Nullable<object>
		getPublicInstance(instance: Instance): Instance
		prepareForCommit(containerInfo: Container): Nullable<object>
		resetAfterCommit(): void
		preparePortalMount(): void
		clearContainer(container: Container): void
		detachDeletedInstance(): void
		scheduleMicrotask(callback: () => void): void
		scheduleTimeout(callback: () => void, delay: number): number
		cancelTimeout(handle: number): void
		getCurrentUpdatePriority(): number
		setCurrentUpdatePriority(priority: number): void
		resolveUpdatePriority(): number
		maySuspendCommit(): boolean
		shouldAttemptEagerTransition(): boolean
		requestPostPaintCallback(): void
		trackSchedulerEvent(): void
		resolveEventType(): Nullable<string>
		resolveEventTimeStamp(): number
		preloadInstance(): boolean
		startSuspendingCommit(): void
		suspendInstance(): void
		waitForCommitToBeReady(): null
		resetFormInstance(): void
		now(): number
		NotPendingTransition: null
		HostTransitionContext: unknown
	}
}
