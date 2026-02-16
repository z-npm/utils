[**@o.z/utils API**](../README.md)

***

# Interface: FetchWorkerOptions

Defined in: src/lib/worker/fetchWorker/index.ts:3

## Extends

- `FetcherOptions`

## Properties

### url

> **url**: `string`

Defined in: dist/fetcher/index.d.ts:12

The URL to send the request to.

#### Inherited from

`FetcherOptions.url`

***

### id?

> `optional` **id**: `string`

Defined in: dist/fetcher/index.d.ts:16

Optional identifier for the request.

#### Inherited from

`FetcherOptions.id`

***

### responseType?

> `optional` **responseType**: `"json"` \| `"text"` \| `"blob"` \| `"arrayBuffer"` \| `"formData"`

Defined in: dist/fetcher/index.d.ts:20

The expected response type. Defaults to 'json'.

#### Inherited from

`FetcherOptions.responseType`

***

### timeout?

> `optional` **timeout**: `number`

Defined in: dist/fetcher/index.d.ts:24

Request timeout in milliseconds. Defaults to 10000ms.

#### Inherited from

`FetcherOptions.timeout`

***

### body?

> `optional` **body**: `BodyInit` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2041

A BodyInit object or null to set request's body.

#### Inherited from

`FetcherOptions.body`

***

### cache?

> `optional` **cache**: `RequestCache`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2043

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`FetcherOptions.cache`

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2045

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`FetcherOptions.credentials`

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2047

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Inherited from

`FetcherOptions.headers`

***

### integrity?

> `optional` **integrity**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2049

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`FetcherOptions.integrity`

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2051

A boolean to set request's keepalive.

#### Inherited from

`FetcherOptions.keepalive`

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2053

A string to set request's method.

#### Inherited from

`FetcherOptions.method`

***

### mode?

> `optional` **mode**: `RequestMode`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2055

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`FetcherOptions.mode`

***

### priority?

> `optional` **priority**: `RequestPriority`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2056

#### Inherited from

`FetcherOptions.priority`

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2058

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`FetcherOptions.redirect`

***

### referrer?

> `optional` **referrer**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2060

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`FetcherOptions.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2062

A referrer policy to set request's referrerPolicy.

#### Inherited from

`FetcherOptions.referrerPolicy`

***

### signal?

> `optional` **signal**: `AbortSignal` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2064

An AbortSignal to set request's signal.

#### Inherited from

`FetcherOptions.signal`

***

### window?

> `optional` **window**: `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:2066

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`FetcherOptions.window`
