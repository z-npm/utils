import { describe, it, expect } from 'vitest'
import {
  isValidUrl,
  isValidEmail,
  isNotEmpty,
} from './validate'


describe('Utilities', () => {
  describe('Validation Utilities', () => {
    describe('isValidUrl', () => {
      it('validates correct URLs', () => {
        expect(isValidUrl('https://example.com')).toBe(true)
        expect(isValidUrl('http://localhost:3000')).toBe(true)
        expect(isValidUrl('https://example.com/path?query=1')).toBe(true)
      })

      it('rejects invalid URLs', () => {
        expect(isValidUrl('not-a-url')).toBe(false)
        expect(isValidUrl('')).toBe(false)
        expect(isValidUrl('http://')).toBe(false)
      })
    })

    describe('isValidEmail', () => {
      it('validates correct emails', () => {
        expect(isValidEmail('user@example.com')).toBe(true)
        expect(isValidEmail('user.name@example.co.uk')).toBe(true)
      })

      it('rejects invalid emails', () => {
        expect(isValidEmail('invalid-email')).toBe(false)
        expect(isValidEmail('')).toBe(false)
        expect(isValidEmail('user@')).toBe(false)
      })
    })

    describe('isNotEmpty', () => {
      it('returns true for non-empty values', () => {
        expect(isNotEmpty('hello')).toBe(true)
        expect(isNotEmpty([1, 2])).toBe(true)
        expect(isNotEmpty({ key: 'value' })).toBe(true)
        expect(isNotEmpty(0)).toBe(true)
      })

      it('returns false for empty values', () => {
        expect(isNotEmpty('')).toBe(false)
        expect(isNotEmpty([])).toBe(false)
        expect(isNotEmpty({})).toBe(false)
        expect(isNotEmpty(null)).toBe(false)
        expect(isNotEmpty(undefined)).toBe(false)
      })
    })
  })
})

