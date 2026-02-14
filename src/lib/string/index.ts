/**
 * Converts a camelCase or PascalCase string to kebab-case.
 * 
 * Used internally for attribute and event name generation.
 * 
 * @param str - Input string in camelCase or PascalCase
 * @returns kebab-case version of the input
 * 
 * @example
 * ```typescript
 * toKebabCase('myVariableName') // 'my-variable-name'
 * toKebabCase('HTMLDivElement') // 'html-div-element'
 * toKebabCase('dataURL') // 'data-url'
 * toKebabCase('backgroundColor') // 'background-color'
 * toKebabCase('XMLHttpRequest') // 'xml-http-request'
 * ```
 * 
 * @remarks
 * - Handles multiple uppercase letters in sequence (acronyms)
 * - Preserves existing hyphens
 * - Converts underscores and spaces to hyphens
 * - Returns lowercase result
 * - Handles edge cases like empty strings
 * 
 * @category String
 * @public
 */
export const toKebabCase = (str: string): string => {
  if (!str) return ''

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert hyphen before uppercase letters
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2') // Handle consecutive uppercase (acronyms)
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .toLowerCase()
}

/**
 * Converts a string to camelCase.
 * 
 * @param str - Input string
 * @returns camelCase version of the input
 * 
 * @example
 * ```typescript
 * toCamelCase('my-variable-name') // 'myVariableName'
 * toCamelCase('background-color') // 'backgroundColor'
 * toCamelCase('XML HTTP request') // 'xmlHttpRequest'
 * ```
 * 
 * @category String
 * @public
 */
export const toCamelCase = (str: string): string => {
  if (!str) return ''

  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, (_, c) => c.toLowerCase())
}

/**
 * Converts a string to PascalCase.
 * 
 * @param str - Input string
 * @returns PascalCase version of the input
 * 
 * @example
 * ```typescript
 * toPascalCase('my-variable-name') // 'MyVariableName'
 * toPascalCase('background color') // 'BackgroundColor'
 * ```
 * 
 * @category String
 * @public
 */
export const toPascalCase = (str: string): string => {
  if (!str) return ''

  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, (_, c) => c.toUpperCase())
}

/**
 * Truncates a string to a specified length.
 * 
 * @param str - Input string
 * @param length - Maximum length
 * @param suffix - Suffix to append if truncated (default: '...')
 * @returns Truncated string
 * 
 * @example
 * ```typescript
 * truncate('Hello World', 5) // 'Hello...'
 * truncate('Hello World', 8, '...') // 'Hello...' (keeps whole words)
 * ```
 * 
 * @category String
 * @public
 */
export const truncate = (str: string, length: number, suffix = '...'): string => {
  if (!str || str.length <= length) return str

  return str.slice(0, length) + suffix
}

