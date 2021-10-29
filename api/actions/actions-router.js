const express = require('express')
const {
    handleError
} = require('./actions-middlware')
const Actions = require('./actions-model')
const router = express.Router()

// [GET] /
router.get('/', (req, res, next) => {
    Actions.get(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
})
// [GET] /:id
router.get('/:id', (req,res) => {
    
})
// [POST] /
router.post('/', (req,res) => {
    
})
// [PUT] /:id
router.put('/:id', (req,res) => {
    
})
// [DELETE] /:id
router.delete('/:id', (req,res) => {
    
})

router.use(handleError)

module.exports = router