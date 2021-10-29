const Projects = require('./projects-model')

function handleError(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message
    })
}

function checkProjectId (req, res, next) {
    Projects.get(req.params.id)
        .then(possibleProject => {
            if(possibleProject) {
                req.projectFromDb = possibleProject
                next()
            } else {
                next({
                    status: 404,
                    message: 'project not found'
                })
            }
        })
        .catch(next)
}

module.exports = {
    handleError,
    checkProjectId
}