[**@o.z/utils API**](../README.md)

***

# Type Alias: FetcherResult\<T\>

> **FetcherResult**\<`T`\> = `object`

Defined in: [src/lib/fetcher/index.ts:43](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L43)

Represents the result of a fetcher operation.

## Type Parameters

### T

`T` = `any`

## Properties

### success

> **success**: `boolean`

Defined in: [src/lib/fetcher/index.ts:47](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L47)

Indicates whether the request was successful.

***

### data?

> `optional` **data**: `T`

Defined in: [src/lib/fetcher/index.ts:52](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L52)

The response data if the request was successful.

***

### error?

> `optional` **error**: `string`

Defined in: [src/lib/fetcher/index.ts:57](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L57)

Error message if the request failed.

***

### reason?

> `optional` **reason**: [`FetcherErrorReason`](FetcherErrorReason.md)

Defined in: [src/lib/fetcher/index.ts:62](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L62)

A standardized reason for the failure.

***

### status?

> `optional` **status**: `number`

Defined in: [src/lib/fetcher/index.ts:67](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L67)

HTTP status code of the response.

***

### statusText?

> `optional` **statusText**: `string`

Defined in: [src/lib/fetcher/index.ts:72](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L72)

HTTP status text of the response.

***

### headers?

> `optional` **headers**: `Headers`

Defined in: [src/lib/fetcher/index.ts:77](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L77)

Response headers.

***

### id?

> `optional` **id**: `string`

Defined in: [src/lib/fetcher/index.ts:82](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/fetcher/index.ts#L82)

The identifier associated with the request.
