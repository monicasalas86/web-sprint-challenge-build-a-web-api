const Projects = require('./projects-model')

function handleError(err, res, req, next) {
    res.status(err.status || 500).json({
        message: err.message
    })
}

module.exports = {
    handleError
}