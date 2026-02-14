[**@o.z/utils API**](../README.md)

***

# Function: isValidEmail()

> **isValidEmail**(`email`): `boolean`

Defined in: [src/lib/validate/index.ts:43](https://github.com/z-npm/utils/blob/38c27c144e95626db9890e7e563d40a2f8155b8b/src/lib/validate/index.ts#L43)

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
