[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:314](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L314)

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
