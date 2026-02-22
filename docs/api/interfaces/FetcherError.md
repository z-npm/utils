[**@o.z/utils API**](../README.md)

***

# Interface: FetcherError

Defined in: [src/lib/fetcher/index.ts:15](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L15)

Unified error structure for all fetcher error scenarios.
Extends the base FetchFnResult error fields with worker‑specific reasons.

## Properties

### error

> **error**: `string`

Defined in: [src/lib/fetcher/index.ts:17](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L17)

Human‑readable error message.

***

### reason?

> `optional` **reason**: `FetchFnErrorReason` \| `"worker-error"` \| `"initialization-error"`

Defined in: [src/lib/fetcher/index.ts:19](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L19)

Standardized reason code.

***

### status?

> `optional` **status**: `number`

Defined in: [src/lib/fetcher/index.ts:21](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L21)

HTTP status code (if a response was received).

***

### statusText?

> `optional` **statusText**: `string`

Defined in: [src/lib/fetcher/index.ts:23](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L23)

HTTP status text (if a response was received).

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/lib/fetcher/index.ts:25](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L25)

Response headers (if a response was received).

***

### id?

> `optional` **id**: `string`

Defined in: [src/lib/fetcher/index.ts:27](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/fetcher/index.ts#L27)

Request identifier, if provided.
