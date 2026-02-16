[**@o.z/utils API**](../README.md)

***

# Function: isValidEmail()

> **isValidEmail**(`email`): `boolean`

Defined in: [src/lib/validate/index.ts:43](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/validate/index.ts#L43)

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
