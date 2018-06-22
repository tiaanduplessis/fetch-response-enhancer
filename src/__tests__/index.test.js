import Headers from 'fetch-headers'

import fetchResponseEnhancer from '../'

test('should be defined', () => {
  expect(fetchResponseEnhancer).toBeDefined()
  expect(typeof fetchResponseEnhancer).toBe('function')
})

test('should enhance response', async () => {
  const res = {
    ok: true,
    headers: new Headers([['Content-Type', 'application/json']]),
    status: 201,
    statusText: 'OK',
    body: '{"foo": true}',
    json: jest.fn(() => {
      return Promise.resolve(JSON.parse(res.body))
    })
  }

  const result = await fetchResponseEnhancer(res)

  expect(result.data.foo).toBeTruthy()
  expect(res.json).toBeCalled()
})
