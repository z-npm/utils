[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:314](https://github.com/z-npm/utils/blob/ba4c25d7a511757633063ce2d47c6306f136a936/src/lib/fetcher/index.ts#L314)

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
