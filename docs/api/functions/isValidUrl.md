[**@o.z/utils API**](../README.md)

***

# Function: isValidUrl()

> **isValidUrl**(`urlString`): `boolean`

Defined in: [src/lib/validate/index.ts:17](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/validate/index.ts#L17)

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
