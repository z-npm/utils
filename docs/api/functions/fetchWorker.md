[**@o.z/utils API**](../README.md)

***

# Function: fetchWorker()

> **fetchWorker**\<`T`\>(`options`): `Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

Defined in: [src/lib/worker/fetchWorker/index.ts:13](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/worker/fetchWorker/index.ts#L13)

Performs an HTTP request using a Web Worker to avoid blocking the main thread.
This is particularly useful for long-running requests or when keeping the UI responsive is crucial.

## Type Parameters

### T

`T` = `unknown`

The expected type of the response data.

## Parameters

### options

[`FetchWorkerOptions`](../interfaces/FetchWorkerOptions.md)

Configuration options for the request, including URL, method, headers, etc.

## Returns

`Promise`\<[`FetcherResult`](../type-aliases/FetcherResult.md)\<`T`\>\>

A promise resolving to the FetcherResult object containing the response or error details.
