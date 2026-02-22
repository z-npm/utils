[**@o.z/utils API**](../README.md)

***

# Function: isValidUrl()

> **isValidUrl**(`urlString`): `boolean`

Defined in: [src/lib/validate/index.ts:17](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/validate/index.ts#L17)

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
