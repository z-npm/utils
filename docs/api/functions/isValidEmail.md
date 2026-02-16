[**@o.z/utils API**](../README.md)

***

# Function: isValidEmail()

> **isValidEmail**(`email`): `boolean`

Defined in: [src/lib/validate/index.ts:43](https://github.com/z-npm/utils/blob/ba4c25d7a511757633063ce2d47c6306f136a936/src/lib/validate/index.ts#L43)

Validates email address.

## Parameters

### email

`string`

Email string to validate

## Returns

`boolean`

true if valid email, false otherwise

## Example

```typescript
isValidEmail('user@example.com') // true
isValidEmail('invalid-email') // false
```
