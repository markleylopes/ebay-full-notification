module.exports = ((error, req, res, next) => {
  if (error) {
    return res.status(error.statusCode || 500).send(error);
  }
  return next();
});
