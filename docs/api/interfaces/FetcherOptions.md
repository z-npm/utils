[**@o.z/utils API**](../README.md)

***

# Interface: FetcherOptions\<T\>

Defined in: [src/lib/fetcher/index.ts:22](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L22)

## Extends

- `FetchFnOptions`

## Type Parameters

### T

`T` = `unknown`

## Properties

### url

> **url**: `string`

Defined in: src/lib/fetcher/\_fetchFn.ts:22

The URL to send the request to.

#### Inherited from

`FetchFnOptions.url`

***

### id?

> `optional` **id**: `string`

Defined in: src/lib/fetcher/\_fetchFn.ts:27

Optional identifier for the request.

#### Inherited from

`FetchFnOptions.id`

***

### responseType?

> `optional` **responseType**: `"json"` \| `"text"` \| `"blob"` \| `"arrayBuffer"` \| `"formData"`

Defined in: src/lib/fetcher/\_fetchFn.ts:32

The expected response type. Defaults to 'json'.

#### Inherited from

`FetchFnOptions.responseType`

***

### timeout?

> `optional` **timeout**: `number`

Defined in: src/lib/fetcher/\_fetchFn.ts:37

Request timeout in milliseconds. Defaults to 10000ms.

#### Inherited from

`FetchFnOptions.timeout`

***

### onSuccess()?

> `optional` **onSuccess**: (`result`) => `void`

Defined in: [src/lib/fetcher/index.ts:27](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L27)

Callback triggered when the request succeeds

#### Parameters

##### result

`FetchFnResult`\<`T`\>

The successful FetcherResult

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: [src/lib/fetcher/index.ts:32](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L32)

Callback triggered when the request fails

#### Parameters

##### error

[`FetcherError`](FetcherError.md)

The error details

#### Returns

`void`

***

### onLoadingChange()?

> `optional` **onLoadingChange**: (`isLoading`) => `void`

Defined in: [src/lib/fetcher/index.ts:37](https://github.com/z-npm/utils/blob/1c835c63b7707924681b2b1b0180419481b3938f/src/lib/fetcher/index.ts#L37)

Callback triggered when loading state changes

#### Parameters

##### isLoading

`boolean`

Current loading state

#### Returns

`void`

***

### body?

> `optional` **body**: `BodyInit` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2041

A BodyInit object or null to set request's body.

#### Inherited from

`FetchFnOptions.body`

***

### cache?

> `optional` **cache**: `RequestCache`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2043

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`FetchFnOptions.cache`

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2045

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`FetchFnOptions.credentials`

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2047

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Inherited from

`FetchFnOptions.headers`

***

### integrity?

> `optional` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2049

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`FetchFnOptions.integrity`

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2051

A boolean to set request's keepalive.

#### Inherited from

`FetchFnOptions.keepalive`

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2053

A string to set request's method.

#### Inherited from

`FetchFnOptions.method`

***

### mode?

> `optional` **mode**: `RequestMode`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2055

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`FetchFnOptions.mode`

***

### priority?

> `optional` **priority**: `RequestPriority`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2056

#### Inherited from

`FetchFnOptions.priority`

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2058

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`FetchFnOptions.redirect`

***

### referrer?

> `optional` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2060

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`FetchFnOptions.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2062

A referrer policy to set request's referrerPolicy.

#### Inherited from

`FetchFnOptions.referrerPolicy`

***

### signal?

> `optional` **signal**: `AbortSignal` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2064

An AbortSignal to set request's signal.

#### Inherited from

`FetchFnOptions.signal`

***

### window?

> `optional` **window**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2066

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`FetchFnOptions.window`
