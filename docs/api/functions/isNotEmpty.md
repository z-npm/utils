[**@o.z/utils API**](../README.md)

***

# Function: isNotEmpty()

> **isNotEmpty**(`value`): `boolean`

Defined in: [src/lib/validate/index.ts:70](https://github.com/z-npm/utils/blob/9861d2ac357ab46d57a0b585ad9bae869c08517b/src/lib/validate/index.ts#L70)

Validates that a value is not empty.

## Parameters

### value

`any`

Value to validate

## Returns

`boolean`

true if not empty, false otherwise

## Example

```typescript
isNotEmpty('hello') // true
isNotEmpty('') // false
isNotEmpty(null) // false
isNotEmpty(undefined) // false
isNotEmpty([]) // false
isNotEmpty({}) // false
```
