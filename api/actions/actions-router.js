const express = require('express')
const {
    handleError,
    checkActionId,
    validateAction
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
// [POST] /
router.post('/', validateAction, (req,res, next) => {
    Actions.insert(req.body)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})
// [PUT] /:id
router.put('/:id', checkActionId, (req,res) => {
    
})
// [DELETE] /:id
router.delete('/:id', checkActionId, (req,res) => {
    
})

router.use(handleError)

module.exports = router