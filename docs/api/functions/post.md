[**@o.z/utils API**](../README.md)

***

# Function: post()

> **post**\<`T`\>(`url`, `options?`): `Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:272](https://github.com/z-npm/utils/blob/ba4c25d7a511757633063ce2d47c6306f136a936/src/lib/fetcher/index.ts#L272)

Performs an HTTP POST request.

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
