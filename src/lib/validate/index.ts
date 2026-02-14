/**
 * Validates URL string.
 * 
 * @param urlString - URL string to validate
 * @returns true if valid URL, false otherwise
 * 
 * @example
 * ```typescript
 * isValidUrl('https://example.com') // true
 * isValidUrl('not-a-url') // false
 * isValidUrl('') // false
 * ```
 * 
 * @category Validation
 * @public
 */
export const isValidUrl = (urlString: string): boolean => {
  if (!urlString || typeof urlString !== 'string') return false

  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}

/**
 * Validates email address.
 * 
 * @param email - Email string to validate
 * @returns true if valid email, false otherwise
 * 
 * @example
 * ```typescript
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid-email') // false
 * ```
 * 
 * @category Validation
 * @public
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


/**
 * Validates that a value is not empty.
 * 
 * @param value - Value to validate
 * @returns true if not empty, false otherwise
 * 
 * @example
 * ```typescript
 * isNotEmpty('hello') // true
 * isNotEmpty('') // false
 * isNotEmpty(null) // false
 * isNotEmpty(undefined) // false
 * isNotEmpty([]) // false
 * isNotEmpty({}) // false
 * ```
 * 
 * @category Validation
 * @public
 */
export const isNotEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return false

  if (typeof value === 'string') {
    return value.trim().length > 0
  }

  if (Array.isArray(value)) {
    return value.length > 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length > 0
  }

  return true
}

