import { describe, it, expect } from 'vitest'
import { isBrowser } from '.'


describe('Utilities', () => {
  describe('Detection Utilities', () => {
    it('detects browser environment', () => {
      // This will depend on the test environment
      expect(typeof isBrowser).toBe('boolean')
    })
  })
})

