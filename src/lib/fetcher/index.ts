import { isValidUrl } from "../validate"

/**
 * Possible reasons for request failure.
 */
export type FetcherErrorReason =
  | 'invalid-url'
  | 'invalid-input'
  | 'timeout'
  | 'http-error'
  | 'network-error'
  | 'parse-error'
  | 'unknown-error'

/**
 * Options for configuring the fetcher function.
 */
export interface FetcherOptions extends RequestInit {
  /**
   * The URL to send the request to.
   */
  url: string

  /**
   * Optional identifier for the request.
   */
  id?: string

  /**
   * The expected response type. Defaults to 'json'.
   */
  responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData'

  /**
   * Request timeout in milliseconds. Defaults to 10000ms.
   */
  timeout?: number
}

/**
 * Represents the result of a fetcher operation.
 */
export type FetcherResult<T = any> = {
  /**
   * Indicates whether the request was successful.
   */
  success: boolean

  /**
   * The response data if the request was successful.
   */
  data?: T

  /**
   * Error message if the request failed.
   */
  error?: string

  /**
   * A standardized reason for the failure.
   */
  reason?: FetcherErrorReason

  /**
   * HTTP status code of the response.
   */
  status?: number

  /**
   * HTTP status text of the response.
   */
  statusText?: string

  /**
   * Response headers.
   */
  headers?: Headers

  /**
   * The identifier associated with the request.
   */
  id?: string
}

/**
 * Default timeout value in milliseconds.
 */
const DEFAULT_TIMEOUT = 10000

/**
 * List of HTTP status codes considered as valid responses.
 */
const VALID_STATUS_CODES = [200, 201, 202, 204]

/**
 * Parses the response based on the specified response type.
 * 
 * @param response - The fetch API Response object.
 * @param responseType - The expected response type.
 * @returns The parsed response data.
 */
const parseResponse = async (
  response: Response,
  responseType: NonNullable<FetcherOptions['responseType']>
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
 * Generic fetcher function that handles HTTP requests with error handling, timeouts, and response parsing.
 * 
 * @template T - The expected type of the response data.
 * @param options - Configuration options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const fetcher = async <T = any>(
  options: FetcherOptions
): Promise<FetcherResult<T>> => {
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

    // Check for non-successful HTTP status codes outside the valid range
    if (!response.ok && !VALID_STATUS_CODES.includes(response.status)) {
      return {
        success: false,
        error: `HTTP Error: ${response.status} ${response.statusText}`,
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
      headers: { ...response.headers },
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

/**
 * Performs an HTTP GET request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const get = <T = any>(url: string, options?: Omit<FetcherOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'GET' })

/**
 * Performs an HTTP POST request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const post = <T = any>(url: string, options?: Omit<FetcherOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'POST' })

/**
 * Performs an HTTP PUT request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const put = <T = any>(url: string, options?: Omit<FetcherOptions, 'url' | 'method'>) =>
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
export const patch = <T = any>(url: string, body?: any, options?: Omit<FetcherOptions, 'url' | 'method' | 'body'>) =>
  fetcher<T>({ ...options, url, method: 'PATCH', body })

/**
 * Performs an HTTP DELETE request.
 * 
 * @template T - The expected type of the response data.
 * @param url - The URL to send the request to.
 * @param options - Additional options for the request.
 * @returns A promise resolving to a FetcherResult object.
 */
export const del = <T = any>(url: string, options?: Omit<FetcherOptions, 'url' | 'method'>) =>
  fetcher<T>({ ...options, url, method: 'DELETE' })


/**
 * Executes multiple fetch requests concurrently.
 * @returns A promise resolving to an array of `PromiseSettledResult<FetcherResult<T>>`.
 */
export const batchFetch = async <T = any>(requests: FetcherOptions[]) =>
  Promise.allSettled(requests.map(req => fetcher<T>(req)))

