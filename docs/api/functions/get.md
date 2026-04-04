[**@o.z/utils API**](../README.md)

***

# Function: get()

> **get**\<`T`\>(`url`, `options?`): [`Fetcher`](../classes/Fetcher.md)\<`T`\>

Defined in: [src/lib/fetcher/index.ts:264](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L264)

Performs an HTTP GET request using a Web Worker.
Returns a Fetcher instance that starts the request immediately.

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

## Example

```typescript
const userFetcher = get<User>('https://api.example.com/users/1', {
  onSuccess: (user) => console.log(user.name)
})
```
