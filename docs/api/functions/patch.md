[**@o.z/utils API**](../README.md)

***

# Function: patch()

> **patch**\<`T`\>(`url`, `body?`, `options?`): [`Fetcher`](../classes/Fetcher.md)\<`T`\>

Defined in: [src/lib/fetcher/index.ts:298](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L298)

Performs an HTTP PATCH request using a Web Worker.

## Type Parameters

### T

`T` = `any`

The expected type of the response data.

## Parameters

### url

`string`

The endpoint URL.

### body?

`any`

The request body (optional).

### options?

`Omit`\<`FetchFnOptions`, `"url"` \| `"method"` \| `"body"`\>

Additional fetch options (excluding `method`, `url`, and `body`).

## Returns

[`Fetcher`](../classes/Fetcher.md)\<`T`\>

A Fetcher instance.
