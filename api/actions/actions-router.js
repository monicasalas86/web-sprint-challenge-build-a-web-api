const express = require('express')
const {
    handleError,
    checkActionId,
    validateAction,
    validateProjectId
} = require('./actions-middlware')
const Actions = require('./actions-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Actions.get(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
})

router.get('/:id', checkActionId, (req,res) => {
    res.status(200).json(req.actionFromDb)
})

router.post('/', validateAction, validateProjectId, (req,res, next) => {
    Actions.insert(req.body)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})

router.put('/:id', checkActionId, validateAction, validateProjectId, (req,res, next) => {
    Actions.update(req.params.id, req.body)
        .then(updatedAction => {
            res.status(200).json(updatedAction)
        })
        .catch(next)
})

router.delete('/:id', checkActionId, (req,res, next) => {
    Actions.remove(req.params.id)
        .then(() => {
            res.status(200).json({
                message: 'Action removed'
            })
        })
        .catch(next)
})

router.use(handleError)

module.exports = router