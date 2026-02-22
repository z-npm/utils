/**
 * Web Worker based HTTP client that offloads network requests from the main thread.
 * Provides a reactive class with callbacks for loading, success, and error states.
 * 
 * @module fetcher
 */

import FetchWorker from "./_fetcher.worker?worker&inline"
import { FetchFnErrorReason, FetchFnOptions, FetchFnResult } from "./fetchFn"

/**
 * Unified error structure for all fetcher error scenarios.
 * Extends the base FetchFnResult error fields with worker‑specific reasons.
 */
export interface FetcherError {
  /** Human‑readable error message. */
  error: string
  /** Standardized reason code. */
  reason?: FetchFnErrorReason | 'worker-error' | 'initialization-error'
  /** HTTP status code (if a response was received). */
  status?: number
  /** HTTP status text (if a response was received). */
  statusText?: string
  /** Response headers (if a response was received). */
  headers?: Record<string, string>
  /** Request identifier, if provided. */
  id?: string
}

/**
 * Configuration options for the Fetcher class.
 * Extends FetchFnOptions with lifecycle callbacks and auto‑refetch control.
 */
export interface FetcherOptions<T = unknown> extends FetchFnOptions {
  /**
   * Whether to automatically start the request upon instantiation.
   * Defaults to `true`. Set to `false` if you want to manually call `reFetch()`.
   */
  autoRefetch?: boolean

  /**
   * Callback triggered after every fetch completion, regardless of success or failure.
   * Receives the full result object.
   */
  onResult?: (result: FetchFnResult<T>) => void

  /**
   * Callback triggered when the request succeeds.
   * Receives the parsed response data.
   */
  onSuccess?: (result: T) => void

  /**
   * Callback triggered when the request fails.
   * Receives a normalized error object.
   */
  onError?: (error: FetcherError) => void

  /**
   * Callback triggered when the loading state changes.
   * Useful for showing/hiding loading indicators in UI.
   */
  onLoadingChange?: (isLoading: boolean) => void
}

/**
 * A class that performs HTTP requests using a Web Worker, keeping the main thread free.
 * 
 * The Fetcher instance maintains internal state (`value`, `error`, `isLoading`, `result`)
 * and provides getters to read them. You can also attach callbacks via the constructor
 * or set them later using property setters.
 * 
 * @template T - The expected type of the response data.
 * 
 * @example
 * ```typescript
 * import { Fetcher } from '@o.z/utils/fetcher'
 * 
 * const users = new Fetcher<User[]>({
 *   url: 'https://api.example.com/users',
 *   onLoadingChange: (loading) => setSpinnerVisible(loading),
 *   onSuccess: (data) => renderUsers(data),
 *   onError: (err) => showError(err.error)
 * })
 * 
 * // Later, manually trigger a new request:
 * users.reFetch()
 * 
 * // Access current state
 * console.log(users.isLoading, users.value)
 * ```
 * 
 * @example with autoRefetch disabled
 * ```typescript
 * const fetcher = new Fetcher({
 *   url: 'https://api.example.com/data',
 *   autoRefetch: false
 * })
 * 
 * // Start request only when needed
 * button.addEventListener('click', () => fetcher.reFetch())
 * ```
 */
export class Fetcher<T> {
  #worker: Worker | null = null
  #options: FetchFnOptions

  #value?: T
  /**
   * The latest successfully fetched data.
   * Undefined until the first successful request.
   */
  public get value() {
    return this.#value
  }

  #result?: FetchFnResult<T>
  /**
   * The raw result object from the most recent request.
   * Contains both success/failure details.
   */
  public get result() {
    return this.#result
  }

  #error?: FetcherError
  /**
   * The latest error object, if the last request failed.
   * Undefined if the last request succeeded or no request has been made.
   */
  public get error() {
    return this.#error
  }

  #isLoading?: boolean
  /**
   * Whether a request is currently in progress.
   */
  public get isLoading() {
    return this.#isLoading
  }

  #onResult?: (error: FetchFnResult<T>) => void
  /** Set a callback to be invoked after every request completion. */
  public set onResult(onResult: (error: FetchFnResult<T>) => void) {
    this.#onResult = onResult
  }

  #onSuccess?: (data: T) => void
  /** Set a callback to be invoked after a successful request. */
  public set onSuccess(onSuccess: (data: T) => void) {
    this.#onSuccess = onSuccess
  }

  #onError?: (error: FetcherError) => void
  /** Set a callback to be invoked after a failed request. */
  public set onError(onError: (error: FetcherError) => void) {
    this.#onError = onError
  }

  #onLoadingChange?: (isLoading: boolean) => void
  /** Set a callback to be invoked when loading state changes. */
  public set onLoadingChange(onLoadingChange: (isLoading: boolean) => void) {
    this.#onLoadingChange = onLoadingChange
  }

  /**
   * Creates a new Fetcher instance.
   * 
   * @param options - Configuration options including URL, callbacks, and fetch settings.
   */
  constructor(options: FetcherOptions<T>) {
    const { autoRefetch = true, onResult, onSuccess, onError, onLoadingChange, ...fetchOptions } = options

    if (onResult) this.#onResult = onResult
    if (onSuccess) this.#onSuccess = onSuccess
    if (onError) this.#onError = onError
    if (onLoadingChange) this.#onLoadingChange = onLoadingChange
    this.#options = fetchOptions
    if (autoRefetch) this.reFetch()
  }

  /**
   * Initiates the request (or re‑request). Called automatically if `autoRefetch` is true.
   * Can be called manually at any time to trigger a new fetch.
   */
  reFetch = () => {
    this.#isLoading = true
    this.#onLoadingChange?.(this.#isLoading)

    try {
      this.#worker = new FetchWorker()

      this.#worker.onmessage = (event: MessageEvent<FetchFnResult<T>>) => {
        this.#result = event.data
        this.#worker?.terminate()
        this.#worker = null
        this.#isLoading = false
        this.#onLoadingChange?.(this.#isLoading)
        this.#onResult?.(this.#result)

        if (this.#result.success) {
          this.#value = this.#result.data
          this.#onSuccess?.(this.#result.data!)
        } else {
          this.#error = {
            error: this.#result.error || "An unknown error occurred in the worker.",
            reason: this.#result.reason,
            status: this.#result.status,
            statusText: this.#result.statusText,
            headers: this.#result.headers,
            id: this.#result.id,
          }
          this.#onError?.(this.#error)
        }
      }

      this.#worker.onerror = (errorEvent: ErrorEvent) => {
        console.error("Web worker error:", errorEvent)
        this.#worker?.terminate()
        this.#worker = null
        this.#isLoading = false
        this.#onLoadingChange?.(this.#isLoading)

        this.#error = {
          error: `Web worker failed: ${errorEvent.message}`,
          reason: 'worker-error',
        }
        this.#onError?.(this.#error)
      }

      this.#worker.postMessage(this.#options)

    } catch (creationError) {
      console.error("Failed to create Web Worker:", creationError)
      this.#isLoading = false
      this.#onLoadingChange?.(this.#isLoading)

      this.#error = {
        error: `Failed to initialize Web Worker: ${creationError instanceof Error ? creationError.message : "Unknown error"}`,
        reason: 'initialization-error',
      }
      this.#onError?.(this.#error)
    }
  }
}

/**
 * Performs an HTTP GET request using a Web Worker.
 * Returns a Fetcher instance that starts the request immediately.
 * 
 * @template T - The expected type of the response data.
 * @param url - The endpoint URL.
 * @param options - Additional fetch options (excluding `method` and `url`).
 * @returns A Fetcher instance.
 * 
 * @example
 * ```typescript
 * const userFetcher = get<User>('https://api.example.com/users/1', {
 *   onSuccess: (user) => console.log(user.name)
 * })
 * ```
 */
export const get = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  new Fetcher<T>({ ...options, url, method: 'GET' })

/**
 * Performs an HTTP POST request using a Web Worker.
 * 
 * @template T - The expected type of the response data.
 * @param url - The endpoint URL.
 * @param options - Additional fetch options (excluding `method` and `url`).
 * @returns A Fetcher instance.
 */
export const post = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  new Fetcher<T>({ ...options, url, method: 'POST' })

/**
 * Performs an HTTP PUT request using a Web Worker.
 * 
 * @template T - The expected type of the response data.
 * @param url - The endpoint URL.
 * @param options - Additional fetch options (excluding `method` and `url`).
 * @returns A Fetcher instance.
 */
export const put = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  new Fetcher<T>({ ...options, url, method: 'PUT' })

/**
 * Performs an HTTP PATCH request using a Web Worker.
 * 
 * @template T - The expected type of the response data.
 * @param url - The endpoint URL.
 * @param body - The request body (optional).
 * @param options - Additional fetch options (excluding `method`, `url`, and `body`).
 * @returns A Fetcher instance.
 */
export const patch = <T = any>(url: string, body?: any, options?: Omit<FetchFnOptions, 'url' | 'method' | 'body'>) =>
  new Fetcher<T>({ ...options, url, method: 'PATCH', body })

/**
 * Performs an HTTP DELETE request using a Web Worker.
 * 
 * @template T - The expected type of the response data.
 * @param url - The endpoint URL.
 * @param options - Additional fetch options (excluding `method` and `url`).
 * @returns A Fetcher instance.
 */
export const del = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  new Fetcher<T>({ ...options, url, method: 'DELETE' })

/**
 * Executes multiple fetch requests concurrently.
 * Each request runs in its own Web Worker.
 * 
 * @param requests - An array of request options.
 * @returns A promise that resolves when all requests have settled.
 * 
 * @example
 * ```typescript
 * const results = await batchFetch([
 *   { url: 'https://api.example.com/users/1' },
 *   { url: 'https://api.example.com/users/2' }
 * ])
 * results.forEach(result => {
 *   if (result.status === 'fulfilled') {
 *     console.log(result.value)
 *   }
 * })
 * ```
 */
export const batchFetch = async <T = any>(requests: FetchFnOptions[]) =>
  Promise.allSettled(requests.map(req => new Fetcher<T>(req)))

