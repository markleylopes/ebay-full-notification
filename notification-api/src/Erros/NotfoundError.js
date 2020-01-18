module.exports = class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super();
    this.statusCode = 404;
    this.name = 'NotFoundError';
    this.message = message;
  }
};
