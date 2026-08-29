[**@o.z/utils API**](../README.md)

***

# Function: toCamelCase()

> **toCamelCase**(`str`): `string`

Defined in: [src/lib/string/index.ts:54](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/string/index.ts#L54)

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
