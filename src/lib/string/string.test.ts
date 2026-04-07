import { describe, it, expect } from "vitest"
import { toKebabCase, toCamelCase, toPascalCase } from "."

describe("Utilities", () => {
  describe("String Utilities", () => {
    describe("toKebabCase", () => {
      it("converts camelCase to kebab-case", () => {
        expect(toKebabCase("myVariableName")).toBe("my-variable-name")
        expect(toKebabCase("backgroundColor")).toBe("background-color")
      })

      it("handles PascalCase input", () => {
        expect(toKebabCase("PascalCaseExample")).toBe("pascal-case-example")
        expect(toKebabCase("HTMLElement")).toBe("html-element")
      })

      it("handles acronyms", () => {
        expect(toKebabCase("XMLHttpRequest")).toBe("xml-http-request")
        expect(toKebabCase("dataURL")).toBe("data-url")
      })

      it("handles numbers", () => {
        expect(toKebabCase("item2Item")).toBe("item2-item")
        expect(toKebabCase("version2_0")).toBe("version2-0")
      })

      it("handles edge cases", () => {
        expect(toKebabCase("")).toBe("")
        expect(toKebabCase("already-kebab")).toBe("already-kebab")
        expect(toKebabCase("with spaces")).toBe("with-spaces")
      })
    })

    describe("toCamelCase", () => {
      it("converts kebab-case to camelCase", () => {
        expect(toCamelCase("my-variable-name")).toBe("myVariableName")
        expect(toCamelCase("background-color")).toBe("backgroundColor")
      })

      it("converts snake_case to camelCase", () => {
        expect(toCamelCase("my_variable_name")).toBe("myVariableName")
      })
    })

    describe("toPascalCase", () => {
      it("converts kebab-case to PascalCase", () => {
        expect(toPascalCase("my-variable-name")).toBe("MyVariableName")
        expect(toPascalCase("background-color")).toBe("BackgroundColor")
      })
    })
  })
})
