import FetchWorker from "./_fetcher.worker?worker&inline"
import { FetchFnErrorReason, FetchFnOptions, FetchFnResult } from "./fetchFn"

/**
 * Unified error type for all fetcher error scenarios
 */
export interface FetcherError {
  /** Error message */
  error: string
  /** Standardized reason for the failure */
  reason?: FetchFnErrorReason | 'worker-error' | 'initialization-error'
  /** HTTP status code (if applicable) */
  status?: number
  /** HTTP status text (if applicable) */
  statusText?: string
  /** Response headers (if applicable) */
  headers?: Headers
  /** Request identifier (if applicable) */
  id?: string
}

export interface FetcherOptions<T = unknown> extends FetchFnOptions {
  /**
   * Callback triggered when the request succeeds
   * @param result - The successful FetcherResult
   */
  onSuccess?: (result: FetchFnResult<T>) => void
  /**
   * Callback triggered when the request fails
   * @param error - The error details
   */
  onError?: (error: FetcherError) => void
  /**
   * Callback triggered when loading state changes
   * @param isLoading - Current loading state
   */
  onLoadingChange?: (isLoading: boolean) => void
}

/**
 * Performs an HTTP request using a Web Worker to avoid blocking the main thread.
 * This is particularly useful for long-running requests or when keeping the UI responsive is crucial.
 *
 * @template T - The expected type of the response data.
 * @param options - Configuration options for the request, including URL, method, headers, etc.
 * @returns A promise resolving to the FetcherResult object containing the response or error details.
 * 
 * @example
 * ```typescript
 * const result = await fetcher<User[]>({
 *   url: 'https://api.example.com/users',
 *   onSuccess: (data) => console.log('Success:', data),
 *   onError: (error) => console.error('Failed:', error.error),
 *   onLoadingChange: (loading) => setLoading(loading)
 * })
 * ```
 */
export const fetcher = <T = unknown>(
  options: FetcherOptions<T>
): Promise<FetchFnResult<T>> => {
  const { onSuccess, onError, onLoadingChange, ...fetchOptions } = options

  onLoadingChange?.(true)

  return new Promise((resolve, reject) => {
    let worker: Worker | null = null

    try {
      worker = new FetchWorker()

      worker.onmessage = (event: MessageEvent<FetchFnResult<T>>) => {
        const result = event.data
        worker?.terminate()
        worker = null
        onLoadingChange?.(false)

        if (result.success) {
          onSuccess?.(result)
          resolve(result)
        } else {
          const errorObj: FetcherError = {
            error: result.error || "An unknown error occurred in the worker.",
            reason: result.reason,
            status: result.status,
            statusText: result.statusText,
            headers: result.headers,
            id: result.id,
          }
          onError?.(errorObj)
          reject(errorObj)
        }
      }

      worker.onerror = (errorEvent: ErrorEvent) => {
        console.error("Web Worker error:", errorEvent)
        worker?.terminate()
        worker = null
        onLoadingChange?.(false)

        const errorObj: FetcherError = {
          error: `Web Worker failed: ${errorEvent.message}`,
          reason: 'worker-error',
        }
        onError?.(errorObj)
        reject(errorObj)
      }

      worker.postMessage(fetchOptions)

    } catch (creationError) {
      console.error("Failed to create Web Worker:", creationError)
      onLoadingChange?.(false)

      const errorObj: FetcherError = {
        error: `Failed to initialize Web Worker: ${creationError instanceof Error ? creationError.message : "Unknown error"}`,
        reason: 'initialization-error',
      }
      onError?.(errorObj)
      reject(errorObj)
    }
  })
}

/**
 * Performs an HTTP GET request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const get = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'GET' })

/**
 * Performs an HTTP POST request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const post = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'POST' })

/**
 * Performs an HTTP PUT request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const put = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'PUT' })

/**
 * Performs an HTTP PATCH request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param body - The request body.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const patch = <T = any>(url: string, body?: any, options?: Omit<FetchFnOptions, 'url' | 'method' | 'body'>) =>
  fetcher<T>({ ...options, url, method: 'PATCH', body })

/**
 * Performs an HTTP DELETE request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const del = <T = any>(url: string, options?: Omit<FetchFnOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'DELETE' })


/**
 * Executes multiple fetch requests concurrently.
 * @returns A promise resolving to an array of `PromiseSettledResult<FetcherResult<T>>`.
 */
export const batchFetch = async <T = any>(requests: FetchFnOptions[]) =>
  Promise.allSettled(requests.map(req => fetcher<T>(req)))

