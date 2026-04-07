import { describe, it, expect } from "vitest"
import {
  isValidUrl,
  isValidEmail,
  isNotEmpty,
  isDigit,
  isAlphabetic,
  isAlphanumeric,
  isWhitespace,
  isBoolean,
  isNumber,
  isString,
  isPlainObject,
  isArray,
  isFunction,
} from "."

describe("Validation Utilities", () => {
  describe("isValidUrl", () => {
    it("validates correct URLs", () => {
      expect(isValidUrl("https://example.com")).toBe(true)
      expect(isValidUrl("http://localhost:3000")).toBe(true)
      expect(isValidUrl("https://example.com/path?query=1")).toBe(true)
      expect(isValidUrl("ftp://files.example.com")).toBe(true)
    })
    it("rejects invalid URLs", () => {
      expect(isValidUrl("not-a-url")).toBe(false)
      expect(isValidUrl("")).toBe(false)
      expect(isValidUrl("http:// ")).toBe(false)
      expect(isValidUrl("https://")).toBe(false)
    })
  })

  describe("isValidEmail", () => {
    it("validates correct emails", () => {
      expect(isValidEmail("user@example.com")).toBe(true)
      expect(isValidEmail("user.name@example.co.uk")).toBe(true)
      expect(isValidEmail("test+tag@example.org")).toBe(true)
    })
    it("rejects invalid emails", () => {
      expect(isValidEmail("invalid-email")).toBe(false)
      expect(isValidEmail("")).toBe(false)
      expect(isValidEmail("user@")).toBe(false)
      expect(isValidEmail("@example.com")).toBe(false)
      expect(isValidEmail("user@domain")).toBe(false)
    })
  })

  describe("isNotEmpty", () => {
    it("returns true for non-empty values", () => {
      expect(isNotEmpty("hello")).toBe(true)
      expect(isNotEmpty("  hello  ")).toBe(true)
      expect(isNotEmpty([1, 2])).toBe(true)
      expect(isNotEmpty({ key: "value" })).toBe(true)
      expect(isNotEmpty(0)).toBe(true)
      expect(isNotEmpty(false)).toBe(true)
      expect(isNotEmpty(new Map([["a", 1]]))).toBe(true)
      expect(isNotEmpty(new Set([1]))).toBe(true)
      expect(isNotEmpty(new Date())).toBe(true)
    })
    it("returns false for empty values", () => {
      expect(isNotEmpty("")).toBe(false)
      expect(isNotEmpty("   ")).toBe(false)
      expect(isNotEmpty([])).toBe(false)
      expect(isNotEmpty({})).toBe(false)
      expect(isNotEmpty(null)).toBe(false)
      expect(isNotEmpty(undefined)).toBe(false)
      expect(isNotEmpty(new Map())).toBe(false)
      expect(isNotEmpty(new Set())).toBe(false)
      expect(isNotEmpty(new Date("invalid"))).toBe(false)
    })
  })

  describe("Character Validators", () => {
    describe("isDigit", () => {
      it("validates digits", () => {
        expect(isDigit("1")).toBe(true)
        expect(isDigit("9")).toBe(true)
      })
      it("rejects non-digits", () => {
        expect(isDigit("a")).toBe(false)
        expect(isDigit("12")).toBe(false)
        expect(isDigit("")).toBe(false)
      })
    })

    describe("isAlphabetic", () => {
      it("validates letters", () => {
        expect(isAlphabetic("a")).toBe(true)
        expect(isAlphabetic("Z")).toBe(true)
      })
      it("rejects non-letters", () => {
        expect(isAlphabetic("1")).toBe(false)
        expect(isAlphabetic("_")).toBe(false)
        expect(isAlphabetic("")).toBe(false)
      })
    })

    describe("isAlphanumeric", () => {
      it("validates letters and numbers", () => {
        expect(isAlphanumeric("a")).toBe(true)
        expect(isAlphanumeric("1")).toBe(true)
        expect(isAlphanumeric("Z")).toBe(true)
        expect(isAlphanumeric("9")).toBe(true)
      })
      it("rejects others", () => {
        expect(isAlphanumeric("_")).toBe(false)
        expect(isAlphanumeric("")).toBe(false)
        expect(isAlphanumeric("ab")).toBe(false)
      })
    })

    describe("isWhitespace", () => {
      it("validates whitespace", () => {
        expect(isWhitespace(" ")).toBe(true)
        expect(isWhitespace("\t")).toBe(true)
        expect(isWhitespace("\n")).toBe(true)
      })
      it("rejects non-whitespace", () => {
        expect(isWhitespace("a")).toBe(false)
        expect(isWhitespace("")).toBe(false)
      })
    })
  })

  describe("Type Guards & Checks", () => {
    it("validates isBoolean", () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean("true")).toBe(false)
    })

    it("validates isNumber", () => {
      expect(isNumber(42)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(NaN)).toBe(false)
      expect(isNumber("42")).toBe(false)
    })

    it("validates isString", () => {
      expect(isString("hello")).toBe(true)
      expect(isString(123)).toBe(false)
    })

    it("validates isPlainObject", () => {
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject({ key: 1 })).toBe(true)
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(null)).toBe(false)
      expect(isPlainObject(new Date())).toBe(false)
    })

    it("validates isArray", () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2])).toBe(true)
      expect(isArray({})).toBe(false)
    })

    it("validates isFunction", () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(function () {})).toBe(true)
      expect(isFunction("string")).toBe(false)
    })
  })
})
