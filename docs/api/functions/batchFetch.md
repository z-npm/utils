[**@o.z/utils API**](../README.md)

***

# Function: batchFetch()

> **batchFetch**\<`T`\>(`requests`): `Promise`\<`PromiseSettledResult`\<`FetchFnResult`\<`T`\>\>[]\>

Defined in: [src/lib/fetcher/index.ts:185](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L185)

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
