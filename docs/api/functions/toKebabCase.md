[**@o.z/utils API**](../README.md)

***

# Function: toKebabCase()

> **toKebabCase**(`str`): `string`

Defined in: [src/lib/string/index.ts:28](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/string/index.ts#L28)

Converts a camelCase or PascalCase string to kebab-case.

Used internally for attribute and event name generation.

## Parameters

### str

`string`

Input string in camelCase or PascalCase

## Returns

`string`

kebab-case version of the input

## Example

```typescript
toKebabCase('myVariableName') // 'my-variable-name'
toKebabCase('HTMLDivElement') // 'html-div-element'
toKebabCase('dataURL') // 'data-url'
toKebabCase('backgroundColor') // 'background-color'
toKebabCase('XMLHttpRequest') // 'xml-http-request'
```

## Remarks

- Handles multiple uppercase letters in sequence (acronyms)
- Preserves existing hyphens
- Converts underscores and spaces to hyphens
- Returns lowercase result
- Handles edge cases like empty strings
