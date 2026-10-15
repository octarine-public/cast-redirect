// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	type NotificationID = number
	interface INotificationOptions {
		/** Main line of the notification. */
		readonly title: string
		/** Secondary line describing the event. */
		readonly message: string
		/** How many seconds the notification stays visible. Defaults to 4; zero keeps it visible. */
		readonly duration?: number
		/**
		 * Image set on the card's chip, such as a hero portrait. Under {@link SetNotificationStrip} it
		 * is the emblem set whole in the art strip instead, on a wash of the accent.
		 */
		readonly titleIcon?: string
		/**
		 * Full-size images shown side by side in place of the title chip, or sharing the art strip
		 * under {@link SetNotificationStrip}. Takes precedence over titleIcon.
		 */
		readonly titleIcons?: readonly string[]
		/**
		 * Color multiplied into the title icon; omitted to preserve the source artwork. In the art
		 * strip a vector glyph left untinted wears the accent.
		 */
		readonly titleIconColor?: Color
		/**
		 * Hero art laid down the card's left edge at full height and melting into the glass: the
		 * cover layout, which takes the place of the title chips. Kept rectangular, so a face keeps
		 * the framing its artwork gave it instead of what a circle leaves of it.
		 */
		readonly portrait?: string
		/**
		 * A small image on the portrait's lower right corner, in an item icon's own proportions and
		 * drawn whole: the scroll a teleport was cast with, the item that was picked up. Only drawn
		 * on the art strip, which a portrait brings and {@link SetNotificationStrip} gives every card.
		 */
		readonly badge?: string
		/** Image shown beside the message, such as a rune or ability icon. */
		readonly messageIcon?: string
		/**
		 * Accent worn by the chip, the card's edge and the remaining-time bar. A vector message icon
		 * is a monochrome glyph and wears it too; raster art keeps its own colors.
		 */
		readonly color?: Color
		/**
		 * What a click on the card does. A card without one is inert and the click falls through to
		 * the panel, which is what drags the stack about.
		 */
		readonly onClick?: () => void
	}
	interface INotifications {
		/**
		 * Adds a notification to the shared on-screen stack. The card flies in from the nearer screen
		 * edge, holds for its duration and leaves on its own; the stack closes the gap behind it.
		 *
		 * @example
		 * Notifications.Show({
		 *     title: player.PlayerName,
		 *     message: "Movement Powerup",
		 *     titleIcon: player.Hero?.TexturePath,
		 *     messageIcon: rune.TexturePath,
		 *     color: Color.RoyalBlue,
		 *     duration: 4
		 * })
		 */
		Show(options: INotificationOptions): NotificationID
		/** Sends one notification away before its duration expires, playing the same exit. */
		Dismiss(id: NotificationID): boolean
		/** Drops every notification at once, with nothing to animate. */
		Clear(): void
	}
	/**
	 * One card of the burst the Preview button plays. A game registers its own through
	 * {@link SetNotificationSamples} so the preview shows what its notifications actually look like;
	 * without that the button plays the one generic card below.
	 */
	interface INotificationSample extends INotificationOptions {
		/** Milliseconds after the button press before this card arrives. */
		readonly delay: number
	}
	/**
	 * Registers the burst the Preview button plays. It is read on every press rather than once, so a
	 * game can dress the cards in whatever the player is looking at.
	 *
	 * @example
	 * SetNotificationSamples(() => [
	 *     { title: heroDisplayName(hero), message: "Speed Rune", delay: 0, duration: 4.6 }
	 * ])
	 */
	function SetNotificationSamples(next: () => readonly INotificationSample[]): void
	/**
	 * Gives every card the art strip a portrait card has, for a game whose cards should all share
	 * that one layout: a card without a portrait carries its title icons there as emblems on a wash
	 * of the accent, or the notification bell when it names none, and its title, message and bar
	 * stand where a portrait card has them. Left off, such a card keeps its round chips.
	 *
	 * @example
	 * SetNotificationStrip(true)
	 */
	function SetNotificationStrip(enabled: boolean): void
	const Notifications: INotifications
	/**
	 * Joins the notifications to the host's frame and input. The bootstrap calls it once the menu
	 * is up, as it does for the watermark and the now-playing card: a card queued before that waits,
	 * and a copy of the menu that no host drives never draws.
	 */
	function SetupNotifications(): void
}
