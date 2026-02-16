[**@o.z/utils API**](../README.md)

***

# Function: isNotEmpty()

> **isNotEmpty**(`value`): `boolean`

Defined in: [src/lib/validate/index.ts:70](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/validate/index.ts#L70)

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
