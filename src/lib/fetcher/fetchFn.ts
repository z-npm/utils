/**
 * Core HTTP request function with comprehensive error handling, timeout support,
 * and automatic response parsing.
 * 
 * @module fetcher/fetchFn
 */

import { isValidUrl } from "../validate"

/**
 * Standardized error reasons returned by fetchFn.
 * These allow consumers to handle specific failure types programmatically.
 * 
 * - `invalid-url`: The provided URL is malformed or empty.
 * - `invalid-input`: An option (e.g., timeout) had an invalid value.
 * - `timeout`: The request exceeded the specified timeout.
 * - `http-error`: The server responded with a non-2xx status code.
 * - `network-error`: A network-level failure (e.g., DNS, connection refused).
 * - `parse-error`: Failed to parse the response body (e.g., invalid JSON).
 * - `unknown-error`: An unexpected error not covered by the above.
 */
export type FetchFnErrorReason =
  | 'invalid-url'
  | 'invalid-input'
  | 'timeout'
  | 'http-error'
  | 'network-error'
  | 'parse-error'
  | 'unknown-error'

/**
 * Configuration options for fetchFn.
 * Extends the native fetch RequestInit interface.
 */
export interface FetchFnOptions extends RequestInit {
  /**
   * The target URL for the request.
   * Must be a valid absolute or relative URL (relative URLs are resolved against the base URL of the page in browser environments).
   */
  url: string

  /**
   * An optional identifier for the request.
   * Useful for correlating requests in batch operations or logging.
   */
  id?: string

  /**
   * The expected response type, which determines how the response body is parsed.
   * Defaults to `'json'`.
   * 
   * - `'json'`: Parses as JSON (returns `null` for empty responses).
   * - `'text'`: Returns the raw text.
   * - `'blob'`: Returns a Blob object.
   * - `'arrayBuffer'`: Returns an ArrayBuffer.
   * - `'formData'`: Parses as FormData (useful for multipart responses).
   */
  responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData'

  /**
   * Request timeout in milliseconds.
   * If the request takes longer than this value, it will be aborted and a `'timeout'` error is returned.
   * Must be greater than 0. Defaults to `10000` (10 seconds).
   */
  timeout?: number
}

/**
 * Represents the result of a fetchFn operation.
 * All fields except `success` are optional and depend on the outcome.
 */
export type FetchFnResult<T = any> = {
  /**
   * Indicates whether the request completed successfully.
   * `true` if the request succeeded and the response was parsed without errors.
   */
  success: boolean

  /**
   * The parsed response data, present only when `success` is `true`.
   * The type corresponds to the `responseType` option.
   */
  data?: T

  /**
   * A human-readable error message, present only when `success` is `false`.
   */
  error?: string

  /**
   * A machine-readable error reason, present only when `success` is `false`.
   * Use this to implement specific error handling logic.
   */
  reason?: FetchFnErrorReason

  /**
   * HTTP status code of the response, present when a response was received.
   */
  status?: number

  /**
   * HTTP status text of the response, present when a response was received.
   */
  statusText?: string

  /**
   * Response headers, present when a response was received.
   * Converted to a plain object for easier consumption.
   */
  headers?: Record<string, string>

  /**
   * The identifier passed in the options, if any.
   */
  id?: string
}

/**
 * Default timeout value: 10 seconds.
 */
const DEFAULT_TIMEOUT = 10_000

/**
 * Parses the response body according to the requested response type.
 * Handles empty responses (204 No Content) gracefully.
 * 
 * @param response - The fetch Response object.
 * @param responseType - The desired parsing method.
 * @returns The parsed data.
 * @throws {TypeError} If parsing fails (e.g., invalid JSON).
 */
const parseResponse = async (
  response: Response,
  responseType: NonNullable<FetchFnOptions['responseType']>
): Promise<any> => {
  // Handle empty responses (status 204 or content-length 0)
  if (response.status === 204 || response.headers.get('content-length') === '0') {
    return responseType === 'json' ? null : undefined
  }

  switch (responseType) {
    case 'json':
      return await response.json()
    case 'text':
      return await response.text()
    case 'blob':
      return await response.blob()
    case 'arrayBuffer':
      return await response.arrayBuffer()
    case 'formData':
      return await response.formData()
    default:
      return await response.json() // Fallback to JSON
  }
}

/**
 * A robust fetch wrapper with timeout, validation, and response parsing.
 * 
 * This function is used internally by the Fetcher class and can also be used directly
 * when you need a promise-based fetch with automatic error categorization.
 * 
 * @template T - The expected type of the response data.
 * @param options - Configuration options for the request.
 * @returns A promise that resolves to a normalized result object.
 * 
 * @example
 * ```typescript
 * import { fetchFn } from '@o.z/utils/fetcher/fetchFn'
 * 
 * const result = await fetchFn({
 *   url: 'https://api.example.com/users/1',
 *   method: 'GET',
 *   timeout: 5000,
 *   responseType: 'json',
 * })
 * 
 * if (result.success) {
 *   console.log('User:', result.data)
 * } else {
 *   console.error(`Failed (${result.reason}): ${result.error}`)
 * }
 * ```
 * 
 * @example with POST and custom headers
 * ```typescript
 * const result = await fetchFn({
 *   url: 'https://api.example.com/users',
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ name: 'New User' }),
 *   responseType: 'json',
 * })
 * ```
 */
export const fetchFn = async <T = any>(
  options: FetchFnOptions
): Promise<FetchFnResult<T>> => {
  const {
    url,
    method = 'GET',
    timeout = DEFAULT_TIMEOUT,
    responseType = 'json',
    id,
    headers,
    body,
    ...init
  } = options

  // Validate URL
  if (!isValidUrl(url)) {
    return {
      success: false,
      error: `Invalid URL provided: ${url}`,
      reason: 'invalid-url',
      id
    }
  }

  // Validate timeout
  if (timeout <= 0) {
    return {
      success: false,
      error: 'Timeout must be greater than 0',
      reason: 'invalid-input',
      id
    }
  }

  const controller = new AbortController()

  // Set up timeout
  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout)

  try {
    const response = await fetch(url, {
      method,
      headers,
      body,
      signal: controller.signal,
      ...init
    })

    // Clear timeout upon successful fetch
    clearTimeout(timeoutId)

    // Check for non-successful HTTP status codes
    if (!response.ok) {
      return {
        success: false,
        error: `HTTP Error: ${response.status} ${response.statusText}`,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        reason: 'http-error',
        id
      }
    }

    // Parse the response based on the specified type
    const data = await parseResponse(response, responseType)

    return {
      success: true,
      data,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      id
    }

  } catch (error) {
    // Ensure timeout is cleared in case of errors
    clearTimeout(timeoutId)

    // Handle timeout errors
    if (controller.signal.aborted) {
      return {
        success: false,
        error: `Request timed out after ${timeout}ms`,
        reason: 'timeout',
        id
      }
    }

    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: `Network error: ${error.message}`,
        reason: 'network-error',
        id
      }
    }

    // Handle response parsing errors
    if (error instanceof TypeError) {
      return {
        success: false,
        error: `Response parsing error: ${error.message}`,
        reason: 'parse-error',
        id
      }
    }

    // Handle unknown errors
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      reason: 'unknown-error',
      id
    }
  }
}
