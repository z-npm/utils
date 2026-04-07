[**@o.z/utils API**](../README.md)

***

# Function: isNotEmpty()

> **isNotEmpty**(`value`): `boolean`

Defined in: [src/lib/validate/index.ts:41](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/validate/index.ts#L41)

Checks if a value is not empty.
Handles strings, arrays, maps, sets, objects, dates, and primitives.
Note: `0` and `false` are considered non-empty.

## Parameters

### value

`unknown`

The value to check.

## Returns

`boolean`

`true` if not empty, otherwise `false`.
