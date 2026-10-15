// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** A side of a unit's screen rectangle a docked widget hangs off. */
	type WorldUnitSide = "top" | "bottom" | "left" | "right"
	/** How a frame widget draws a unit's box this frame. */
	type WorldUnitFrameShape = "box" | "box3d" | "corners3d" | "none"
	/**
	 * How a script feeds units to an overlay. The host calls `Units` once per frame and `Fill`
	 * once per unit into a reused bounds — a pass over every unit allocates nothing. `Fill`
	 * answering false skips the unit this frame without unmounting it.
	 */
	interface IWorldUnitAdapter<T> {
		Units(): readonly T[]
		/** Stable identity; a changed key is a different unit. */
		Key(unit: T): number
		Fill(unit: T, out: WorldUnitBounds): boolean
		/** Tracking range in world units from the overlay's origin; unmounting keeps 15% slack. */
		MaxDistance?(): number
		/**
		 * How long a unit takes to come in and to thin away as it crosses the tracking range, in
		 * milliseconds. It is for the things of a map — what comes into view as you walk up to it and
		 * goes as you leave — and nothing given cuts instead, which is what a reading whose instant
		 * is the point wants.
		 *
		 * It is the RANGE that is faded and nothing else. A unit that stops being placed — picked up,
		 * dead, gone from the list — cuts wherever it stood, however long this is: what it was saying
		 * was about where it was, and a moment more of it is a reading of nothing hanging in the air
		 * over a floor the thing has left. One that only leaves the screen keeps where it had got to
		 * and comes back there: the edge of the frame is not the edge of the range.
		 *
		 * The fade is written on the unit's root as `opacity`, which the document inherits rather than
		 * composites: a widget that writes an opacity of its own — or a filter — is handed the same
		 * value through `Update` and multiplies it in itself.
		 *
		 * Read once a tick rather than held, and scaled by the menu's animation speed.
		 */
		Fade?(): number
		/**
		 * How far off the unit's box the FIRST element on each side sits, in screen px. Docked
		 * elements stack outward from there, each one leaving its own gap behind it.
		 *
		 * Read once a tick rather than held, so it follows the ui scale it was measured against.
		 * Nothing given is flush against the box.
		 */
		Edge?(): number
	}
	/** What a widget factory receives: element supply in the overlay's layer, and the layer. */
	interface IWorldUnitHost {
		/** A fresh absolutely positioned element for this widget's own use. */
		Element(): HTMLElement
		/**
		 * A fresh absolutely positioned element inside `parent`, for a widget built as a subtree:
		 * children place in the parent's own space and leave with it. Release the subtree by
		 * releasing its root — a child is never handed back on its own.
		 */
		Child(parent: HTMLElement): HTMLElement
		/** Hands a widget's element back to the renderer's destroy queue. */
		Release(element: HTMLElement): void
		readonly Layer: IWorldLayer
	}
	/**
	 * One widget of one unit. `Update` runs when the unit is on screen, with the projected frame
	 * and the widget's docked offset from its side; `Hide` when it is not. The host never reads
	 * anything back — a widget owns its elements outright.
	 */
	interface IWorldUnitWidget<T> {
		/** The side the widget docks to, or undefined for one that overlays the box itself. */
		readonly side: Nullable<WorldUnitSide>
		/** How many px across its side the widget reserves. */
		readonly thickness: number
		/** The gap to the next widget on the same side. */
		readonly gap: number
		/**
		 * Whether the widget draws on this unit at all, asked before the stack is laid out. One that
		 * answers false takes no room from its side: what is docked past it closes up rather than
		 * standing off a gap where nothing is being drawn.
		 *
		 * `Update` is called either way, so a widget that has stopped drawing still hides itself.
		 */
		Draws?(unit: T, distance: number): boolean
		/**
		 * Draws the widget on a unit that is on screen. `fade` is what the unit is painted at this
		 * frame, 0 to 1, as it comes into the adapter's range and thins away out of it — 1 for an
		 * overlay that names no fade. The host has written it on the unit's root as `opacity`
		 * already; a widget that writes an opacity of its own, or a filter, multiplies it in.
		 */
		Update(unit: T, frame: CWorldUnitFrame, out: number, distance: number, fade: number): void
		Hide(): void
		/**
		 * Hands this widget's elements to another unit. A widget that keeps something of the unit it
		 * was drawing between frames - a bar draining toward a health it saw, a plate fading in -
		 * drops it here, so what the elements carry belongs to the unit that has them now.
		 */
		Recycle?(): void
		Destroy(): void
	}
	type WorldUnitWidgetFactory<T> = (host: IWorldUnitHost) => IWorldUnitWidget<T>
	/** A mounted unit overlay; destroy it to unmount every unit it tracks. */
	interface IWorldUnitOverlay {
		/**
		 * The origin distances are measured from — the local hero, typically. While it resolves to a
		 * point, nearer units cover farther ones in the shared world stack.
		 */
		Origin(origin: Nullable<WorldAnchor>): void
		/** Raises this overlay over ordinary world items while preserving distance order within it. */
		Priority(priority: number): void
		SetVisible(on: boolean): void
		Destroy(): void
	}
	/**
	 * Mounts a unit overlay: the adapter names the units, the widgets say what every unit
	 * carries, and the host owns tracking, mounting, docking and per-frame projection. A unit
	 * gets one instance of every widget, stacked along its side in array order.
	 */
	function RegisterUnitOverlay<T>(key: string, adapter: IWorldUnitAdapter<T>, widgets: readonly WorldUnitWidgetFactory<T>[]): IWorldUnitOverlay
	/** Ticks every unit overlay; the menu tick drives this before the layers flush. */
	function TickUnitOverlays(): void
	interface WorldUnitFrameConfig<T> {
		/** The shape to draw this frame; defaults to a flat box. */
		shape?: (unit: T) => WorldUnitFrameShape
		stroke: (unit: T) => Readonly<WorldStroke>
	}
	interface WorldUnitBarConfig<T> {
		side?: WorldUnitSide
		thickness?: number
		gap?: number
		fraction: (unit: T) => number
		color: (unit: T) => string
		background?: string
		border?: number
		borderColor?: string
	}
	interface WorldUnitLabelConfig<T> {
		side?: WorldUnitSide
		size?: number
		gap?: number
		text: (unit: T) => string
		color?: (unit: T) => string
		weight?: number
		outline?: boolean
	}
	/** The built-in unit widgets; custom ones implement {@link IWorldUnitWidget} directly. */
	const WorldUnitWidgets: {
		Frame<T>(config: WorldUnitFrameConfig<T>): WorldUnitWidgetFactory<T>
		Bar<T>(config: WorldUnitBarConfig<T>): WorldUnitWidgetFactory<T>
		Label<T>(config: WorldUnitLabelConfig<T>): WorldUnitWidgetFactory<T>
	}
}
