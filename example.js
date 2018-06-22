import fetchResponseEnhancer from 'fetch-response-enhancer'

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(fetchResponseEnhancer)
  .then(console.log) // Object {config: Object, ok: true, headers: Headers, status: 200, statusText: ""…}

fetch('https://jsonplaceholder.typicode.com/')
  .then(res => fetchResponseEnhancer(res, { bodyType: 'text' }))
  .then(console.log) // {config: Object, ok: true, headers: Headers, status: 200, statusText: ""…}
