[**@o.z/utils API**](../README.md)

***

# Interface: FetcherOptions\<T\>

Defined in: [src/lib/fetcher/index.ts:34](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L34)

Configuration options for the Fetcher class.
Extends FetchFnOptions with lifecycle callbacks and auto‑refetch control.

## Extends

- `FetchFnOptions`

## Type Parameters

### T

`T` = `unknown`

## Properties

### url

> **url**: `string`

Defined in: [src/lib/fetcher/fetchFn.ts:40](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/fetchFn.ts#L40)

The target URL for the request.
Must be a valid absolute or relative URL (relative URLs are resolved against the base URL of the page in browser environments).

#### Inherited from

`FetchFnOptions.url`

***

### id?

> `optional` **id?**: `string`

Defined in: [src/lib/fetcher/fetchFn.ts:46](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/fetchFn.ts#L46)

An optional identifier for the request.
Useful for correlating requests in batch operations or logging.

#### Inherited from

`FetchFnOptions.id`

***

### responseType?

> `optional` **responseType?**: `"json"` \| `"text"` \| `"blob"` \| `"arrayBuffer"` \| `"formData"`

Defined in: [src/lib/fetcher/fetchFn.ts:58](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/fetchFn.ts#L58)

The expected response type, which determines how the response body is parsed.
Defaults to `'json'`.

- `'json'`: Parses as JSON (returns `null` for empty responses).
- `'text'`: Returns the raw text.
- `'blob'`: Returns a Blob object.
- `'arrayBuffer'`: Returns an ArrayBuffer.
- `'formData'`: Parses as FormData (useful for multipart responses).

#### Inherited from

`FetchFnOptions.responseType`

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [src/lib/fetcher/fetchFn.ts:65](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/fetchFn.ts#L65)

Request timeout in milliseconds.
If the request takes longer than this value, it will be aborted and a `'timeout'` error is returned.
Must be greater than 0. Defaults to `10000` (10 seconds).

#### Inherited from

`FetchFnOptions.timeout`

***

### autoRefetch?

> `optional` **autoRefetch?**: `boolean`

Defined in: [src/lib/fetcher/index.ts:39](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L39)

Whether to automatically start the request upon instantiation.
Defaults to `true`. Set to `false` if you want to manually call `reFetch()`.

***

### onResult?

> `optional` **onResult?**: (`result`) => `void`

Defined in: [src/lib/fetcher/index.ts:45](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L45)

Callback triggered after every fetch completion, regardless of success or failure.
Receives the full result object.

#### Parameters

##### result

`FetchFnResult`\<`T`\>

#### Returns

`void`

***

### onSuccess?

> `optional` **onSuccess?**: (`result`) => `void`

Defined in: [src/lib/fetcher/index.ts:51](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L51)

Callback triggered when the request succeeds.
Receives the parsed response data.

#### Parameters

##### result

`T`

#### Returns

`void`

***

### onError?

> `optional` **onError?**: (`error`) => `void`

Defined in: [src/lib/fetcher/index.ts:57](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L57)

Callback triggered when the request fails.
Receives a normalized error object.

#### Parameters

##### error

[`FetcherError`](FetcherError.md)

#### Returns

`void`

***

### onLoadingChange?

> `optional` **onLoadingChange?**: (`isLoading`) => `void`

Defined in: [src/lib/fetcher/index.ts:63](https://github.com/z-npm/utils/blob/f224557df6dd590f0d1041696d684e879244dfe4/src/lib/fetcher/index.ts#L63)

Callback triggered when the loading state changes.
Useful for showing/hiding loading indicators in UI.

#### Parameters

##### isLoading

`boolean`

#### Returns

`void`

***

### body?

> `optional` **body?**: `BodyInit` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2554

A BodyInit object or null to set request's body.

#### Inherited from

`FetchFnOptions.body`

***

### cache?

> `optional` **cache?**: `RequestCache`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2556

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`FetchFnOptions.cache`

***

### credentials?

> `optional` **credentials?**: `RequestCredentials`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2558

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`FetchFnOptions.credentials`

***

### headers?

> `optional` **headers?**: `HeadersInit`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2560

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Inherited from

`FetchFnOptions.headers`

***

### integrity?

> `optional` **integrity?**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2562

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`FetchFnOptions.integrity`

***

### keepalive?

> `optional` **keepalive?**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2564

A boolean to set request's keepalive.

#### Inherited from

`FetchFnOptions.keepalive`

***

### method?

> `optional` **method?**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2566

A string to set request's method.

#### Inherited from

`FetchFnOptions.method`

***

### mode?

> `optional` **mode?**: `RequestMode`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2568

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`FetchFnOptions.mode`

***

### priority?

> `optional` **priority?**: `RequestPriority`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2569

#### Inherited from

`FetchFnOptions.priority`

***

### redirect?

> `optional` **redirect?**: `RequestRedirect`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2571

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`FetchFnOptions.redirect`

***

### referrer?

> `optional` **referrer?**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2573

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`FetchFnOptions.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy?**: `ReferrerPolicy`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2575

A referrer policy to set request's referrerPolicy.

#### Inherited from

`FetchFnOptions.referrerPolicy`

***

### signal?

> `optional` **signal?**: `AbortSignal` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2577

An AbortSignal to set request's signal.

#### Inherited from

`FetchFnOptions.signal`

***

### window?

> `optional` **window?**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2579

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`FetchFnOptions.window`
