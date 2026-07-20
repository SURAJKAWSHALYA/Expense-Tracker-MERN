const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error for the developer

  // Check if we already set a status code, if not, default to 500 (Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    // Only show the detailed stack trace if we are NOT in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
