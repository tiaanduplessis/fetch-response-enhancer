
# fetch-response-enhancer
[![package version](https://img.shields.io/npm/v/fetch-response-enhancer.svg?style=flat-square)](https://npmjs.org/package/fetch-response-enhancer)
[![package downloads](https://img.shields.io/npm/dm/fetch-response-enhancer.svg?style=flat-square)](https://npmjs.org/package/fetch-response-enhancer)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/fetch-response-enhancer.svg?style=flat-square)](https://npmjs.org/package/fetch-response-enhancer)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A nicer response object

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

Provides a nicer response object for fetch request that tries to convert to appropriate content type. Heavily based on [trae](https://github.com/Huemul/trae).

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install fetch-response-enhancer
$ # OR
$ yarn add fetch-response-enhancer
```

## Usage

```js
import fetchResponseEnhancer from 'fetch-response-enhancer'

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(fetchResponseEnhancer)
  .then(console.log) // Object {config: Object, ok: true, headers: Headers, status: 200, statusText: ""…}

fetch('https://jsonplaceholder.typicode.com/')
  .then(res => fetchResponseEnhancer(res, { bodyType: 'text' })) // manually set bodyType
  .then(console.log) // {config: Object, ok: true, headers: Headers, status: 200, statusText: ""…}

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    