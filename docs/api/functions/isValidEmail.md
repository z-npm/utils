[**@o.z/utils API**](../README.md)

***

# Function: isValidEmail()

> **isValidEmail**(`email`): `boolean`

Defined in: [src/lib/validate/index.ts:43](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/validate/index.ts#L43)

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
