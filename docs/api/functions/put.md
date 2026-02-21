[**@o.z/utils API**](../README.md)

***

# Function: put()

> **put**\<`T`\>(`url`, `options?`): `Promise`\<`FetchFnResult`\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:154](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L154)

Performs an HTTP PUT request.

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
