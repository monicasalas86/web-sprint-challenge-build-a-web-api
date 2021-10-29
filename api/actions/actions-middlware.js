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

module.exports = {
    handleError,
    checkActionId
}