import { vi, describe, it, expect, beforeEach } from 'vitest';
import { fetcher } from './fetcher';

describe('fetcher', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it('handles successful JSON response', async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: 'test' }),
      headers: new Headers(),
    });
    const result = await fetcher({ url: 'https://api.example.com' });
    expect(result.success).toBe(true);
    expect(result.data).toEqual({ data: 'test' });
  })
})
