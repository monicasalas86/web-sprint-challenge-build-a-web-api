const Actions = require('./actions-model')

function handleError(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message
    })
}

function checkActionId (req, res, next) {
    Actions.get(req.params.id)
        .then(possibleAction => {
            if(possibleAction) {
                req.actionFromDb = possibleAction
                next()
            } else {
                next({
                    status: 404,
                    message: 'action not found'
                })
            }
        })
        .catch(next)
}

function validateAction (req, res, next) {
    const {project_id, description, notes} = req.body
    if(!project_id || !description || !notes) {
        res.status(400).json({
            message: 'Please provide required fields'
        })
    } else {
        next()
    }
}

module.exports = {
    handleError,
    checkActionId,
    validateAction
}