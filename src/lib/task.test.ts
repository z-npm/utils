import { describe, it, expect } from 'vitest'
import { delay } from './task'

describe('Utilities', () => {
  describe('Task Utilities', () => {
    describe('delay', () => {
      it('resolves after specified delay', async () => {
        const start = Date.now()
        await delay(100)
        const end = Date.now()
        expect(end - start).toBeGreaterThanOrEqual(100)
      })
    })
  })
})

