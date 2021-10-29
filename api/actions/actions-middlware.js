const Actions = require('./actions-model')

function handleError(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message
    })
}

module.exports = {
    handleError
}