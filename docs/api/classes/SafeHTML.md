[**@o.z/utils API**](../README.md)

***

# Class: SafeHTML

Defined in: [src/lib/dom/html.ts:21](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/dom/html.ts#L21)

A wrapper class to mark strings as "safe" (already sanitized or trusted).
                                                            *  SafeHTML

## Example

## Remarks

- Used internally by the `html` template tag
- Signals that content doesn't need escaping
- Should only be created from trusted sources

## Constructors

### Constructor

> **new SafeHTML**(`value`): `SafeHTML`

Defined in: [src/lib/dom/html.ts:25](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/dom/html.ts#L25)

Creates a SafeHTML instance.                                *

#### Parameters

##### value

`string`

HTML string that is already sanitized or trusted

#### Returns

`SafeHTML`

## Properties

### value

> `readonly` **value**: `string`

Defined in: [src/lib/dom/html.ts:25](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/dom/html.ts#L25)

The safe HTML string

## Methods

### toString()

> **toString**(): `string`

Defined in: [src/lib/dom/html.ts:31](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/dom/html.ts#L31)

Returns the safe HTML string.

#### Returns

`string`

The HTML string
