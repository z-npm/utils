[**@o.z/utils API**](../README.md)

***

# Function: del()

> **del**\<`T`\>(`url`, `options?`): `Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:306](https://github.com/z-npm/utils/blob/38c27c144e95626db9890e7e563d40a2f8155b8b/src/lib/fetcher/index.ts#L306)

Performs an HTTP DELETE request.

## Type Parameters

### T

`T` = `any`

The expected type of the response data.

## Parameters

### url

`string`

The URL to send the request to.

### options?

`Omit`\<[`FetcherOptions`](../interfaces/FetcherOptions.md), `"url"` \| `"method"`\>

Additional options for the request.

## Returns

`Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

A promise resolving to a FetcherResult object.
