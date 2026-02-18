[**@o.z/utils API**](../README.md)

***

# Function: truncate()

> **truncate**(`str`, `length`, `suffix?`): `string`

Defined in: [src/lib/string/index.ts:102](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/string/index.ts#L102)

Truncates a string to a specified length.

## Parameters

### str

`string`

Input string

### length

`number`

Maximum length

### suffix?

`string` = `'...'`

Suffix to append if truncated (default: '...')

## Returns

`string`

Truncated string

## Example

```typescript
truncate('Hello World', 5) // 'Hello...'
truncate('Hello World', 8, '...') // 'Hello...' (keeps whole words)
```
