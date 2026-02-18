[**@o.z/utils API**](../README.md)

***

# Interface: FetchWorkerOptions

Defined in: [src/lib/worker/fetchWorker/index.ts:4](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/worker/fetchWorker/index.ts#L4)

Options for configuring the fetcher function.

## Extends

- [`FetcherOptions`](FetcherOptions.md)

## Properties

### url

> **url**: `string`

Defined in: [src/lib/fetcher/index.ts:22](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L22)

The URL to send the request to.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`url`](FetcherOptions.md#url)

***

### id?

> `optional` **id**: `string`

Defined in: [src/lib/fetcher/index.ts:27](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L27)

Optional identifier for the request.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`id`](FetcherOptions.md#id)

***

### responseType?

> `optional` **responseType**: `"json"` \| `"text"` \| `"blob"` \| `"arrayBuffer"` \| `"formData"`

Defined in: [src/lib/fetcher/index.ts:32](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L32)

The expected response type. Defaults to 'json'.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`responseType`](FetcherOptions.md#responsetype)

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/lib/fetcher/index.ts:37](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L37)

Request timeout in milliseconds. Defaults to 10000ms.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`timeout`](FetcherOptions.md#timeout)

***

### body?

> `optional` **body**: `BodyInit` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2041

A BodyInit object or null to set request's body.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`body`](FetcherOptions.md#body)

***

### cache?

> `optional` **cache**: `RequestCache`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2043

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`cache`](FetcherOptions.md#cache)

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2045

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`credentials`](FetcherOptions.md#credentials)

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2047

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`headers`](FetcherOptions.md#headers)

***

### integrity?

> `optional` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2049

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`integrity`](FetcherOptions.md#integrity)

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2051

A boolean to set request's keepalive.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`keepalive`](FetcherOptions.md#keepalive)

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2053

A string to set request's method.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`method`](FetcherOptions.md#method)

***

### mode?

> `optional` **mode**: `RequestMode`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2055

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`mode`](FetcherOptions.md#mode)

***

### priority?

> `optional` **priority**: `RequestPriority`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2056

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`priority`](FetcherOptions.md#priority)

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2058

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`redirect`](FetcherOptions.md#redirect)

***

### referrer?

> `optional` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2060

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`referrer`](FetcherOptions.md#referrer)

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2062

A referrer policy to set request's referrerPolicy.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`referrerPolicy`](FetcherOptions.md#referrerpolicy)

***

### signal?

> `optional` **signal**: `AbortSignal` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2064

An AbortSignal to set request's signal.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`signal`](FetcherOptions.md#signal)

***

### window?

> `optional` **window**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2066

Can only be null. Used to disassociate request from any Window.

#### Inherited from

[`FetcherOptions`](FetcherOptions.md).[`window`](FetcherOptions.md#window)
