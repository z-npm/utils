[**@o.z/utils API**](../README.md)

***

# Function: isValidUrl()

> **isValidUrl**(`urlString`): `boolean`

Defined in: [src/lib/validate/index.ts:17](https://github.com/z-npm/utils/blob/ba4c25d7a511757633063ce2d47c6306f136a936/src/lib/validate/index.ts#L17)

Validates URL string.

## Parameters

### urlString

`string`

URL string to validate

## Returns

`boolean`

true if valid URL, false otherwise

## Example

```typescript
isValidUrl('https://example.com') // true
isValidUrl('not-a-url') // false
isValidUrl('') // false
```
