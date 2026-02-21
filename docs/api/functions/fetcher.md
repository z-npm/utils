[**@o.z/utils API**](../README.md)

***

# Function: fetcher()

> **fetcher**\<`T`\>(`options`): `Promise`\<`FetchFnResult`\<`T`\>\>

Defined in: [src/lib/fetcher/index.ts:58](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L58)

Performs an HTTP request using a Web Worker to avoid blocking the main thread.
This is particularly useful for long-running requests or when keeping the UI responsive is crucial.

## Type Parameters

### T

`T` = `unknown`

The expected type of the response data.

## Parameters

### options

[`FetcherOptions`](../interfaces/FetcherOptions.md)\<`T`\>

Configuration options for the request, including URL, method, headers, etc.

## Returns

`Promise`\<`FetchFnResult`\<`T`\>\>

A promise resolving to the FetcherResult object containing the response or error details.

## Example

```typescript
const result = await fetcher<User[]>({
  url: 'https://api.example.com/users',
  onSuccess: (data) => console.log('Success:', data),
  onError: (error) => console.error('Failed:', error.error),
  onLoadingChange: (loading) => setLoading(loading)
})
```
