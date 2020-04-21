# HTTP Error

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This module expose an error to be fired for http projects

## Install
``` bash
$ npm install http-error
```

## Error properties
- **code**: Represents an internal error code, defaults into an empty string
- **message**: Represents a human-readable message explaining the situation, defaults into an empty string
- **statusCode**: Represent a HTTP status code, defaults to 400

## Usage
``` js
const HttpError = require('http-error')

throw new HttpError()
// you will get: code = '', message = '', status = 400

throw new HttpError('PRODUCT_NOT_EXISTS')
// you will get: code = 'PRODUCT_NOT_EXISTS', message = '', status = 400

throw new HttpError('PRODUCT_NOT_EXISTS', 'The product you are trying to see does not exists')
// you will get: code = 'PRODUCT_NOT_EXISTS', message = 'The product you are trying to see does not exists', status = 400

throw new HttpError('PRODUCT_NOT_EXISTS', 'The product you are trying to see does not exists', 404)
// you will get: code = 'PRODUCT_NOT_EXISTS', message = 'The product you are trying to see does not exists', status = 404
```
