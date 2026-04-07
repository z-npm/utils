import { vi, describe, it, expect, beforeEach } from "vitest"
import { Fetcher } from "."

describe("Fetcher", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn()
  })

  it("handles successful JSON response", async () => {
    ;(fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: "test" }),
      headers: new Headers(),
    })
    const fetcher = new Fetcher({ url: "https://api.example.com" })

    expect(fetcher.result?.success).toBe(true)
    expect(fetcher.result?.data).toEqual({ data: "test" })
  })
})
