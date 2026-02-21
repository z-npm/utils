[**@o.z/utils API**](../README.md)

***

# Function: truncate()

> **truncate**(`str`, `length`, `suffix?`): `string`

Defined in: [src/lib/string/index.ts:102](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/string/index.ts#L102)

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
