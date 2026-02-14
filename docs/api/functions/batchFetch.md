[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:314](https://github.com/z-npm/utils/blob/38c27c144e95626db9890e7e563d40a2f8155b8b/src/lib/fetcher/index.ts#L314)

Executes multiple fetch requests concurrently.

## Type Parameters

### T

`T` = `any`

## Parameters

### requests

[`FetcherOptions`](../interfaces/FetcherOptions.md)[]

## Returns

`Promise`\<`PromiseSettledResult`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>[]\>

A promise resolving to an array of `PromiseSettledResult<FetcherResult<T>>`.
