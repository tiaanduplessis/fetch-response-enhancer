const BODY_TYPES = ['arrayBuffer', 'blob', 'formData', 'json', 'text', 'raw']

const contentTypeMap = {
  'application/json': 'json',
  'text/plain': 'text'
}

function enhanceResponse (res, opts) {
  const { ok, headers, status, statusText } = res
  let { bodyType } = opts.config

  if (!bodyType) {
    const contentType = headers.get('Content-Type') || ''
    bodyType = contentTypeMap[contentType] || 'json'
  }

  if (!BODY_TYPES.includes(bodyType)) {
    throw new Error(`Invalid bodyType of ${bodyType} provided.`)
  }

  opts.ok = ok
  opts.headers = headers
  opts.status = status
  opts.statusText = statusText

  if (bodyType === 'raw') {
    opts.data = res.body
    return Promise.resolve(opts)
  }

  return (res[bodyType]()).then(data => {
    opts.data = data
    return opts
  })
}

export default function fetchResponseEnhancer (res, config = {}) {
  if (!res.ok) {
    const err = new Error(`${res.status}: ${res.statusText}`)
    err.config = config
    return enhanceResponse(res, err)
      .then((e) => { throw e })
  }

  return enhanceResponse(res, { config })
}
