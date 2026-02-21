[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<`FetchFnResult`\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:185](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L185)

Executes multiple fetch requests concurrently.

## Type Parameters

### T

`T` = `any`

## Parameters

### requests

`FetchFnOptions`[]

## Returns

`Promise`\<`PromiseSettledResult`\<`FetchFnResult`\<`T`\>\>[]\>

A promise resolving to an array of `PromiseSettledResult<FetcherResult<T>>`.
