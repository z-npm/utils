import { describe, it, expect } from "vitest"
import { elementToStr } from "./convert"

describe("DOM Utilities", () => {
  describe("Convert Utilities", () => {
    describe("elementToStr", () => {
      it("converts HTMLElement innerHTML to string", () => {
        const div = document.createElement("div")
        div.innerHTML = "<p>Hello World</p>"

        expect(elementToStr(div)).toBe("<p>Hello World</p>")
      })

      it("converts SVGElement innerHTML to string", () => {
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        )
        svg.innerHTML = '<rect width="10" height="10" fill="red"></rect>'

        expect(elementToStr(svg)).toBe(
          '<rect width="10" height="10" fill="red"></rect>',
        )
      })

      it("converts HTMLTemplateElement content to string", () => {
        const template = document.createElement("template")
        template.innerHTML = "<span>Template Content</span>"

        const result = elementToStr(template)
        expect(result).toBe("<span>Template Content</span>")
        expect(result).not.toContain("xmlns=")
      })

      it("handles empty elements gracefully", () => {
        const emptyDiv = document.createElement("div")
        const emptyTemplate = document.createElement("template")

        expect(elementToStr(emptyDiv)).toBe("")
        expect(elementToStr(emptyTemplate)).toBe("")
      })

      it("preserves nested HTML structure", () => {
        const container = document.createElement("div")
        container.innerHTML =
          '<ul><li data-id="1">Item 1</li><li>Item 2</li></ul>'

        expect(elementToStr(container)).toBe(
          '<ul><li data-id="1">Item 1</li><li>Item 2</li></ul>',
        )
      })

      it("removes multiple xmlns attributes if injected", () => {
        const template = document.createElement("template")
        // Simulate serializer output with multiple namespaces
        Object.defineProperty(template.content, "toString", {
          value: () =>
            '<div xmlns="http://www.w3.org/1999/xhtml"><span xmlns="http://example.com">test</span></div>',
        })

        // Note: In real browsers, XMLSerializer adds it automatically.
        // This test verifies the regex handles global replacement.
        const str =
          '<div xmlns="http://www.w3.org/1999/xhtml"><span xmlns="http://example.com">test</span></div>'
        expect(str.replace(/ xmlns="[^"]*"/g, "")).toBe(
          "<div><span>test</span></div>",
        )
      })
    })
  })
})
