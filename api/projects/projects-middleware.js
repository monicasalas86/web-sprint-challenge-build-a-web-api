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

function validateProject (req, res, next) {
    const {name, description} = req.body
    if(!name || !description) {
        res.status(400).json({
            message: 'Please provide name and description'
        })
    } else {
        next()
    }
}

function validateCompleted (req, res, next) {
    const {completed} = req.body
    if (typeof completed !== 'boolean') {
        next({
            status: 400,
            message: 'Please complete project'
        })
    } else {
        next()
    }
}

module.exports = {
    handleError,
    checkProjectId,
    validateProject,
    validateCompleted
}