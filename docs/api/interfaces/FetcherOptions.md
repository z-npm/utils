[**@o.z/utils API**](../README.md)

***

# Interface: FetcherOptions

Defined in: [src/lib/fetcher/index.ts:18](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L18)

Options for configuring the fetcher function.

## Extends

- `RequestInit`

## Extended by

- [`FetchWorkerOptions`](FetchWorkerOptions.md)

## Properties

### url

> **url**: `string`

Defined in: [src/lib/fetcher/index.ts:22](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L22)

The URL to send the request to.

***

### id?

> `optional` **id**: `string`

Defined in: [src/lib/fetcher/index.ts:27](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L27)

Optional identifier for the request.

***

### responseType?

> `optional` **responseType**: `"json"` \| `"text"` \| `"blob"` \| `"arrayBuffer"` \| `"formData"`

Defined in: [src/lib/fetcher/index.ts:32](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L32)

The expected response type. Defaults to 'json'.

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/lib/fetcher/index.ts:37](https://github.com/z-npm/utils/blob/e5546f72087a52e3f136b3f63e0b9402a59d5a7f/src/lib/fetcher/index.ts#L37)

Request timeout in milliseconds. Defaults to 10000ms.

***

### body?

> `optional` **body**: `BodyInit` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2041

A BodyInit object or null to set request's body.

#### Inherited from

`RequestInit.body`

***

### cache?

> `optional` **cache**: `RequestCache`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2043

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`RequestInit.cache`

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2045

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`RequestInit.credentials`

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2047

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Inherited from

`RequestInit.headers`

***

### integrity?

> `optional` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2049

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`RequestInit.integrity`

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2051

A boolean to set request's keepalive.

#### Inherited from

`RequestInit.keepalive`

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2053

A string to set request's method.

#### Inherited from

`RequestInit.method`

***

### mode?

> `optional` **mode**: `RequestMode`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2055

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`RequestInit.mode`

***

### priority?

> `optional` **priority**: `RequestPriority`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2056

#### Inherited from

`RequestInit.priority`

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2058

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`RequestInit.redirect`

***

### referrer?

> `optional` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2060

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`RequestInit.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2062

A referrer policy to set request's referrerPolicy.

#### Inherited from

`RequestInit.referrerPolicy`

***

### signal?

> `optional` **signal**: `AbortSignal` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2064

An AbortSignal to set request's signal.

#### Inherited from

`RequestInit.signal`

***

### window?

> `optional` **window**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2066

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`RequestInit.window`
