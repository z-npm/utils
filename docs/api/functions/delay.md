[**@o.z/utils API**](../README.md)

***

# Function: delay()

> **delay**(`ms`): `Promise`\<`unknown`\>

Defined in: [src/lib/task/index.ts:18](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/task/index.ts#L18)

Creates a promise that resolves after a specified delay.

Useful for debouncing, animations, or simulating async operations.

## Parameters

### ms

`number`

Delay in milliseconds

## Returns

`Promise`\<`unknown`\>

Promise that resolves after the delay

## Example

```typescript
// Wait for 1 second
await delay(1000);
console.log('1 second later');
```

## See

[https://developer.mozilla.org/en-US/docs/Web/API/setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
