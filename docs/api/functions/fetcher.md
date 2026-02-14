[**@o.z/utils API**](../README.md)

***

# Function: fetcher()

> **fetcher**\<`T`\>(`options`): `Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:134](https://github.com/z-npm/utils/blob/38c27c144e95626db9890e7e563d40a2f8155b8b/src/lib/fetcher/index.ts#L134)

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
