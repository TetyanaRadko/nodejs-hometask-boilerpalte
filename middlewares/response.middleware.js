const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
    const { err, data } = res;
    if (err) {
        const { message = '' } = err;
        const errorResponse = {
            error: true,
            message: message
        };
        res.json(errorResponse);
        next(err);
    } else {
        res.status(200).json(data);
        next();
    }
}

exports.responseMiddleware = responseMiddleware;