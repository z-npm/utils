[**@o.z/utils API**](../README.md)

***

# Function: post()

> **post**\<`T`\>(`url`, `options?`): [`Fetcher`](../classes/Fetcher.md)\<`T`\>

Defined in: [src/lib/fetcher/index.ts:275](https://github.com/z-npm/utils/blob/f0f952b16f26e3da8f57a50970594db02549d386/src/lib/fetcher/index.ts#L275)

Performs an HTTP POST request using a Web Worker.

## Type Parameters

### T

`T` = `any`

The expected type of the response data.

## Parameters

### url

`string`

The endpoint URL.

### options?

`Omit`\<`FetchFnOptions`, `"url"` \| `"method"`\>

Additional fetch options (excluding `method` and `url`).

## Returns

[`Fetcher`](../classes/Fetcher.md)\<`T`\>

A Fetcher instance.
