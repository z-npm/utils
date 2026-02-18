[**@o.z/utils API**](../README.md)

***

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [src/lib/string/index.ts:54](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/string/index.ts#L54)

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
