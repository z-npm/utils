[**@o.z/utils API**](../README.md)

***

# Function: makeReactive()

> **makeReactive**\<`T`\>(`target`, `onChange`, `proxyCache?`): `T`

Defined in: [src/lib/proxy/index.ts:45](https://github.com/z-npm/utils/blob/4c585099c22c301e6f16c53db2101e869bb6f0fa/src/lib/proxy/index.ts#L45)

Creates a reactive proxy for an object that triggers callbacks on mutations.

Implements deep reactivity using JavaScript Proxy with caching for performance.

## Type Parameters

### T

`T` *extends* `object`

Object type (must be an object)

## Parameters

### target

`T`

Target object to make reactive

### onChange

() => `void`

Callback function triggered on any mutation

### proxyCache?

`WeakMap`\<`object`, `any`\> = `...`

Internal cache for avoiding duplicate proxies (optional)

## Returns

`T`

Reactive proxy of the target object

## Throws

If target is not an object or is null

## Example

```typescript
// Create reactive state
const state = makeReactive(
  { count: 0, user: { name: 'Zero' } },
  () => console.log('State changed!')
)

// Triggers callback:
state.count = 1 // Logs: 'State changed!'
state.user.name = 'z' // Logs: 'State changed!'

// Nested objects are also reactive
state.user.age = 30 // Logs: 'State changed!'

// Does NOT trigger (same value):
state.count = 1 // No log
```

## Remarks

- Uses ES6 Proxy for interception
- Deep reactivity: nested objects become reactive automatically
- WeakMap cache prevents proxy duplication for same object
- Only intercepts set and deleteProperty operations
- Get operations return reactive proxies for nested objects
- Performance optimized with caching
- Does not trigger on unchanged values (shallow equality check)
