[**@o.z/utils API**](../README.md)

***

# Variable: isBrowser

> `const` **isBrowser**: `boolean`

Defined in: [src/lib/detect/index.ts:23](https://github.com/z-npm/utils/blob/100b7684e7ee7f3d203edcd3731baa640a9bc023/src/lib/detect/index.ts#L23)

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
