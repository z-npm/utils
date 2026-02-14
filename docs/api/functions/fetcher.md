[**@o.z/utils API**](../README.md)

***

# Function: fetcher()

> **fetcher**\<`T`\>(`options`): `Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:134](https://github.com/z-npm/utils/blob/9861d2ac357ab46d57a0b585ad9bae869c08517b/src/lib/fetcher/index.ts#L134)

Generic fetcher function that handles HTTP requests with error handling, timeouts, and response parsing.

## Type Parameters

### T

`T` = `any`

The expected type of the response data.

## Parameters

### options

[`FetcherOptions`](../interfaces/FetcherOptions.md)

Configuration options for the request.

## Returns

`Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

A promise resolving to a FetcherResult object.
