"use strict";

function HttpError(code, message, statusCodeOverride) {
  this.constructor.prototype.__proto__ = Error.prototype;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || "";
  this.status = statusCodeOverride || 400;
  this.code = code || "";
}

module.exports = HttpError;
