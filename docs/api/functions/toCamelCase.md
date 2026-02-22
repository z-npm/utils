[**@o.z/utils API**](../README.md)

***

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [src/lib/string/index.ts:54](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/string/index.ts#L54)

Converts a string to camelCase.

## Parameters

### str

`string`

Input string

## Returns

`string`

camelCase version of the input

## Example

```typescript
toCamelCase('my-variable-name') // 'myVariableName'
toCamelCase('background-color') // 'backgroundColor'
toCamelCase('XML HTTP request') // 'xmlHttpRequest'
```
