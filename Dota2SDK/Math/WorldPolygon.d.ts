// AUTO-GENERATED - do not edit.
/** A world-space polygon that can also be drawn with Dota particles or the 2D renderer. */
declare class WorldPolygon extends Polygon3D {
	/**
	 * Draws the closed outline, either as particle lines attached to `ent` or as screen-space
	 * lines when `useParticles` is false.
	 * @example
	 * polygon.Draw("range", unit, particles, Color.Red)
	 */
	public Draw(key: string, ent: Entity, particleManager: ParticlesSDK, color: Color, width?: number, mode2D?: number, useParticles?: boolean): void
	/** Releases every particle line created by {@link Draw} under `key`. */
	public Destroy(key: string, particleManager: ParticlesSDK): void
}
interface AABB {
	/**
	 * The box as a closed outline, walls included - what it takes to draw one. The shared
	 * package has no notion of drawing, so the game SDK hangs this off it.
	 */
	readonly Polygon: WorldPolygon
}
