[**@o.z/utils API**](../README.md)

***

# Class: Fetcher\<T\>

Defined in: [src/lib/fetcher/index.ts:104](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L104)

A class that performs HTTP requests using a Web Worker, keeping the main thread free.

The Fetcher instance maintains internal state (`value`, `error`, `isLoading`, `result`)
and provides getters to read them. You can also attach callbacks via the constructor
or set them later using property setters.

## Examples

```typescript
import { Fetcher } from '@o.z/utils/fetcher'

const users = new Fetcher<User[]>({
  url: 'https://api.example.com/users',
  onLoadingChange: (loading) => setSpinnerVisible(loading),
  onSuccess: (data) => renderUsers(data),
  onError: (err) => showError(err.error)
})

// Later, manually trigger a new request:
users.reFetch()

// Access current state
console.log(users.isLoading, users.value)
```

```typescript
const fetcher = new Fetcher({
  url: 'https://api.example.com/data',
  autoRefetch: false
})

// Start request only when needed
button.addEventListener('click', () => fetcher.reFetch())
```

## Type Parameters

### T

`T`

The expected type of the response data.

## Constructors

### Constructor

> **new Fetcher**\<`T`\>(`options`): `Fetcher`\<`T`\>

Defined in: [src/lib/fetcher/index.ts:172](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L172)

Creates a new Fetcher instance.

#### Parameters

##### options

[`FetcherOptions`](../interfaces/FetcherOptions.md)\<`T`\>

Configuration options including URL, callbacks, and fetch settings.

#### Returns

`Fetcher`\<`T`\>

## Accessors

### value

#### Get Signature

> **get** **value**(): `T` \| `undefined`

Defined in: [src/lib/fetcher/index.ts:113](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L113)

The latest successfully fetched data.
Undefined until the first successful request.

##### Returns

`T` \| `undefined`

***

### result

#### Get Signature

> **get** **result**(): `FetchFnResult`\<`T`\> \| `undefined`

Defined in: [src/lib/fetcher/index.ts:122](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L122)

The raw result object from the most recent request.
Contains both success/failure details.

##### Returns

`FetchFnResult`\<`T`\> \| `undefined`

***

### error

#### Get Signature

> **get** **error**(): [`FetcherError`](../interfaces/FetcherError.md) \| `undefined`

Defined in: [src/lib/fetcher/index.ts:131](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L131)

The latest error object, if the last request failed.
Undefined if the last request succeeded or no request has been made.

##### Returns

[`FetcherError`](../interfaces/FetcherError.md) \| `undefined`

***

### isLoading

#### Get Signature

> **get** **isLoading**(): `boolean` \| `undefined`

Defined in: [src/lib/fetcher/index.ts:139](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L139)

Whether a request is currently in progress.

##### Returns

`boolean` \| `undefined`

***

### onResult

#### Set Signature

> **set** **onResult**(`onResult`): `void`

Defined in: [src/lib/fetcher/index.ts:145](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L145)

Set a callback to be invoked after every request completion.

##### Parameters

###### onResult

(`error`) => `void`

##### Returns

`void`

***

### onSuccess

#### Set Signature

> **set** **onSuccess**(`onSuccess`): `void`

Defined in: [src/lib/fetcher/index.ts:151](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L151)

Set a callback to be invoked after a successful request.

##### Parameters

###### onSuccess

(`data`) => `void`

##### Returns

`void`

***

### onError

#### Set Signature

> **set** **onError**(`onError`): `void`

Defined in: [src/lib/fetcher/index.ts:157](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L157)

Set a callback to be invoked after a failed request.

##### Parameters

###### onError

(`error`) => `void`

##### Returns

`void`

***

### onLoadingChange

#### Set Signature

> **set** **onLoadingChange**(`onLoadingChange`): `void`

Defined in: [src/lib/fetcher/index.ts:163](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L163)

Set a callback to be invoked when loading state changes.

##### Parameters

###### onLoadingChange

(`isLoading`) => `void`

##### Returns

`void`

## Methods

### reFetch()

> **reFetch**(): `void`

Defined in: [src/lib/fetcher/index.ts:187](https://github.com/z-npm/utils/blob/5ed1fed1d17df76dca368feb4bb48013d9e69a97/src/lib/fetcher/index.ts#L187)

Initiates the request (or re‑request). Called automatically if `autoRefetch` is true.
Can be called manually at any time to trigger a new fetch.

#### Returns

`void`
