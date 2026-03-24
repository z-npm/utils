[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<[`Fetcher`](../classes/Fetcher.md)\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:332](https://github.com/z-npm/utils/blob/f0f952b16f26e3da8f57a50970594db02549d386/src/lib/fetcher/index.ts#L332)

Executes multiple fetch requests concurrently.
Each request runs in its own Web Worker.

## Type Parameters

### T

`T` = `any`

## Parameters

### requests

`FetchFnOptions`[]

An array of request options.

## Returns

`Promise`\<`PromiseSettledResult`\<[`Fetcher`](../classes/Fetcher.md)\<`T`\>\>[]\>

A promise that resolves when all requests have settled.

## Example

```typescript
const results = await batchFetch([
  { url: 'https://api.example.com/users/1' },
  { url: 'https://api.example.com/users/2' }
])
results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log(result.value)
  }
})
```
