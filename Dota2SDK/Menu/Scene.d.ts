// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The room a stage is lit by, and how its image is graded.
	 *
	 * A physically-based material answers mostly to the light around it rather than to the lamps on
	 * it: a weapon under two directionals and no room at all comes out black, however bright they
	 * are. A subject wearing a flat material of its own — a cham — needs none of this.
	 */
	interface IPreviewRoom {
		/** The cubemap, and which room out of it when the file holds an array of them. */
		readonly environment: string
		readonly exposure?: number
		readonly probe?: number
		/** How much of the room stands in for irradiance on the diffuse. */
		readonly ambient?: number
		/** How much of the room's own colour that ambient carries; 0 keeps only its brightness. */
		readonly saturation?: number
		/** The display transform: its exposure, its per-channel highlight rolloff, its knee. */
		readonly display?: readonly [number, number?, number?]
		/** Grade with the GAME's own transform instead, which its inspect view draws through. */
		readonly tonemap?: boolean
	}
	/** What a lamp on a preview stage is. Directional unless it says otherwise. */
	interface IPreviewLight {
		/** Where it shines from. A directional lamp reads it as a direction, not as a place. */
		readonly position: readonly number[]
		/** Which way it points, for the shapes that have a facing. */
		readonly rotation?: readonly number[]
		/** 0xRRGGBBAA, its alpha carrying the intensity unless {@link intensity} says otherwise. */
		readonly color?: number
		/** Brightness multiplier on the colour, uncapped. */
		readonly intensity?: number
		/** A lamp at a place rather than a direction. */
		readonly point?: boolean
	}
	/**
	 * A model standing on the stage beside its subject: a weapon in its hands, a sight on that
	 * weapon, a crate at its feet. Everything is optional but the model itself, and what is left out
	 * is what the model already says — a spec of one line is a model standing at the origin in
	 * whichever idle it carries.
	 */
	interface IPreviewModel {
		/** The model file. */
		readonly model: string
		/**
		 * The bone it hangs off, by name, and it follows that bone through the animation. Left out,
		 * it stands where {@link position} puts it instead.
		 *
		 * A rig without the bone carries nothing: a weapon bone is a convention of one game's models,
		 * and a stage showing something else must not sprout a rifle at its origin.
		 */
		readonly bone?: string
		/**
		 * Which model that bone belongs to, by the id it was added under. Left out, the bone is the
		 * subject's — what a stage hangs things off nine times in ten.
		 */
		readonly parent?: string
		/**
		 * Wear it on the parent's skeleton rather than hang it off one bone: every bone the two share
		 * by name is driven by the parent's, and the model needs neither a bone nor an animation of
		 * its own.
		 *
		 * What a garment is. A Dota hero is a bare body and a set of default items — hair, armour, a
		 * weapon — each skinned to his skeleton and carrying none of his animations, and each of them
		 * hung off a bone instead would stand in its bind pose while the body under it moved.
		 */
		readonly merge?: boolean
		/** Where it stands, when it hangs off nothing. */
		readonly position?: readonly number[]
		/** Which way it faces there, as pitch, yaw and roll. */
		readonly angles?: readonly number[]
		/** How large it stands there, 1 being its own size. */
		readonly scale?: number
		/** A clip file to load beside it, for a model carrying no animation of its own. */
		readonly clip?: string
		/**
		 * The animation to play, by name. Left out, a model carrying a clip plays it and a model
		 * carrying none stands in its bind pose — a held object wants exactly that, since the hand
		 * it hangs off is what moves it.
		 */
		readonly animation?: string
		/** One material over every submesh of it, as a `.vmat` path or as inline KV3. */
		readonly material?: string
		/**
		 * Submeshes whose own material names any of these keep it. A finish is composited against a
		 * surface, so the parts that have none — a sticker, a lens — must be left alone or the
		 * renderer refuses them and the model comes up in stock materials.
		 */
		readonly keep?: readonly string[]
		/**
		 * Show the older of a weapon's two bodies. A finish authored before the models were remade is
		 * unwrapped for that geometry and lands on nothing over the newer one.
		 */
		readonly legacy?: boolean
	}
	/**
	 * Where the camera stands, in multiples of the height of whatever model is on the stage — so a
	 * framing outlives the model it was written for, and a stage showing a hero one moment and a crate
	 * the next holds both at the same size on screen.
	 */
	interface IPreviewFraming {
		/** How far back the camera sits. The camera is orthographic, so this decides depth, not size. */
		readonly distance?: number
		/** How far above what it looks at, which is the whole of its downward tilt. */
		readonly rise?: number
		/** How far above the model's middle it looks, for a subject that does not fill its bounds. */
		readonly lift?: number
		/** How far to the side it looks, for a subject that does not stand centred in them. */
		readonly slide?: number
		/** What the camera centres on across the model: its authored origin, or the middle of its bounds. */
		readonly center?: "origin" | "bounds"
		/**
		 * What the framing is measured against. `height` is the subject standing up, which is what a
		 * body is; `widest` is its longest side whichever that is, which is what anything lying down
		 * is — a rifle is a tenth as tall as it is long, and framed by its height it is drawn ten
		 * times past the edges of the stage.
		 */
		readonly span?: "height" | "widest"
		/**
		 * Fit the subject into a box of the stage instead of standing it at a share of the stage's
		 * height: what is given is the room kept CLEAR on each side, as fractions of the stage, and the
		 * subject is made as large as it fits in what is left — measured as it is posed, so a subject
		 * turned, tipped over or wider than it is tall is sized by what it actually covers.
		 *
		 * This is what a page wants whenever it has furniture of its own: the room over a health bar is
		 * a property of the CARD and the same on every stage, while the size that leaves is a property
		 * of the subject and different for a hero, a courier and Roshan. Naming the room says the first
		 * and lets the stage work out the second.
		 *
		 * It replaces {@link CPreviewScene.SetFill} and {@link lift}, which say the same thing the
		 * other way round, and {@link span}, which is a guess at the shape this measures.
		 */
		readonly fit?: IPreviewFit
	}
	/** The room a fitted stage keeps clear around its subject, in fractions of the stage. */
	interface IPreviewFit {
		readonly top?: number
		readonly bottom?: number
		/** Kept clear on BOTH sides, so the subject stays centred across the stage. */
		readonly sides?: number
	}
	/**
	 * The 3d stage behind a preview page: one GFX scene showing whichever model it is given,
	 * published to RmlUi through its scene texture slot. The scene knows nothing of what the model
	 * stands for — its owner names it — and only renders while the page keeps it active.
	 *
	 * On a host without the GFX scene manager the scene never becomes ready, so a preview built on
	 * it simply never appears.
	 */
	class CPreviewScene {
		/** The vg texture slot to embed as `octarine://scene/<id>`, once a model is loaded and rendering. */
		public get TextureId(): Nullable<number>
		/** Skeleton segments of the shown model, as bone index pairs. */
		public get Links(): readonly [number, number][]
		/** The bone names of each link, parallel to {@link Links}, for telling body parts apart. */
		public get LinkNames(): readonly [string, string][]
		/** The chain each link belongs to, parallel to `Links` and contiguous by construction. */
		public get ChainIds(): readonly number[]
		/**
		 * How much of the stage's height the model stands, as a share of it. The default leaves
		 * room for a frame and readings around the sample; a page that draws on the model itself
		 * asks for more. Held as well as applied, so a scene reframes live and one set up before
		 * its model loads comes up at the asked size.
		 */
		public SetFill(fill: number): void
		/**
		 * Where the camera stands over the model, in multiples of its height. Held as well as
		 * applied, for the reason the fill is: a page frames its stage before the model that framing
		 * is measured against has finished loading.
		 */
		public SetFraming(framing: Readonly<IPreviewFraming>): void
		/**
		 * The lamps on the stage, replacing whatever stood there. Held as well as applied, because the
		 * scene is built the first time a model is named and a page lights it before that.
		 *
		 * A single key leaves the far side of a subject black. A second lamp opposite it is one answer
		 * and {@link SetAmbient} is the other: the fill flattens the shading, the room lifts it.
		 */
		public SetLights(lights: readonly IPreviewLight[]): void
		/**
		 * The light the room itself casts: `scale` how much of the environment's blurred top mip
		 * stands in for irradiance on the diffuse, `saturation` how much of that room's own colour it
		 * carries. Held as well as applied.
		 *
		 * A stage that never calls this is left at whatever ambient the host renders scenes under,
		 * rather than written to a default of ours.
		 */
		public SetAmbient(scale: number, saturation: number): void
		/**
		 * What the subject holds, or nothing. Held as well as applied, because it hangs off a bone of
		 * Held as well as applied, because everything it can hang off reloads out from under it: a
		 * page names its models once, and each is raised again on every subject that has a place for
		 * it. Call it every frame if that is easier — a spec that says the same thing does nothing.
		 *
		 * The `id` is what a later call replaces, and what another model names as its {@link
		 * IPreviewModel.parent}. Adding under one already taken re-raises that model rather than
		 * standing a second one beside it.
		 *
		 * @example
		 * scene.AddModel("weapon", { model: rifle, bone: "wpn" })
		 * scene.AddModel("sight", { model: scope, parent: "weapon", bone: "scope_attach" })
		 */
		public AddModel(id: string, spec: Readonly<IPreviewModel>): void
		/**
		 * Takes a model off the stage. It is taken down rather than destroyed — the scene owns every
		 * instance it makes for as long as it lives — so a page cycling through models pays for the
		 * ones standing at once, not for every one it has shown.
		 *
		 * The entry is kept aside under its id rather than dropped, because the instance is IN it: a
		 * page that puts a model back under an id it has used before stands it on the instance that id
		 * already has. Dropped, every cycle would leave one more instance in the scene, still parented
		 * to whatever it was wearing and still drawn.
		 */
		public RemoveModel(id: string): void
		/**
		 * The room the stage stands in, or nothing for a stage lit by its lamps alone. Held as well as
		 * applied, because the scene is built the first time a model is named and a page furnishes it
		 * before that.
		 */
		public SetRoom(room: Nullable<IPreviewRoom>): void
		/**
		 * The stage's size on screen, in pixels. The render target follows it supersampled, so the
		 * model is drawn over size and averaged down however large the card is laid out and whatever
		 * the UI is scaled to — a target of a fixed size is either a waste or a blur, depending.
		 *
		 * The host calls this every layout; nothing happens unless the answer changed.
		 */
		public SetStageSize(width: number, height: number): void
		/**
		 * Show the older of a weapon's two bodies as the subject. A finish authored before the models
		 * were remade is unwrapped for that geometry and lands on nothing over the newer one.
		 *
		 * Held as well as applied, since the subject reloads out from under it.
		 */
		public SetLegacyBody(on: boolean): void
		/**
		 * Silhouette glow around the model, 0 turns it off. Held as well as applied, and forwarded
		 * only when the value changes: the pages call this every frame, and the scene is created
		 * lazily, so a fresh scene replays the held glow instead of coming up glowless.
		 */
		public SetGlow(color: number, width: number): void
		/**
		 * One material over every submesh of the shown model, as inline KV3, or the model's own back
		 * when nothing is given. Call it every frame; binding happens only when the text changes.
		 *
		 * Held rather than only applied, because a distinct text mints a material the scene then keeps
		 * — and because the model reloads out from under it. A page that switches the hero it shows
		 * would otherwise get its stock materials back with nothing here noticing.
		 */
		public SetOverrideMaterial(material: Nullable<string>): void
		/**
		 * Keeps the model's own look drawn under the override material, the way a chams style that keeps
		 * the original does in game. Held like the material itself, so a model that reloads keeps it;
		 * call it every frame, it only reaches the instance when it changes.
		 */
		public SetKeepOriginal(keep: boolean): void
		/**
		 * Overrides one parameter of whatever the model draws with, for this instance alone. Mints
		 * nothing, so it is the right home for anything that moves — a color picker above all.
		 *
		 * Held as well as applied, for the same reason the material is: an override lives on the
		 * instance, and a freshly bound material carries its own declared defaults instead. The page
		 * unloads its model every time it leaves the screen, so without this a color survives exactly
		 * until the menu is closed and reopened, and then reads as whatever the material declared.
		 */
		public SetOverrideParam(name: string, value: number[]): void
		/**
		 * Projects the eight corners of the model's bounds into stage pixels, `x, y` pairs in the
		 * base-then-top order the wireframe edges expect: each ring walks its square rather than
		 * crossing it, so consecutive indices are an edge and not a diagonal.
		 *
		 * The corners are turned by the angles the model stands at before they are projected: roll
		 * about its forward, then pitch about its left, then yaw about its up, the order a source
		 * transform composes them in. A stage that poses its subject would otherwise be handed the
		 * box of one standing straight, which wraps nothing once the model is tipped over. False until a model is shown.
		 */
		public ProjectCorners(width: number, height: number, out: Float64Array): boolean
		/**
		 * Screen position of one point of the model's own space, in stage pixels. It is turned into
		 * the pose the model stands in first, so what is projected is where that point ended up.
		 *
		 * For a page that knows the shape of its subject better than the model does: what a game
		 * draws a box to is rarely the model's bounds, which are the pose it was authored in rather
		 * than the one it stands in and take in every limb at its furthest.
		 */
		public ProjectPoint(x: number, y: number, z: number, width: number, height: number, out: Float64Array, offset?: number): boolean
		/**
		 * Screen position of a link's bones inside a stage of the given size, mirroring the scene's
		 * orthographic camera. False when either bone has no transform yet.
		 */
		public ProjectLink(link: number, width: number, height: number, out: [number, number, number, number]): boolean
		/** Subscribes to the stage becoming ready or unloading; answers with the unsubscribe. */
		public OnChange(listener: () => void): () => void
		/**
		 * The scene renders only while the page is open. Remembered as well as applied: the page
		 * usually says so before there is a scene to say it to.
		 */
		public SetActive(active: boolean): void
		/**
		 * Turns the model on its stage, in degrees. Held as well as applied, because the model
		 * reloads out from under the pose and a page poses the stage before its model is up.
		 *
		 * All three, because two are not enough to pose a subject lying down. Tipping one up to face
		 * the camera carries its front to the bottom of the frame, and the only way back is a turn
		 * about the axis the camera looks down — which is the roll.
		 */
		public SetModelAngles(pitch: number, yaw: number, roll?: number): void
		/**
		 * Where the model's ART sits relative to the subject's own middle, in its units.
		 *
		 * A correction, not a move. Some models are not drawn centred on the origin they stand at,
		 * and one holding something across its chest looks further off than it is; this slides the
		 * drawing back over the place the subject actually occupies.
		 *
		 * So it moves the model and NOTHING else. What is projected — the box a page draws, the room
		 * it reserves around it — describes where the subject IS, and shifting that with the art
		 * would move the frame right along with the body and correct nothing at all. The skeleton is
		 * the one exception: bones are the drawing, so they travel with it.
		 */
		public SetModelOffset(x: number, y: number, z: number): void
		/**
		 * Leans the model's upper body to a view pitch, in degrees, positive looking down — the bend
		 * an aim pose puts on a pawn. Spread over the spine chain and the neck so the model curls the
		 * way a body does instead of folding at one joint; a rig missing some of those bones shares
		 * the angle over the ones it has. Held as well as applied, because the model reloads out from
		 * under the lean.
		 */
		public SetViewPitch(pitch: number): void
		/**
		 * The model on the stage, and the clip file it is to be shown in when its owner knows one.
		 * Call it every frame; loading starts only when the path changes.
		 *
		 * A named clip is for models that carry no animation of their own — a walker keeps every one
		 * of its as a loose file beside it, and no search of the model can find them.
		 */
		public SetModel(path: Nullable<string>, clip?: string): void
	}
}
