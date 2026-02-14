/**
 * Creates a reactive proxy for an object that triggers callbacks on mutations.
 * 
 * Implements deep reactivity using JavaScript Proxy with caching for performance.
 * 
 * @template T - Object type (must be an object)
 * @param target - Target object to make reactive
 * @param onChange - Callback function triggered on any mutation
 * @param proxyCache - Internal cache for avoiding duplicate proxies (optional)
 * @returns Reactive proxy of the target object
 * 
 * @throws {TypeError} If target is not an object or is null
 * 
 * @example
 * ```typescript
 * // Create reactive state
 * const state = makeReactive(
 *   { count: 0, user: { name: 'Zero' } },
 *   () => console.log('State changed!')
 * )
 * 
 * // Triggers callback:
 * state.count = 1 // Logs: 'State changed!'
 * state.user.name = 'z' // Logs: 'State changed!'
 * 
 * // Nested objects are also reactive
 * state.user.age = 30 // Logs: 'State changed!'
 * 
 * // Does NOT trigger (same value):
 * state.count = 1 // No log
 * ```
 * 
 * @remarks
 * - Uses ES6 Proxy for interception
 * - Deep reactivity: nested objects become reactive automatically
 * - WeakMap cache prevents proxy duplication for same object
 * - Only intercepts set and deleteProperty operations
 * - Get operations return reactive proxies for nested objects
 * - Performance optimized with caching
 * - Does not trigger on unchanged values (shallow equality check)
 * 
 * @category Reactivity
 * @public
 */
export const makeReactive = <T extends object>(
  target: T,
  onChange: () => void,
  proxyCache = new WeakMap<object, any>()
): T => {
  if (typeof target !== 'object' || target === null)
    throw new TypeError('Target must be an object')

  // Return cached proxy if available
  if (proxyCache.has(target))
    return proxyCache.get(target) as T

  const handler: ProxyHandler<T> = {
    get(target: T, prop: string | symbol, receiver: any) {
      const value = Reflect.get(target, prop, receiver)

      // Recursively make nested objects reactive
      if (typeof value === 'object' && value !== null && !(value instanceof Promise))
        return makeReactive(value as any, onChange, proxyCache)

      return value
    },

    set(target: T, prop: string | symbol, value: any, receiver: any) {
      const oldValue = Reflect.get(target, prop, receiver)

      // Skip if value unchanged (shallow equality)
      if (oldValue === value) return true

      const result = Reflect.set(target, prop, value, receiver)

      // Only trigger if the set was successful
      if (result) onChange()

      return result
    },

    deleteProperty(target: T, prop: string | symbol) {
      // Check if property exists before deleting
      if (prop in target) {
        const result = Reflect.deleteProperty(target, prop)
        if (result) onChange()

        return result
      }
      return false
    }
  }

  const proxy = new Proxy(target, handler)
  proxyCache.set(target, proxy)

  return proxy
}

