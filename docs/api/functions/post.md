[**@o.z/utils API**](../README.md)

***

# Function: post()

> **post**\<`T`\>(`url`, `options?`): `Promise`\<`FetchFnResult`\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:143](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L143)

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

`Omit`\<`FetchFnOptions`, `"url"` \| `"method"`\>

Additional options for the request.

## Returns

`Promise`\<`FetchFnResult`\<`T`\>\>

A promise resolving to a FetcherResult object.
