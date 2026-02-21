[**@o.z/utils API**](../README.md)

***

# Interface: FetcherError

Defined in: [src/lib/fetcher/index.ts:7](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L7)

Unified error type for all fetcher error scenarios

## Properties

### error

> **error**: `string`

Defined in: [src/lib/fetcher/index.ts:9](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L9)

Error message

***

### reason?

> `optional` **reason**: `FetchFnErrorReason` \| `"worker-error"` \| `"initialization-error"`

Defined in: [src/lib/fetcher/index.ts:11](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L11)

Standardized reason for the failure

***

### status?

> `optional` **status**: `number`

Defined in: [src/lib/fetcher/index.ts:13](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L13)

HTTP status code (if applicable)

***

### statusText?

> `optional` **statusText**: `string`

Defined in: [src/lib/fetcher/index.ts:15](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L15)

HTTP status text (if applicable)

***

### headers?

> `optional` **headers**: `Headers`

Defined in: [src/lib/fetcher/index.ts:17](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L17)

Response headers (if applicable)

***

### id?

> `optional` **id**: `string`

Defined in: [src/lib/fetcher/index.ts:19](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/fetcher/index.ts#L19)

Request identifier (if applicable)
