import { describe, it, expect, vi } from "vitest"
import { makeReactive } from "."

describe("Utilities", () => {
  describe("Reactive Utilities", () => {
    describe("makeReactive", () => {
      it("triggers callback on mutation", () => {
        const onChange = vi.fn()
        const data = { count: 0 }
        const reactiveData = makeReactive(data, onChange)

        reactiveData.count = 1
        expect(onChange).toHaveBeenCalledTimes(1)
      })

      it("does not trigger on unchanged values", () => {
        const onChange = vi.fn()
        const data = { count: 0 }
        const reactiveData = makeReactive(data, onChange)

        reactiveData.count = 0 // Same value
        expect(onChange).not.toHaveBeenCalled()

        reactiveData.count = 1 // Changed value
        expect(onChange).toHaveBeenCalledTimes(1)
      })

      it("supports nested object reactivity", () => {
        const onChange = vi.fn()
        const data = { user: { profile: { name: "Zero" } } }
        const reactiveData = makeReactive(data, onChange)

        reactiveData.user.profile.name = "Red"
        expect(onChange).toHaveBeenCalledTimes(1)
      })

      it("caches proxies for same objects", () => {
        const obj = { value: 1 }
        const cache = new WeakMap<object, any>()
        const reactive1 = makeReactive(obj, () => {}, cache)
        const reactive2 = makeReactive(obj, () => {}, cache)

        expect(reactive1).toBe(reactive2)
      })

      it("throws error for non-object targets", () => {
        expect(() => makeReactive(null as any, () => {})).toThrow(TypeError)
        expect(() => makeReactive("string" as any, () => {})).toThrow(TypeError)
      })
    })
  })
})
