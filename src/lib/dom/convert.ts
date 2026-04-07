/**
 * @fileoverview DOM conversion utilities for transforming elements to strings.
 *
 * @module dom/convert
 */

/**
 * Converts an HTML, SVG, or Template element to its string representation.
 *
 * For `<template>` elements, it serializes the content fragment and removes
 * automatically injected `xmlns` attributes. For regular elements, it returns
 * the `innerHTML`.
 *
 * @param element - The DOM element to convert.
 * @returns The string representation of the element's inner content.
 *
 * @example
 * ```typescript
 * const div = document.createElement('div')
 * div.innerHTML = '<p>Hello</p>'
 * console.log(elementToStr(div)) // '<p>Hello</p>'
 *
 * const template = document.createElement('template')
 * template.innerHTML = '<span>World</span>'
 * console.log(elementToStr(template)) // '<span>World</span>'
 * ```
 *
 * @remarks
 * - Uses `XMLSerializer` for template content to preserve structural integrity.
 * - Automatically strips `xmlns` attributes injected by the serializer.
 * - Returns an empty string for elements with no children.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer}
 * @category DOM
 * @public
 */
export const elementToStr = (
  element: HTMLTemplateElement | HTMLElement | SVGElement,
): string => {
  if (element instanceof HTMLTemplateElement) {
    const str = new XMLSerializer().serializeToString(element.content)
    return str.replace(/ xmlns="[^"]*"/g, "")
  }

  return element.innerHTML
}
