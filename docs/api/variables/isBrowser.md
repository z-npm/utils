[**@o.z/utils API**](../README.md)

***

# Variable: isBrowser

> `const` **isBrowser**: `boolean`

Defined in: [src/lib/detect/index.ts:23](https://github.com/z-npm/utils/blob/6ec6794f65a0a1afe81fc8dc06e249b552d2c6e2/src/lib/detect/index.ts#L23)

Detects if the code is running in a browser environment.

Useful for server-side rendering (SSR) or avoiding browser-only APIs.

## Returns

True if running in a browser environment

## Example

```typescript
if (isBrowser) {
  // Safe to use window, document, etc.
  document.querySelector('...');
} else {
  // Server-side or Node.js environment
  console.log('Running on server');
}
```

## See

[https://developer.mozilla.org/en-US/docs/Web/API/Window/window](https://developer.mozilla.org/en-US/docs/Web/API/Window/window)

## Since

0.0.1
