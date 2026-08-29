[**@o.z/utils API**](../README.md)

***

# Function: elementToStr()

> **elementToStr**(`element`): `string`

Defined in: [src/lib/dom/convert.ts:37](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/convert.ts#L37)

Converts an HTML, SVG, or Template element to its string representation.

For `<template>` elements, it serializes the content fragment and removes
automatically injected `xmlns` attributes. For regular elements, it returns
the `innerHTML`.

## Parameters

### element

`HTMLElement` \| `HTMLTemplateElement` \| `SVGElement`

The DOM element to convert.

## Returns

`string`

The string representation of the element's inner content.

## Example

```typescript
const div = document.createElement('div')
div.innerHTML = '<p>Hello</p>'
console.log(elementToStr(div)) // '<p>Hello</p>'

const template = document.createElement('template')
template.innerHTML = '<span>World</span>'
console.log(elementToStr(template)) // '<span>World</span>'
```

## Remarks

- Uses `XMLSerializer` for template content to preserve structural integrity.
- Automatically strips `xmlns` attributes injected by the serializer.
- Returns an empty string for elements with no children.

## See

[https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer](https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer)
