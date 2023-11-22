class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = errorCode;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

module.exports = HttpError;
