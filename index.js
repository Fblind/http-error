'use strict'

function HttpError (code, message, statusCode) {
  // eslint-disable-next-line no-proto
  this.constructor.prototype.__proto__ = Error.prototype
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message || ''
  this.status = statusCode || 400
  this.code = code || ''
}

module.exports = HttpError
