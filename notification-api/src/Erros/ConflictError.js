module.exports = class ConflictError extends Error {
  constructor(message = 'Conflict Error') {
    super();
    this.statusCode = 409;
    this.name = 'ConflictError';
    this.message = message;
  }
};
