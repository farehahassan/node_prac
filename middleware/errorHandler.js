const { constants } = require("../constants");


const errorHandler = (err, req, res , next) => {

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    switch (statusCode) {
     
        case constants.VALIDATION_ERROR:
            res.json({
                title : "Validation Error",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title : "Unauthorized",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title : "Forbidden",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title : "Not Found",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title : "Server Error",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            break;


    
        default:
            console.log("Error Handler Middleware");
            break;
    }
    res.status(statusCode);
    res.json({
        message: err.message,
        stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = errorHandler;
// The code above is a basic example of an error handler middleware. It exports a function that takes four arguments: err (error), req (request), res (response), and next. Inside the function, you can write code to handle errors and send an appropriate response back to the client. The error handler middleware is used to catch and handle errors that occur in other middleware functions or route handlers. It is typically the last middleware in the middleware chain and is called when an error is passed to the next function. The error handler middleware can be used to send error messages, log errors, or perform other error-handling tasks.