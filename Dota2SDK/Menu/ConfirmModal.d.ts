// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	interface IConfirmModalOptions {
		readonly title: string
		readonly message: string
		readonly confirmText?: string
		readonly cancelText?: string
		readonly onConfirm?: () => void
		readonly onCancel?: () => void
		/** Adds a required single-line field and passes its trimmed value when the dialog is confirmed. */
		readonly input?: {
			readonly placeholder?: string
			readonly initialValue?: string
			readonly maxLength?: number
			readonly onConfirm: (value: string) => void
		}
		/** Adds an opt-out checkbox whose callback runs only when the checked dialog is confirmed. */
		readonly dontAskAgain?: {
			readonly label?: string
			readonly onConfirm: () => void
		}
	}
	class CConfirmModal {
		public get IsOpen(): boolean
		/**
		 * Keeps the dialog centered over the menu window; ticked once per
		 * frame while the menu runs.
		 */
		public Tick(): void
		public Show(options: IConfirmModalOptions): void
		public Dismiss(): void
	}
	const ConfirmModal: CConfirmModal
}
