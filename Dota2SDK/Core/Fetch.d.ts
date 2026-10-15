// AUTO-GENERATED - do not edit.
interface FetchInit {
	method?: string
	headers?: HeadersInit
	body?: string | ArrayBuffer | ArrayBufferView
	signal?: AbortSignal
	/** `"follow"` chases redirects, `"manual"` hands back the 3xx as it arrived. Default `"follow"`. */
	redirect?: "follow" | "manual"
	/** Deadline for the whole exchange. The client clamps it to its own ceiling. */
	timeoutMs?: number
	/** Fail rather than read a body past this many bytes. The client clamps it to its own ceiling. */
	maxResponseBytes?: number
}
