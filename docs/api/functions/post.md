[**@o.z/utils API**](../README.md)

***

# Function: post()

> **post**\<`T`\>(`url`, `options?`): `Promise`\<`FetchFnResult`\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:143](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L143)

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
