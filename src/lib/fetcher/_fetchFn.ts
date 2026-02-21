import { isValidUrl } from "../validate"

/**
 * Possible reasons for request failure.
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
 * Options for configuring the fetchFn function.
 */
export interface FetchFnOptions extends RequestInit {
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
 * Represents the result of a fetchFn operation.
 */
export type FetchFnResult<T = any> = {
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
  reason?: FetchFnErrorReason

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
 * Generic fetchFn function that handles HTTP requests with error handling, timeouts, and response parsing.
 * 
 * @template T - The expected type of the response data.
 * @param options - Configuration options for the request.
 * @returns A promise resolving to a FetcherResult object.
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
