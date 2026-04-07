/**
 * @fileoverview Validation utilities for common data types and formats.
 *
 * @module validate
 */

/**
 * Checks if a string is a valid URL.
 * @param urlString - The URL string to validate.
 * @returns `true` if valid, otherwise `false`.
 */
export const isValidUrl = (urlString: string): boolean => {
  if (!urlString || typeof urlString !== "string") return false
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}

/**
 * Checks if a string is a valid email address.
 * Uses a standard regex pattern suitable for most common cases.
 * @param email - The email string to validate.
 * @returns `true` if valid, otherwise `false`.
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== "string") return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email.trim())
}

/**
 * Checks if a value is not empty.
 * Handles strings, arrays, maps, sets, objects, dates, and primitives.
 * Note: `0` and `false` are considered non-empty.
 * @param value - The value to check.
 * @returns `true` if not empty, otherwise `false`.
 */
export const isNotEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return false
  if (typeof value === "string") return value.trim().length > 0
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol" ||
    typeof value === "function"
  )
    return true
  if (Array.isArray(value)) return value.length > 0
  if (value instanceof Map || value instanceof Set) return value.size > 0
  if (value instanceof Date) return !isNaN(value.getTime())
  if (typeof value === "object") return Object.keys(value).length > 0
  return false
}

/**
 * Checks if a character is a digit.
 * @param char - The character to check.
 * @returns `true` if digit, otherwise `false`.
 */
export const isDigit = (char: string): boolean => /^\d$/.test(char)

/**
 * Checks if a character is alphabetic.
 * @param char - The character to check.
 * @returns `true` if alphabetic, otherwise `false`.
 */
export const isAlphabetic = (char: string): boolean => /^[a-zA-Z]$/.test(char)

/**
 * Checks if a character is alphanumeric.
 * @param char - The character to check.
 * @returns `true` if alphanumeric, otherwise `false`.
 */
export const isAlphanumeric = (char: string): boolean =>
  /^[a-zA-Z0-9]$/.test(char)

/**
 * Checks if a character is whitespace.
 * @param char - The character to check.
 * @returns `true` if whitespace, otherwise `false`.
 */
export const isWhitespace = (char: string): boolean => /^\s$/.test(char)

/**
 * Type guard for boolean.
 * @param value - The value to check.
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean"

/**
 * Type guard for number (excludes NaN).
 * @param value - The value to check.
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value)

/**
 * Type guard for string.
 * @param value - The value to check.
 */
export const isString = (value: unknown): value is string =>
  typeof value === "string"

/**
 * Checks if a value is a plain object (excluding null, arrays, dates, etc.).
 * @param value - The value to check. */
export const isPlainObject = (value: unknown): value is Record<string, any> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  value.constructor === Object

/**
 * Checks if a value is an array.
 * @param value - The value to check.
 */
export const isArray = Array.isArray

/**
 * Checks if a value is a function.
 * @param value - The value to check.
 */
export const isFunction = (value: unknown): value is (...args: any[]) => any =>
  typeof value === "function"
